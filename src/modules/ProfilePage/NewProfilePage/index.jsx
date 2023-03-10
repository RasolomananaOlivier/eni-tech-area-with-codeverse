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
const ComponentTags = styled(Box)(({ theme }) => ({
  width: "12rem",
  display: "flex",
  justifyContent: "center",
  pt: "5px",
  pb: "5px",
  borderRadius: "12px",
  marginRight: "12px",
}));
const CountScoreTags = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "3rem",
  borderRadius: "12px",
  justifyContent: "center",
}));

const ProfilComponent = () => {
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
                  <Typography variant="body1" sx={{ textAlign: "end", fontSize: "1.2rem" }}>
                    Asked :{" "}
                    <Box component={"span"} sx={{ fontWeight: "600" }}>
                      10 days ago
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h4" mt={"20px"} style={{ fontWeight: "600", fontSize: "2rem", marginBottom: "12px" }}>
                How to efficiently sort a large dataset in Python?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.3rem" }}>
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
              <Typography variant="h4" style={{ fontWeight: "600", fontSize: "2rem", marginBottom: "9px" }}>
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
                  fontWeight: "600",
                }}
                variant="body1"
              >
                Difficult
              </Typography>
            </Grid>
          </Grid>
          <Typography mt={"12px"} variant="body1" sx={{ fontSize: "1.3rem" }}>
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
          <Grid container justifyContent={"center"} mt={"6px"}>
            <Grid xs={9}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                Challenger :{" "}
                <Box component={"span"} sx={{ fontWeight: "600" }}>
                  Aria Stane
                </Box>
              </Typography>
            </Grid>
            <Grid xs={3}>
              <Typography variant="body" sx={{ textAlign: "end", fontSize: "1.2rem" }}>
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
  return (
    <>
      <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#313250" }}>
        <Tags />
        <Box sx={{ marginBottom: "40px" }}>
          <QuestionCard />
        </Box>
        <Box sx={{ marginBottom: "40px" }}>
          <ChallengeCard />
        </Box>
      </Box>
    </>
  );
};

export default ProfilComponent;
