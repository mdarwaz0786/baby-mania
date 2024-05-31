/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("/api/v1/testimonial/all-testimonial");
      setTestimonials(response?.data?.testimonial);
    } catch (error) {
      console.log("error while fetching all testimonial:", error.message);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <>
      <h4 className="text-center mt-10 mb-7">Our Custumer Says</h4>

      <div
        id="carouselExampleControls"
        className="carousel slide text-center carousel-dark"
        data-bs-ride="carousel"
        style={{ marginBottom: "1rem" }}
      >
        <div className="carousel-inner">
          {testimonials
            ?.filter((testimonial) => testimonial?.status === "Show")
            ?.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={testimonial?._id}
              >
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src={userIcon}
                  alt="avatar"
                  style={{ width: "10rem", height: "10rem" }}
                />
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <h4 className="mb-3">{testimonial?.name}</h4>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2" />
                      {testimonial?.review}
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i className="fas fa-star fa-sm" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm" />
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm" />
                  </li>
                  <li>
                    <i className="far fa-star fa-sm" />
                  </li>
                </ul>
              </div>
            ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Testimonial;
