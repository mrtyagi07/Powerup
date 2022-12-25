import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/wp10467312-c-bum-wallpapers.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#343434" fontWeight="600" fontSize="26px">
        Powerup
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        href="#exercises"
        sx={{ backgroundColor: "#343434", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#343434"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="hero-image" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
