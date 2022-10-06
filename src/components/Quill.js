import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Upload from "./Uploader";
import PdfView from "./PdfViewer";
// import { Modal } from "./ImgModal";
import "./Img.css";

export function QuillEdit() {
  const [inboxs, setPosts] = useState([]);
  // const [shown, setShown] = useState(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      // "https:jsonplaceholder.typicode.com/posts"
      "http://localhost:5000/inbox"
    );
    // .then(function (res) {
    //   // data = JSON.parse(data);
    // console.log(res.config);
    console.log(data);
    // });

    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const newInboxs = inboxs.map(
  //   (inbox) =>
  //     inbox
  //       .trim("")
  //       // .slice(1, -1)
  //       .replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "")
  //       .replace(/\[|\]/gi, "")
  //       .replace(/(\r\n|\n|\r)/gm, "")
  //       .replace(/'/g, '"')
  //       // .replace(/\'/g, "")
  //       .replace(/[']/g, '"')
  //       .replace(/\]$/, "")
  //       .replace(/^\[/, "")
  //       .replace(/^\s+|\s+$/g, "")
  //       // .replace(/\\"/g, '\\"')
  //       // .replace(/\\&/g, "\\&")
  //       // .replace(/\\r/g, "\\r")
  //       // .replace(/\\t/g, "\\t")
  //       // .replace(/\\b/g, "\\b")
  //       // .replace(/\\f/g, "\\f")
  //       // .replace(/[\u0000-\u0019]+/g, "")
  //       // .replace(/\s/g, "")
  //       .replace(/&quot;/gi, '"')
  //       .replace(/([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g, '$1"$3":')
  //   // .replace(/['{ }']/g, "")

  //   // .split(";;;")
  // );
  // v = inbox.index[0];
  // var emails = Array.of(newInboxs);
  // console.log(emails);

  // console.log(newInboxs[0]);
  // console.log(JSON.parse(newInboxs[0]));
  // console.log(JSON.parse(newInboxs));

  const [postForm, setPostForm] = useState({
    subject: "",
    from: "",
  });
  const [selectedPost, setSelectedPost] = useState(null);

  const onChangeTitleHandler = (event) =>
    setPostForm({ ...postForm, subject: event.target.value });

  // const onChangeEditorHandler = (value) =>
  //   setPostForm({ ...postForm, subject: value });

  useEffect(() => {
    // setPostForm();
    // console.log(postForm);
  }, [postForm]);

  const onSelectPost = (inbox) => () => {
    setSelectedPost(inbox);
    // ReactQuill.editor.disable();
    // modules.toolbar(false);
    setPostForm({
      subject: inbox.subject,
      from: inbox.from,
    });

    // console.log(inbox.subject, inbox.from);
    // setSelectedPost(inbox);
  };

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

  return (
    <div style={{ display: "flex", margin: "30px" }}>
      <ListEmail>
        {inboxs.map((inbox) => (
          <ul
            // key={inbox.seq}
            key={inbox.keys}
            // className={`inbox${selectedPost?.id === inbox.id ? "active" : ""}`}
            onClick={onSelectPost(inbox)}
          >
            <div>
              {inbox.from}
              {/* {inbox.subject} */}
            </div>
            {/* <p>{inbox.from}</p> */}
          </ul>
        ))}
      </ListEmail>
      <EditorContainer>
        <input
          value={postForm.subject}
          disabled={selectedPost}
          placeholder="Title"
          onChange={onChangeTitleHandler}
        />
        <ReactQuill
          theme="snow"
          // className={`ql-toolbar.disabled${!selectedPost ? true : false}`}
          readOnly={selectedPost}
          value={postForm.subject}
          placeholder="Type Something"
          modules={modules}
          // toolbar={`${selectedPost ? true : false}`}
          formats={`${!selectedPost ? true : false}`}
          // modules={modules`${!selectedPost ? true : false}`}
          // formats={formats}
          // readOnly="true"
          // onChange={onChangeEditorHandler}
        />
        {/* <Upload /> */}

        {/* <Viewer /> */}
        <PdfView />
      </EditorContainer>
    </div>
  );
}

// function chainToSwitch(val) {
//   let answer = "";
//   // Only change code below this line

//   if (val === "bob") {
//     answer = "Marley";
//   } else if (val === 42) {
//     answer = "The Answer";
//   } else if (val === 1) {
//     answer = "There is no #1";
//   } else if (val === 99) {
//     answer = "Missed me by this much!";
//   } else if (val === 7) {
//     answer = "Ate Nine";
//   }

//   // Only change code above this line
//   return answer;
// }

// chainToSwitch(7);

const ListEmail = styled.div`
  width: 30%;
  padding-top: 10px;
  margin-left: 10px;
  text-align: left;
  background-color: #eee;

  > ul {
    cursor: pointer;
    padding: 2px 10px;
    font-size: 12px;
    margin-bottom: 12px;
    // borderline-bottom:

    > div {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      border-bottom: solid 1px #ccc;
    }
  }
`;

const EditorContainer = styled.div`
  width: 70%;
  // padding-left: 20%;
   
  > input {
    border: none;
    outline: none;
    padding: 18px;
    font-size: 2em;
    width: 100%;

    &:disabled{
      background: transparent;
      cursor: pointer;
    }
  }

  .ql-toolbar {
    // display: none;
    &:disabled{
      display: none;
    }
  }
  .ql-container {
    border: none !important;
  }

  .quill, .ql-container {
    font-size: 1em;
    height: 100%
    cursor: pointer;

    .ql-editor {
      cursor: pointer
    }
  }
`;
