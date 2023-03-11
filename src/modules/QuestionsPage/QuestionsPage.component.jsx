import React from "react";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import { Box, Typography } from "@mui/material";
import Question from "./Question";
import AprovedQuestion from "./AprovedQuestion";
import AnswerQuestion from "./AnswerQuestion";
import Image from "../../assets/profil.png";
import ModalAddQuestion from "./ModalAddQuestion";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";
import { useParams } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getQuestionById, getQuestionTags } from "../../api/questionApi";
import { getUserById } from "../../api/usersApi";
import { getAnswers } from "../../api/answersApi";
import { countVotes } from "../../api/voteApi";

export default function QuestionPage() {
  const [openModal, setOpenModal] = React.useState(false);
  const params = useParams();

  const questionQuery = useQuery({
    queryKey: ["challenges", params?.id],
    queryFn: () => getQuestionById(params?.id),
  });

  const questionTagsQuery = useQuery({
    queryKey: ["challenges", params?.id, "tags"],
    queryFn: () => getQuestionTags(params?.id),
  });
  console.log(questionQuery, questionTagsQuery, "questionQuery");

  const userQuery = useQuery({
    queryKey: ["users", questionQuery.data?.data?.question?.userId],
    queryFn: () => getUserById(questionQuery.data?.data?.question?.userId),
    enabled: !!questionQuery.data,
  });

  const answersQuery = useQuery({
    queryKey: ["challenges", questionQuery.data?.data?.question?.id, "answers"],
    queryFn: () => getAnswers(questionQuery.data?.data?.question?.id),
    enabled: !!questionQuery.data && !!userQuery.data,
  });

  console.log(answersQuery, "answersQuery");

  const answerVotesQueries = useQueries({
    queries: (answersQuery?.data?.data?.answers ?? []).map((answer) => {
      return {
        queryKey: ["answers", answer.id, "votes"],
        queryFn: async () => {
          const votes = await countVotes(
            questionQuery.data?.data?.question?.id,
            answer.id
          );

          console.log(votes);
          return {
            ...answer,
            votes: votes?.data?.counts?.up,
          };
        },
        enabled: answersQuery.data !== undefined,
      };
    }),
  });

  const answerWithVotes = answerVotesQueries.map((query) => query.data);

  console.log(answerWithVotes, "answerWithVotes");

  const question = {
    ...questionQuery?.data?.data?.question,
    username: userQuery?.data?.data?.user?.name?.full,
    tags: questionTagsQuery?.data?.data?.tags,
  };

  console.log(question, "question");
  return (
    <LayoutWrapper>
      <Box sx={{ bgcolor: "#313250", width: "230rem" }}>
        <Box>
          <Box p={3}>
            <Question question={question} setOpen={setOpenModal} />
            <ModalAddQuestion
              open={openModal}
              setOpen={setOpenModal}
              content={question?.content}
              title={question?.title}
            />
            <Typography variant="h4" mb={3} sx={{ fontWeight: "400" }}>
              Answers.
            </Typography>
            {answerWithVotes.map((answer) => (
              <Box>
                <AprovedQuestion answer={answer} />

                {/* <AnswerQuestion answer={answer} /> */}
              </Box>
            ))}
            {/* <Question /> */}
          </Box>
        </Box>
      </Box>
    </LayoutWrapper>
  );
}
