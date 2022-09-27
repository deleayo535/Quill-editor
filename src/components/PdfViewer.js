// import React, { useState, useRef } from "react";
// import { usePdf } from "@mikecousins/react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import React from "react";

const PdfView = () => {
  //   const [page, setPage] = useState(1);
  //   const [file, setFile] = useState("");
  //   const canvasRef = useRef(null);

  //   function onFileChange(event) {
  //     setFile(event.target.files[0]);
  //     console.log(event);
  //   }

  //   const { pdfDocument, pdfPage } = usePdf({
  //     file: { file },
  //     page,
  //     canvasRef,
  //   });

  //   return (
  //     <div>
  //       <input
  //         onChange={onFileChange}
  //         type="file"
  //         id="file"
  //         name="file"
  //         multiple
  //       />
  //       {!pdfDocument && <span>Loading...</span>}
  //       <canvas ref={canvasRef} />
  //       {Boolean(pdfDocument && pdfDocument.numPages) && (
  //         <nav>
  //           <ul className="pager">
  //             <li className="previous">
  //               <button disabled={page === 1} onClick={() => setPage(page - 1)}>
  //                 Previous
  //               </button>
  //             </li>
  //             <li className="next">
  //               <button
  //                 disabled={page === pdfDocument.numPages}
  //                 onClick={() => setPage(page + 1)}
  //               >
  //                 Next
  //               </button>
  //             </li>
  //           </ul>
  //         </nav>
  //       )}
  //     </div>
  //   );
  // };

  // export default PdfView;
  // pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.js";

  const [url, setUrl] = React.useState("");

  // Handle the `onChange` event of the `file` input
  const onChange = (e) => {
    const files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };

  return (
    <div>
      <input type="file" multiple accept=".pdf" onChange={onChange} />

      <div style={{ height: "550px" }}>
        {url ? (
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "70%",
            }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer fileUrl={url} />
            </Worker>
          </div>
        ) : (
          <div
            style={{
              alignItems: "center",
              border: "2px dashed rgba(0, 0, 0, .3)",
              display: "flex",
              fontSize: "2rem",
              height: "100%",
              justifyContent: "center",
              width: "100%",
            }}
          >
            Preview area
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfView;
