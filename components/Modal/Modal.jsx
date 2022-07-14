import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { ButtonBase } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "16px",
  border: "2px solid #0070F3",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              direction: "rtl",
            }}
          >
            <FormControl>
            <TextField id="outlined-basic" label="نام و نام خاندوادگی" variant="outlined" />
            <TextField id="outlined-basic" label="شماره همراه" variant="outlined" />
            <TextField id="outlined-basic" label="کد ملی" variant="outlined" />
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <ButtonBase>
                  <Button variant="contained">تایید</Button>
                  <Button variant="contained" color="error">
                    لغو
                  </Button>
                </ButtonBase>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
