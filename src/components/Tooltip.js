import React, { useState, cloneElement } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  // Add className="tooltip" and mouse events directly to the CHILD element
  const childWithProps = cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
  });

  return (
    <>
      {childWithProps}

      {visible && <div className="tooltiptext">{text}</div>}
    </>
  );
}

export default Tooltip;
