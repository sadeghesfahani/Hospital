import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Room from "../components/Room/Room";
export default function Home() {
  return (
    <Container sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <h1>Header</h1>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "start",
            width: "100%",
          }}
        >
          <Room />
        </Box>
      </Box>
      <h1>Footer</h1>
    </Container>
  );
}
