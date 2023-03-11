import React from "react";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import { Box, Stack, Typography } from "@mui/material";
import Image from "../../assets/profil.png";
import Question from "../QuestionsPage/Question";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";

export default function QuestionPageList() {
  const [openModal, setOpenModal] = React.useState(false);
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
              {Array?.map((List) => (
                <Question
                  setOpen={setOpenModal}
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
          </Stack>
        </Box>
      </Box>
    </LayoutWrapper>
  );
}
