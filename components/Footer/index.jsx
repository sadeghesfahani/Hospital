import React from 'react'
import  Box  from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import hospitalFooter from "../../public/hospital-footer.png";

function Footer() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
                  flexDirection: "column",
          justifyContent:"space-evenly",
          width: "100%",
          direction: "rtl",
          height: 150,
          backgroundColor: "primary.dark",
          px: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ color: "white" }}>
              آدرس : تهران بزرگراه همت - جنب برج میلاد
            </Typography>
            <Typography sx={{ color: "white" }}>
              شماره بیمارستان : 82039-021 | نوبت دهی : 84090-021
            </Typography>
            <Typography sx={{ color: "white" }}>فکس : 88062005-021</Typography>
          </Box>
                 <Box sx={{display:"flex"  }}>
                <Image src={hospitalFooter} width="100%" height="100%" />
              </Box>
        </Box>
  
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          
          }}
        >
          <Typography sx={{ color: "white" }}>
            کلیه حقوق مادی و معنوی سایت محفوظ می باشد
          </Typography>
              </Box>
            
      </Box>
       
    </Container>
  );
}

export default Footer