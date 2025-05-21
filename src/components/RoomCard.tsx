
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface RoomType {
  id: number;
  hotelId: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  features: string[];
  image: string;
  available: boolean;
}

interface RoomCardProps {
  room: RoomType;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img 
        src={room.image} 
        alt={room.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">${room.price}<span className="text-sm font-normal">/night</span></p>
          <Link to={`/booking/${room.hotelId}/${room.id}`}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
