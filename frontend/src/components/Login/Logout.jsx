import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

const Logout = () => {
  const { logOutUser } = useAuth();

  useEffect(() => {
    logOutUser();
  }, [logOutUser]);

  return <Navigate to="/login" />;
};

export default Logout;
