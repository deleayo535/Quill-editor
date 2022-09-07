import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Upload from "./Uploader";

export function QuillEdit() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https:jsonplaceholder.typicode.com/posts"
    );

    setPosts(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [postForm, setPostForm] = useState({
    title: "",
    body: "",
  });
  const [selectedPost, setSelectedPost] = useState(null);

  const onChangeTitleHandler = (value) =>
    setPostForm({ ...postForm, title: value });

  const onChangeEditorHandler = (value) =>
    setPostForm({ ...postForm, body: value });

  const onSelectPost = (post) => () => {
    setSelectedPost(post);
    setPostForm({
      title: post.title,
      body: post.body,
    });

    // console.log(post.title, post.body);
    // setSelectedPost(post);
  };

  useEffect(() => {
    // setPostForm();
    // console.log(postForm);
  }, [postForm]);

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
    <div style={{ display: "flex" }}>
      <ListEmail>
        {posts
          .map((post) => (
            <ul
              key={post.id}
              // className={`post${selectedPost?.id === post.id ? "active" : ""}`}
              onClick={onSelectPost(post)}
            >
              <div>{post.title}</div>
              <p>{post.body}</p>
            </ul>
          ))
          .slice(0, 5)}
      </ListEmail>
      <EditorContainer>
        <input
          value={postForm.title}
          onChange={onChangeTitleHandler}
          // disabled={!selectedPost}
          placeholder="Title"
        />
        <ReactQuill
          theme="snow"
          readOnly={!selectedPost}
          value={postForm.body}
          modules={modules}
          formats={formats}
          // readOnly="true"
          onChange={onChangeEditorHandler}
          placeholder="Type Something"
        />
        <Upload />
      </EditorContainer>
    </div>
  );
}

const ListEmail = styled.div`
  width: 30%;
  padding-top: 10px;
  margin-left: 10px;
  text-align: left;

  > ul {
    // cursor: ${(props) => (props.disabled ? "not-allowed;" : "unset")};
    cursor: pointer;
    background-color: #eee;
    font-size: 12px;
    margin-bottom: 12px;

    > div {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
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

  .ql-toolbar,
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
