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

  return (
    <LayoutWrapper>
      <AskQuest />
    </LayoutWrapper>
  );
};

export default HomePage;
