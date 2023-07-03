"use client";
import NavBar from "@/template/NavBar";
import { Box, styled } from "@mui/material";

export default function Home() {
  return (
    <Wrap>
      <NavBar />
    </Wrap>
  );
}

const Wrap = styled(Box)`
  height: 100vh;
  width: 100vw;

  background-color: ${({ theme }) => theme.palette.background.default};
`;
