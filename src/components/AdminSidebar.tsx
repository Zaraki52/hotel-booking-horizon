
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building2, 
  BedDouble, 
  CalendarClock, 
  StarHalf, 
  BarChart3, 
  Settings
} from "lucide-react";

const AdminSidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, name: "Dashboard", path: "/admin" },
    { icon: <Building2 size={20} />, name: "Hotels", path: "/admin/hotels" },
    { icon: <BedDouble size={20} />, name: "Rooms", path: "/admin/rooms" },
    { icon: <CalendarClock size={20} />, name: "Reservations", path: "/admin/reservations" },
    { icon: <StarHalf size={20} />, name: "Reviews", path: "/admin/reviews" },
    { icon: <BarChart3 size={20} />, name: "Statistics", path: "/admin/statistics" },
    { icon: <Settings size={20} />, name: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="bg-white shadow-md fixed h-full w-64 hidden md:block">
      <div className="px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center px-3 py-3 rounded-md transition-colors text-gray-700 hover:bg-gray-100"
              >
                <div className="mr-3">{item.icon}</div>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
