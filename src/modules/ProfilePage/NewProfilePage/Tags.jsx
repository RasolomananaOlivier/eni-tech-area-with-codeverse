import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Tags = () => {
  return (
    <>
      <Stack p={3} spacing={1.5}>
        <Typography
          variant="h5"
          style={{ fontWeight: "600", fontSize: "1.7rem" }}
        >
          Your Tags.
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              py: 1,
              px: 2,
              borderRadius: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "hsl(64.84deg 75.61% 51.76%)",
            }}
          >
            <Box sx={{ display: "flex", width: "4rem" }}>
              <Typography
                variant="h7"
                color="white"
                sx={{ fontSize: "1.2rem" }}
              >
                React
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
                px: 1,
                pt: 0.6,
                backgroundColor: "hsl(64.66deg 92.8% 50.98%)",
              }}
            >
              <Typography variant="h7" sx={{ fontSize: "1.2rem" }}>
                12
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Tags;
