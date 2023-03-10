import React from "react";
import { Box, Grid, Typography, styled, Button, OutlinedInput } from "@mui/material";
import "./input.css";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

export default function AprovedQuestion() {
  const [form, setForm] = React.useState("none");

  return (
    <>
      <Box p={3} sx={{ borderRadius: "8px", backgroundColor: "#4a4a6c", marginBottom: "2rem" }}>
        <Grid container>
          <Grid xs={6}>
            <Grid container alignItems={"center"}>
              <Grid xs={1.2}>
                <Typography variant="h4" sx={{ color: "#55e575", fontWeight: "600" }}>
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
                {" "}
                10 days ago
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid xs={6}>
            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
              2 comments
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Button
              onClick={() => setForm(form === "none" ? "block" : "none")}
              sx={{ fontSize: "1.2rem", color: "#55e575", position: "relative", float: "right", fontWeight: "600" }}
            >
              Comment
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box p={4} pb={4} sx={{ display: form, mb: "32px", border: "1px solid #a19e9e", borderRadius: "12px" }}>
        <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: "6px" }}>
          Add your comment here
        </Typography>
        <input
          class="input2"
          style={{
            width: "100%",
            height: "54px",
            borderRadius: "12px",
            color: "white",
            paddingLeft: "12px",
            fontSize: "1.2rem",
            border: "1px solid white",
            backgroundColor: "hsl(238.06deg 24.03% 25.29%)",
          }}
          placeholder="Write your comment"
        />
        <Button
          variant="contained"
          color="success"
          sx={{
            position: "relative",
            float: "center",
            fontSize: "1rem",
            marginTop: "20px",
            backgroundColor: "hsl(133.24deg 74.36% 61.76%)",
            width: "10rem",
            borderRadius: "20px",
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
