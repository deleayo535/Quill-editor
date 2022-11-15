import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
export const Button = () => {
  return (
    <Wrapper>
      <EditOutlined />
      <p>Compose</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  width: auto;
  align-items: center;
  padding: 6px 32px 6px 8px;
  border-radius: 50px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);

  cursor: pointer;
  color: #3c4043;
  font-weight: 500;
  font-size: 0.875rem;

  :hover {
  }
`;
