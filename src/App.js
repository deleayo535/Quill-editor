import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
// import { QuillEdit } from "./components/Quill";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        {/* <QuillEdit /> */}
      </div>
    </>
  );
}

export default App;
