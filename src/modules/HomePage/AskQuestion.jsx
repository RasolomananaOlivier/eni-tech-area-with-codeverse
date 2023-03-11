import React, { useState } from "react";
import "./HomePage.styles.scss";
import LinkButton from "../../components/molecules/LinkButton/LinkButton.component";
import PostItem from "../../components/molecules/PostItem/PostItem.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import handleSorting from "../../utils/handleSorting";
import Pagination from "../../components/organisms/Pagination/Pagination.component";
import ButtonGroup from "../../components/molecules/ButtonGroup/ButtonGroup.component";
import handleFilter from "../../utils/handleFilter";

import Tags from "../../components/Tags";

import ChangePassword from "../../components/ChangePasswordModal/Dialog";
import { Box, Stack, Typography } from "@mui/material";
import Question from "../QuestionsPage/Question";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getQuestionsByUserTags, getQuestionTags } from "../../api/questionApi";
import { getUserById } from "../../api/usersApi";
import { getAnswers } from "../../api/answersApi";
import { useLocation } from "react-router-dom";

const AskQuest = () => {
  const [sortType, setSortType] = useState("Month");
  const [open, setOpen] = React.useState(false);
  const [TagsOpen, setTagsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.search === "?first=true") {
      setOpen(true);
    }
  }, []);

  const questionsQuery = useQuery({
    queryKey: ["questions", "suggestions"],
    queryFn: getQuestionsByUserTags,
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

  const questions = questionsOwnersQueries.map((userQuery) => userQuery.data);
  console.log(questions, "query");

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
    <>
      <Box sx={{ bgcolor: "#313250", width: "230rem", px: 2 }}>
        <Box sx={{ position: "relative", mt: "3.7rem", display: "flex" }}>
          <div>
            <Stack spacing={1.5}>
              <Typography variant="h3">Questions You May Know.</Typography>
              <Box>
                {questions?.map((question) => (
                  <Question question={question} />
                ))}
              </Box>
            </Stack>
          </div>
        </Box>
      </Box>
      <ChangePassword open={open} setOpen={setOpen} setTagsOpen={setTagsOpen} />
      <Tags TagsOpen={TagsOpen} setTagsOpen={setTagsOpen} />
    </>
  );
};
export default AskQuest;
