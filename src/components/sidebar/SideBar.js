import React from "react";
import styled from "styled-components";
import SideBarHeader from "./SideBarHeader";
import {
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import SideBarOption from "./SideBarOption";

const SideBarContainer = styled.div`
  background-color: var(--slack-header-bg-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 56px;
`;

export default function SideBar() {
  return (
    <>
      <SideBarContainer>
        <SideBarHeader />
        <SideBarOption OptionIcon={InsertComment} title="Threads" />
        <SideBarOption OptionIcon={Inbox} title="Mentions & Reactions" />
        <SideBarOption OptionIcon={Drafts} title="Saved items" />
        <SideBarOption OptionIcon={BookmarkBorder} title="Channel browser" />
        <SideBarOption OptionIcon={PeopleAlt} title="People & User groups" />
        <SideBarOption OptionIcon={Apps} title="Apps" />
        <SideBarOption OptionIcon={FileCopy} title="File browser" />
        <SideBarOption OptionIcon={ExpandLess} title="Show less" />
      </SideBarContainer>
    </>
  );
}
