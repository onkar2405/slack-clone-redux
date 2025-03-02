import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HeaderSearch from "./HeaderSearch";

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: var(--slack-header-bg-color);
  width: 100%;
  padding: 8px 12px;
  align-items: center;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon sx={{ color: "white" }} />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch />
    </HeaderContainer>
  );
}
