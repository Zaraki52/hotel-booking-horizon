
import { HotelType } from "@/components/HotelCard";
import { RoomType } from "@/components/RoomCard";
import { ReviewType } from "@/components/ReviewCard";

// Mock Hotels Data
export const hotels: HotelType[] = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "New York, NY",
    rating: 4.8,
    price: 199,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Fitness Center", "Room Service"],
    availableRooms: 5
  },
  {
    id: 2,
    name: "Ocean View Resort",
    location: "Miami Beach, FL",
    rating: 4.5,
    price: 249,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    amenities: ["Beachfront", "Pool", "Restaurant", "Bar", "Water Sports"],
    availableRooms: 3
  },
  {
    id: 3,
    name: "Mountain Lodge",
    location: "Aspen, CO",
    rating: 4.7,
    price: 329,
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    amenities: ["Ski Access", "Fireplace", "Hot Tub", "Restaurant", "Bar"],
    availableRooms: 2
  },
  {
    id: 4,
    name: "City Lights Hotel",
    location: "Chicago, IL",
    rating: 4.4,
    price: 179,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    amenities: ["Downtown Location", "Restaurant", "Business Center", "Gym", "Lounge"],
    availableRooms: 8
  },
  {
    id: 5,
    name: "Desert Oasis Resort",
    location: "Phoenix, AZ",
    rating: 4.6,
    price: 219,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    amenities: ["Pool", "Golf Course", "Spa", "Tennis Courts", "Multiple Restaurants"],
    availableRooms: 0
  },
  {
    id: 6,
    name: "Sunset Bay Hotel",
    location: "San Diego, CA",
    rating: 4.9,
    price: 289,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    amenities: ["Ocean View", "Private Beach", "Infinity Pool", "Spa", "Fine Dining"],
    availableRooms: 1
  }
];

// Mock Rooms Data
export const rooms: RoomType[] = [
  {
    id: 101,
    hotelId: 1,
    name: "Deluxe King Room",
    description: "Spacious room with king-size bed and city view",
    price: 199,
    capacity: 2,
    features: ["King Bed", "City View", "Mini Bar", "40\" TV", "Free WiFi"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    available: true
  },
  {
    id: 102,
    hotelId: 1,
    name: "Executive Suite",
    description: "Luxury suite with separate living area and panoramic views",
    price: 349,
    capacity: 2,
    features: ["King Bed", "Separate Living Area", "Panoramic View", "Jacuzzi", "Mini Bar"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    available: true
  },
  {
    id: 103,
    hotelId: 1,
    name: "Family Room",
    description: "Perfect for families with two queen beds",
    price: 249,
    capacity: 4,
    features: ["2 Queen Beds", "Spacious", "Kid Friendly", "Mini Fridge", "Free WiFi"],
    image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    available: false
  },
  {
    id: 201,
    hotelId: 2,
    name: "Ocean View Room",
    description: "Beautiful room with stunning ocean views",
    price: 249,
    capacity: 2,
    features: ["King Bed", "Ocean View", "Balcony", "Mini Bar", "Free WiFi"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    available: true
  },
  {
    id: 202,
    hotelId: 2,
    name: "Beachfront Suite",
    description: "Luxury suite steps away from the beach",
    price: 399,
    capacity: 2,
    features: ["King Bed", "Direct Beach Access", "Private Terrace", "Jacuzzi", "Kitchenette"],
    image: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    available: true
  }
];

// Mock Reviews Data
export const reviews: ReviewType[] = [
  {
    id: 1,
    user: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    rating: 5,
    date: "2023-10-15",
    comment: "Excellent stay! The staff was incredibly helpful and the room was immaculate. The location is perfect for exploring the city."
  },
  {
    id: 2,
    user: {
      name: "Emily Johnson"
    },
    rating: 4,
    date: "2023-09-22",
    comment: "Great hotel with comfortable beds and nice amenities. The only minor issue was that the WiFi was a bit slow during peak hours."
  },
  {
    id: 3,
    user: {
      name: "Michael Brown",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    rating: 5,
    date: "2023-08-30",
    comment: "Perfect location, friendly staff, and amazing breakfast! Will definitely be back when I'm in town again."
  },
  {
    id: 4,
    user: {
      name: "Sarah Williams"
    },
    rating: 3,
    date: "2023-10-05",
    comment: "The room was clean and comfortable, but I expected more for the price. The restaurant was good though."
  }
];

// Admin Dashboard Statistics
export const adminStats = {
  today: {
    bookings: 24,
    revenue: 5680,
    occupancyRate: 78,
    avgRating: 4.7
  },
  weekly: {
    bookingsChart: [12, 19, 15, 22, 30, 24, 18],
    revenueChart: [2400, 3500, 2800, 4200, 6000, 5680, 3900],
    occupancyChart: [65, 72, 68, 74, 82, 78, 70]
  },
  monthly: {
    bookingsChart: [140, 160, 180, 210, 190, 220, 230, 200, 210, 220, 240, 230],
    revenueChart: [28000, 32000, 36000, 42000, 38000, 44000, 46000, 40000, 42000, 44000, 48000, 46000]
  }
};

// Hotel availability hours
export const hotelHours = {
  1: {
    checkIn: "15:00",
    checkOut: "11:00",
    reception: {
      monday: { open: "00:00", close: "24:00" },
      tuesday: { open: "00:00", close: "24:00" },
      wednesday: { open: "00:00", close: "24:00" },
      thursday: { open: "00:00", close: "24:00" },
      friday: { open: "00:00", close: "24:00" },
      saturday: { open: "00:00", close: "24:00" },
      sunday: { open: "00:00", close: "24:00" }
    },
    restaurant: {
      monday: { open: "06:30", close: "22:00" },
      tuesday: { open: "06:30", close: "22:00" },
      wednesday: { open: "06:30", close: "22:00" },
      thursday: { open: "06:30", close: "22:00" },
      friday: { open: "06:30", close: "23:00" },
      saturday: { open: "07:00", close: "23:00" },
      sunday: { open: "07:00", close: "22:00" }
    },
    spa: {
      monday: { open: "10:00", close: "20:00" },
      tuesday: { open: "10:00", close: "20:00" },
      wednesday: { open: "10:00", close: "20:00" },
      thursday: { open: "10:00", close: "20:00" },
      friday: { open: "09:00", close: "21:00" },
      saturday: { open: "09:00", close: "21:00" },
      sunday: { open: "09:00", close: "18:00" }
    }
  }
};

// Mock Reservations
export const reservations = [
  {
    id: 1001,
    hotelId: 1,
    roomId: 101,
    guestName: "David Johnson",
    email: "david.j@example.com",
    checkIn: "2023-11-10",
    checkOut: "2023-11-15",
    guests: 2,
    totalAmount: 995,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2023-10-15T14:22:07Z"
  },
  {
    id: 1002,
    hotelId: 2,
    roomId: 201,
    guestName: "Amanda Wilson",
    email: "amanda.w@example.com",
    checkIn: "2023-11-12",
    checkOut: "2023-11-16",
    guests: 2,
    totalAmount: 996,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2023-10-16T10:15:43Z"
  },
  {
    id: 1003,
    hotelId: 1,
    roomId: 102,
    guestName: "Robert Brown",
    email: "robert.b@example.com",
    checkIn: "2023-11-20",
    checkOut: "2023-11-25",
    guests: 2,
    totalAmount: 1745,
    status: "pending",
    paymentStatus: "unpaid",
    createdAt: "2023-10-18T08:32:19Z"
  }
];
