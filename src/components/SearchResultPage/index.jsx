import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Question from "../../modules/QuestionsPage/Question";
import LayoutWrapper from "../organisms/LayoutWrapper/LayoutWrapper.component";

export default function SearchResultPage() {
  const location = useLocation();

  const query = location.search.replace("?", "");

  console.log(query);

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
              <span style={{ fontWeight: "bold", color: "#55E675" }}> 10</span>{" "}
              Results.
            </Typography>
            <Box>
              {Array?.map((List) => (
                <Question
                  // setOpen={setOpenModal}
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
