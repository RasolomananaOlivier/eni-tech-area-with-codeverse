import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api/usersApi";

export default function AnswerQuestion({ answer }) {
  const userQuery = useQuery({
    queryKey: ["users", answer.userId],
    queryFn: () => getUserById(answer.userId),
  });

  console.log(userQuery, "userQuery");
  return (
    <Box
      p={3}
      sx={{
        borderRadius: "8px",
        backgroundColor: "#4a4a6c",
        marginBottom: "2rem",
        width: "90%",
        position: "relative",
        float: "right",
      }}
    >
      <Grid container>
        <Grid xs={6}>
          <Grid container>
            <Grid xs={2.5}>
              <Avatar
                src={userQuery?.data?.data?.user?.imageUrl}
                sx={{ height: "50px", width: "50px" }}
                alt=""
              />
            </Grid>
            <Grid xs={9.5}>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                {userQuery?.data?.data?.user?.name?.full}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6}>
          <Typography
            variant="body"
            sx={{
              fontSize: "1.3rem",
              position: "relative",
              float: "right",
              fontWeight: "600",
            }}
          >
            {answer?.createdAt}
          </Typography>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
          {answer?.content}
        </Typography>
      </Box>
    </Box>
  );
}
