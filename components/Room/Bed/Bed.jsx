import React from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import { Typography } from "@mui/material";
export default function Bed() {
  const [isOccupied, setIsOccupied] = React.useState(false);
  const handleClick = () => {
    setIsOccupied(!isOccupied);
  };
  return (
    <Box
      fontSize="large"
      sx={{
        width: "40px",
        height: "40px",
        borderRadius: 2,
        position: "relative",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
        disabled={isOccupied}
        onClick={handleClick}
      >
        {isOccupied ? <BedRoundedIcon /> : <KingBedRoundedIcon />}
        <Typography fontWeight="bold" variant="caption">
          {isOccupied ? "اشغال شده" : "خالی"}
        </Typography>
      </Button>
    </Box>
  );
}
