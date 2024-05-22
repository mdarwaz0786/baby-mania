import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "../../App.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("/api/v1/category/all-category");
        setCategories(response?.data?.category);
      } catch (error) {
        console.error("Error fetching categories: ", error.message);
      }
    };
    fetchCategory();
  }, []);

  const handleScroll = () => {
    const scrollOptions = {
      top: window.innerWidth > 768 ? window.innerHeight * 0.79 : window.innerHeight * 0.37,
      behavior: 'smooth'
    };

    window.scrollTo({ ...scrollOptions, left: 0 });
  };

  return (
    <>
      <h4 className="text-center mt-5 mb-3">Our Category</h4>
      <div className="row category-container">
        {
          categories?.filter((category) => category?.status === "Show")?.map((category) => (
            <div className="col-lg-2 col-sm-4 col-md-2 category-item" key={category?._id}>
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden category-item-img" style={{ width: '100px', height: '100px' }}>
                  <Link to={`/product/shop/${category?.name}`} onClick={(e) => { e.preventDefault(); navigate(`/product/shop/${category?.name}`, { state: { categoryId: category?._id } }); handleScroll() }}>
                    <img
                      src={category?.image}
                      className="img-fluid"
                      alt="category-image"
                      style={{ objectFit: 'cover' }}
                    />
                  </Link>
                </div>
                <div className="mt-1" style={{ fontSize: "1.5rem", color: "black", fontWeight: "500" }}>{category?.name}</div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Category;
