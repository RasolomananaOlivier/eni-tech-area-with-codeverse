import React from "react";
import { Avatar, Box, Grid, Typography, styled, Button } from "@mui/material";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

export default function AprovedQuestion() {
  return (
    <>
      <Box p={3} sx={{ borderRadius: "8px", backgroundColor: "#4a4a6c", marginBottom: "2rem" }}>
        <Grid container>
          <Grid xs={6}>
            <Grid container>
              <Grid xs={1.2}>
                <Typography variant="h5" sx={{ color: "#55e575", fontWeight: "600" }}>
                  12
                </Typography>
              </Grid>
              <Grid xs={9}>
                <Typography variant="h5">approvements.</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <Button
              color="success"
              variant="contained"
              sx={{ position: "relative", backgroundColor: "#55e575", float: "right", borderRadius: "20px" }}
            >
              Approve
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ fontSize: "1.4rem" }} mt={"12px"}>
          I have a large dataset with millions of records that I need to sort in Python . I've tried using the build-in sort
          function, but it takes too long to complete...
        </Typography>
        <Grid container mt={2}>
          <Grid xs={6}>
            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
              By :
              <Box component={"span"} sx={{ fontWeight: "600" }}>
                {" "}
                John Doe
              </Box>
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1" sx={{ fontSize: "1.4rem", position: "relative", float: "right" }}>
              Answered :
              <Box component={"span"} sx={{ fontWeight: "600" }}>
                10 days ago
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid xs={6}>
            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
              2 comments
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.4rem", color: "#55e575", position: "relative", float: "right", fontWeight: "600" }}
            >
              Comment
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
