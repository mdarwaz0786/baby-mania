import { useEffect } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="main">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Contact Us</h1>
          </div>
        </div>
        {/* End of Page Header */}


        {/* Start of PageContent */}
        <div className="page-content contact-us">
          <div className="container">
            <section className="content-title-section mb-10">
              <h3 className="title title-center mb-3" style={{ marginTop: "2rem" }}>Contact Information</h3>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </section>

            {/* Start of Contact Information section */}
            <section className="contact-information-section mb-10">
              <div className="swiper-container swiper-theme">
                <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-email">
                      <i className="w-icon-envelop-closed" />
                    </span>

                    <div className="icon-box-content">
                      <h4 className="icon-box-title">E-mail Address</h4>
                      <p><Link to="#">contact@gmail.com</Link></p>
                    </div>
                  </div>

                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-headphone">
                      <i className="w-icon-headphone" />
                    </span>

                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Phone Number</h4>
                      <p>(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-map-marker">
                      <i className="w-icon-map-marker" />
                    </span>

                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Address</h4>
                      <p>Lawrence, NY 11345, USA</p>
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
            {/* End of Contact Information section */}


            <hr className="divider mb-10 pb-1" />

            {/* End of Contact section */}
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
                          Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                          sed do eius mod tempor incididunt ut labore
                          et dolore magna aliqua. Venenatis tell
                          us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                        </p>
                      </div>
                    </div>

                    <div className="card border-no">
                      <div className="card-header">
                        <Link to="#" className="collapse">Customer Service</Link>
                      </div>

                      <div className="card-body expanded">
                        <p className="mb-3">
                          Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                          sed do eius mod tempor incididunt ut labore
                          et dolore magna aliqua. Venenatis tell
                          us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                        </p>
                      </div>
                    </div>

                    <div className="card border-no">
                      <div className="card-header">
                        <Link to="#" className="collapse">Customer Service</Link>
                      </div>

                      <div className="card-body expanded">
                        <p className="mb-3">
                          Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                          sed do eius mod tempor incididunt ut labore
                          et dolore magna aliqua. Venenatis tell
                          us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-6 mb-8">
                  <h4 className="title mb-3">Send Us a Message</h4>
                  <form className="form contact-us-form" action="#" method="post">
                    <div className="form-group">
                      <label htmlFor="username">Your Name</label>
                      <input type="text" id="username" name="username" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email_1">Your Email</label>
                      <input type="email" id="email_1" name="email_1" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea id="message" name="message" cols={30} rows={5} className="form-control" defaultValue={""} />
                    </div>

                    <button type="submit" className="btn btn-dark btn-rounded">Send Now</button>
                  </form>
                </div>
              </div>
            </section>
            {/* End of Contact Section */}
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;