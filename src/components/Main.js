import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import EmailsView from "./EmailsView";
import { QuillEdit } from "./Quill";
import SideIcons from "./SideIcons";
import { emailData } from "./temp/EmailData";
import EmailItem from "./emailItem/EmailItem";
import { Button } from "./Atom/Button";
import { SidebarButtonsItems } from "./data/SidebarButtonItems";

import {
  InboxOutlined,
  BorderOutlined,
  FileOutlined,
  ReloadOutlined,
  SendOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import EmailsView from "./EmailsView";
import { INBOX, DRAFT, COMPOSE, SENT, TRASH } from "./List";
import Draft from "./MailContainer/Draft";
import Sent from "./MailContainer/Sent";
import Trash from "./MailContainer/Trash";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main(index) {
  // const [toggle, setToggle] = useState(true);
  const [view, setView] = useState(INBOX);

  useEffect(() => {
    console.log(view);
  });

  const handleClick = (views) => {
    // setToggle(!toggle);
    // setView((prev) => !prev);
    switch (views) {
      case COMPOSE:
        setView(COMPOSE);
        break;
      case INBOX:
        setView(INBOX);
        break;
      case DRAFT:
        setView(DRAFT);
        break;
      case SENT:
        setView(SENT);
        break;
      case TRASH:
        setView(TRASH);
        break;
    }
  };

  return (
    // <BrowserRouter>
    <MainWrapper>
      <SideWrapper>
        <ComposeWrapper>
          <ButtonWrapper onClick={() => handleClick(COMPOSE)}>
            <EditOutlined />
            <p>Compose</p>
          </ButtonWrapper>
        </ComposeWrapper>

        <SideButtonsWrapper>
          {SidebarButtonsItems.map((item) => (
            <SidebarButtonItem onClick={() => handleClick(item.key)}>
              {item.icon} {item.text}
            </SidebarButtonItem>
          ))}
        </SideButtonsWrapper>
      </SideWrapper>
      {/* <Routes> */}
      {/* <Route
            path="/"
            element={ */}
      <EmailWrapper>
        {/* {toggle ? <EmailsView /> : <QuillEdit />} */}
        {view === INBOX && <EmailsView />}
        {view === COMPOSE && <QuillEdit />}
        {view === SENT && <Sent />}
        {view === DRAFT && <Draft />}
        {view === TRASH && <Trash />}
      </EmailWrapper>
      {/* }
          /> 
          <Route path="/mail" element={<EmailsView />} />
          </Routes>*/}

      <SideIcons />
    </MainWrapper>
    /* </BrowserRouter> */
  );
}

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
`;

const EmailWrapper = styled.div``;

const TopWrapper = styled.div`
  // display: grid;
  // grid-template-columns: ;

  padding-left: 20px;
  height: 48px;
`;

const EmailsContainer = styled.div``;

const SideWrapper = styled.div`
  border-right: 1px solid lightgray;
  height: 100vh;
`;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;

const SideButtonsWrapper = styled.div``;

const SidebarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  padding: 10px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 8px;
  text-align: start;
  align-items: center;

  :hover {
    background-color: #f5f7f7;
  }
`;
const MeetWrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  width: auto;
  // height: 30px;
  align-items: center;
  padding: 4px 32px 4px 8px;
  border-radius: 50px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);

  cursor: pointer;
  color: #3c4043;
  font-weight: 500;
  font-size: 0.875rem;

  :hover {
  }

  > p {
    // padding-bottom: 20px;
  }
`;
