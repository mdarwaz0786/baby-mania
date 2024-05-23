import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !mobile || !message) {
        return toast.error('please enter all details');
      }
      const response = await axios.post("/api/v1/contact/create-contact", { name, email, mobile, message });
      if (response?.data?.success) {
        toast.success("form submitted successfully");
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      }
    } catch (error) {
      console.log("Error while submitting form:", error.message);
      toast.error("error while submitting form");
    }
  };

  return (
    <>
      <main className="main">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Contact Us</h1>
          </div>
        </div>

        <div className="page-content contact-us">
          <div className="container">
            <section className="content-title-section mb-10">
              <h3 className="title title-center mb-3" style={{ marginTop: "2rem" }}>Contact Information</h3>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </section>

            <section className="contact-information-section mb-10">
              <div className="swiper-container swiper-theme">
                <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-email">
                      <i className="w-icon-envelop-closed" />
                    </span>

                    <div className="icon-box-content">
                      <h4 className="icon-box-title">E-mail Address</h4>
                      <p><Link to="#">contact@contact.com</Link></p>
                    </div>
                  </div>

                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-headphone">
                      <i className="w-icon-headphone" />
                    </span>

                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Phone Number</h4>
                      <p>+91-0123456789</p>
                    </div>
                  </div>

                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-map-marker">
                      <i className="w-icon-map-marker" />
                    </span>

                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Address</h4>
                      <p>New Delhi</p>
                    </div>
                  </div>

                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-fax">
                      <i className="w-icon-fax" />
                    </span>

                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Fax</h4>
                      <p>1-800-570-7777</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="divider mb-10 pb-1" />
            <section className="contact-section">
              <div className="row gutter-lg pb-3">
                <div className="col-md-6 pr-lg-8 mb-8">
                  <h2 className="title text-left">We Provide Continuous &amp; Kind Service for Customers</h2>
                  <div className="accordion accordion-simple accordion-plus">

                    <div className="card border-no">
                      <div className="card-header">
                        <Link to="#" className="collapse">Customer Service</Link>
                      </div>

                      <div className="card-body expanded">
                        <p className="mb-3">
                          Our dedicated customer service team is available to assist you with any inquiries or issues you may have. We strive to provide prompt and helpful support to ensure your satisfaction.
                        </p>
                      </div>
                    </div>

                    <div className="card border-no">
                      <div className="card-header">
                        <Link to="#" className="collapse">Shipping and Delivery</Link>
                      </div>

                      <div className="card-body expanded">
                        <p className="mb-3">
                          Enjoy fast and reliable shipping services with us. We aim to deliver your orders to your doorstep in a timely manner, ensuring that you receive your purchases without delay.
                        </p>
                      </div>
                    </div>

                    <div className="card border-no">
                      <div className="card-header">
                        <Link to="#" className="collapse">Returns and Exchanges</Link>
                      </div>

                      <div className="card-body expanded">
                        <p className="mb-3">
                          We offer hassle-free returns and exchanges for your convenience. If you are not completely satisfied with your purchase, simply contact us, and we will guide you through the process of returning or exchanging your item.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-8">
                  <h4 className="title mb-3">Send Us a Message</h4>
                  <form className="form contact-us-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Mobile</label>
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter mobile"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter Message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark btn-rounded">Send Now</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <h4 className="text-center mb-5 mb-10 ">Our Location</h4>
        <div className="container" style={{ overflow: "hidden", height: "0", paddingBottom: "30%", position: "relative" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0247811916274!2d77.07810957451959!3d28.62901937566662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d053a2359d897%3A0x7ade773a38d4c83d!2sCode%20Diffusion%20-%20Mobile%20Application%20Development%20Company%20in%20Delhi!5e0!3m2!1sen!2sin!4v1716462995088!5m2!1sen!2sin" width="600" height="450" style={{ border: "0", height: "100%", width: "100%", left: "0", top: "0", position: "absolute" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
    </>
  );
};

export default ContactUs;