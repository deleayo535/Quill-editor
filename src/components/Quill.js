import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Upload from "./Uploader";
import PdfView from "./PdfViewer";
// import { Modal } from "./ImgModal";
import "./Img.css";
// import ImgViewer from "./ImgViewer";
// import { Button } from "./Atom/Button";
// import { Image } from "./Atom/Image";

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
    <MailContainer>
      <EditorContainer>
        {/* <input
          value={postForm.subject}
          disabled={selectedPost}
          placeholder="Title"
          onChange={onChangeTitleHandler}
        /> */}
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
        <PdfView />
      </EditorContainer>
    </MailContainer>
  );
}
const MailContainer = styled.div`
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
    padding: 18px;
    font-size: 2em;

    &:disabled {
      background: transparent;
      cursor: pointer;
    }
  }

  .ql-toolbar {
    // display: none;
    &:disabled {
      display: none;
    }
  }
  .ql-container {
    // border: 0.5px solid;
  }

  .quill,
  .ql-container {
    font-size: 1em;
    height: 300px;
    // cursor: pointer;

    .ql-editor {
      cursor: pointer;
    }
  }
`;
