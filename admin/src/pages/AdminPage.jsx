import "../App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar.jsx";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import Footer from "../components/Footer/Footer.jsx";

const AdminPage = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h4 className="text-center mt-10">Loading.....</h4>
  }

  if (!user.isAdmin) {
    return <Navigate to="/auth/login" />
  }

  return (
    <div className="admin-home">
      <div className="admin-sidebar"><Sidebar /></div>
      <div className="admin-outlet">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
