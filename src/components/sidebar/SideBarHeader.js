import { Create, FiberManualRecord } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const SideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    background-color: white;
    border-radius: 50%;
    color: #49274b;
    font-size: 18px;
    padding: 4px;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;

    > .MuiSvgIcon-root {
      color: green;
      margin-top: 1px;
      margin-right: 2px;
      font-size: 14px;
    }
  }
`;

export default function SideBarHeader() {
  return (
    <>
      <SideHeader>
        <SideBarInfo>
          <h2>Slack home</h2>
          <h3>
            <FiberManualRecord />
            Onkar Vaidya
          </h3>
        </SideBarInfo>
        <Create />
      </SideHeader>
    </>
  );
}
