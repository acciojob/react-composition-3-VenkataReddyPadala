// Tooltip.js
import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  // Ensure we only have a single React element as a child
  const child = React.Children.only(children);

  return React.cloneElement(
    child,
    {
      // add / merge the tooltip class on the child element itself
      className:
        (child.props.className ? child.props.className + " " : "") + "tooltip",

      // attach hover handlers while preserving any existing ones
      onMouseEnter: (e) => {
        setVisible(true);
        if (child.props.onMouseEnter) {
          child.props.onMouseEnter(e);
        }
      },
      onMouseLeave: (e) => {
        setVisible(false);
        if (child.props.onMouseLeave) {
          child.props.onMouseLeave(e);
        }
      },
    },
    <>
      {child.props.children}
      {visible && <div className="tooltiptext">{text}</div>}
    </>
  );
}

export default Tooltip;
