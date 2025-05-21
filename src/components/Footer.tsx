
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hotel-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="block mb-4">
              <h2 className="text-xl font-bold text-hotel-secondary">HotelEase</h2>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              The ultimate hotel reservation system for managing your bookings efficiently.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hotel-secondary">Home</Link>
              </li>
              <li>
                <Link to="/hotels" className="text-gray-300 hover:text-hotel-secondary">Hotels</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HotelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
