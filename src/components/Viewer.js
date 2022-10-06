import React, { Component } from "react";
// import "./App.css";

import GoogleDocsViewer from "react-google-docs-viewer";

class Viewer extends Component {
  render() {
    return (
      <div>
        <GoogleDocsViewer
          width="60px"
          height="70px"
          fileUrl="http://localhost:3000/"
        />
      </div>
    );
  }
}

export default Viewer;
