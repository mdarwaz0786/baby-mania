import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditCategory = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [showHeader, setShowHeader] = useState("");
  const [shopByCategory, setShopByCategory] = useState("");
  const [ourCategory, setOurCategory] = useState("");
  const [subcategories, setSubcategories] = useState([{ name: '' }]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/v1/category/update-category/${id}`, { name, status, showHeader, shopByCategory, ourCategory, subcategories });
      if (response?.data?.success) {
        toast.success("category updated successfully");
      }
    } catch (error) {
      console.log("Error while updating category:", error.message);
      toast.error("error while updating category");
    }
  };

  const fetchSingleCategory = async (id) => {
    try {
      const response = await axios.get(`/api/v1/category/single-category/${id}`);
      setName(response?.data?.category?.name);
      setStatus(response?.data?.category?.status);
      setShowHeader(response?.data?.category?.showHeader);
      setShopByCategory(response?.data?.category?.shopByCategory);
      setOurCategory(response?.data?.category?.ourCategory);
      setSubcategories(response?.data?.category?.subcategories)
    } catch (error) {
      console.log("Error while fetching single color:", error.message);
    }
  };

  useEffect(() => {
    fetchSingleCategory(id);
  }, [id]);

  const handleSubcategoryChange = (index, value) => {
    const newSubcategories = [...subcategories];
    newSubcategories[index].name = value;
    setSubcategories(newSubcategories);
  };

  const handleAddSubcategory = () => {
    setSubcategories([...subcategories, { name: '' }]);
  };

  const handleRemoveSubcategory = index => {
    const newSubcategories = [...subcategories];
    newSubcategories.splice(index, 1);
    setSubcategories(newSubcategories);
  };

  return (
    <div className="container" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
      <div className="card shadow p-5">
        <div className="mb-5" style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
          <h5 className="card-title">Edit Category</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
        </div>

        <form>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="status" className="form-label">Status</label>
              <select className="form-select" aria-label="Status" name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Select status">
                <option value="" disabled>-- Select Status --</option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="showHeader" className="form-label">Show Header</label>
              <select className="form-select" aria-label="Show Header" name="showHeader" id="showHeader" value={showHeader} onChange={(e) => setShowHeader(e.target.value)} placeholder="Show Header">
                <option value="" disabled>-- Show Header --</option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
            </div>
          </div>

          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="shopByCategory" className="form-label">Shop By Category</label>
              <select className="form-select" aria-label="Shop By Category" name="shopByCategory" id="shopByCategory" value={shopByCategory} onChange={(e) => setShopByCategory(e.target.value)} placeholder="Shop By Category">
                <option value="" disabled>-- Shop By Category --</option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="ourCategory" className="form-label">Our Category</label>
              <select className="form-select" aria-label="Our Category" name="ourCategory" id="ourCategory" value={ourCategory} onChange={(e) => setOurCategory(e.target.value)}>
                <option value="" disabled>-- Our Category --</option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
            </div>

            {
              subcategories?.map((subcategory, index) => (
                <div className="row g-5" key={index}>
                  <div className="col mb-1">
                    <label htmlFor={`subcategory-${index}`} className="form-label">Subcategory {index + 1}</label>
                    <input type="text" className="form-control" placeholder={`Subcategory ${index + 1}`} aria-label={`Subcategory ${index + 1}`} value={subcategory?.name} onChange={(e) => handleSubcategoryChange(index, e.target.value)} />
                  </div>
                  {
                    index > 0 && (
                      <div className="col mb-1 align-self-end">
                        <button type="button" className="btn btn-danger" onClick={() => handleRemoveSubcategory(index)}>Remove Subcategory</button>
                      </div>
                    )
                  }
                </div>
              ))
            }

            <div className="text-center mt-5">
              <button type="button" className="btn btn-secondary" onClick={handleAddSubcategory}>Add Subcategory</button>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary" onClick={(e) => handleUpdate(e, id)}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
