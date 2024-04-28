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
            <section className="introduce mb-10 pb-10">
              <h2 className="title title-center" style={{ marginTop: "2rem" }}>
                We are Devoted Marketing<br />Consultants Helping Your Business Grow
              </h2>
              <p className=" mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                labore et dolore magna aliqua. Venenatis tellu metus</p>
              <figure className="br-lg">
                <img src="assets/images/pages/about_us/1.jpg" alt="Banner" width={1240} height={540} style={{ backgroundColor: '#D0C1AE' }} />
              </figure>
            </section>
            <section className="customer-service mb-7">
              <div className="row align-items-center">
                <div className="col-md-6 pr-lg-8 mb-8">
                  <h2 className="title text-left">We Provide Continuous &amp; Kind Service for Customers</h2>
                  <div className="accordion accordion-simple accordion-plus">


                    <div className="card border-no">
                      <div className="card-header">
                        <a href="#collapse3-1" className="collapse">Customer Service</a>
                      </div>
                      <div className="card-body expanded" id="collapse3-1">
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
                        <a href="#collapse3-1" className="collapse">Customer Service</a>
                      </div>
                      <div className="card-body expanded" id="collapse3-1">
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
                        <a href="#collapse3-1" className="collapse">Customer Service</a>
                      </div>
                      <div className="card-body expanded" id="collapse3-1">
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
                    <img src="assets/images/pages/about_us/2.jpg" alt="Banner" width={610} height={500} style={{ backgroundColor: '#CECECC' }} />
                  </figure>
                </div>
              </div>
            </section>
            <section className="count-section mb-10 pb-5">
              <div className="swiper-container swiper-theme" data-swiper-options="{
                      'slidesPerView': 1,
                      'breakpoints': {
                          '768': {
                              'slidesPerView': 2
                          },
                          '992': {
                              'slidesPerView': 3
                          }
                      }
                  }">
                <div className="swiper-wrapper row cols-lg-3 cols-md-2 cols-1">
                  <div className="swiper-slide counter-wrap">
                    <div className="counter text-center">
                      <span className="count-to" data-to={15}>0</span>
                      <span>M+</span>
                      <h4 className="title title-center">Products For Sale</h4>
                      <p>Diam maecenas ultricies mi eget mauris<br />
                        Nibh tellus molestie nunc non</p>
                    </div>
                  </div>
                  <div className="swiper-slide counter-wrap">
                    <div className="counter text-center">
                      <span>$</span>
                      <span className="count-to" data-to={25}>0</span>
                      <span>B+</span>
                      <h4 className="title title-center">Community Earnings</h4>
                      <p>Diam maecenas ultricies mi eget mauris<br />
                        Nibh tellus molestie nunc non</p>
                    </div>
                  </div>
                  <div className="swiper-slide counter-wrap">
                    <div className="counter text-center">
                      <span className="count-to" data-to={100}>0</span>
                      <span>M+</span>
                      <h4 className="title title-center">Growing Buyers</h4>
                      <p>Diam maecenas ultricies mi eget mauris<br />
                        Nibh tellus molestie nunc non</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </section>
          </div>
          <section className="boost-section pt-10 pb-10">
            <div className="container mt-10 mb-9">
              <div className="row align-items-center mb-10">
                <div className="col-md-6 mb-8">
                  <figure className="br-lg">
                    <img src="assets/images/pages/about_us/3.jpg" alt="Banner" width={610} height={450} style={{ backgroundColor: '#9E9DA2' }} />
                  </figure>
                </div>
                <div className="col-md-6 pl-lg-8 mb-8">
                  <h4 className="title text-left">We Boost Our Clients’ Bottom
                    Line by Optimizing Their Growth Potential</h4>
                  <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Venenatis tellus in.
                    metus vulputate eu scelerisque felis. Vel pretium lectus qua .
                    Arpis massa. Nunc id cursus metus ididunt ut labore metus vulputate episcing.</p>
                  <a href="#" className="btn btn-dark btn-rounded">Visit Our Store</a>
                </div>
              </div>
              <div className="awards-wrapper">
                <h4 className="title title-center font-weight-bold mb-10 pb-1 ls-25">Awards</h4>
                <div className="swiper-container swiper-theme" data-swiper-options="{
                          'spaceBetween': 20,
                          'slidesPerView': 1,
                          'breakpoints': {
                              '768': {
                                  'slidesPerView': 2
                              },
                              '992': {
                                  'slidesPerView': 3
                              },
                              '1200': {
                                  'slidesPerView': 4
                              }
                          }
                      }">
                  <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2 cols-1">
                    <div className="swiper-slide image-box-wrapper">
                      <div className="image-box text-center">
                        <figure>
                          <img src="assets/images/pages/about_us/1.png" alt="Award Image" width={109} height={105} />
                        </figure>
                        <p>Winner Seo Master MAGT<br />
                          Smart Start Award 2018</p>
                      </div>
                    </div>
                    <div className="swiper-slide image-box-wrapper">
                      <div className="image-box text-center">
                        <figure>
                          <img src="assets/images/pages/about_us/2.png" alt="Award Image" width={109} height={105} />
                        </figure>
                        <p>Top Social Media Agencies<br />
                          Next Partner 2019</p>
                      </div>
                    </div>
                    <div className="swiper-slide image-box-wrapper mt-3">
                      <div className="image-box text-center">
                        <figure>
                          <img src="assets/images/pages/about_us/3.png" alt="Award Image" width={109} height={105} />
                        </figure>
                        <p>5 Fastest Growing Abstract<br />
                          Solution Providers 2020</p>
                      </div>
                    </div>
                    <div className="swiper-slide image-box-wrapper">
                      <div className="image-box text-center">
                        <figure>
                          <img src="assets/images/pages/about_us/4.png" alt="Award Image" width={109} height={105} />
                        </figure>
                        <p>National Excellence Agencie<br />
                          Award Winner 2021</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </section>
          <section className="member-section mt-10 pt-9 mb-10 pb-4">
            <div className="container">
              <h4 className="title title-center mb-3">Meet Our Leaders</h4>
              <p className="text-center mb-8">Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam<br />
                maecenas ultricies mi eget mauris. Volutpat ac</p>
              <div className="swiper-container swiper-theme" data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 1,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 4
                          }
                      }
                  }">
                <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-sm-2 cols-1">
                  <div className="swiper-slide member-wrap">
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/4.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">John Doe</h4>
                      <p className="text-uppercase">Founder &amp; CEO</p>
                    </div>
                  </div>
                  <div className="swiper-slide member-wrap">
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/5.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">Jessica Doe</h4>
                      <p className="text-uppercase">Marketing</p>
                    </div>
                  </div>
                  <div className="swiper-slide member-wrap">
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/6.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">Rick Edward Doe</h4>
                      <p className="text-uppercase">Developer</p>
                    </div>
                  </div>
                  <div className="swiper-slide member-wrap">
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/7.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">Melinda Wolosky</h4>
                      <p className="text-uppercase">Design</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutUs;



