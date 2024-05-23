const Carousel = () => {
  return (
    <section className="intro-section">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user" className="d-block w-100" alt="Slide1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Exclusive Fashion Collection</h5>
              <p>Discover the latest trends in fashion and get inspired by our new styles. Shop now and upgrade your wardrobe with our exclusive collection.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_usehttps://img.freepik.com/premium-psd/black-friday-sale-social-media-post-instagram-post-web-banner-facebook-cover-template_220443-1048.jpg" className="d-block w-100" alt="Slide2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>New Arrivals in Fashion</h5>
              <p>Stay ahead of the fashion curve with our latest arrivals. Fresh styles and exclusive designs that make a statement.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trendy Accessories</h5>
              <p>Complete your look with our trendy accessories. From chic bags to stylish shoes, find everything you need to accessorize perfectly.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
