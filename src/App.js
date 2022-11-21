import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import EmailsView from "./components/EmailsView";
import Mail from "./components/Mail/Mail";
import { QuillEdit } from "./components/Quill";
import Sent from "./components/MailContainer/Sent";
import Draft from "./components/MailContainer/Draft";
import Trash from "./components/MailContainer/Trash";
import EmailList from "./components/EmailList/EmailList";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/compose" element={<QuillEdit />} />
              <Route path="/sent" element={<Sent />} />
              <Route path="/draft" element={<Draft />} />
              <Route path="/trash" element={<Trash />} />
              {/* <Main /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
