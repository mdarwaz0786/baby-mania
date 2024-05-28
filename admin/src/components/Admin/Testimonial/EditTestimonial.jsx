import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditTestimonial = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchSingleTestimonial = async (id) => {
    try {
      const response = await axios.get(
        `/api/v1/testimonial/single-testimonial/${id}`
      );
      setName(response?.data?.testimonial?.name);
      setReview(response?.data?.testimonial?.review);
      setStatus(response?.data?.testimonial?.status);
    } catch (error) {
      console.log("Error while fetching single testimonial:", error.message);
    }
  };

  useEffect(() => {
    fetchSingleTestimonial(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !review || !status) {
        return toast.error("Enter all detail");
      }

      const response = await axios.put(
        `/api/v1/testimonial/update-testimonial/${id}`,
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
        toast.success("testimonial updated successfully");
      }
    } catch (error) {
      console.log("Error while updating testimonial:", error.message);
      toast.error("error while updating testimonial");
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
          <h5 className="card-title">Edit Testimonial</h5>
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
                placeholder="Enter Name"
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTestimonial;
