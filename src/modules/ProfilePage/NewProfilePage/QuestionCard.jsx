import React from "react";
import { Box, Grid, Typography, styled, Avatar } from "@mui/material";
import Image from "../../../assets/profil.png";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

const QuestionCard = () => {
  const Array = [
    {
      id: 2,
      picture: Image,
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function , but it takes too long to complete...",
      difficult: "Difficult",
      tag: "React",
      name: "Aria",
      firstName: "Brada",
      updatedAt: "10 days ago",
      answer: ["", "", ""],
    },
    {
      id: 1,
      picture: Image,
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function , but it takes too long to complete...",
      difficult: "Difficult",
      tag: "React",
      name: "Aria",
      firstName: "Brada",
      updatedAt: "10 days ago",
      answer: ["", "", ""],
    },
  ];
  return (
    <Box p={3}>
      <Typography variant="h5" style={{ fontWeight: "600", fontSize: "1.7rem", marginBottom: "32px" }}>
        Your Questions.
      </Typography>
      {Array.map((List) => (
        <Box p={3} key={List.id} sx={{ borderRadius: "8px", backgroundColor: "#4a4a6c", marginBottom: "2rem" }}>
          <Grid container>
            <Grid xs={1.3}>
              <Avatar sizes="large" sx={{ height: "50px", width: "50px" }} alt="" src={List.picture} />
            </Grid>
            <Grid xs={10}>
              <Grid container justifyContent={"center"}>
                <Grid xs={8}>
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {List.name} {List.firstName}
                  </Typography>
                </Grid>
                <Grid xs={4}>
                  <Typography variant="body1" sx={{ textAlign: "end", fontSize: "1.2rem" }}>
                    Asked :{" "}
                    <Box component={"span"} sx={{ fontWeight: "600" }}>
                      {List.updatedAt}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h4" mt={"20px"} style={{ fontWeight: "600", fontSize: "2rem", marginBottom: "12px" }}>
                {List.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.3rem" }}>
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
                {/* <TagsOptions
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
                  </TagsOptions> */}
              </Box>
              <Typography mt={"12px"} variant="h6">
                {List.answer?.length} answers.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
export default QuestionCard;
