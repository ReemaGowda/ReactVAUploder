import React from "react";
import FileUpload from "./components/FileUpload";
import "./App.scss";


import Drop from "./components/Drop";

const App = () => (
  <div className="divClass">
    <Drop>
      <div className="zone">
        <div id="dropZ">
          <a href="#" class="close" />
          <h1 className="headingfirst">Drag your File here</h1>
          <i className="fas fa-file-import"></i>
        </div>
      </div>
    </Drop>
    <FileUpload />
  </div>
);

export default App;
