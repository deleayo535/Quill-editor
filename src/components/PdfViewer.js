import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useEffect, useState } from "react";
import { Modal } from "./ImgModal";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { PaperClipOutlined } from "@ant-design/icons";
import LoadingSpinner from "./Atom/LoadingSpinner";

const PdfView = ({ files }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [shown, setShown] = useState(false);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // if (!e.files[0].name.match(/\.(jpg|jpeg|png|gif)$/i)) alert("not an image");
    //1. if pdf or image
    files = e.target.files;
    const file = files[0];
    const type = file.name;
    let pdfFile = type.match(/\.(application|pdf)$/i);
    let imageFile = type.match(/\.(jpg|jpeg|png|gif)$/i);
    // console.log({ type, name });
    if (pdfFile) {
      files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    } else if (imageFile) {
      setImages([...e.target.files]);
    } else {
      e.Default();
    }

    console.log(type);
    //2. set state accordingly
    setIsLoading(false);
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
    setShowModal(false);
  };

  const openImages = () => {
    setShowModal(true);
    setShown(false);
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    setIsLoading(true);

    hiddenFileInput.current.click();
    // setIsLoading(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <Attachment>
          <PaperClipOutlined onClick={handleClick} style={{ width: "100%" }} />
        </Attachment>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*,.pdf"
          multiple
          onChange={onChange}
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
      </div>
      {isLoading ? <LoadingSpinner /> : <></>}
      {/* {url && (
        <button
          style={{
            backgroundColor: "#f1f3f4",
            border: "1px solid",
            borderRadius: "20px",
            color: "black",
            cursor: "pointer",
            padding: "3px 4px",
          }}
          onClick={openPdf}
          className={btnName}
        >
          Preview Pdf
        </button>
      )} */}
      {url ? (
        <button
          style={{
            backgroundColor: "#f1f3f4",
            border: "1px solid",
            borderRadius: "20px",
            color: "black",
            cursor: "pointer",
            padding: "3px 4px",
          }}
          onClick={openPdf}
        >
          Preview
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "#f1f3f4",
            border: "1px solid",
            borderRadius: "20px",
            color: "black",
            cursor: "pointer",
            padding: "3px 4px",
          }}
          onClick={openImages}
        >
          Preview
        </button>
      )}
      {/* <div>{files.name}</div> */}

      {showModal && <Modal images={images} setShowModal={setShowModal} />}
      {shown && ReactDOM.createPortal(modalBody(), document.body)}
    </div>
  );
};

const Attachment = styled.div`
  width: 40px;
  // height: 60px;
`;

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
