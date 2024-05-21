import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { toast } from 'react-toastify';

const Logout = () => {
  const { logOutUser } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    logOutUser();
    toast.success("logout successful");
  }, [logOutUser]);

  return <Navigate to="/auth/login" />;
};

export default Logout;
