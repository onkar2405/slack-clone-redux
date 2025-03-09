import React from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { enterRoom, selectRoomId } from "../../features/appSlice";

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 12px;
  padding: 13px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > p {
    font-weight: 500;
  }
`;

const OptionalChannel = styled.h3`
  padding: 3px 0;
  font-weight: 500;

  > span {
    padding-right: 12px;
  }
`;

export default function SideBarOption({
  OptionIcon,
  title,
  addChannelOption,
  id,
}) {
  const dispatch = useDispatch();
  const selector = useSelector(selectRoomId);
  console.log(selector);
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name:");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannelOption = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    // TODO: Check why hover is not hovering the whole div and only text & Icon
    <OptionContainer
      onClick={addChannelOption ? addChannel : selectChannelOption}
    >
      {OptionIcon && <OptionIcon fontSize="small" />}
      {OptionIcon ? (
        <p>{title}</p>
      ) : (
        <OptionalChannel>
          <span>#</span> {title}
        </OptionalChannel>
      )}
    </OptionContainer>
  );
}
