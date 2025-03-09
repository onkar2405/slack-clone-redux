import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { db } from "../../../firebase";
import Message from "./Message";

const MessageContainer = styled.div`
  margin-top: 60px;
`;

export default function ChatMessages({ channelId }) {
  const [messages] = useCollection(
    db
      .collection("rooms")
      .doc(channelId)
      ?.collection("messages")
      .orderBy("timestamp", "asc")
  );
  return (
    <MessageContainer>
      {messages?.docs.map((doc) => {
        const { message, user, timestamp, profileImage } = doc.data();

        return (
          <Message
            key={doc.id}
            message={message}
            timestamp={timestamp}
            user={user}
            profileImage={profileImage}
          />
        );
      })}
    </MessageContainer>
  );
}
