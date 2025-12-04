import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const child = React.Children.only(children);

  const handleMouseOver = (e) => {
    setVisible(true);
    if (child.props.onMouseOver) {
      child.props.onMouseOver(e);
    }
  };

  const handleMouseOut = (e) => {
    setVisible(false);
    if (child.props.onMouseOut) {
      child.props.onMouseOut(e);
    }
  };

  return React.cloneElement(
    child,
    {
      // add tooltip class to the child element itself
      className: `${child.props.className || ""} tooltip`.trim(),
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
    },
    <>
      {child.props.children}
      {visible && <div className="tooltiptext">{text}</div>}
    </>
  );
}

export default Tooltip;
