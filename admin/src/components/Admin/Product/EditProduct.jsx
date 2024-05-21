import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProduct = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [skuCode, setSkuCode] = useState("");
  const [mrpPrice, setMrpPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [status, setStatus] = useState("");
  const [featuredProduct, setFeaturedProduct] = useState("");
  const [latestProduct, setLatestProduct] = useState("");
  const [bestSellingProduct, setBestSellingProduct] = useState("");
  const [specialProduct, setSpecialProduct] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [smallInfo, setSmallInfo] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSingleProduct(id);
  }, [id]);

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/v1/product/update-product/${id}`, {
        name,
        rating,
        skuCode,
        mrpPrice,
        salePrice,
        availability,
        status,
        featuredProduct,
        latestProduct,
        bestSellingProduct,
        specialProduct,
        newProduct,
        smallInfo,
        description
      });
      if (response?.data?.success) {
        toast.success("product updated successfully");
      }
    } catch (error) {
      console.log("Error while updating product:", error.message);
      toast.error("error while updating product");
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      const response = await axios.get(`/api/v1/product/single-product/${id}`);
      const productData = response?.data?.product;
      setName(productData.name);
      setRating(productData.rating);
      setSkuCode(productData.skuCode);
      setMrpPrice(productData.mrpPrice);
      setSalePrice(productData.salePrice);
      setAvailability(productData.availability);
      setStatus(productData.status);
      setFeaturedProduct(productData.featuredProduct);
      setLatestProduct(productData.latestProduct);
      setBestSellingProduct(productData.bestSellingProduct);
      setSpecialProduct(productData.specialProduct);
      setNewProduct(productData.newProduct);
      setSmallInfo(productData.smallInfo);
      setDescription(productData.description);
    } catch (error) {
      console.log("Error while fetching single product:", error.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "2rem", marginBottom: "5rem" }}>
      <div className="card shadow p-5">
        <div className="mb-5" style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
          <h5 className="card-title">Edit Product</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
        </div>

        <form>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="col mb-5">
              <label htmlFor="rating" className="form-label">Rating</label>
              <input type="number" className="form-control" placeholder="Rating" aria-label="Rating" name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
            </div>
          </div>


          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="mrpPrice" className="form-label">MRP Price</label>
              <input type="number" className="form-control" placeholder="MRP Price" aria-label="MRP Price" name="mrpPrice" id="mrpPrice" value={mrpPrice} onChange={(e) => setMrpPrice(e.target.value)} />
            </div>

            <div className="col mb-5">
              <label htmlFor="salePrice" className="form-label">Sale Price</label>
              <input type="number" className="form-control" placeholder="Sale Price" aria-label="Sale Price" name="salePrice" id="salePrice" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
            </div>

            <div className="col mb-5">
              <label htmlFor="availability" className="form-label">Availability</label>
              <input type="number" className="form-control" placeholder="Availability" aria-label="Availability" name="availability" id="availability" value={availability} onChange={(e) => setAvailability(e.target.value)} />
            </div>

            <div className="col mb-5">
              <label htmlFor="skuCode" className="form-label">SKU Code</label>
              <input type="text" className="form-control" placeholder="SKU Code" aria-label="SKU Code" name="skuCode" id="skuCode" value={skuCode} onChange={(e) => setSkuCode(e.target.value)} />
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
              <label htmlFor="featuredProduct" className="form-label">Featured Product</label>
              <select className="form-select" aria-label="Featured Product" name="featuredProduct" id="featuredProduct" value={featuredProduct} onChange={(e) => setFeaturedProduct(e.target.value)} placeholder="Featured Product">
                <option value="" disabled>-- Select Status --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="latestProduct" className="form-label">Latest Product</label>
              <select className="form-select" aria-label="Latest Product" name="latestProduct" id="latestProduct" value={latestProduct} onChange={(e) => setLatestProduct(e.target.value)} placeholder="Latest Product">
                <option value="" disabled>-- Select Status --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="bestSellingProduct" className="form-label">Best Selling Product</label>
              <select className="form-select" aria-label="Best Selling Product" name="bestSellingProduct" id="bestSellingProduct" value={bestSellingProduct} onChange={(e) => setBestSellingProduct(e.target.value)} placeholder="Best Selling Product">
                <option value="" disabled>-- Select Status --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="specialProduct" className="form-label">Special Product</label>
              <select className="form-select" aria-label="Special Product" name="specialProduct" id="specialProduct" value={specialProduct} onChange={(e) => setSpecialProduct(e.target.value)} placeholder="Special Product">
                <option value="" disabled>-- Select Status --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="newProduct" className="form-label">New Product</label>
              <select className="form-select" aria-label="New Product" name="newProduct" id="newProduct" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder="New Product">
                <option value="" disabled>-- Select Status --</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="smallInfo" className="form-label">Small Info</label>
              <textarea className="form-control" placeholder="Small Info" aria-label="Small Info" name="smallInfo" id="smallInfo" value={smallInfo} onChange={(e) => setSmallInfo(e.target.value)}></textarea>
            </div>

            <div className="col mb-5">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" placeholder="Description" aria-label="Description" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
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

export default EditProduct;
