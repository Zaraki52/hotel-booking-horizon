
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-hotel-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-hotel-secondary">HotelEase</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                to="/"
                className="hover:text-hotel-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/hotels"
                className="hover:text-hotel-secondary transition-colors"
              >
                Hotels
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-hotel-secondary text-white hover:bg-hotel-secondary">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-hotel-secondary hover:bg-hotel-secondary/90 text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
