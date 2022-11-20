// import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./SIdebar.css";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { Link, useNavigate } from "react-router-dom";
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

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <Link to="/compose" className="sidebar-link">
        <ComposeWrapper>
          <ButtonWrapper>
            <EditOutlined />
            <p>Compose</p>
          </ButtonWrapper>
        </ComposeWrapper>
      </Link>
      <Link to="/" className="sidebar-link">
        <SidebarOption Icon={InboxOutlined} title="Inbox" selected={true} />
      </Link>
      <Link to="/sent" className="sidebar-link">
        <SidebarOption Icon={SendOutlined} title="Sent" number={""} />
      </Link>
      <Link to="/draft" className="sidebar-link">
        <SidebarOption Icon={FileOutlined} title="Drafts" number={""} />
      </Link>
      <Link to="/trash" className="sidebar-link">
        <SidebarOption Icon={DeleteOutlined} title="Trash" />
      </Link>
    </div>
  );
}

export default Sidebar;

// const SideWrapper = styled.div`
//   border-right: 1px solid lightgray;
//   height: 100vh;
// `;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 10px;
`;

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

// const SideButtonsWrapper = styled.div``;

// const SidebarButtonItem = styled.div`
//   display: grid;
//   grid-template-columns: 14% auto;
//   color: gray;
//   padding: 5px 25px;
//   border-radius: 0 100px 100px 0;
//   cursor: pointer;
//   margin-right: 8px;
//   text-align: start;

//   :hover {
//     background-color: #f5f7f7;
//   }
// `;
// const MeetWrapper = styled.div``;
