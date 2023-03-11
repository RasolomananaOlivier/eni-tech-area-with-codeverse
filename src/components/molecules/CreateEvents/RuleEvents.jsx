import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./RuleEvents.css";
export default function RuleEvents() {
  return (
    <Box className="card card-img">
      <Box sx={{ position: "relative", height: "100%" }}>
        <Stack sx={{ position: "relative", top: 100, px: 10 }}>
          <Typography variant="h2">Create Event</Typography>
          <Typography variant="h6">Events for all ENI students.</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
