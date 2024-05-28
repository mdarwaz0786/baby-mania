import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddSlider = () => {
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!image || !status) {
        return toast.error("Enter all detail");
      }

      const response = await axios.post(
        "/api/v1/slider/create-slider",
        { image, status },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.data?.success) {
        setImage("");
        setStatus("");
        toast.success("slider added successfully");
      }
    } catch (error) {
      console.log("Error while adding slider:", error.message);
      toast.error("error while adding slider");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "2rem", marginBottom: "1rem" }}
    >
      <div className="card shadow p-5">
        <div
          className="mb-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <h5 className="card-title">Add Slider</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                aria-label="image"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <div className="col mb-5">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                aria-label="status"
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled selected>
                  -- Select Status --
                </option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSlider;
