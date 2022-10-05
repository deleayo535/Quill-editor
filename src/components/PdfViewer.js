// import React, { useState, useRef } from "react";
// import { usePdf } from "@mikecousins/react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useRef } from "react";

const PdfView = ({ files }) => {
  const [url, setUrl] = React.useState("");

  // const fileInput = useRef(null);

  // Handle the `onChange` event of the `file` input
  const onChange = (e) => {
    files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

  return (
    <div>
      <input
        type="file"
        id="file"
        name="file"
        accept=".pdf, .docx"
        multiple
        onChange={onChange}
      />
      {/* <input type="file" multiple accept=".pdf, .docx" onChange={onChange} /> */}

      <div style={{ height: "550px" }}>
        {url ? (
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "100%",
              // width: "70%",
            }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer fileUrl={url} />
            </Worker>
          </div>
        ) : (
          <div
          // style={{
          //   alignItems: "center",
          //   border: "2px dashed rgba(0, 0, 0, .3)",
          //   display: "flex",
          //   fontSize: "2rem",
          //   height: "100%",
          //   justifyContent: "center",
          //   width: "100%",
          // }}
          >
            {/* Preview area */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfView;
