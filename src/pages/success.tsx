import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ISuggestionFormatted } from "../types/typings";

const Success = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(null);
  return <div><Header searchInput={searchInput} setSearchInput={setSearchInput} selectedCity={selectedCity} setSelectedCity={setSelectedCity} isOpen={isOpen} setIsOpen={setIsOpen} /><main className="mx-auto flex max-w-4xl flex-col"><section className="flex-grow px-6 pt-14"><div className="mb-10 flex flex-col space-y-8 bg-white p-10"><div className="mb-5 flex items-center space-x-2"><CheckCircleIcon className="h-10 text-green-500" /><h1 className="text-3xl">Your demo booking is confirmed!</h1></div><p>This is a simulated portfolio interaction. No reservation, payment, or external request was created.</p><Link className="mx-auto rounded-xl bg-orange-500 px-3 py-1 italic text-white" href="/bookings">Go to demo bookings</Link></div></section></main><Footer /><Drawer isOpen={isOpen} setIsOpen={setIsOpen}><Link className="drawer-item" href="/favorites">List of Favorites</Link><Link className="drawer-item" href="/bookings">Your Bookings</Link></Drawer></div>;
};
export default Success;
