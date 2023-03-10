import React from "react";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import { Box, Typography, Grid, Avatar, styled } from "@mui/material";
import Question from "./Question";
import AprovedQuestion from "./AprovedQuestion";
import AnswerQuestion from "./AnswerQuestion";

export default function QuestionPage() {
  return (
    <>
      <Box sx={{ bgcolor: "#22242a" }}>
        <Box className="page" sx={{ position: "relative", mt: "5rem" }}>
          <SideBar />
          <div id="content">
            <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#313250" }}>
              <Box p={3}>
                <Question />
                <Typography variant="h4" mb={3} sx={{ fontWeight: "400" }}>
                  Answers.
                </Typography>
                <AprovedQuestion />
                <AnswerQuestion />
              </Box>
            </Box>

            <RightSideBar />
          </div>
        </Box>
      </Box>
    </>
  );
}
