import React from "react";
import Bed from "./Bed/Bed";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export default function Room() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          border: "4px solid black",
          borderRadius: 2,
          padding: 4,
          width: "200px",
          height: "200px",
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Bed />
        <Bed />
        <Bed />
      </Box>

      <Typography variant="h6">اتاق شماره 1</Typography>
    </Box>
  );
}
