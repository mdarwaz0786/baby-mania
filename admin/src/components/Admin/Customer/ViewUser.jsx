/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ViewUser = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchSingleUser = async (id) => {
    try {
      const response = await axios.get(`/api/v1/user/single-user/${id}`);
      setName(response?.data?.user?.name);
      setDate(response?.data?.user?.createdAt);
      setEmail(response?.data?.user?.email);
      setMobile(response?.data?.user?.mobile);
      setPassword(response?.data?.user?.password);
      setType(response?.data?.user?.isAdmin);
    } catch (error) {
      console.log("Error while fetching single color:", error.message);
    }
  };

  useEffect(() => {
    fetchSingleUser(id);
  }, [id]);

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <div className="card shadow p-5">
        <div className="mb-5" style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
          <h5 className="card-title">User Detail</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
        </div>

        <form>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" name="name" id="name" value={name} readOnly />
            </div>

            <div className="col mb-5">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Email" aria-label="Email" name="email" id="email" value={email} readOnly />
            </div>
          </div>

          <div className="row g-5">
            <div className="col">
              <label htmlFor="mobile" className="form-label">Mobile</label>
              <input type="text" className="form-control" placeholder="Mobile" aria-label="Mobile" name="mobile" id="mobile" value={mobile} readOnly />
            </div>

            <div className="col mb-5">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="text" className="form-control" placeholder="Password" aria-label="Password" name="password" id="password" value={password} readOnly />
            </div>
          </div>

          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="type" className="form-label">User Type</label>
              <input type="text" className="form-control" placeholder="User Type" aria-label="User Type" name="type" id="type" value={type ? "Admin" : "User"} readOnly />
            </div>

            <div className="col mb-5">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="text" className="form-control" placeholder="Created At" aria-label="Created At" name="date" id="date" value={new Date(date).toLocaleString()} readOnly />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewUser;
