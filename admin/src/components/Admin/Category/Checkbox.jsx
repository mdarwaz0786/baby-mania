/* eslint-disable react/prop-types */
import { useState } from "react";

const CheckBox = ({ updateStatus, id, showStatus }) => {
  const [status, setStatus] = useState(false);

  const handleUpdateStatus = () => {
    updateStatus(id, !status ? "Show" : "Hide");
    setStatus(!status);
  };

  return (
    <span className="form-check form-switch" style={{ marginLeft: "1rem" }}>
      <input
        className="form-check-input"
        type="checkbox"
        id="toggleSwitch"
        checked={showStatus === "Show"}
        onChange={handleUpdateStatus}
      />
    </span>
  );
};

export default CheckBox;