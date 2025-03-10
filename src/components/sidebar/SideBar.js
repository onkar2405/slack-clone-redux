import React from "react";
import styled from "styled-components";
import SideBarHeader from "./SideBarHeader";
import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import SideBarOption from "./SideBarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import LoadingIndicator from "../common/LoadingIndicator";

const SideBarContainer = styled.div`
  background-color: var(--slack-header-bg-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 56px;

  > hr {
    border: 1px solid #49274b;
  }
`;

export default function SideBar() {
  const [channels, loading] = useCollection(db.collection("rooms"));

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
        <hr />
        <SideBarOption OptionIcon={ExpandMore} title="Channels" />
        <hr />
        <SideBarOption OptionIcon={Add} addChannelOption title="Add Channel" />

        {loading ? (
          <LoadingIndicator color={"white"} size={"15px"} />
        ) : (
          channels?.docs.map((doc) => (
            <SideBarOption
              selectChannel
              id={doc.id}
              key={doc.id}
              title={doc.data().name}
            />
          ))
        )}
      </SideBarContainer>
    </>
  );
}
