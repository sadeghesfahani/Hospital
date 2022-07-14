import React from 'react'
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Image from 'next/image';
import hospitalLogo from "../../public/hospital-logo.jpg";
import { Typography } from '@mui/material';



function Header() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{ height: 100, backgroundColor: "primary.dark", px: 4 , pt:1}}>
                <Box sx={{display:"flex" }}>
                    <Box sx={{ display: "flex", justifyContent:"center",alignItems: "center" ,gap:2}}>
                        <Box sx={{width:50, height:50, filter: "invert(100%)" }}>
                          <Image src={hospitalLogo}   width="100%" height="100%"  alt="logo" />
                          
                        </Box>
                    <Typography sx={{color:"white"}}>Hospital </Typography>
                    </Box>
                 </Box>
          </Box>
        </Container>
    );
}

export default Header