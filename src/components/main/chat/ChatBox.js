import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import firebase from "firebase/compat/app";

const ChatInput = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;

    > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid grey;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }

    > button {
      display: none;
    }
  }
`;

export default function ChatBox({ channelName, channelId }) {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelName || !channelId) {
      return;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Onkar Vaidya",
      profileImage: null,
    });

    setMessage("");
  };

  return (
    <ChatInput>
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInput>
  );
}
