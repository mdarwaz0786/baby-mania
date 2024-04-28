import "../App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar.jsx";

const AdminPage = () => {
  return (
    <div className="admin-home">
      <div className="admin-sidebar"><Sidebar /></div>
      <div className="admin-outlet"><Outlet /></div>
    </div>
  );
};

export default AdminPage;
