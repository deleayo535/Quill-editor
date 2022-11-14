import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Upload from "./Uploader";
import PdfView from "./PdfViewer";
// import { Modal } from "./ImgModal";
import "./Img.css";
import ImgViewer from "./ImgViewer";
import { Button } from "./Atom/Button";
import { Image } from "./Atom/Image";

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
  // const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    // setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // setIsHovering(false);
  };

  return (
    <MailContainer>
      {/* <ListEmail>
        {inboxs.map((inbox) => (
          <ul
            // key={inbox.seq}
            key={inbox.keys}
            // className={`inbox${selectedPost?.id === inbox.id ? "active" : ""}`}
            onClick={onSelectPost(inbox)}
          >
            <div>{inbox.from}</div>
          </ul>
        ))}
      </ListEmail> */}
      <SideBar>
        {/* <Button
          text="Compose"
          icon={"/shopping-bag.svg"}
          onclick={() => console.log("clicked")}
        /> */}
        <div>
          <div
            style={{
              // cursor: "pointer",
              // backgroundColor: "rebeccapurple",
              // backgroundColor: isHovering ? "salmon" : "",
              // color: isHovering ? "white" : "",
              // backgroundColor: "#DAF0FD",
              width: "18rem",
              borderRadius: "10px",
              lineHeight: "26px",
            }}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <Image
              src={"/shopping-bag.svg"}
              alt={""}
              style={{
                paddingRight: "8px",
                paddingLeft: "8px",
                paddingTop: "8px",
                height: "1rem",
              }}
            />
            Inbox
          </div>
        </div>
        <div>Sent</div>
        <div>Drafts</div>
        <div>Trash</div>
      </SideBar>
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
        {/* <ImgViewer /> */}
        <PdfView />
      </EditorContainer>
    </MailContainer>
  );
}
const MailContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const SideBar = styled.div`
  width: 30%;
  padding-top: 10px;
  margin-left: 10px;
  text-align: left;
  background-color: #eee;

  > Button {
    justify-content: center;
    cursor: pointer;
    border-radius: 20px;
    height: 3rem;
    width: 10rem;
    background-color: blue;
    margin-bottom: 10px;
    :hover {
      background-color: yellow;
    }
  }

  > div {
    padding-left: 5px;
    // cursor: pointer;
    // text-transform: uppercase;
    // font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    border-bottom: solid 1px #ccc;
    padding-bottom: 8px;

    > div {
      cursor: "pointer";
      background-color: "rebeccapurple";
      // backgroundColor: "#DAF0FD";
      width: "18rem";
      border-radius: "10px";
      line-height: "26px";
      :hover {
        cursor: "pointer";
        background-color: yellow;
      }
    }
  }
`;

// const ListEmail = styled.div`
//   width: 30%;
//   padding-top: 10px;
//   margin-left: 10px;
//   text-align: left;
//   background-color: #eee;

//   > ul {
//     cursor: pointer;
//     padding: 2px 10px;
//     font-size: 12px;
//     margin-bottom: 12px;
//     // borderline-bottom:

//     > div {
//       text-transform: uppercase;
//       font-weight: bold;
//       font-size: 14px;
//       border-bottom: solid 1px #ccc;
//     }
//   }
// `;

const EditorContainer = styled.div`
  width: 40%;
  // padding-left: 20%;
   
  > input {
    border: none;
    outline: none;
    padding: 18px;
    font-size: 2em;

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
