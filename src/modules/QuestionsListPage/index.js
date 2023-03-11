import React from "react";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import { Box, Stack, Typography } from "@mui/material";
import Image from "../../assets/profil.png";
import Question from "../QuestionsPage/Question";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getQuestions, getQuestionTags } from "../../api/questionApi";
import { getUserById } from "../../api/usersApi";
import { getAnswers } from "../../api/answersApi";
import { useAuth } from "../../hooks/useAuth";

export default function QuestionPageList() {
  useAuth();
  const [openModal, setOpenModal] = React.useState(false);

  const questionsQuery = useQuery({
    queryKey: ["questions", "suggestions"],
    queryFn: getQuestions,
  });

  const questionsOwnersQueries = useQueries({
    queries: (questionsQuery?.data?.data?.questions ?? []).map((question) => {
      return {
        queryKey: ["user", question.userId],
        queryFn: async () => {
          const user = await getUserById(question.userId);
          const answers = await getAnswers(question.id);
          const tags = await getQuestionTags(question.id);

          return {
            ...question,
            username: user.data.user.name.full,
            imageUrl: user.data.user.imageUrl ?? "",
            answersCount: answers.data.answers.length,
            tags: tags.data.tags,
          };
        },
        enabled: !!questionsQuery.data,
      };
    }),
  });

  const questions = questionsOwnersQueries.map((query) => query.data);

  console.log("question page", questions);
  const Array = [
    {
      id: 1,
      picture: Image,
      name: "John",
      firstname: "Doe",
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "  I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in  sort function , but it takes too long to complete...",
      createdDate: "10 days ago",
      answer: [
        {
          id: 1,
          name: "John",
          firstname: "Doe",
          picture: Image,
          comment: "I have a large dataset with millions of records ",
          createdDate: "10 days ago",
        },
      ],
    },
  ];
  return (
    <LayoutWrapper>
      <Box sx={{ bgcolor: "#313250", width: "230rem" }}>
        <Box sx={{ position: "relative" }}>
          <Stack p={3} spacing={1.5}>
            <Typography variant="h4">
              Answer To The Most Hard Questions.
            </Typography>
            <Box>
              {questions?.map((question) => (
                <Question question={question} />
              ))}
            </Box>
          </Stack>
        </Box>
      </Box>
    </LayoutWrapper>
  );
}
