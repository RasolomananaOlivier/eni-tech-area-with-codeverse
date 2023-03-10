import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";

export default function AnswerQuestion({ key, name, firstname, picture, comment, date }) {
  return (
    <>
      <Box
        key={key}
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
                <Avatar src={picture} sx={{ height: "50px", width: "50px" }} alt="" />
              </Grid>
              <Grid xs={9.5}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  {name + " " + firstname}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body" sx={{ fontSize: "1.3rem", position: "relative", float: "right", fontWeight: "600" }}>
              {date}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
            {comment}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
