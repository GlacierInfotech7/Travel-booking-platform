import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { ISuggestionFormatted } from "../types/typings";

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(null);
  return <div className="h-screen"><Head><title>Glacier InfoTech Travel | Demo access</title></Head><Header searchInput={searchInput} setSearchInput={setSearchInput} selectedCity={selectedCity} setSelectedCity={setSelectedCity} isOpen={isOpen} setIsOpen={setIsOpen} /><main className="h-[80%]"><div className="relative h-[80%]"><Image className="mx-auto max-w-xl -translate-y-[55px] p-5" src="/travel-signin.svg" fill alt="Glacier InfoTech Travel demo" /><div className="absolute top-[72%] w-full text-center"><p className="mx-auto max-w-md px-5 text-gray-600">This portfolio experience does not require an account. Favorites and bookings are saved only in this browser.</p><Link className="mt-4 inline-block rounded-full bg-orange-500 px-10 py-4 font-bold text-white" href="/">Continue to demo</Link></div></div></main><Drawer isOpen={isOpen} setIsOpen={setIsOpen}><Link className="drawer-item" href="/favorites">List of Favorites</Link><Link className="drawer-item" href="/bookings">Your Bookings</Link></Drawer></div>;
};
export default SignIn;
