import { useAuth } from "../../context/authContext.jsx";
import { Navigate } from "react-router-dom";

const Setting = () => {
  const { user } = useAuth();

  return (
    <>
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
            <h5 className="card-title">Admin Detail</h5>
            <button className="btn btn-primary" onClick={() => Navigate(-1)}>
              back
            </button>
          </div>

          <form>
            <div className="row g-5">
              <div className="col mb-5">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  name="name"
                  id="name"
                  value={user?.name}
                  readOnly
                />
              </div>

              <div className="col mb-5">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  name="email"
                  id="email"
                  value={user?.email}
                  readOnly
                />
              </div>
            </div>

            <div className="row g-5">
              <div className="col">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                  aria-label="Mobile"
                  name="mobile"
                  id="mobile"
                  value={user?.mobile}
                  readOnly
                />
              </div>

              <div className="col mb-5">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  name="password"
                  id="password"
                  value={user?.password}
                  readOnly
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
    </>
  );
};

export default Setting;
