import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  // We recreate the child element (h2, p) but add tooltip behavior
  const Tag = children.type;
  const childText = children.props.children;

  return (
    <Tag
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {childText}

      {visible && (
        <div
          className="tooltip-box"
          style={{
            position: "absolute",
            bottom: "30px",
            left: "20px",
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          {text}
        </div>
      )}
    </Tag>
  );
}

export default Tooltip;
