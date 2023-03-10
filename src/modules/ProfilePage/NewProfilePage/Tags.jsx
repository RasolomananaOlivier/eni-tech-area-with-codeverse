import React from "react";
import { Box, Typography } from "@mui/material";

const Tags = () => {
  return (
    <>
      <Box p={3}>
        <Typography variant="h5" style={{ fontWeight: "600", fontSize: "1.7rem", marginBottom: "32px" }}>
          Your Tags.
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "11rem",
              display: "flex",
              justifyContent: "center",
              pt: "5px",
              pb: "5px",
              borderRadius: "12px",
              marginRight: "12px",
              backgroundColor: "hsl(64.84deg 75.61% 51.76%)",
            }}
          >
            <Box sx={{ display: "flex", width: "4rem" }}>
              <Typography variant="h7" sx={{ fontSize: "1.2rem" }}>
                React
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "3rem",
                borderRadius: "12px",
                justifyContent: "center",
                backgroundColor: "hsl(64.66deg 92.8% 50.98%)",
              }}
            >
              <Typography variant="h7" sx={{ fontSize: "1.2rem" }}>
                12
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "11rem",
              display: "flex",
              justifyContent: "center",
              pt: "5px",
              pb: "5px",
              borderRadius: "12px",
              marginRight: "12px",
              backgroundColor: "hsl(224.41deg 59.62% 41.76%)",
            }}
          >
            <Box sx={{ display: "flex", width: "4rem" }}>
              <Typography variant="h7" sx={{ fontSize: "1.2rem" }}>
                React
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "3rem",
                borderRadius: "12px",
                justifyContent: "center",
                backgroundColor: "hsl(223.8deg 66.53% 48.04%)",
              }}
            >
              <Typography variant="h7" sx={{ fontSize: "1.2rem" }}>
                12
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "11rem",
              display: "flex",
              justifyContent: "center",
              pt: "5px",
              pb: "5px",
              borderRadius: "12px",
              backgroundColor: "hsl(64.84deg 75.61% 51.76%)",
              marginRight: "12px",
            }}
          >
            <Box sx={{ display: "flex", width: "4rem" }}>
              <Typography variant="h7" sx={{ fontSize: "1.2rem" }}>
                React
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "3rem",
                borderRadius: "12px",
                justifyContent: "center",
                backgroundColor: "hsl(64.66deg 92.8% 50.98%)",
              }}
            >
              <Typography variant="h7" sx={{ fontSize: "1.2rem" }}>
                12
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Tags;
