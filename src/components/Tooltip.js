import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  // Clone children to inject tooltip into their inner <div>
  const modifiedChildren = React.cloneElement(children, {
    children: (
      <>
        {children.props.children}
        {visible && (
          <div
            className="tooltiptext"
            style={{
              color: "white",
              backgroundColor: "red",
              position: "absolute",
              left: "20px",
              bottom: "30px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {text}
          </div>
        )}
      </>
    ),
  });

  return (
    <div
      style={{ position: "relative", cursor: "pointer" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {modifiedChildren}
    </div>
  );
}

export default Tooltip;
