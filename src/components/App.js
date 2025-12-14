import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">
          <div>
            <div>This is a tooltip</div>
          </div>
        </h2>
      </Tooltip>

      <Tooltip text="Another tooltip">
        <p className="tooltip">
          <div>This is another tooltip</div>
        </p>
      </Tooltip>
    </div>
  );
}

export default App;
