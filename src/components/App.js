import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip">
        <h1>hover over me</h1>
      </Tooltip>
    </div>
  );
};

export default App;
