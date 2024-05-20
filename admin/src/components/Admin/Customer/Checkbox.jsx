/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const CheckBox = ({ updateStatus, id, isAdmin }) => {
  const [status, setStatus] = useState(isAdmin);

  useEffect(() => {
    setStatus(isAdmin);
  }, [isAdmin]);

  const handleUpdateStatus = async () => {
    await updateStatus(id, !status);
    setStatus(!status);
  };

  return (
    <span className="form-check form-switch" style={{ marginLeft: "1rem" }}>
      <input
        className="form-check-input"
        type="checkbox"
        id="toggleSwitch"
        checked={status}
        onChange={handleUpdateStatus}
      />
    </span>
  );
};

export default CheckBox;
