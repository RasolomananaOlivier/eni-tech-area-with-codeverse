import React, { Fragment, useEffect, useState } from "react";

import "./HomePage.styles.scss";
import ChangePassword from "../../components/ChangePasswordModal/Dialog";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";
import AskQuest from "./AskQuestion";
import Profil from "../ProfilePage/NewProfilePage";
import { useLocation, useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getQuestionsByUserTags } from "../../api/questionApi";
import { getUserById } from "../../api/usersApi";
import { useAuth } from "../../hooks/useAuth";
import { getAnswers } from "../../api/answersApi";

const itemsPerPage = 10;

const HomePage = () => {
  useAuth();
  console.log("homepage mount");
  const location = useLocation();

  const [open, setOpen] = React.useState(false);
  const [TagsOpen, setTagsOpen] = React.useState(false);

  React.useEffect(() => {
    if (location.search === "?first=true") {
      setOpen(true);
    }
  }, [location]);

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Month");

  const handlePaginationChange = (e, value) => setPage(value);

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

          return {
            ...question,
            username: user.data.user.name.full,
            answersCount: answers.data.answers.length,
          };
        },
        enabled: !!questionsQuery.data,
      };
    }),
  });

  console.log(
    questionsOwnersQueries.map((userQuery) => userQuery.data),
    "query"
  );

  return (
    <LayoutWrapper>
      <AskQuest />
    </LayoutWrapper>
  );
};

export default HomePage;
