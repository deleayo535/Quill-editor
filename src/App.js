import React from "react";
import "./App.css";
import PdfView from "./components/PdfViewer";
import { QuillEdit } from "./components/Quill";

function App() {
  return (
    <>
      <div className="App">
        <QuillEdit />
        <PdfView />
      </div>
    </>
  );
}

export default App;
