import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Another tooltip">
        <p>Hover over this second paragraph</p>
      </Tooltip>
    </div>
  );
}

export default App;
