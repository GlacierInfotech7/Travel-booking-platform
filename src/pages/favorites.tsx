import Link from "next/link";
import { useEffect, useState } from "react";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapCard from "../components/MapCard";
import { hotels } from "../data/mockData";
import { ISuggestionFormatted } from "../types/typings";

const Favorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(null);
  useEffect(() => setFavoriteIds(hotels.filter((hotel) => window.localStorage.getItem(`favorite:${hotel.hotelId}`) === "true").map((hotel) => hotel.hotelId)), []);
  const favorites = hotels.filter((hotel) => favoriteIds.includes(hotel.hotelId));
  return <div><Header searchInput={searchInput} setSearchInput={setSearchInput} selectedCity={selectedCity} setSelectedCity={setSelectedCity} isOpen={isOpen} setIsOpen={setIsOpen} /><main className="flex"><section className="flex-grow px-6 pt-14"><p className="text-xs">Saved locally in this browser</p><h1 className="mb-6 mt-2 text-3xl font-semibold">Favorites</h1>{favorites.length ? favorites.map((item) => <InfoCard key={item.hotelId} item={item} favorite fromFavPage />) : <div className="rounded-xl bg-gray-50 p-6"><p>No favorites yet. Tap the heart on a stay to save it for this demo.</p><Link className="font-semibold text-orange-600 underline" href="/">Explore sample stays</Link></div>}</section>{favorites.length > 0 && <section className="hidden flex-grow lg:inline-flex xl:min-w-[600px]"><div className="sticky top-[68px] h-screen w-full"><MapCard searchResults={favorites} /></div></section>}</main><Footer /><Drawer isOpen={isOpen} setIsOpen={setIsOpen}><span className="drawer-current-item">List of Favorites</span><Link className="drawer-item" href="/bookings">Your Bookings</Link></Drawer></div>;
};
export default Favorites;
