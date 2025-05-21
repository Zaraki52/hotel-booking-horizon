
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminSidebar from "./AdminSidebar";

interface LayoutProps {
  isAdmin?: boolean;
}

const Layout = ({ isAdmin = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-hotel-light">
      <Navbar />
      <div className="flex-1 flex">
        {isAdmin && <AdminSidebar />}
        <main className={`flex-1 ${isAdmin ? 'ml-0 md:ml-64' : ''} p-4`}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
