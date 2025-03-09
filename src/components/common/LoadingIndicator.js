import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const Loader = styled.div`
  margin: 8px auto;
  text-align: center;
`;

export default function LoadingIndicator({ color, size }) {
  return (
    <Loader>
      <CircularProgress color={color} size={size} />
    </Loader>
  );
}
