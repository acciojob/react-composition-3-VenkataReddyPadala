import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="This is a tooltip">
        <p>Hover over this first paragraph</p>
      </Tooltip>

      <Tooltip text="Another tooltip">
        <p>Hover over this second paragraph</p>
      </Tooltip>
    </div>
  );
}

export default App;
