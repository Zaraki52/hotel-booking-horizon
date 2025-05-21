
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { hotels, rooms } from "@/data/mockData";

const Booking = () => {
  const { hotelId, roomId } = useParams<{ hotelId: string; roomId: string }>();
  const hotel = hotels.find(h => h.id === parseInt(hotelId || "0"));
  const room = rooms.find(r => r.id === parseInt(roomId || "0"));

  if (!hotel || !room) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Room or hotel not found</h2>
        <p className="mb-6">The room or hotel you are looking for does not exist.</p>
        <Link to="/hotels">
          <Button>Browse Hotels</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Stay</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{hotel.name} - {room.name}</h2>
        <p className="mb-4">Placeholder for booking form</p>
      </div>
    </div>
  );
};

export default Booking;
