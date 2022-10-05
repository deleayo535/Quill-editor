import React, { useRef, useState, useEffect } from "react";
import ReactDom from "react-dom";
export const Modal = ({ setShowModal, images }) => {
  // const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="App">
          {imageURLs.map((imageSrc) => (
            <img src={imageSrc} />
          ))}
        </div>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
