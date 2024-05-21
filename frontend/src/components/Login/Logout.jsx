import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { toast } from 'react-toastify';

const Logout = () => {
  const { logOutUser } = useAuth();

  useEffect(() => {
    logOutUser();
    toast.success("logout successful");
  }, [logOutUser]);

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }, []);

  return <Navigate to="/login" />;
};

export default Logout;
