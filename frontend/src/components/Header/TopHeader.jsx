import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

const TopHeader = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p className="welcome-msg">Welcome to Wolmart Store message or remove it.</p>
          </div>

          <div className="header-right">
            <Link to="/contact-us" className="d-lg-show">Contact Us</Link>
            <span className="divider d-lg-show" />
            <Link to="/about-us" className="d-lg-show">About Us</Link>
            <span className="divider d-lg-show" />
            {
              isLoggedIn ?
                (
                  <>
                    <Link to="/logout" className="d-lg-show login sign-in">Log Out</Link>
                    <span className="divider d-lg-show" /><span></span>
                    <Link to={user.isAdmin ? "http://localhost:8080/admin" : "/my-account"} className="ml-0 d-lg-show login register"><i className="w-icon-account" />{user.name}</Link>
                  </>
                ) :
                (
                  <>
                    <Link to="/login" className="d-lg-show login sign-in"><i className="w-icon-account" />Sign In</Link>
                    <span className="delimiter d-lg-show">/</span>
                    <Link to="/login" className="ml-0 d-lg-show login register">Register</Link>
                  </>
                )
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
