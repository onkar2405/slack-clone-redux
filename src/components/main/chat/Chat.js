import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatBox from "./ChatBox";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../../features/appSlice";
import { db } from "../../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 60px;
`;

export default function Chat() {
  const roomId = useSelector(selectRoomId);
  const [channels] = useCollection(db.collection("rooms"));

  const channelName = channels?.docs
    .find((doc) => doc.id === roomId)
    ?.data().name;

  return (
    <>
      {roomId ? (
        <ChatContainer>
          <ChatHeader channelName={channelName} />
          <ChatMessages channelId={roomId} />
          <ChatBox channelId={roomId} channelName={channelName} />
        </ChatContainer>
      ) : (
        <p>Please select the channel to display the chat.</p>
      )}
    </>
  );
}
