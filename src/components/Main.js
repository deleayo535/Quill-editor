import React from "react";
import styled from "styled-components";
import EmailsView from "./EmailsView";
import SideBar from "./Sidebar";
import SideIcons from "./SideIcons";

export default function Main() {
  return (
    <Wrapper>
      <SideBar />
      <EmailsView />
      <SideIcons />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
`;
