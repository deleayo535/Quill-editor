import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  SettingOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";

export function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Menu>
          <MenuOutlined />
        </Menu>
      </LogoWrapper>

      <SearchWrapper>
        <SearchBarWrapper>
          <SearchOutlined />
          <input type="text" placeholder="Search mail" />
          <DownOutlined />
        </SearchBarWrapper>
      </SearchWrapper>

      <IconsWrapper>
        <QuestionCircleOutlined />
        <SettingOutlined />
      </IconsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1px solid lightgrey;
  height: 70px;
  align-items: center;
`;

const LogoWrapper = styled.div`
  height: 45px:
  display: grid;
  grid-template-columns: 25% auto;

 
`;

const Menu = styled.div`
  display: grid;
  place-items: center;
`;

const Logo = styled.div`
  display: flex;
  height: 45px;
`;

const SearchWrapper = styled.div``;

const SearchBarWrapper = styled.div`
  background-color: #f1f3f4;
  width: 100%;
  max-width: 750px;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 45px;
  border-radius: 6px;

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 18px;

    :focus {
      outline: none;
    }
  }
`;

const IconsWrapper = styled.div`
  margin-left: 8px;
  display: grid;
  grid-template-columns: repeat(4, auto);
`;
