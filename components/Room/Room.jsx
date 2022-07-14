import React from "react";
import Bed from "./Bed/Bed";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export default function Room({ room }) {
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
        {room.beds.map((bed) => (
          <Bed key={bed.id} bed={bed} />
        ))}
      </Box>

      <Typography variant="h6">{room.name}</Typography>
    </Box>
  );
}
