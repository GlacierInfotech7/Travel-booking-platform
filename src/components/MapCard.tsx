import { MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { IResult } from "../types/typings";

type Props = {
  searchResults: IResult[];
  favorites?: boolean;
};

const MapCard = ({ searchResults }: Props) => {
  const [selectedLocation, setSelectedLocation] = useState<IResult | null>(null);

  return (
    <div className="relative h-full min-h-[500px] overflow-hidden bg-sky-100">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,#fff_0,transparent_26%),linear-gradient(135deg,#dbeafe_25%,#bae6fd_25%,#bae6fd_50%,#e0f2fe_50%,#e0f2fe_75%,#bfdbfe_75%)] bg-[length:100%_100%,90px_90px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sky-900/20" />
      <div className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow">
        Demo location view · {searchResults.length} stays
      </div>
      {searchResults.map((result, index) => (
        <button
          key={result.hotelId}
          type="button"
          onClick={() => setSelectedLocation(result)}
          className="absolute rounded-full bg-orange-500 p-2 text-white shadow-lg transition hover:scale-110"
          style={{
            left: `${18 + ((index * 19) % 65)}%`,
            top: `${24 + ((index * 23) % 55)}%`,
          }}
          aria-label={`Show ${result.title}`}
        >
          <MapPinIcon className="h-5 w-5" />
        </button>
      ))}
      {selectedLocation && (
        <div className="absolute bottom-5 left-5 right-5 flex gap-3 rounded-2xl bg-white p-3 shadow-xl">
          <div className="relative h-20 w-24 flex-shrink-0">
            <Image className="rounded-xl object-cover" src={selectedLocation.img} alt={selectedLocation.title} fill />
          </div>
          <div>
            <p className="font-semibold">{selectedLocation.title}</p>
            <p className="flex items-center text-sm"><StarIcon className="mr-1 h-4 text-red-400" />{selectedLocation.star} · {selectedLocation.price}/night</p>
            <button className="text-xs text-orange-600" onClick={() => setSelectedLocation(null)}>Close preview</button>
          </div>
        </div>
      )}
      <p className="absolute bottom-2 right-3 text-xs text-slate-600">Illustrative map for portfolio demo</p>
    </div>
  );
};

export default MapCard;
