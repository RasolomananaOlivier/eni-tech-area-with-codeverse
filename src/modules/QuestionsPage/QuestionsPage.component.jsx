import React from "react";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import { Box, Typography } from "@mui/material";
import Question from "./Question";
import AprovedQuestion from "./AprovedQuestion";
import AnswerQuestion from "./AnswerQuestion";
import Image from "../../assets/profil.png";

export default function QuestionPage() {
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
      <Box sx={{ bgcolor: "#22242a" }}>
        <Box className="page" sx={{ position: "relative", mt: "5rem" }}>
          <SideBar />
          <div id="content">
            <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#313250" }}>
              <Box p={3}>
                {Array?.map((List) => (
                  <>
                    <Question
                      key={List.id}
                      name={List.name}
                      firstname={List.firstname}
                      content={List.content}
                      createdDate={List.createdDate}
                      picture={List.picture}
                    />

                    <Typography variant="h4" mb={3} sx={{ fontWeight: "400" }}>
                      Answers.
                    </Typography>
                    <AprovedQuestion />
                    {List.answer.map((res) => (
                      <>
                        <AnswerQuestion
                          key={res.id}
                          name={res.name}
                          firstname={res.firstname}
                          picture={res.picture}
                          comment={res.comment}
                          date={res.createdDate}
                        />
                      </>
                    ))}
                  </>
                ))}
                {/* <Question /> */}
              </Box>
            </Box>

            <RightSideBar />
          </div>
        </Box>
      </Box>
    </>
  );
}
