import React, { useState } from "react";
import styled from "styled-components";
import { BorderOutlined, StarOutlined, StarFilled } from "@ant-design/icons";

const EmailItem = ({ starred, from, subject, message, received, read }) => {
  const [star, setStar] = useState(starred);

  return (
    <Wrapper>
      <BorderOutlined />
      <IconWrapper onClick={() => (star ? setStar(false) : setStar(true))}>
        {star ? <StarFilled htmlColor="#f7cb69" /> : <StarOutlined />}
      </IconWrapper>

      <p className={!read && "unread"}>{from}</p>

      <div>
        <p className={!read && "unread"}>{subject}</p> - <span>{message}</span>
      </div>

      <p className={!read && "unread"}>{received}</p>
    </Wrapper>
  );
};

export default EmailItem;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content 120px auto 50px;
  gap: 10px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-top: 1px solid lightgray;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;

    span {
      color: darkgray;
    }
  }

  .unread {
    color: black;
    font-weight: bolder;
  }
`;

const IconWrapper = styled.div`
  padding-left: 20px;
`;
