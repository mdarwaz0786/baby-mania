import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
  const [image1, setImage1] = useState(null);
  const [selectedColor1, setSelectedColor1] = useState("");
  const [selectedSize1, setSelectedSize1] = useState("");
  const [image2, setImage2] = useState(null);
  const [selectedColor2, setSelectedColor2] = useState("");
  const [selectedSize2, setSelectedSize2] = useState("");
  const [image3, setImage3] = useState(null);
  const [selectedColor3, setSelectedColor3] = useState("");
  const [selectedSize3, setSelectedSize3] = useState("");
  const [image4, setImage4] = useState(null);
  const [selectedColor4, setSelectedColor4] = useState("");
  const [selectedSize4, setSelectedSize4] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchAllColor = async () => {
      try {
        const response = await axios.get("/api/v1/color/all-color");
        if (response?.data?.success) {
          setColor(response?.data?.color);
        }
      } catch (error) {
        console.error("error while fetching color:", error.message);
      }
    };

    const fetchAllSize = async () => {
      try {
        const response = await axios.get("/api/v1/size/all-size");
        if (response?.data?.success) {
          setSize(response?.data?.size);
        }
      } catch (error) {
        console.error("error while fetching size:", error.message);
      }
    };

    const fetchAllCategory = async () => {
      try {
        const response = await axios.get("/api/v1/category/all-category");
        if (response?.data?.success) {
          setCategory(response?.data?.category);
        }
      } catch (error) {
        console.error("error while fetching category:", error.message);
      }
    };

    fetchAllSize();
    fetchAllColor();
    fetchAllCategory();
  }, []);

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
      formData.append('image', image1);
      formData.append('color', selectedColor1);
      formData.append('size', selectedSize1);
      formData.append('image', image2);
      formData.append('color', selectedColor2);
      formData.append('size', selectedSize2);
      formData.append('image', image3);
      formData.append('color', selectedColor3);
      formData.append('size', selectedSize3);
      formData.append('image', image4);
      formData.append('color', selectedColor4);
      formData.append('size', selectedSize4);

      const response = await axios.post("/api/v1/product/create-product", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response?.data?.success) {
        alert("product added");
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log("error while creating product error from frontend:", error.message);
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
                  category.map((category) => (
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

          {/* image 1 */}
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" className="form-control" aria-label="Image" name="image" id="image" onChange={(e) => setImage1(e.target.files[0])} />
            </div>

            <div className="col mb-5">
              <label htmlFor="color" className="form-label">Color</label>
              <select className="form-select" aria-label="color" name="color" id="color" value={selectedColor1} onChange={(e) => setSelectedColor1(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  color?.map((color) => (
                    <option key={color?._id} value={color?._id}>{color?.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="size" className="form-label">Size</label>
              <select className="form-select" aria-label="size" name="size" id="size" value={selectedSize1} onChange={(e) => setSelectedSize1(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  size?.map((size) => (
                    <option key={size?._id} value={size?._id}>{size?.name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* image 2 */}
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" className="form-control" aria-label="Image" name="image" id="image" onChange={(e) => setImage2(e.target.files[0])} />
            </div>

            <div className="col mb-5">
              <label htmlFor="color" className="form-label">Color</label>
              <select className="form-select" aria-label="color" name="color" id="color" value={selectedColor2} onChange={(e) => setSelectedColor2(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  color?.map((color) => (
                    <option key={color?._id} value={color?._id}>{color?.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="size" className="form-label">Size</label>
              <select className="form-select" aria-label="size" name="size" id="size" value={selectedSize2} onChange={(e) => setSelectedSize2(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  size?.map((size) => (
                    <option key={size?._id} value={size?._id}>{size?.name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* image 3 */}
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" className="form-control" aria-label="Image" name="image" id="image" onChange={(e) => setImage3(e.target.files[0])} />
            </div>

            <div className="col mb-5">
              <label htmlFor="color" className="form-label">Color</label>
              <select className="form-select" aria-label="color" name="color" id="color" value={selectedColor3} onChange={(e) => setSelectedColor3(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  color?.map((color) => (
                    <option key={color?._id} value={color?._id}>{color?.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="size" className="form-label">Size</label>
              <select className="form-select" aria-label="size" name="size" id="size" value={selectedSize3} onChange={(e) => setSelectedSize3(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  size?.map((size) => (
                    <option key={size?._id} value={size?._id}>{size?.name}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* image 4 */}
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" className="form-control" aria-label="Image" name="image" id="image" onChange={(e) => setImage4(e.target.files[0])} />
            </div>

            <div className="col mb-5">
              <label htmlFor="color" className="form-label">Color</label>
              <select className="form-select" aria-label="color" name="color" id="color" value={selectedColor4} onChange={(e) => setSelectedColor4(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  color?.map((color) => (
                    <option key={color?._id} value={color?._id}>{color?.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="col mb-5">
              <label htmlFor="size" className="form-label">Size</label>
              <select className="form-select" aria-label="size" name="size" id="size" value={selectedSize4} onChange={(e) => setSelectedSize4(e.target.value)}>
                <option value="" disabled>-- Select Category --</option>
                {
                  size?.map((size) => (
                    <option key={size?._id} value={size?._id}>{size?.name}</option>
                  ))
                }
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

export default AddProduct;

