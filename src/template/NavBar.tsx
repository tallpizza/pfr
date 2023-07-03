import { Box, Typography, styled } from "@mui/material";

export default function NavBar() {
  return (
    <Wrap>
      <Box p="15px">
        <Typography variant="h1" color="primary">
          PFR
        </Typography>
      </Box>
    </Wrap>
  );
}

const Wrap = styled(Box)`
  height: 40px;
  width: 100%;
`;
