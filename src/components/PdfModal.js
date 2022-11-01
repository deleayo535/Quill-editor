import React, { useRef, useState, useEffect } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
// import { ReactDOM } from "react-dom";
import ReactDom from "react-dom";

export const PdfModal = ({ setShown, files }) => {
  // const [shown, setShown] = useState(false);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    // files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    // console.log(e.target.files);

    // if (files.length < 1) return;
    // const newSetUrl = [];
    // files.forEach((file) => newSetUrl.push(URL.createObjectURL(file)));
    // setUrl(newSetUrl);
  }, [files]);
  // close the modal when clicking outside the modal.
  // const modalRef = useRef();
  // const onChange = (e) => {
  //   files = e.target.files;
  //   files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  //   console.log(e.target.files);
  // };

  // const modalRef = useRef;
  // const closeModal = (e) => {
  //   if (e.target === modalRef.current) {
  //     setShown(false);
  //   }
  // };

  const modalBody = () => (
    <div
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        overflow: "auto",

        /* Fixed position */
        left: "10%",
        right: "10%",
        position: "fixed",
        top: "5%",

        /* Take full size */
        height: "90%",
        width: "80%",

        /* Displayed on top of other elements */
        zIndex: 9999,
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          padding: ".5rem",
        }}
      >
        <div style={{ marginRight: "auto" }}></div>
        <button
          style={{
            backgroundColor: "#357edd",
            border: "none",
            borderRadius: "4px",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
          }}
          onClick={() => setShown(false)}
        >
          Close
        </button>
      </div>
      <div
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          <Viewer fileUrl={url} />
        </Worker>
        {/* <Viewer fileUrl={url} /> */}
      </div>
    </div>
  );
  //render the modal JSX in the portal div.
  return ReactDom.createPortal((modalBody(), document.body));
};
