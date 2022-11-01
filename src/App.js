import React from "react";
import "./App.css";
import ImgViewer from "./components/ImgViewer";
import PdfView from "./components/PdfViewer";
// import FilePreviewer from "./components/FileViews";
// import UpdateImageDisplay from "./components/FilePreview";
// import Preview from "./components/Preview";
// import PdfView from "./components/PdfViewer";
import { QuillEdit } from "./components/Quill";

function App() {
  return (
    <>
      <div className="App">
        <QuillEdit />
        {/* <PdfView /> */}
        {/* <ImgViewer /> */}
        {/* <UpdateImageDisplay /> */}
        {/* <FilePreviewer /> */}
        {/* <Preview /> */}
      </div>
    </>
  );
}

export default App;
