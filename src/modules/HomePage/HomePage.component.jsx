import React, { Fragment, useEffect, useState } from "react";

import "./HomePage.styles.scss";
import ChangePassword from "../../components/ChangePasswordModal/Dialog";
import Tags from "../../components/Tags";

import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getQuestionsByUserTags } from "../../api/questionApi";
import AskQuest from "./AskQuestion";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";
import Profil from "../ProfilePage/NewProfilePage";

const itemsPerPage = 10;

const HomePage = () => {
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

  // if (questionsQuery.isLoading) {
  //   return <div>Loading</div>;
  // }

  // console.log(questionsQuery.data);
  console.log(location.pathname);
  return (
    <LayoutWrapper>
      {location.search === "" ? <AskQuest /> : null}
      {location.search === "?profile" ? <Profil /> : null}
    </LayoutWrapper>
  );
};

export default HomePage;
