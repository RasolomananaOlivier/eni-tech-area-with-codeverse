import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./style.css";
export default function ChallengesCreate() {
  return (
    <Box className="card card-challenge-img">
      <Box sx={{ position: "relative", height: "100%" }}>
        <Stack sx={{ position: "relative", top: 100, px: 10 }}>
          <Typography variant="h2"> Create challenge</Typography>
          <Typography variant="h6">Challenge and test others.</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
