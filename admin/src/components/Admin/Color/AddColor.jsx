import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const AddColor = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [colorCode, setColorCode] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/color/create-color", { name, status, colorCode });
      if (response?.data?.success) {
        setName("");
        setStatus("");
        setColorCode("");
        alert("Color added");
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log("Error while adding color:", error.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <div className="card shadow p-4">
        <div className="mb-5" style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
          <h5 className="card-title">Add Color</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="status" className="form-label">Status</label>
              <select className="form-select" aria-label="Status" name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="" disabled>-- Select Status --</option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
            </div>
          </div>
          <div className="row g-3 mt-3">
            <div className="col">
              <label htmlFor="color" className="form-label">Color</label>
              <input type="color" className="form-control" id="color" value={colorCode} name="colorCode" onChange={(e) => setColorCode(e.target.value)} />
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

export default AddColor;
