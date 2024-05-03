import { Link } from 'react-router-dom';
import image from "../../assets/2.jpg";

const AboutUs = () => {
  return (
    <>
      <main className="main">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">About Us</h1>
          </div>
        </div>
        {/* End of Page Header */}

        {/* Start of Page Content */}
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

                <div className="col-md-6 mb-8">
                  <figure className="br-lg">
                    <img src={image} alt="Banner" width={610} height={500} style={{ backgroundColor: '#CECECC' }} />
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



