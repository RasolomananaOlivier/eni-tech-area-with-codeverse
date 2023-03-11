import React from "react";
import {
  Box,
  Grid,
  Typography,
  styled,
  Button,
  OutlinedInput,
} from "@mui/material";
import "./input.css";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api/usersApi";
import AnswerQuestion from "./AnswerQuestion";
import moment from "moment";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

export default function AprovedQuestion({ answer }) {
  const [form, setForm] = React.useState("none");

  const userQuery = useQuery({
    queryKey: ["users", answer?.userId],
    queryFn: () => getUserById(answer?.userId),
  });

  return (
    <>
      <Box
        p={3}
        sx={{
          borderRadius: "8px",
          backgroundColor: "#4a4a6c",
          marginBottom: "2rem",
          // border: "dotted",
        }}
      >
        <Grid container>
          <Grid xs={6}>
            <Grid container alignItems={"center"}>
              <Grid xs={1.2}>
                <Typography
                  variant="h4"
                  sx={{ color: "#55e575", fontWeight: "600" }}
                >
                  {answer?.votes}
                </Typography>
              </Grid>
              <Grid xs={9}>
                <Typography variant="h5">approvements.</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <Button
              color="success"
              variant="contained"
              sx={{
                position: "relative",
                backgroundColor: "#55e575",
                float: "right",
                borderRadius: "20px",
              }}
            >
              Approve
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ fontSize: "1.4rem" }} mt={"12px"}>
          <span
            dangerouslySetInnerHTML={{
              __html: answer?.content,
            }}
          ></span>
        </Typography>
        <Grid container mt={2}>
          <Grid xs={6}>
            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
              By :
              <Box component={"span"} sx={{ fontWeight: "600" }}>
                {userQuery?.data?.data?.user?.name?.full}
              </Box>
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.4rem", position: "relative", float: "right" }}
            >
              Answered :
              <Box component={"span"} sx={{ fontWeight: "600" }}>
                {" " + moment(answer?.createdAt).fromNow(true) + " ago"}
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid container mt={2}>
          <Grid xs={6}>
            <Typography variant="body1" sx={{ fontSize: "1.4rem" }}>
              2 comments
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Button
              onClick={() => setForm(form === "none" ? "block" : "none")}
              sx={{
                fontSize: "1.2rem",
                color: "#55e575",
                position: "relative",
                float: "right",
                fontWeight: "600",
              }}
            >
              Comment
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        p={4}
        pb={4}
        sx={{
          display: form,
          mb: "32px",
          // border: "1px solid #a19e9e",
          borderRadius: "12px",
          backgroundColor: "hsl(238.33deg 45% 15.69%)",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: "6px" }}
        >
          Add your comment here
        </Typography>
        <textarea
          rows={5}
          style={{
            width: "100%",
            borderRadius: "12px",
            color: "white",
            paddingLeft: "12px",
            fontSize: "1.2rem",
            border: "1px solid white",
            backgroundColor: "hsl(238.06deg 24.03% 25.29%)",
          }}
          placeholder="Write your comment"
        />
        <Button
          variant="contained"
          color="success"
          sx={{
            position: "relative",
            float: "center",
            fontSize: "1rem",
            marginTop: "20px",
            backgroundColor: "hsl(133.24deg 74.36% 61.76%)",
            width: "10rem",
            borderRadius: "20px",
          }}
        >
          Submit
        </Button>
      </Box>

      {/* <AnswerQuestion answer={answer} /> */}
    </>
  );
}
