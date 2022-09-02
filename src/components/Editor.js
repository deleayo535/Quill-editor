import React, { Component } from "react";
import styled from "@emotion/styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import axios, { Axios } from "axios";

class Editor extends Component {
  componentDidMount() {
    //api call
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          posts: res,
        })
      );
  }

  modules = {
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
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ direction: "rtl" }], // text direction
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = [
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

  // define react quill component
  /* <ReactQuill  /> */

  render() {
    // const [mail, setMail] = useState();

    return (
      <>
        <div>
          <EditorContainer>
            <input placeholder="Title" />
            <ReactQuill
              onChange={this.onChangeText}
              // ref={(el) => {
              //   this.reactQuillRef = el;
              // }}
              // ref="editor"
              theme="snow"
              modules={this.modules}
              formats={this.formats}
              placeholder={"Type Something"}
              // value={this.state.posts.map((post) => (
              //   <div key={post.id}>
              //     {post.id}.{post.title}
              //   </div>
              // ))}
              // readOnly={true}
              style={{ height: "25vh" }}
            ></ReactQuill>
          </EditorContainer>
        </div>
      </>
    );
  }
}

const EditorContainer = styled.div`
  > input {
    border: none;
    outline: none;
    padding: 18px;
    font-size: 2em;
  }
`;

export default Editor;
