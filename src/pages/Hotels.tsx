
import { useState } from "react";
import { hotels as allHotels } from "@/data/mockData";
import HotelCard from "@/components/HotelCard";

const Hotels = () => {
  const [hotels] = useState(allHotels);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
