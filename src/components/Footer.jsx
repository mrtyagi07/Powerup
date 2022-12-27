import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import Logo from "../assets/images/Grey_Black_Illustration_Gym_Fitness_Logo-removebg-preview.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img
          src={Logo}
          alt="logo"
          style={{ width: "100px", height: "101px" }}
        />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made with ❤️ by Vaibhav Tyagi
      </Typography>
    </Box>
  );
};

export default Footer;
