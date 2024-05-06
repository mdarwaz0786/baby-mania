import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/authContext.jsx";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { storeToken } = useAuth();

  const handleRegisteration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/user/register-user", { name, email, password, mobile });
      if (response.data.success) {
        storeToken(response.data.token);
        setMessage(response.data.message);
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
        navigate('/');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log("error while registering user:", error.message);
      setMessage("error while registering user");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/user/login-user", { email, password });
      if (response.data.success) {
        storeToken(response.data.token);
        setMessage(response.data.message);
        setEmail("");
        setPassword("");
        navigate('/');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log("Error while log in user:", error.message);
      setMessage("Error while log in user");
    }
  };

  return (
    <>
      <main className="main login-page">
        <div className="page-content">
          <div className="container">
            <div className="login-popup">
              <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <ul className="nav nav-tabs text-uppercase" role="tablist">
                  <li className="nav-item">
                    <a href="#sign-in" className="nav-link active">Sign In</a>
                  </li>

                  <li className="nav-item">
                    <a href="#sign-up" className="nav-link">Sign Up</a>
                  </li>
                </ul>

                {/* sign in */}
                <div className="tab-content">
                  <div className="tab-pane active" id="sign-in">
                    <form onSubmit={handleLogin}>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="enter your email" name="email" value={email} id="email" onChange={(e) => { setEmail(e.target.value) }} required />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="enter your password" name="password" value={password} id="password" onChange={(e) => { setPassword(e.target.value) }} required />
                      </div>
                      <button className="btn btn-primary">Sign In</button>
                      {message && <p className="text-danger">{message}</p>}
                    </form>
                  </div>

                  {/* sign up */}
                  <div className="tab-pane" id="sign-up">
                    <form onSubmit={handleRegisteration}>
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="enter your name" name="name" value={name} id="name" onChange={(e) => { setName(e.target.value) }} required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="enter your email" name="email" value={email} id="email" onChange={(e) => { setEmail(e.target.value) }} required />
                      </div>
                      <div className="form-group">
                        <label>Mobile</label>
                        <input type="number" className="form-control" placeholder="enter your mobile" name="mobile" value={mobile} id="contact" onChange={(e) => { setMobile(e.target.value) }} required />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="enter your password" name="password" value={password} id="password" onChange={(e) => { setPassword(e.target.value) }} required />
                      </div>
                      <button className="btn btn-primary">Sign Up</button>
                      {message && <p className="text-danger">{message}</p>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
