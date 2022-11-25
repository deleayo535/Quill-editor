import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PdfView from "./PdfViewer";
import "./Img.css";
import Form from "./FormFile";
import UploadFiles from "./FormFile";

export function QuillEdit() {
  const [inboxs, setPosts] = useState([]);
  // const [shown, setShown] = useState(false);

  // const fetchData = async () => {
  //   const { data } = await axios
  //     .get
  //     // "https:jsonplaceholder.typicode.com/posts"
  //     // "http://localhost:5000/inbox"
  //     ();
  //   // .then(function (res) {
  //   //   // data = JSON.parse(data);
  //   // console.log(res.config);
  //   console.log(data);
  //   // });

  //   setPosts(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const [postForm, setPostForm] = useState({
  //   subject: "",
  //   from: "",
  // });
  // const [selectedPost, setSelectedPost] = useState(null);

  // const onChangeTitleHandler = (event) =>
  //   setPostForm({ ...postForm, subject: event.target.value });

  // // const onChangeEditorHandler = (value) =>
  // //   setPostForm({ ...postForm, subject: value });

  // useEffect(() => {
  //   // setPostForm();
  //   // console.log(postForm);
  // }, [postForm]);

  // const onSelectPost = (inbox) => () => {
  //   setSelectedPost(inbox);
  //   // ReactQuill.editor.disable();
  //   // modules.toolbar(false);
  //   setPostForm({
  //     subject: inbox.subject,
  //     from: inbox.from,
  //   });

  //   // console.log(inbox.subject, inbox.from);
  //   // setSelectedPost(inbox);
  // };

  const modules = {
    // toolbar: false,
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
      // ["clean"],
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
  // const [isHovering, setIsHovering] = useState(false);

  return (
    <EditContainer>
      <MailContainer>
        <EditorContainer>
          <input
            // value={postForm.subject}
            // disabled={selectedPost}
            placeholder="Title"
            // onChange={onCh/angeTitleHandler}
          />
          <ReactQuill
            theme="snow"
            // className={`ql-toolbar.disabled${!selectedPost ? true : false}`}
            // readOnly={selectedPost}
            // value={postForm.subject}
            placeholder="Type Something"
            modules={modules}
            // toolbar={`${selectedPost ? true : false}`}
            // formats={`${!selectedPost ? true : false}`}
            // modules={modules`${!selectedPost ? true : false}`}
            formats={formats}
            // readOnly="true"
            // onChange={onChangeEditorHandler}
          />
        </EditorContainer>
      </MailContainer>
      {/* <UploadFiles /> */}
      {/* <Form /> */}
      <PdfView />
    </EditContainer>
  );
}
const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MailContainer = styled.div`
  flex-direction: column;
  display: flex;
  // margin: 20px;
  height: 400px;
`;

const EditorContainer = styled.div`
  // width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 16px;

  > input {
    border: none;
    outline: none;
    // padding: 18px;
    font-size: 1.5em;

    &:disabled {
      background: transparent;
      cursor: pointer;
    }
  }

  .quill,
  .ql-container {
    border: none;
    font-size: 1em;
    height: 200px;

    .ql-editor {
      cursor: pointer;
    }
  }
`;
