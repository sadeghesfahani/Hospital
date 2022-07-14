import * as React from "react";
import Box from "@mui/material/Box";
import Room from "../components/Room/Room";
const data = [
  {
    id: 1,
    name: "اتاق 1",
    beds: [
      {
        id: 1,
        name: "Bed 1",
        price: "100",
        isOccupied: false,
      },
      {
        id: 2,
        name: "Bed 2",
        price: "100",
        isOccupied: true,
      },
      {
        id: 3,
        name: "Bed 3",
        price: "100",
        isOccupied: false,
      },
    ],
  },
  {
    id: 2,
    name: "اتاق 2",
    beds: [
      {
        id: 1,
        name: "Bed 1",
        price: "100",
        isOccupied: false,
      },
      {
        id: 2,
        name: "Bed 2",
        price: "100",
        isOccupied: true,
      },
    ],
  },
];
export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h1>Header</h1>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5rem",
            width: "80%",
          }}
        >
          {data.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </Box>
      </Box>
      <h1>Footer</h1>
    </Box>
  );
}
