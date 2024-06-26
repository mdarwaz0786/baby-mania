/* eslint-disable react-hooks/exhaustive-deps */
import "../../App.css";
import { useEffect, useState } from "react";
import logo from "../../assets/header-logo.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/authContext.jsx";

const MiddleHeader = () => {
  const [carts, setCarts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();
  const { validToken } = useAuth("");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/product/search?q=${encodeURIComponent(searchQuery)}`, { state: { q: searchQuery } });
  };

  const handleScroll = () => {
    const scrollOptions = {
      top: window.innerWidth > 768 ? window.innerHeight * 0.79 : window.innerHeight * 0.37,
      behavior: 'smooth'
    };

    window.scrollTo({ scrollOptions });
  };

  const fetchCarts = async () => {
    try {
      const response = await axios.get("/api/v1/cart/fetch-user-cart", {
        headers: {
          Authorization: validToken,
        },
      });
      setCarts(response?.data?.cart);
    } catch (error) {
      console.log('error while fetching carts:', error.message);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <header className="header">
      <div className="header-middle middle-header">
        <div className="container">
          <div className="header-left mr-md-4">
            <Link to="#" className="mobile-menu-toggle w-icon-hamburger" aria-label="menu-toggle"></Link>
            <Link to="/" className="logo ml-lg-0"><img src={logo} alt="logo" width={144} height={45} /></Link>
            <form onSubmit={handleSearchSubmit} className="header-search hs-expanded hs-round d-md-flex input-wrapper">
              <input style={{ borderLeft: "2px solid #336699" }} type="text" className="form-control search-input" name="search" id="search" placeholder="Search Product" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} required />
              <button className="btn btn-search" type="submit"><i className="w-icon-search" onClick={handleScroll} /></button>
            </form>
          </div>

          <div className="header-right ml-4">
            <div className="header-call d-xs-show d-lg-flex align-items-center">
              <Link to="tel:#" className="w-icon-call" />
              <div className="call-info d-lg-show">
                <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                  <Link to="tel:#" className="text-capitalize">Live Chat</Link>
                </h4>
                <Link to="tel:#" className="phone-number font-weight-bolder ls-50">+91-0123456789</Link>
              </div>
            </div>

            <Link className="wishlist label-down link d-xs-show" to="/wishlist">
              <i className="w-icon-heart" />
              <span className="wishlist-label d-lg-show">Wishlist</span>
            </Link>

            <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
              <div className="cart-overlay" />
              <Link to="/cart" className="cart-toggle label-down link">
                <i className="w-icon-cart">
                  <span className="cart-count">{carts?.length}</span>
                </i>
                <span className="cart-label">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MiddleHeader;
