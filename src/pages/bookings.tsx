import Link from "next/link";
import { useEffect, useState } from "react";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapCard from "../components/MapCard";
import { hotels } from "../data/mockData";
import { IResult, ISuggestionFormatted } from "../types/typings";

const Bookings = () => {
  const [bookings, setBookings] = useState<IResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(null);
  useEffect(() => setBookings(JSON.parse(window.localStorage.getItem("demoBookings") || "[]")), []);
  const visible = bookings.map((item) => hotels.find((hotel) => hotel.hotelId === item.hotelId) ? { ...hotels.find((hotel) => hotel.hotelId === item.hotelId), ...item } as IResult : item);
  return <div><Header searchInput={searchInput} setSearchInput={setSearchInput} selectedCity={selectedCity} setSelectedCity={setSelectedCity} isOpen={isOpen} setIsOpen={setIsOpen} /><main className="flex"><section className="flex-grow px-6 pt-14"><p className="text-xs">Local portfolio demo history</p><h1 className="mb-6 mt-2 text-3xl font-semibold">Bookings</h1>{visible.length ? visible.map((item) => <InfoCard key={item.hotelId} item={item} booking fromFavPage />) : <div className="rounded-xl bg-gray-50 p-6"><p>No demo bookings yet.</p><Link className="font-semibold text-orange-600 underline" href="/">Explore sample stays</Link></div>}</section>{visible.length > 0 && <section className="hidden flex-grow lg:inline-flex xl:min-w-[600px]"><div className="sticky top-[68px] h-screen w-full"><MapCard searchResults={visible} /></div></section>}</main><Footer /><Drawer isOpen={isOpen} setIsOpen={setIsOpen}><Link className="drawer-item" href="/favorites">List of Favorites</Link><span className="drawer-current-item">Your Bookings</span></Drawer></div>;
};
export default Bookings;
