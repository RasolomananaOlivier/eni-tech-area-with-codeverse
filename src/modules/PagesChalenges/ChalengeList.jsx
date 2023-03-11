import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid, styled } from "@mui/material";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getChallenges, getChallengeTags } from "../../api/challengesApi";
import { getUserById } from "../../api/usersApi";
const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  borderRadius: "12px",
  textAlign: "center",
  marginRight: "12px",
}));

const ChalengeList = () => {
  const challengesQuery = useQuery({
    queryKey: ["challenges"],
    queryFn: getChallenges,
  });

  const challengesQueries = useQueries({
    queries: (challengesQuery?.data?.data?.challenges ?? []).map(
      (challenge) => {
        return {
          queryKey: ["challenge", challenge.userId],
          queryFn: async () => {
            const user = await getUserById(challenge?.userId);
            const tags = await getChallengeTags(challenge.id);

            console.log(tags, "challenge tags");
            return {
              ...challenge,
              username: user?.data?.user?.name?.full,
              tags: tags?.data?.tags,
            };
          },
          enabled: challengesQuery.data !== undefined,
        };
      }
    ),
  });

  const challenges = challengesQueries.map(
    (challengeQuery) => challengeQuery.data
  );
  console.log("challenges", challenges);
  const Array = [
    {
      id: 2,
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function , but it takes too long to complete...",
      difficult: "Difficult",
      tag: "React",
      username: "Aria Stane",
      updatedAt: "10 days ago",
      TimeLeft: "20 days",
    },
    {
      id: 2,
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function , but it takes too long to complete...",
      difficult: "Difficult",
      tag: "React",
      username: "Aria Stane",
      updatedAt: "10 days ago",
      TimeLeft: "20 days",
    },
  ];
  return (
    <>
      {challenges?.map((challenge) => (
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
              <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
                Time Left :
                <Box component={"span"} sx={{ fontWeight: "600" }}>
                  {" "}
                  {challenge?.endAt}
                </Box>
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography
                p={1}
                px={2}
                sx={{
                  backgroundColor:
                    challenge?.difficulty === "difficult"
                      ? "darkorange"
                      : challenge?.difficulty === "medium"
                      ? "darkcyan"
                      : "darkgray",
                  textAlign: "center",
                  display: "inline",
                  position: "relative",
                  float: "right",
                  borderRadius: "22px",
                  fontWeight: "600",
                }}
                variant="body1"
              >
                {challenge?.difficulty}
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
            {challenge?.title}
          </Typography>
          <Typography mt={"12px"} variant="body1" sx={{ fontSize: "1.3rem" }}>
            {challenge?.content}
          </Typography>

          <Box mt={"20px"} sx={{ display: "flex" }}>
            {challenge?.tags.map((tag) => (
              <TagsOptions
                py={0.7}
                px={1.2}
                sx={{
                  backgroundColor: tag?.bgColor,
                  color: tag?.textColor,
                }}
              >
                {tag?.name}
              </TagsOptions>
            ))}
          </Box>
          <Grid container justifyContent={"center"} mt={"12px"}>
            <Grid xs={9}>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                Challenger :{" "}
                <Box component={"span"} sx={{ fontWeight: "600" }}>
                  {challenge?.username}
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
                  {challenge?.updatedAt}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default ChalengeList;
