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

const AskQuest = () => {
  const [sortType, setSortType] = useState("Month");
  const [open, setOpen] = React.useState(false);
  const [TagsOpen, setTagsOpen] = React.useState(false);

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
                {Array?.map((List) => (
                  <Question
                    key={List.id}
                    name={List.name}
                    firstname={List.firstname}
                    content={List.content}
                    createdDate={List.createdDate}
                    picture={List.picture}
                  />
                ))}
              </Box>
            </Stack>
          </div>
        </Box>
      </Box>
      <ChangePassword open={open} setOpen={setOpen} setTagsOpen={setTagsOpen} />
      {/* <Tags TagsOpen={TagsOpen} setTagsOpen={setTagsOpen} /> */}
    </>
  );
};
export default AskQuest;
