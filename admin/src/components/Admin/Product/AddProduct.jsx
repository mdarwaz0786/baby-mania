import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [skuCode, setSkuCode] = useState("");
  const [mrpPrice, setMrpPrice] = useState();
  const [salePrice, setSalePrice] = useState();
  const [availability, setAvailability] = useState();
  const [status, setStatus] = useState("");
  const [featuredProduct, setFeaturedProduct] = useState("");
  const [latestProduct, setLatestProduct] = useState("");
  const [bestSellingProduct, setBestSellingProduct] = useState("");
  const [specialProduct, setSpecialProduct] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [smallInfo, setSmallInfo] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [productImages, setProductImages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const categoryResponse = await axios.get("/api/v1/category/all-category");
        if (categoryResponse?.data?.success) {
          setCategory(categoryResponse?.data?.category);
        }

        const colorResponse = await axios.get("/api/v1/color/all-color");
        if (colorResponse?.data?.success) {
          setColor(colorResponse?.data?.color);
        }

        const sizeResponse = await axios.get("/api/v1/size/all-size");
        if (sizeResponse?.data?.success) {
          setSize(sizeResponse?.data?.size);
        }
      } catch (error) {
        console.error("Error while fetching data:", error.message);
      }
    };

    fetchAllData();
  }, []);

  const handleAddImage = () => {
    setProductImages([...productImages, { image: null, color: "", size: "" }]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...productImages];
    updatedImages.splice(index, 1);
    setProductImages(updatedImages);
  };

  const handleImageChange = (index, file) => {
    const updatedImages = [...productImages];
    updatedImages[index].image = file;
    setProductImages(updatedImages);
  };

  const handleColorChange = (index, colorId) => {
    const updatedImages = [...productImages];
    updatedImages[index].color = colorId;
    setProductImages(updatedImages);
  };

  const handleSizeChange = (index, sizeId) => {
    const updatedImages = [...productImages];
    updatedImages[index].size = sizeId;
    setProductImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('category', selectedCategory);
      formData.append('subcategory', selectedSubCategory);
      formData.append('name', name);
      formData.append('rating', rating);
      formData.append('skuCode', skuCode);
      formData.append('mrpPrice', mrpPrice);
      formData.append('salePrice', salePrice);
      formData.append('availability', availability);
      formData.append('status', status);
      formData.append('featuredProduct', featuredProduct);
      formData.append('latestProduct', latestProduct);
      formData.append('bestSellingProduct', bestSellingProduct);
      formData.append('specialProduct', specialProduct);
      formData.append('newProduct', newProduct);
      formData.append('smallInfo', smallInfo);
      formData.append('description', description);

      productImages.forEach((image) => {
        formData.append('image', image.image);
        formData.append('color', image.color);
        formData.append('size', image.size);
      });

      if (!selectedCategory || !selectedSubCategory || !name || !rating || !skuCode || !mrpPrice || !salePrice || !availability || !status || !featuredProduct || !latestProduct || !bestSellingProduct || !specialProduct || !newProduct || !smallInfo || !description || !productImages) {
        return toast.error("Enter all detail");
      }

      const response = await axios.post("/api/v1/product/create-product", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response?.data?.success) {
        toast.success("Product added successfully");
        setName("");
        setAvailability("");
        setBestSellingProduct("");
        setDescription("");
        setFeaturedProduct("");
        setLatestProduct("");
        setMrpPrice("");
        setNewProduct("");
        setRating("");
        setSalePrice("");
        setSkuCode("");
        setSmallInfo("");
        setSpecialProduct("");
        setStatus("");
        setProductImages([]);
        setSelectedCategory("");
        setSelectedSubCategory("");
      }
    } catch (error) {
      console.error("Error while adding product:", error.message);
      toast.error("Error while adding product");
    }
  };

  return (
    <div className="container" style={{ marginTop: "2rem", marginBottom: "5rem" }}>
      <div className="card shadow p-5">
        <div className="mb-5" style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
          <h5 className="card-title">Add Product</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="category" className="form-label">Category</label>
              <select className="form-select" aria-label="Category" name="category" id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  category?.map((category) => (
                    <option key={category?._id} value={category?._id}>{category?.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="subcategory" className="form-label">Sub Category</label>
              <select className="form-select" aria-label="subcategory" name="subcategory" id="subcategory" value={selectedSubCategory} onChange={(e) => setSelectedSubCategory(e.target.value)}>
                <option value="" disabled>-- Select SubCategory --</option>
                {
                  category?.find((category) => category?._id === selectedCategory)?.subcategories?.map((subcategory) => (
                    <option key={subcategory?._id} value={subcategory?._id}>{subcategory?.name}</option>
                  ))
                }
              </select>
            </div>

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

          {
            productImages?.map((image, index) => (
              <div key={index} className="row g-5">
                <div className="col mb-5">
                  <label htmlFor={`image-${index}`} className="form-label">Image {index + 1}</label>
                  <input type="file" className="form-control" aria-label={`Image ${index + 1}`} name="image" id={`image-${index}`} onChange={(e) => handleImageChange(index, e.target.files[0])} />
                </div>
                <div className="col mb-5">
                  <label htmlFor={`color-${index}`} className="form-label">Color</label>
                  <select className="form-select" aria-label={`Color ${index + 1}`} name="color" id={`color-${index}`} value={image.color} onChange={(e) => handleColorChange(index, e.target.value)}>
                    <option value="" disabled>-- Select Color --</option>
                    {
                      color?.map((c) => (
                        <option key={c?._id} value={c?._id}>{c?.name}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="col mb-5">
                  <label htmlFor={`size-${index}`} className="form-label">Size</label>
                  <select className="form-select" aria-label={`Size ${index + 1}`} name="size" id={`size-${index}`} value={image.size} onChange={(e) => handleSizeChange(index, e.target.value)}>
                    <option value="" disabled>-- Select Size --</option>
                    {
                      size?.map((s) => (
                        <option key={s?._id} value={s?._id}>{s?.name}</option>
                      ))
                    }
                  </select>
                </div>
                {
                  index > 0 && (
                    <div className="col mb-5 align-self-end">
                      <button type="button" className="btn btn-danger" onClick={() => handleRemoveImage(index)}>Remove Image</button>
                    </div>
                  )
                }
              </div>
            ))
          }

          <div className="text-center mt-1">
            <button type="button" className="btn btn-secondary" onClick={handleAddImage}>Add Image</button>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

