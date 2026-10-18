import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapCard from "../components/MapCard";
import { hotels } from "../data/mockData";
import { ISuggestionFormatted } from "../types/typings";

const Search = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState<ISuggestionFormatted | null>(null);
  const { location, startDate, endDate, numOfGuests } = router.query;
  const destination = String(location || "Canada");
  const results = useMemo(
    () => hotels.filter((hotel) => (hotel.location || "").toLowerCase().includes(destination.toLowerCase())),
    [destination]
  );
  const start = startDate ? format(new Date(String(startDate)), "dd MMMM yy") : "your dates";
  const end = endDate ? format(new Date(String(endDate)), "dd MMMM yy") : "your dates";
  const range = `from ${start} to ${end}`;

  return (
    <div>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} selectedCity={selectedCity} setSelectedCity={setSelectedCity} isOpen={isOpen} setIsOpen={setIsOpen} placeholder={`${destination} - ${range} - ${numOfGuests || 1}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">{results.length ? `Demo stays available ${range}, ${numOfGuests || 1} guests` : `No demo stays available ${range}`}</p>
          <h1 className="mb-6 mt-2 text-3xl font-semibold">Stays in {destination}</h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex"><p className="button">Cancellation Flexibility</p><p className="button">Price</p><p className="button">Rooms and Beds</p><p className="button">More filters</p></div>
          {results.map((item) => <InfoCard key={item.hotelId} cityId={String(router.query.id || item.cityId)} item={{ ...item, total: item.total }} startDate={String(startDate || "")} endDate={String(endDate || "")} numOfGuests={String(numOfGuests || 1)} />)}
          {!results.length && <div className="mx-auto mb-[155px] max-w-sm text-center"><FaceFrownIcon className="mx-auto max-w-[300px]" /><p>Try another destination from the sample locations on the home page.</p></div>}
        </section>
        {!!results.length && <section className="hidden lg:inline-flex xl:min-w-[600px]"><div className="sticky top-[68px] h-screen w-full"><MapCard searchResults={results} /></div></section>}
      </main>
      <Footer />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}><Link className="drawer-item" href="/favorites">List of Favorites</Link><Link className="drawer-item" href="/bookings">Your Bookings</Link></Drawer>
    </div>
  );
};

export default Search;
