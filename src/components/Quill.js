import styled from "@emotion/styled";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function QuillEdit() {
  const modules = {
    toolbar: [
      // [{ header: [1, 2, false] }],
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
      // [{ script: "sub" }, { script: "super" }], // superscript/subscript
      // [{ direction: "rtl" }], // text direction
    ],
  };

  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  // const [] = useState();
  return (
    <div>
      <EditorContainer>
        <input placeholder="Title" />
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          // readOnly="true"
          placeholder="Type Something"
        />
      </EditorContainer>
    </div>
  );
}

const EditorContainer = styled.div`
  width: 100%;
  padding-left: 20%;
   
  > input {
    border: none;
    outline: none;
    padding: 18px;
    font-size: 2em;
    width: 100%;
  }

  .ql-toolbar,
  .ql-container {
    border: none !important;
  }

  .quill, .ql-container [
    font-size: 1em;
    height: 100%
  ]
`;
