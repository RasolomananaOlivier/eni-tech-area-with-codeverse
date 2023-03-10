import React from "react";
import { Box } from "@mui/material";
import QuestionCard from "./QuestionCard";
import ChallengeCard from "./ChallengeCard";
import Tags from "./Tags";

const ProfilComponent = () => {
  return (
    <>
      <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#313250" }}>
        <Box sx={{ marginBottom: "30px" }}>
          <Tags />
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <QuestionCard />
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <ChallengeCard />
        </Box>
      </Box>
    </>
  );
};

export default ProfilComponent;
