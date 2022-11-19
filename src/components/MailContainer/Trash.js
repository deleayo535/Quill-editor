import React, { useState } from "react";
import styled from "styled-components";
// import { QuillEdit } from "./Quill";
import { trashData } from "../temp/TrashData";

import {
  BorderOutlined,
  ReloadOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import EmailItem from "../emailItem/EmailItem";

// const INBOX = "INBOX";
// const COMPOSE = "COMPOSE";

const Trash = () => {
  const [toggle, setToggle] = useState("Inbox");

  const handleClick = (toggle) => {
    switch (toggle) {
      case "mail 1":
        setToggle("mail 1");
        break;
      case "mail 2":
        setToggle("mail 2");
        break;
    }
    console.log("mail clicked");
  };
  return (
    <EmailWrapper>
      <TopWrapper>
        <BorderOutlined />
        <ReloadOutlined />
        <MoreOutlined />
      </TopWrapper>
      <EmailsContainer>
        {trashData.map(
          ({ starred, to, subject, message, sent, read, index }) => (
            <EmailItem
              starred={starred}
              to={to}
              subject={subject}
              message={message}
              sent={sent}
              read={read}
              onClick={handleClick}
            ></EmailItem>
          )
        )}
      </EmailsContainer>
    </EmailWrapper>
  );
};

export default Trash;

const EmailWrapper = styled.div``;

const TopWrapper = styled.div`
  // display: grid;
  // grid-template-columns: ;

  padding-left: 20px;
  height: 48px;
`;

const EmailsContainer = styled.div``;
