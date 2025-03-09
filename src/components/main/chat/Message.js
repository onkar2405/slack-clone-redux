import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: grey;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;

export default function Message({ message, user, timestamp, profileImage }) {
  console.log(timestamp);
  const messageDate = new Date(timestamp?.toDate())?.toUTCString();
  return (
    <MessageContainer>
      <img src={profileImage} alt="User uploaded" />
      <MessageInfo>
        <h4>
          {user} <span>{messageDate}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}
