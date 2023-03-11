import React from "react";
import { Box, Typography, Grid, Avatar, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  borderRadius: "12px",
  textAlign: "center",
  marginRight: "12px",
}));

export default function Question({ question, setOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        p={3}
        sx={{
          borderRadius: "8px",
          backgroundColor: "#4a4a6c",
          marginBottom: "2rem",
        }}
      >
        <Grid container>
          <Grid xs={1.3}>
            <Avatar
              sizes="large"
              sx={{ height: "50px", width: "50px" }}
              alt=""
              src={question?.imageUrl}
            />
          </Grid>
          <Grid xs={10.7}>
            <Grid container justifyContent={"center"}>
              <Grid xs={8}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {question?.username}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "start", fontSize: "1.2rem" }}
                >
                  Asked :{" "}
                  <Box component={"span"} sx={{ fontWeight: "600" }}>
                    {" " + moment(question?.createdAt).fromNow(true) + " ago"}
                  </Box>
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Button
                  onClick={() => setOpen(true)}
                  color="success"
                  variant="contained"
                  disableElevation
                  sx={{
                    position: "relative",
                    backgroundColor: "#55e575",
                    float: "right",
                    borderRadius: "20px",
                  }}
                >
                  Answer
                </Button>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              mt={"20px"}
              style={{
                fontWeight: "600",
                fontSize: "2rem",
                marginBottom: "12px",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/questions/${question?.id}`)}
            >
              {question?.title}
            </Typography>
            <Typography
              // className="post-text fc-black-800"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: question?.content?.slice(0, 300) + "...",
              }}
            ></Typography>

            <Box mt={"20px"} sx={{ display: "flex", flexWrap: "wrap" }}>
              {question?.tags?.map((tag) => (
                <TagsOptions
                  py={0.8}
                  px={1.5}
                  sx={{
                    backgroundColor: tag?.bgColor,
                    color: tag?.textColor,
                    fontWeight: "bold",
                  }}
                >
                  {tag?.name}
                </TagsOptions>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
