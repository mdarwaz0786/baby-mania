import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="row">
      {categories.map((category) => (
        <div className="col-md-3" key={category?._id}>
          <div className="d-flex flex-column align-items-center">
            <div className="rounded-circle overflow-hidden" style={{ width: '100px', height: '100px' }}>
              <img src={category?.image} className="img-fluid" alt="category-image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div className="mt-2">{category?.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
