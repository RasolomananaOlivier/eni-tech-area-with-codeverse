import React from "react";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import { Box, Typography } from "@mui/material";
import Challenges from "./Challenges";
// import AprovedQuestion from "./AprovedQuestion";
import AnswerChallenges from "./AnswerChallenges";
import Image from "../../assets/profil.png";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";

export default function ChallengesPage() {
  const [openModal, setOpenModal] = React.useState(false);
  const Array = [
    {
      id: 2,
      title: "How to efficiently sort a large dataset in Python ?",
      content:
        "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function , but it takes too long to complete...",
      difficult: "Difficult",
      tag: "React",
      name: "Aria",
      firstname: "Stane",
      updatedAt: "10 days ago",
      expireDate: "20 days",
      picture: Image,
      answer: [
        {
          id: 1,
          name: "John",
          firstname: "Answered",
          content:
            "I have a large dataset with millions of records that I need to sort in python. I've tried using the build-in sort function",
          picture: Image,
          createdDate: "10 days ago",
        },
      ],
    },
  ];

  return (
    <LayoutWrapper>
      <Box sx={{ bgcolor: "#313250", width: "230rem" }}>
        <Box>
          <Box p={3}>
            {Array?.map((List) => (
              <>
                <Challenges
                  key={List.id}
                  name={List.name}
                  firstname={List.firstname}
                  title={List.title}
                  content={List.content}
                  difficult={List.difficult}
                  expiredDate={List.expireDate}
                  picture={List.picture}
                  tag={List.tag}
                  answerLength={List.answer?.length}
                />
                <Typography variant="h4" mb={3} sx={{ fontWeight: "400" }}>
                  Answers.
                </Typography>
                {/* <AprovedQuestion /> */}
                {List.answer.map((res) => (
                  <>
                    <AnswerChallenges
                      key={res.id}
                      name={res.name}
                      firstname={res.firstname}
                      content={res.content}
                      picture={res.picture}
                      createdDate={res.createdDate}
                    />
                  </>
                ))}
              </>
            ))}
            {/* <Question /> */}
          </Box>
        </Box>
      </Box>
    </LayoutWrapper>
  );
}
