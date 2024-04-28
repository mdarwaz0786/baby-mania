import { useState } from "react";
import axios from 'axios';

const AddCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [showHeader, setShowHeader] = useState("");
  const [shopByCategory, setShopByCategory] = useState("");
  const [ourCategory, setOurCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('status', status);
      formData.append('showHeader', showHeader);
      formData.append('shopByCategory', shopByCategory);
      formData.append('ourCategory', ourCategory);
      formData.append('image', image);

      const response = await axios.post("http://localhost:8080/api/v1/category/create-category", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );

      if (response?.data?.success) {
        setName("");
        setImage("");
        setStatus("");
        setShowHeader("");
        setShopByCategory("");
        setOurCategory("");
        alert("category added");
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log("error while adding category:", error.message);
    }
  };



  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <div className="card shadow p-5">
        <h5 className="card-title text-center mb-5">Add Category</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="col mb-5">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" className="form-control" aria-label="Image" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} />
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
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
