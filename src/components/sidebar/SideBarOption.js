import React from "react";
import styled from "styled-components";

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 12px;
  padding: 13px;
  cursor: pointer;
  font-size: 12px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > p {
    font-weight: 500;
  }
`;

const OptionalChannel = styled.div``;

export default function SideBarOption({ OptionIcon, title }) {
  return (
    // TODO: Check why hover is not hovering the whole div and only text & Icon
    <OptionContainer>
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
