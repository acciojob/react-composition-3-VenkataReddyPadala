import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="Tooltip for heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for first paragraph">
        <p>Hover over this first paragraph</p>
      </Tooltip>

      <Tooltip text="Another tooltip for second paragraph">
        <p>Hover over this second paragraph</p>
      </Tooltip>
    </div>
  );
}

export default App;
