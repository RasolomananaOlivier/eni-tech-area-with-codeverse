import React from "react";
import { Box, Grid, Typography, styled, Avatar } from "@mui/material";
import Image from "../../../assets/profil.png";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../redux/selectors/userSelector";
import { getUserQuestions } from "../../../api/questionApi";
import Question from "../../QuestionsPage/Question";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

const QuestionCard = () => {
  const currentUserId = useSelector(selectUserId);
  const questionsQuery = useQuery({
    queryKey: ["users", currentUserId, "questions"],
    queryFn: ({ queryKey }) => getUserQuestions(queryKey[1]),
  });

  console.log("user questions", questionsQuery);
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
      <Typography
        variant="h5"
        style={{ fontWeight: "600", fontSize: "1.7rem", marginBottom: "32px" }}
      >
        Your Questions.
      </Typography>
      {Array.map((List) => (
        <Question
          // setOpen={setOpenModal}
          key={List.id}
          name={List.name}
          firstname={List.firstname}
          content={List.content}
          createdDate={List.createdDate}
          picture={List.picture}
          title={List.title}
        />
      ))}
    </Box>
  );
};
export default QuestionCard;
