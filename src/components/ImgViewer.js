import React, { useState, useEffect } from "react";
// import styles from "../Img.module.scss";
import { Modal } from "./ImgModal";
import { PdfModal } from "./PdfModal";
import "./Img.css";

const ImgViewer = () => {
  // const [url, setUrl] = useState([]);
  const [files, setFiles] = useState("");
  const [images, setImages] = useState([]);
  // const [imageURLs, setImageURLs] = useState([]);
  const [shown, setShown] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   if (images.length < 1) return;
  //   const newImageUrls = [];
  //   images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
  //   setImageURLs(newImageUrls);
  // }, [images]);

  function onImageChange(e) {
    // files = e.target.files;
    setImages([...e.target.files]);
    setFiles([...e.target.files]);

    console.log(e.target.files);
  }

  // function onPdfChange(e) {
  //   files = e.target.files;
  //   files.length > 0 && setUrl(URL.createObjectURL(files[0]));

  // }

  const openModal = () => {
    setShown(true);
    setShowModal(true);
  };

  return (
    <>
      <input
        type="file"
        id="file"
        // files={images}
        accept="image/*,.pdf"
        multiple
        onChange={onImageChange}
        // onChange={onPdfChange}
        // onChange={() => {
        //   onImageChange();
        // onPdfChange();
        // }}
      />
      <div className="View">
        {/* {imageURLs.map((imageSrc) => (
          <img src={imageSrc} />
        ))} */}
        <button
          onClick={() => {
            openModal();
          }}
        >
          View
        </button>
        {showModal && <Modal images={images} setShowModal={setShowModal} />}
        {/* {shown && <PdfModal files={files} setShown={setShown} />} */}
      </div>
    </>
  );
};

export default ImgViewer;
