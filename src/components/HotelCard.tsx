
import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface HotelType {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
  availableRooms: number;
}

interface HotelCardProps {
  hotel: HotelType;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-48 object-cover"
        />
        {hotel.availableRooms === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <Badge className="bg-red-600 text-white px-3 py-1 text-sm">Fully Booked</Badge>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-hotel-dark truncate">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-1 bg-hotel-primary text-white px-2 py-1 rounded">
            <Star size={14} fill="currentColor" />
            <span className="text-sm font-medium">{hotel.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3 text-sm">
          <MapPin size={16} className="mr-1 text-hotel-secondary" />
          <span>{hotel.location}</span>
        </div>

        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-gray-50">
                {amenity}
              </Badge>
            ))}
            {hotel.amenities.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gray-50">
                +{hotel.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-lg font-bold text-hotel-primary">${hotel.price}<span className="text-sm font-normal">/night</span></p>
          </div>
          
          <Link to={`/hotels/${hotel.id}`}>
            <Button 
              className="bg-hotel-secondary hover:bg-hotel-secondary/90 text-white"
              disabled={hotel.availableRooms === 0}
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
