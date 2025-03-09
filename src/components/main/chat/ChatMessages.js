import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { db } from "../../../firebase";

const MessageContainer = styled.div`
  margin-top: 60px;
`;

export default function ChatMessages({ channelId }) {
  const [messages] = useCollection(
    db.collection("rooms").doc(channelId)?.collection("messages")
  );
  return (
    <MessageContainer>
      {messages?.docs.map((doc) => doc.data().message)}
    </MessageContainer>
  );
}
