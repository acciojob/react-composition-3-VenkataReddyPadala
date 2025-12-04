import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      style={{ position: "relative" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <span
          style={{
            color: "white",
            backgroundColor: "red",
            position: "absolute",
            left: "20px",
            bottom: "30px",
            padding: "20px",
            borderRadius: "10px",
          }}
          className="tooltiptext"
        >
          {text}
        </span>
      )}
    </div>
  );
}

export default Tooltip;
