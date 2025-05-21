
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import HotelCard from "@/components/HotelCard";
import { hotels } from "@/data/mockData";

const Index = () => {
  const [featuredHotels] = useState(hotels.slice(0, 3));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-center bg-cover flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')"
        }}
      >
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Book hotels with ease, manage reservations, and more with our hotel management system
          </p>
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-hotel-dark">Featured Hotels</h2>
          <Link to="/hotels">
            <Button variant="ghost" className="text-hotel-primary hover:text-hotel-primary/80 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-hotel-dark mb-8 text-center">
            Popular Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", hotels: 42 },
              { name: "Miami", image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", hotels: 36 },
              { name: "Chicago", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", hotels: 28 }
            ].map((destination, index) => (
              <div 
                key={index}
                className="relative h-60 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  <div className="flex items-center mt-2">
                    <MapPin size={16} className="text-white mr-1" />
                    <span className="text-sm text-white">{destination.hotels} hotels</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-hotel-dark mb-12 text-center">
          Why Book With Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Best Price Guarantee",
              description: "Find a lower price? We'll refund the difference.",
              icon: "💰"
            },
            {
              title: "Easy & Fast Booking",
              description: "Book your stay in just a few clicks.",
              icon: "🚀"
            },
            {
              title: "24/7 Customer Support",
              description: "We're here to help whenever you need us.",
              icon: "🛎️"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-hotel-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hotel-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Booking?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who book with us every day.
          </p>
          <Link to="/hotels">
            <Button className="bg-hotel-secondary hover:bg-hotel-secondary/90 text-white px-6 py-3">
              Browse All Hotels
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
