import React from "react";
import styled from "@emotion/styled";
// import "./App.css";
// import DocViewer from "react-doc-viewer";
import Uploader from "react-upload-in";

class Upload extends React.Component {
  state = {
    files: [
      // { id: 1, name: "skd11.jpg", src: "http://localhost/ok/skd11.jpg" },
      // { id: 2, name: "IMG-1294.jpg", src: "http://localhost/ok/IMG-1294.jpg" },
    ],
  };
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
    console.log(files);
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

    return (
      <div className="p-32">
        <UploaderContainer>
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
        </UploaderContainer>
        {/* <DocViewer documents={docs} />; */}
      </div>
    );
  }
}

const UploaderContainer = styled.div`
  width: 100%;
  padding-left: 10%;
   
  // > input {
  //   border: none;
  //   outline: none;
  //   padding: 18px;
  //   font-size: 2em;
  //   width: 100%;
  // }

  .ql-toolbar,
  .ql-container {
    border: none !important;
  }

  .quill, .ql-container [
    font-size: 1em;
    height: 100%
  ]
`;

export default Upload;
