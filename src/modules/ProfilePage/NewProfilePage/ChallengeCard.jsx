import React from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { selectUserId } from "../../../redux/selectors/userSelector";
import { getUserChallenges } from "../../../api/usersApi";


const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

const ChallengeCard = () => {
  const userId = useSelector(selectUserId);
  const challengesQuery = useQuery({
    queryKey: ["users", userId, "challenges"],
    queryFn: () => getUserChallenges(userId),
  });

  console.log("challenges user", challengesQuery);

  const Array = [
    {
      id: 1,
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function , but it takes too long to complete...",
      difficult: "Difficult",
      tag: "React",
      chalenger: "Aria Stane",
      updatedAt: "10 days ago",
    },
    {
      id: 2,
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function , but it takes too long to complete...",
      difficult: "Difficult",
      tag: "React",
      chalenger: "Aria Stane",
      updatedAt: "10 days ago",
    },
  ];
  return (
    <Box p={3}>
      <Typography
        variant="h5"
        style={{ fontWeight: "600", fontSize: "1.7rem", marginBottom: "32px" }}
      >
        Your Challenges.
      </Typography>
      {Array?.map((List) => (
        <Box
          p={3}
          sx={{
            borderRadius: "8px",
            backgroundColor: "#4a4a6c",
            marginBottom: "2rem",
          }}
        >
          <Grid container justifyContent={"center"}>
            <Grid xs={8}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  marginBottom: "9px",
                }}
              >
                {List.title}
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
                {List.difficult}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h4"
            style={{
              fontWeight: "600",
              fontSize: "2rem",
              marginBottom: "9px",
              marginTop: "12px",
            }}
          >
            {List.title}
          </Typography>

          <Typography mt={"12px"} variant="body1" sx={{ fontSize: "1.3rem" }}>
            {List.content}
          </Typography>

          <Box mt={"20px"} sx={{ display: "flex" }}>
            <TagsOptions
              p={0.4}
              sx={{
                backgroundColor: "#d2e127",
              }}
            >
              {List.tag}
            </TagsOptions>
          </Box>
          <Grid container justifyContent={"center"} mt={"12px"}>
            <Grid xs={9}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                Challenger :{" "}
                <Box component={"span"} sx={{ fontWeight: "600" }}>
                  {List.chalenger}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={3}>
              <Typography
                variant="body"
                sx={{ textAlign: "end", fontSize: "1.2rem" }}
              >
                Created :{" "}
                <Box component={"span"} sx={{ fontWeight: "600" }}>
                  {List.updatedAt}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
export default ChallengeCard;
