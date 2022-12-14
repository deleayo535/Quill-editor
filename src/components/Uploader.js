import React from "react";
import styled from "@emotion/styled";
// import "./App.css";
// import DocViewer from "react-doc-viewer";
import { Document, Page } from "react-pdf";

import Uploader from "react-upload-in";
// import GoogleDocsViewer from "react-google-docs-viewer";

class Upload extends React.Component {
  state = {
    files: [
      // { id: 1, name: "skd11.jpg", src: "http://localhost/ok/skd11.jpg" },
      // { id: 2, name: "IMG-1294.jpg", src: "http://localhost/ok/IMG-1294.jpg" },
    ],
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  constructor(props) {
    super(props);
    this.uploader = React.createRef();
  }
  resultUpload(response) {
    const { files } = this.state;
    files.push({
      id: response.id,
      src: "http://localhost/ok/" + response.file,
      name: response.file,
    });
    this.setState({ files });
    console.log(this.resultUpload);
  }
  onRemoved(file) {
    let { files } = this.state;
    files = files.filter((x) => x.src !== file.src);
    this.setState({ files });
  }

  // const {docs} = [
  //   { uri: "https://url-to-my-pdf.pdf" },
  //   { uri: require("./example-files/pdf.pdf") }, // Local File
  // ];
  render() {
    const { files } = this.state;
    const { pageNumber, numPages } = this.state;
    // const { pageNumber, setPageNumber } = this.state;

    return (
      <div className="p-32">
        {/* <GoogleDocsViewer
          width="60px"
          height="70px"
          fileUrl="http://localhost/"
        /> */}
        <UploaderContainer>
          {/* </div> */}
          <Uploader
            ref={this.uploader}
            src={files}
            theme="sky"
            label="Add file"
            // buttonText={""}
            // action={"https://ej2.syncfusion.com/services/api/uploadbox/Save"}
            setHeader={{ key: "Authorization", value: "yourtoken" }}
            filetypes={["png", "jpg", "pdf", "docx"]}
            image={true}
            onResult={this.resultUpload.bind(this)}
            onRemoved={this.onRemoved.bind(this)}
            hideOnSuccess={true}
          />
          <Document file={this.file} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </UploaderContainer>
        {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
        {/* <DocViewer documents={docs} />; */}
      </div>
    );
  }
}

const UploaderContainer = styled.div`
  width: 100%;
  height: 100px;
`;

export default Upload;
