import React from "react";
import "./App.css";
import UpdateImageDisplay from "./components/ImgView";
// import PdfView from "./components/PdfViewer";
import { QuillEdit } from "./components/Quill";

function App() {
  return (
    <>
      <div className="App">
        <QuillEdit />
        <UpdateImageDisplay />
        {/* <PdfView /> */}
      </div>
    </>
  );
}

export default App;
