import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "../../../assets/profil.png";
import { Grid } from "@mui/material";
import { styled } from "@mui/material";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

const Profil = () => {
  const QuestionCard = () => {
    return (
      <Box p={3}>
        <Typography variant="h5" style={{ fontWeight: "600", fontSize: "1.7rem", marginBottom: "32px" }}>
          Your Questions.
        </Typography>
        <Box p={3} sx={{ borderRadius: "8px", backgroundColor: "#4a4a6c" }}>
          <Grid container>
            <Grid xs={1.3}>
              <Avatar sizes="large" sx={{ height: "50px", width: "50px" }} alt="" src={Image} />
            </Grid>
            <Grid xs={10}>
              <Grid container justifyContent={"center"}>
                <Grid xs={8}>
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    John Doe
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Typography variant="h6">
                    Asked :{" "}
                    <Box component={"span"} sx={{ fontWeight: "600" }}>
                      10 days ago
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h4" mt={"20px"} style={{ fontWeight: "600", fontSize: "2rem" }}>
                How to efficiently sort a large dataset in Python ?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in
                sort function , but it takes too long to complete...
              </Typography>
              <Box mt={"20px"} sx={{ display: "flex" }}>
                <TagsOptions
                  p={0.4}
                  sx={{
                    backgroundColor: "#d2e127",
                  }}
                >
                  React
                </TagsOptions>
                <TagsOptions
                  p={0.4}
                  sx={{
                    backgroundColor: "#e14927",
                  }}
                >
                  Laravel
                </TagsOptions>
                <TagsOptions
                  p={0.4}
                  sx={{
                    backgroundColor: "#8427e1",
                  }}
                >
                  Full stack
                </TagsOptions>
              </Box>
              <Typography mt={"4px"} variant="h6">
                2 answers.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  const ChallengeCard = () => {
    return (
      <Box p={3}>
        <Typography variant="h5" style={{ fontWeight: "600", fontSize: "1.7rem", marginBottom: "32px" }}>
          Your Challenges.
        </Typography>
        <Box p={3} sx={{ borderRadius: "8px", backgroundColor: "#4a4a6c" }}>
          <Grid container justifyContent={"center"}>
            <Grid xs={8}>
              <Typography variant="h4" style={{ fontWeight: "600", fontSize: "2rem" }}>
                How to efficiently sort a large dataset in Python ?
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography
                p={1}
                sx={{
                  backgroundColor: "hsl(7.42deg 75.61% 51.76%)",
                  textAlign: "center",
                  display: "inline",
                  width: "12rem",
                  position: "relative",
                  float: "right",
                  borderRadius: "12px",
                }}
                variant="body1"
              >
                Difficult
              </Typography>
            </Grid>
          </Grid>
          <Typography mt={"12px"} variant="body1" sx={{ fontSize: "1.2rem" }}>
            I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort
            function , but it takes too long to complete...
          </Typography>

          <Box mt={"20px"} sx={{ display: "flex" }}>
            <TagsOptions
              p={0.4}
              sx={{
                backgroundColor: "#d2e127",
              }}
            >
              React
            </TagsOptions>
            <TagsOptions
              p={0.4}
              sx={{
                backgroundColor: "#e14927",
              }}
            >
              Laravel
            </TagsOptions>
            <TagsOptions
              p={0.4}
              sx={{
                backgroundColor: "#8427e1",
              }}
            >
              Full stack
            </TagsOptions>
          </Box>
          <Grid container justifyContent={"center"}>
            <Grid xs={9}>
              <Typography variant="h6">
                Challenger :{" "}
                <Box component={"span"} sx={{ fontWeight: "600" }}>
                  Aria Stane
                </Box>
              </Typography>
            </Grid>
            <Grid xs={3}>
              <Typography variant="h6" sx={{ textAlign: "end" }}>
                Created :{" "}
                <Box component={"span"} sx={{ fontWeight: "600" }}>
                  10 days ago
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#313250" }}>
        <QuestionCard />
        <ChallengeCard />
      </Box>
    </>
  );
};

export default Profil;
