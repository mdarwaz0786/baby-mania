import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import Sidebar from "../../components/Admin/Sidebar.jsx";
import "../../App.css";

const AdminPage = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h4 className="d-flex justify-content-center align-items-center">Loading.....</h4>
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className="admin">
        <div><Sidebar /></div>
        <div><Outlet /></div>
      </div>
    </>
  );
};

export default AdminPage;
