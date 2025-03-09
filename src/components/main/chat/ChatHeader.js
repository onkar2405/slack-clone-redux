import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 20px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;

    > .MuiSvgIcon-root {
      margin-left: 10px;
      align-self: center;
      font-size: 18px;
    }
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;

    > .MuiSvgIcon-root {
      align-self: center;
      margin-right: 5px;
      font-size: 16px;
    }
  }
`;

export default function ChatHeader({ channelName }) {
  return (
    <Header>
      <HeaderLeft>
        <h4>
          <strong>#{channelName}</strong>
          <StarBorderOutlined />
        </h4>
      </HeaderLeft>
      <HeaderRight>
        <p>
          <InfoOutlined /> Details
        </p>
      </HeaderRight>
    </Header>
  );
}
