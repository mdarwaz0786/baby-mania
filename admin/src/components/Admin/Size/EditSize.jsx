import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditSize = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      if (!name || !status) {
        return toast.error("Enter all detail");
      }

      const response = await axios.put(`/api/v1/size/update-size/${id}`, { name, status });

      if (response?.data?.success) {
        setName("");
        setStatus("");
        toast.success("size updated successfully");
      }
    } catch (error) {
      console.log("Error while updating size:", error.message);
      toast.error("error while updating size");
    }
  };

  const fetchSingleSize = async (id) => {
    try {
      const response = await axios.get(`/api/v1/size/single-size/${id}`);
      setName(response?.data?.size?.name);
      setStatus(response?.data?.size?.status);
    } catch (error) {
      console.log("Error while fetching single Size:", error.message);
    }
  };

  useEffect(() => {
    fetchSingleSize(id);
  }, [id]);

  return (
    <div className="container" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
      <div className="card shadow p-4">
        <div className="mb-5" style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
          <h5 className="card-title">Add Size</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
        </div>

        <form>
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
            <button type="submit" className="btn btn-primary" onClick={(e) => handleUpdate(e, id)}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSize;
