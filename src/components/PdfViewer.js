import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React, { useEffect, useState } from "react";
import { Modal } from "./ImgModal";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { PaperClipOutlined } from "@ant-design/icons";
import LoadingSpinner from "./Atom/LoadingSpinner";
import axios from "axios";

import percentLoader, {
  LoaderPercentProgressContainer,
} from "./loaderComponent";

const PdfView = ({ files }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = React.useState([]);
  const [url, setUrl] = React.useState("");
  const [showModal, setShowModal] = useState(false);
  const [shown, setShown] = useState(false);

  // useEffect(() => {
  //   percentLoader.open({ percentage: 90, speed: 80 });
  // });

  const onUploadFile = (files) => {
    // e.preventDefault();
    const formData = new FormData();
    const request = new XMLHttpRequest();
    // formData.append("file", images);
    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i]);
    }

    console.log(files);

    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
      }
    };

    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i]);
    }

    axios
      .post("https://v2.convertapi.com/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          percentLoader.open({ percentage, speed: 80 });
        },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => console.log(error));
  };

  const onChange = (e) => {
    // e.preventDefault();
    // setIsLoading(true);

    // if (!e.files[0].name.match(/\.(jpg|jpeg|png|gif)$/i)) alert("not an image");
    //1. if pdf or image
    const files = e.target.files;
    const file = files[0];
    const type = file.name;
    let pdfFile = type.match(/\.(application|pdf)$/i);
    let imageFile = type.match(/\.(jpg|jpeg|png|gif)$/i);
    // console.log({ type, name });

    onReset();
    if (pdfFile) {
      files.length > 0 && setUrl(URL.createObjectURL(files[0]));
      setTimeout(() => {
        onUploadFile(files);
      }, 700);
    } else if (imageFile) {
      setImages([...e.target.files]);
      // setImages((prev) => [...prev, ...e.target.files]);
      setTimeout(() => {
        for (let i = 0; i < files.length; i++) {
          // onReset(file);
          onUploadFile(files);
          // onReset();
        }
      }, 700);
    } else {
      // e.Default();
    }

    //2. set state accordingly
    setIsLoading(false);
  };

  const onReset = () => percentLoader.close();

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
    percentLoader.close();
  };

  const openImages = () => {
    setShowModal(true);
    setShown(false);
    percentLoader.close();
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    setIsLoading(true);

    hiddenFileInput.current.click();
    // setIsLoading(false);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Attachment>
            <PaperClipOutlined
              onClick={handleClick}
              style={{ width: "100%" }}
            />
          </Attachment>
          <input
            type="file"
            // id="file"
            id="form"
            name="file"
            accept="image/*,.pdf"
            multiple
            onChange={onChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
        {/* {isLoading ? <LoadingSpinner /> : <></>} */}
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
      <LoaderPercentProgressContainer />
    </React.Fragment>
  );
};

const Attachment = styled.div`
  width: 40px;
  // height: 60px;
`;

export default PdfView;
