import { Navigate } from "react-router-dom";
import { useAuth } from "./context/authContext.jsx";

const MyAccount = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h4 className="d-flex justify-content-center align-items-center">Loading.....</h4>
  }

  if (user.isAdmin) {
    return <Navigate to="/" />
  }

  return (
    <>
      <h4 className="d-flex justify-content-center align-items-center">My Account Page</h4>
    </>
  );
};

export default MyAccount;
