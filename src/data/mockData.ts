import { IResult, IStyleData, ISuggestionFormatted } from "../types/typings";

export const destinations: ISuggestionFormatted[] = [
  { id: 1001, shortName: "Toronto", displayName: "Toronto, Ontario", type: "CITY", img: "/banner1200x600.jpg", location: "Toronto", province: "Ontario" },
  { id: 1002, shortName: "Vancouver", displayName: "Vancouver, British Columbia", type: "CITY", img: "/get-inspired1200x600.jpg", location: "Vancouver", province: "British Columbia" },
  { id: 1003, shortName: "Montreal", displayName: "Montreal, Quebec", type: "CITY", img: "/banner1200x600.jpg", location: "Montreal", province: "Quebec" },
  { id: 1004, shortName: "Calgary", displayName: "Calgary, Alberta", type: "CITY", img: "/get-inspired1200x600.jpg", location: "Calgary", province: "Alberta" },
];

export const inspiredCities = destinations.slice(0, 4);

export const styles: IStyleData[] = [
  { img: "/get-inspired1200x600.jpg", title: "Boutique escapes" },
  { img: "/banner1200x600.jpg", title: "City adventures" },
  { img: "/get-inspired1200x600.jpg", title: "Relaxing retreats" },
];

export const hotels: IResult[] = [
  { hotelId: "glacier-aurora", description: "A calm, design-led stay close to the city’s best dining and culture.", img: "/banner1200x600.jpg", lat: 43.6532, long: -79.3832, location: "Private room 1 km from Toronto", price: "$189", star: 4.8, title: "Aurora House Toronto", total: 756, cityId: "1001" },
  { hotelId: "glacier-harbour", description: "Waterfront views, warm interiors, and thoughtful hospitality in the heart of Vancouver.", img: "/get-inspired1200x600.jpg", lat: 49.2827, long: -123.1207, location: "Private room 2 km from Vancouver", price: "$229", star: 4.9, title: "Harbourlight Vancouver", total: 916, cityId: "1002" },
  { hotelId: "glacier-old-port", description: "A character-filled hotel for discovering neighbourhoods, galleries, and cafés.", img: "/banner1200x600.jpg", lat: 45.5017, long: -73.5673, location: "Private room 1 km from Montreal", price: "$164", star: 4.7, title: "Old Port Atelier", total: 656, cityId: "1003" },
  { hotelId: "glacier-prairie", description: "A bright, comfortable base for mountain day trips and downtown evenings.", img: "/get-inspired1200x600.jpg", lat: 51.0447, long: -114.0719, location: "Private room 3 km from Calgary", price: "$142", star: 4.6, title: "Prairie & Peak Lodge", total: 568, cityId: "1004" },
  { hotelId: "glacier-garden", description: "A leafy urban hideaway with spacious rooms and a local breakfast.", img: "/banner1200x600.jpg", lat: 43.66, long: -79.39, location: "Private room 2 km from Toronto", price: "$205", star: 4.5, title: "Garden District Stay", total: 820, cityId: "1001" },
];

export const demoDetails = (hotel: IResult) => ({
  images: [hotel.img, "/banner1200x600.jpg", "/get-inspired1200x600.jpg"],
  amenities: ["Free Wi-Fi", "Breakfast included", "Flexible cancellation", "Workspace"],
  address: hotel.location,
});
