import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTestimonial = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !review || !status) {
        return toast.error("Enter all detail");
      }

      const response = await axios.post(
        "/api/v1/testimonial/create-testimonial",
        {
          name,
          review,
          status,
        }
      );

      if (response?.data?.success) {
        setName("");
        setReview("");
        setStatus("");
        toast.success("testimonial added successfully");
      }
    } catch (error) {
      console.log("Error while adding testimonial:", error.message);
      toast.error("error while adding testimonial");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "2rem", marginBottom: "1rem" }}
    >
      <div className="card shadow p-4">
        <div
          className="mb-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <h5 className="card-title">Add Testimonial</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                aria-label="name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col mb-5">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                aria-label="Status"
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

          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="review" className="form-label">
                Review
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter review"
                aria-label="review"
                name="review"
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
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

export default AddTestimonial;
