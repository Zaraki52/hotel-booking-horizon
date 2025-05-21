
import { useParams } from "react-router-dom";
import { hotels } from "@/data/mockData";

const HotelDetails = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = hotels.find(h => h.id === parseInt(id || "0"));

  if (!hotel) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Hotel not found</h2>
        <p>The hotel you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{hotel.name}</h1>
      <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
        <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg mb-4">Location: {hotel.location}</p>
        <p className="text-lg mb-4">Rating: {hotel.rating}</p>
        <p className="text-lg mb-4">Price: ${hotel.price} per night</p>
        
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <ul className="list-disc pl-5">
            {hotel.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
