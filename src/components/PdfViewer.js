// import React, { useState, useRef } from "react";
// import { usePdf } from "@mikecousins/react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useState } from "react";
import { Modal } from "./ImgModal";
import ReactDOM from "react-dom";

// interface PdfViewProps {
//   fileUrl: string;
// }

const PdfView = ({ files }) => {
  const [shown, setShown] = useState(false);
  const [url, setUrl] = React.useState("");
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);

  const onChange = (e) => {
    //if pdf or image
    setImages([...e.target.files]);
    files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    // setImages([]);

    console.log(e.target.files);
  };

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
          {shown && <Viewer fileUrl={url} />}
        </Worker>
        {/* <Viewer fileUrl={url} /> */}
      </div>
    </div>
  );

  const openPdf = () => {
    setShown(true);
  };
  const openImages = () => {
    setShowModal(true);
  };
  // const ev = () => {
  //   onChange();
  // };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*,.pdf"
          multiple
          onChange={onChange}
        />
      </div>
      <button
        style={{
          backgroundColor: "#00449e",
          // border: "none",
          borderRadius: "2px",
          // borderRadius: ".10rem",
          color: "#fff",
          cursor: "pointer",
          padding: "4px 4px",
          // padding: ".5rem",
        }}
        onClick={() => {
          switch (url && images) {
            case !url:
              openImages();
              break;
            case !images:
              openPdf();
              break;
            default:
              openImages(false);
              openPdf(false);
          }
          // if (setShown) {
          //   openPdf();
          //   openImages(false);
          // } else if (setImages) {
          //   openImages();
          //   openPdf(false);
          // } else {
          // }
        }}
      >
        view
      </button>
      {shown ? (
        ReactDOM.createPortal(modalBody(), document.body)
      ) : showModal ? (
        <Modal images={images} setShowModal={setShowModal} />
      ) : null}
      {/* {(showModal && <Modal images={images} setShowModal={setShowModal} />) ||
        (shown && ReactDOM.createPortal(modalBody(), document.body))} */}

      {/* {shown && ReactDOM.createPortal(modalBody(), document.body)} */}
    </div>
  );
};

// const PdfView = ({ files }) => {
//   const [url, setUrl] = React.useState("");

//   // const fileInput = useRef(null);

//   // Handle the `onChange` event of the `file` input
//   const onChange = (e) => {
//     files = e.target.files;
//     files.length > 0 && setUrl(URL.createObjectURL(files[0]));
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         id="file"
//         name="file"
//         accept=".pdf, .docx"
//         multiple
//         onChange={onChange}
//       />
//       {/* <input type="file" multiple accept=".pdf, .docx" onChange={onChange} /> */}

//       <div style={{ height: "550px" }}>
//         {url ? (
//           <div
//             style={{
//               border: "1px solid rgba(0, 0, 0, 0.3)",
//               height: "100%",
//               // width: "70%",
//             }}
//           >
//             <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
//               <Viewer fileUrl={url} />
//             </Worker>
//           </div>
//         ) : (
//           <div
//           // style={{
//           //   alignItems: "center",
//           //   border: "2px dashed rgba(0, 0, 0, .3)",
//           //   display: "flex",
//           //   fontSize: "2rem",
//           //   height: "100%",
//           //   justifyContent: "center",
//           //   width: "100%",
//           // }}
//           >
//             {/* Preview area */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default PdfView;
