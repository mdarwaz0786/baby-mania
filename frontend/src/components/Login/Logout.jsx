import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

const Logout = () => {
  const { logOutUser } = useAuth();

  useEffect(() => {
    logOutUser();
  }, [logOutUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Navigate to="/login" />;
};

export default Logout;
