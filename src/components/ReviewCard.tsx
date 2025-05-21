
import { Star } from "lucide-react";

export interface ReviewType {
  id: number;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  date: string;
  comment: string;
}

interface ReviewCardProps {
  review: ReviewType;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm">
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0">
          {review.user.avatar ? (
            <img
              src={review.user.avatar}
              alt={review.user.name}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {review.user.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{review.user.name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
