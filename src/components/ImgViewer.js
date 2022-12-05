import React, { useRef, useState, useEffect } from "react";
// import styles from "../Img.module.scss";
import { Modal } from "./ImgModal";
import { PdfModal } from "./PdfModal";
import UploadService from "../services/FileUploadService";
import "./Img.css";

const ImgViewer = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const [message, setMessage] = useState([]);
  const [imageInfos, setImageInfos] = useState([]);
  const progressInfosRef = useRef(null);

  // useEffect(() => {
  //   if (images.length < 1) return;
  //   const newImageUrls = [];
  //   images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
  //   setImageURLs(newImageUrls);
  // }, [images]);

  function selectFiles(e) {
    // files = e.target.files;
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }

    setSelectedFiles(e.target.files);
    setImagePreviews(images);
    setProgressInfos({ val: [] });
    setMessage([]);

    console.log(e.target.files);
  }

  const uploadImages = () => {
    const files = Array.from(selectedFiles);

    let _progressInfos = files.map((file) => ({
      percentage: 0,
      fileName: file.name,
    }));

    progressInfosRef.current = {
      val: _progressInfos,
    };

    const uploadPromises = files.map((file, i) => upload(i, file));

    Promise.all(uploadPromises)
      .then(() => UploadService.getFiles())
      .then((files) => {
        setImageInfos(files.data);
      });

    setMessage([]);
  };

  const upload = (idx, file) => {
    let _progressInfos = [...progressInfosRef.current.val];
    return UploadService.upload(file, (event) => {
      _progressInfos[idx].percentage = Math.round(
        (100 * event.loaded) / event.total
      );
      setProgressInfos({ val: _progressInfos });
    })
      .then(() => {
        setMessage((prevMessage) => [
          ...prevMessage,
          "Uploaded the image successfully: " + file.name,
        ]);
      })
      .catch(() => {
        _progressInfos[idx].percentage = 0;
        setProgressInfos({ val: _progressInfos });

        setMessage((prevMessage) => [
          ...prevMessage,
          "Could not upload the image: " + file.name,
        ]);
      });
  };
  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  return (
    <>
      <input
        type="file"
        id="file"
        // files={images}
        accept="image/*"
        multiple
        onChange={selectFiles}
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
        <button disabled={!selectedFiles} onClick={uploadImages}>
          View
        </button>
        {progressInfos &&
          progressInfos.val.length > 0 &&
          progressInfos.val.map((progressInfo, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progressInfo.percentage + "%" }}
                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}
        {/* {showModal && <Modal images={images} setShowModal={setShowModal} />} */}
        {/* {shown && <PdfModal files={files} setShown={setShown} />} */}
      </div>
    </>
  );
};

export default ImgViewer;
