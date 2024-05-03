import { useState } from "react";
import axios from 'axios';

const AddSize = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/size/create-size", { name, status });
      if (response?.data?.success) {
        setName("");
        setStatus("");
        alert("Size added");
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log("Error while adding size:", error.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <div className="card shadow p-4">
        <h5 className="card-title text-center mb-4">Add Size</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="status" className="form-label">Status</label>
              <select className="form-select" aria-label="Status" name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Select status">
                <option value="" disabled selected>-- Select Status --</option>
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

export default AddSize;
