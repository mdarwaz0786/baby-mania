import image from "../../assets/payment.png";
import logo from "../../assets/header-logo.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <footer className="footer appear-animate">
        <div className="footer-newsletter bg-primary">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="icon-box icon-box-side text-white">
                  <div className="icon-box-icon d-inline-flex"><i className="w-icon-envelop3" /></div>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title text-white text-uppercase font-weight-bold">Subscribe Our Newsletter</h4>
                    <p className="text-white">Get all the latest information on Events, Sales and Offers.</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                  <input type="email" className="form-control mr-2 bg-white" name="email" id="email" placeholder="Your E-mail Address" />
                  <button className="btn btn-dark btn-rounded" type="submit">Subscribe<i className="w-icon-long-arrow-right" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget-about">
                  <Link to="/" className="logo-footer"><img src={logo} alt="logo-footer" width={144} height={45} /></Link>
                  <div className="widget-body">
                    <p className="widget-about-title">Got Question? Call us 24/7</p>
                    <a href="tel:18005707777" className="widget-about-call">1-800-570-7777</a>
                    <p className="widget-about-desc">Register now to get updates on pronot get up icons &amp; coupons ster now toon.</p>
                    <div className="social-icons social-icons-colored">
                      <Link to="#" className="social-icon social-facebook w-icon-facebook" />
                      <Link to="#" className="social-icon social-twitter w-icon-twitter" />
                      <Link to="#" className="social-icon social-instagram w-icon-instagram" />
                      <Link to="#" className="social-icon social-youtube w-icon-youtube" />
                      <Link to="#" className="social-icon social-pinterest w-icon-pinterest" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h3 className="widget-title">Company</h3>
                  <ul className="widget-body">
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="#">Team Member</Link></li>
                    <li><Link to="#">Career</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="#">Affilate</Link></li>
                    <li><Link to="#">Order History</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  <ul className="widget-body">
                    <li><Link to="#">Track My Order</Link></li>
                    <li><Link to="/cart">View Cart</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="#">Help</Link></li>
                    <li><Link to="/wishlist">My Wishlist</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>
                  <ul className="widget-body">
                    <li><Link to="#">Payment Methods</Link></li>
                    <li><Link to="#">Money-back guarantee!</Link></li>
                    <li><Link to="#">Product Returns</Link></li>
                    <li><Link to="#">Support Center</Link></li>
                    <li><Link to="#">Shipping</Link></li>
                    <li><Link to="#">Term and Conditions</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-left">
              <p className="copyright">Copyright © 2024 BabyMania Store. All Rights Reserved.</p>
            </div>

            <div className="footer-right">
              <span className="payment-label mr-lg-8">We are using safe payment for</span>
              <figure className="payment"><img src={image} alt="payment" width={159} height={25} /></figure>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
