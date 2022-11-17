import React from "react";
import styled from "styled-components";
import { QuillEdit } from "./Quill";
import { emailData } from "./temp/EmailData";

import {
  BorderOutlined,
  ReloadOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import EmailItem from "./emailItem/EmailItem";

const EmailsView = () => {
  return (
    <EmailWrapper>
      <TopWrapper>
        <BorderOutlined />
        <ReloadOutlined />
        <MoreOutlined />
      </TopWrapper>
      <EmailsContainer>
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
