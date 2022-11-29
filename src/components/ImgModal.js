import React, { useRef, useState, useEffect } from "react";
import ReactDom from "react-dom";

export const Modal = ({ setShowModal, images }) => {
  const [imageURLs, setImageURLs] = useState([]);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // images = e.target.files;
    // images.length > 0 && setImageURLs(URL.createObjectURL(images));
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
        <div className="View">
          {imageURLs.map((imageSrc) => (
            <img
              src={imageSrc}
              style={{
                paddingBottom: "40px",
                width: "80%",
                height: "60%",
              }}
            />
          ))}
        </div>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
