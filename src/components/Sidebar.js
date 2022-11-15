import React from "react";
import styled from "styled-components";
import { Button } from "./Atom/Button";
import { SidebarButtonsItems } from "./data/SidebarButtonItems";

const SideBar = () => {
  return (
    <Wrapper>
      <ComposeWrapper>
        <Button />
      </ComposeWrapper>

      <SideButtonsWrapper>
        {SidebarButtonsItems.map((item) => (
          <SidebarButtonItem>
            {item.icon} {item.text}
          </SidebarButtonItem>
        ))}
      </SideButtonsWrapper>
      <MeetWrapper></MeetWrapper>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
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
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 8px;
  text-align: start;

  :hover {
    background-color: #f5f7f7;
  }
`;
const MeetWrapper = styled.div``;
