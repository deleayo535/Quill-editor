import React from "react";
import styled from "styled-components";
import { QuillEdit } from "./Quill";
import { emailData } from "./temp/EmailData";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../features/mailSlice";
import { useDispatch } from "react-redux";

import {
  BorderOutlined,
  ReloadOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import EmailItem from "./emailItem/EmailItem";
import { useState } from "react";

const EmailsView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const openMail = () => {
  //   dispatch(
  //     selectMail({
  //       id,
  //       title,
  //       subject,
  //       description,
  //       time,
  //     })
  //   );
  //   navigate("/mail");
  // };

  const handleView = () => {
    console.log("clicked");
  };
  return (
    <EmailWrapper>
      <TopWrapper>
        <BorderOutlined />
        <ReloadOutlined />
        <MoreOutlined />
      </TopWrapper>

      <EmailsContainer
      // onClick={openMail}
      >
        {emailData.map(
          ({ starred, from, subject, message, received, read }) => (
            <EmailItem
              starred={starred}
              from={from}
              subject={subject}
              message={message}
              received={received}
              read={read}
            />
          )
        )}
      </EmailsContainer>
    </EmailWrapper>
  );
};

export default EmailsView;

const EmailWrapper = styled.div``;

const TopWrapper = styled.div`
  // display: grid;
  // grid-template-columns: ;

  padding-left: 20px;
  height: 48px;
`;

const EmailsContainer = styled.div``;

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
