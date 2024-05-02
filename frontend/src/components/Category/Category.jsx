import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/category/all-category");
        setCategories(response?.data?.category);
      } catch (error) {
        console.error("Error fetching categories: ", error.message);
      }
    };
    fetchCategory();
  }, []);

  return (
    <>
      <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
        <div className="container pb-2">
          <div className="swiper">
            <div className="swiper-container swiper-theme pg-show">
              <h2 className="title justify-content-center pt-1 ls-normal mb-5">Our Category</h2>
              <div className="swiper-wrapper cols-lg-6 cols-md-6 cols-sm-6 cols-6" style={{ display: "flex", justifyContent: "space-evenly", }}>
                {
                  categories?.filter((category) => category?.status === "Show").map((category) => (
                    <div className="swiper-slide category category-classic category-absolute overlay-zoom br-xs" key={category?._id}>
                      <Link to="/product" className="category-media">
                        <img src={category?.image} alt="category-image" />
                      </Link>
                      <div className="category-content">
                        <h4 className="category-name" style={{ color: "pink" }}>{category?.name}</h4>
                        <Link to="/product" className="btn btn-primary btn-link btn-underline">Shop Now</Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
