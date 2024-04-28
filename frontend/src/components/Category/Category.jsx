const Category = () => {
  return (
    <>
      <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
        <div className="container pb-2">
          <h2 className="title justify-content-center pt-1 ls-normal mb-5">Top Categories Of The Month</h2>
          <div className="swiper">
            <div className="swiper-container swiper-theme pg-show" data-swiper-options={{
              spaceBetween: 20,
              slidesPerView: 2,
              breakpoints: {
                576: {
                  slidesPerView: 3
                },
                768: {
                  slidesPerView: 5
                },
                992: {
                  slidesPerView: 6
                }
              }
            }}>
              <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
                <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img src="assets/images/demos/demo1/categories/2-1.jpg" alt="Category" width={130} height={130} />
                  </a>
                  <div className="category-content">
                    <h4 className="category-name">Fashion</h4>
                    <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Shop
                      Now</a>
                  </div>
                </div>
                <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img src="assets/images/demos/demo1/categories/2-2.jpg" alt="Category" width={130} height={130} />
                  </a>
                  <div className="category-content">
                    <h4 className="category-name">Furniture</h4>
                    <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Shop
                      Now</a>
                  </div>
                </div>
                <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img src="assets/images/demos/demo1/categories/2-3.jpg" alt="Category" width={130} height={130} />
                  </a>
                  <div className="category-content">
                    <h4 className="category-name">Shoes</h4>
                    <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Shop
                      Now</a>
                  </div>
                </div>
                <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img src="assets/images/demos/demo1/categories/2-4.jpg" alt="Category" width={130} height={130} />
                  </a>
                  <div className="category-content">
                    <h4 className="category-name">Sports</h4>
                    <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Shop
                      Now</a>
                  </div>
                </div>
                <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img src="assets/images/demos/demo1/categories/2-5.jpg" alt="Category" width={130} height={130} />
                  </a>
                  <div className="category-content">
                    <h4 className="category-name">Games</h4>
                    <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Shop
                      Now</a>
                  </div>
                </div>
                <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs">
                  <a href="shop-banner-sidebar.html" className="category-media">
                    <img src="assets/images/demos/demo1/categories/2-6.jpg" alt="Category" width={130} height={130} />
                  </a>
                  <div className="category-content">
                    <h4 className="category-name">Computers</h4>
                    <a href="shop-banner-sidebar.html" className="btn btn-primary btn-link btn-underline">Shop
                      Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
