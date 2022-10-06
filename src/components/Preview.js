import React, { Component, useState } from "react";
import FilePreview from "react-file-preview-latest";

const Preview = ({ files }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (el) => {
    files = el.target.files;
    files.length > 0 && setSelectedFiles(URL.createObjectURL(files[0]));
  };

  const onError = (err) => console.log("Error:", err);
  return (
    <>
      <input
        type="file"
        id="file"
        name="file"
        accept=".pdf, .docx"
        multiple
        onChange={handleChange}
      />
      <FilePreview
        type={"file"}
        file={selectedFiles}
        onError={onError}
        // file={selectedFiles.map((file) => ({
        //   uri: window.URL.createObjectURL(file),
        //   fileName: file.name,
        // }))}
      />
    </>
  );
};

export default Preview;
