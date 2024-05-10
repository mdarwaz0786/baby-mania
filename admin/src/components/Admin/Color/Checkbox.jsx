/* eslint-disable react/prop-types */
import { useState } from "react";

const CheckBox = ({ updateColorStatus, id, showStatus }) => {
  const [status, setStatus] = useState(false);

  const updateStatus = () => {
    updateColorStatus(id, !status ? "Show" : "Hide");
    setStatus(!status);
  };

  return (
    <span className="form-check form-switch" style={{ marginLeft: "1rem" }}>
      <input
        className="form-check-input"
        type="checkbox"
        id="toggleSwitch"
        checked={showStatus === "Show"}
        onChange={updateStatus}
      />
    </span>
  );
};

export default CheckBox;