import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchWrapper = styled.div`
  flex: 0.4;
  display: flex;
  text-align: center;
  background-color: #421f44;
  border: 1px gray solid;
  border-radius: 6px;
  justify-content: space-between;
  opacity: 1;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

export default function HeaderSearch() {
  return (
    <SearchWrapper>
      <SearchIcon sx={{ color: "white" }} />
      <input value={""} placeholder="Search by name..." />
    </SearchWrapper>
  );
}
