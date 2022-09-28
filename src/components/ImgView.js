import React, { useState } from "react";

// import ImageGallery from "react-image-gallery";
import FileInput from "@uiw/react-file-input";

function UpdateImageDisplay() {
  // const onChange = (e) => {
  //   console.log(e);
  //   // setSelectedFile(e.target.files[0]);
  // };

  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  // const docs = [];
  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {file && (
        <FileInput
          multiple="multiple"
          style={{ maxWidth: 200 }}
          size="small"
          onChange={handleUpload}
          // onChange={onChange}
          image={file}
        />
      )}
      <br />
      {/* <DocViewer documents={docs} /> */}
      <br />
    </div>
  );
}
export default UpdateImageDisplay;
