import React, { useState, useEffect } from "react";
// import styles from "../Img.module.scss";
import { Modal } from "./ImgModal";
import "./Img.css";

const ImgViewer = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);

    console.log(e.target.files);
  }

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <input
        type="file"
        id="file"
        files={images}
        accept="image/*"
        multiple
        onChange={onImageChange}
      />
      <div className="App">
        {/* {imageURLs.map((imageSrc) => (
          <img src={imageSrc} />
        ))} */}
        <button onClick={openModal}>View</button>
        {showModal && <Modal images={images} setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default ImgViewer;
