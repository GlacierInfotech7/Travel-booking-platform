import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid, StarIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import CarouselCard from "../components/CarouselCard";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MapCard from "../components/MapCard";
import { demoDetails, hotels } from "../data/mockData";
import { ISuggestionFormatted } from "../types/typings";

const Details = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(null);
  const hotel = useMemo(() => hotels.find((item) => item.hotelId === router.query.hotelId) || hotels[0], [router.query.hotelId]);
  const [isFav, setIsFav] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const details = demoDetails(hotel);
  const isBooking = router.query.booking === "true";
  const startDate = String(router.query.startDate || format(new Date(), "dd MMMM yy"));
  const endDate = String(router.query.endDate || format(new Date(Date.now() + 86400000), "dd MMMM yy"));

  useEffect(() => setIsFav(window.localStorage.getItem(`favorite:${hotel.hotelId}`) === "true"), [hotel.hotelId]);
  const toggleFavorite = () => {
    const next = !isFav;
    setIsFav(next);
    window.localStorage.setItem(`favorite:${hotel.hotelId}`, String(next));
  };
  const simulateBooking = () => {
    const booking = { ...hotel, startDate, endDate };
    const existing = JSON.parse(window.localStorage.getItem("demoBookings") || "[]");
    window.localStorage.setItem("demoBookings", JSON.stringify([booking, ...existing.filter((item: { hotelId: string }) => item.hotelId !== hotel.hotelId)]));
    setConfirmed(true);
  };

  return <div>
    <Header searchInput={searchInput} setSearchInput={setSearchInput} selectedCity={selectedCity} setSelectedCity={setSelectedCity} isOpen={isOpen} setIsOpen={setIsOpen} />
    <main className="mx-auto flex max-w-4xl flex-col"><section className="flex-grow px-6 pt-14">
      <div className="flex justify-between"><p>{hotel.location}</p><button onClick={toggleFavorite} aria-label="Toggle favorite">{isFav ? <HeartIconSolid className="h-7 text-orange-600" /> : <HeartIcon className="h-7" />}</button></div>
      <h1 className="text-3xl font-bold">{hotel.title}</h1><div className="w-10 border-b pt-2" />
      <div className="flex"><p className="flex-grow pt-2 text-sm text-gray-800">{hotel.description}</p><p className="flex items-center"><StarIcon className="h-5 text-red-400" /> {hotel.star}</p></div>
      <CarouselCard images={details.images} />
      <div className="mt-5 grid gap-3 rounded-xl bg-gray-50 p-5 sm:grid-cols-2"><div><h2 className="font-semibold">About this stay</h2><p className="text-sm text-gray-600">{details.address}</p></div><div><h2 className="font-semibold">Included</h2><p className="text-sm text-gray-600">{details.amenities.join(" · ")}</p></div></div>
      {!isBooking && <><p className="pt-5 text-right text-xl font-semibold">{hotel.price} / night</p><p className="text-right font-extralight">${hotel.total} total (tax incl.)</p><div className="flex justify-end"><button onClick={simulateBooking} className="mt-3 rounded-xl bg-orange-500 px-4 py-2 italic text-white hover:bg-orange-600">Simulate booking</button></div><p className="mt-2 text-right text-xs text-gray-500">Portfolio demo — no payment or reservation is created.</p></>}
      {confirmed && <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-5"><h2 className="text-xl font-semibold text-green-800">Demo booking confirmed</h2><p className="text-sm text-green-700">Your sample stay is saved locally in this browser. No real reservation or payment was made.</p><Link className="mt-3 inline-block font-semibold text-green-800 underline" href="/bookings">View demo bookings</Link></div>}
      {isBooking && <><h2 className="pt-6 text-2xl font-semibold">Demo booking details</h2><p>Reserved from {startDate} to {endDate}</p></>}
      <div className="mt-8 h-80"><MapCard searchResults={[hotel]} /></div>
    </section></main><Footer />
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}><Link className="drawer-item" href="/favorites">List of Favorites</Link><Link className="drawer-item" href="/bookings">Your Bookings</Link></Drawer>
  </div>;
};

export default Details;
