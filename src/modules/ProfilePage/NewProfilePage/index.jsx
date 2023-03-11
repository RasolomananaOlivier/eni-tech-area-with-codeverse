import React from "react";
import { Box, Stack } from "@mui/material";
import QuestionCard from "./QuestionCard";
import ChallengeCard from "./ChallengeCard";
import Tags from "./Tags";

const ProfilComponent = () => {
  return (
    <Stack>
      <Tags />
      <QuestionCard />
      <ChallengeCard />
    </Stack>
  );
};

export default ProfilComponent;
