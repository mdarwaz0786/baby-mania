import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { toast } from 'react-toastify';

const Logout = () => {
  const { logOutUser } = useAuth();

  useEffect(() => {
    toast.success("logout successful");
    logOutUser();
  }, [logOutUser]);

  return <Navigate to="/auth/login" />;
};

export default Logout;
