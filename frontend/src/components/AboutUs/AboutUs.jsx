import { Link } from 'react-router-dom';
import image from "../../assets/2.jpg";
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }, []);

  return (
    <>
      <main className="main">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">About Us</h1>
          </div>
        </div>

        <div className="page-content">
          <div className="container">
            <section className="customer-service mb-7">
              <div className="row align-items-center">
                <div className="col-md-6 pr-lg-8 mb-8">
                  <h2 className="title text-left mt-8">We Provide Continuous &amp; Kind Service for Customers</h2>
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

                <div className="col-md-6 mb-8">
                  <figure className="br-lg">
                    <img src={image} alt="Banner" style={{ backgroundColor: '#CECECC' }} />
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;



