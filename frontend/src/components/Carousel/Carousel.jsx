import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [sliders, setSliders] = useState([]);

  const fetchSliders = async () => {
    try {
      const response = await axios.get("/api/v1/slider/all-slider");
      setSliders(response?.data?.slider);
    } catch (error) {
      console.log("error while fetching all slider:", error.message);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  return (
    <section className="intro-section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {sliders
            ?.filter((slider) => slider?.status === "Show")
            ?.map((slider, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={slider?._id}
              >
                <Link to="/product">
                  <img
                    src={slider?.image}
                    className="d-block w-100 h-100"
                    alt="Slide"
                  />
                </Link>
                <div className="carousel-caption d-none d-md-block">
                  <h4>Exclusive Fashion Collection</h4>
                </div>
              </div>
            ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
