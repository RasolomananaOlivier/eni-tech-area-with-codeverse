import React from "react";
import { Avatar, Box, Grid, Typography, Button } from "@mui/material";

export default function AnswerChallenges({ name, firstname, picture, key, createdDate, content }) {
  return (
    <>
      <Box
        key={key}
        p={3}
        sx={{
          borderRadius: "8px",
          backgroundColor: "#4a4a6c",
          marginBottom: "2rem",
        }}
      >
        <Box mt={2}>
          <Typography variant="body1" mb={3} sx={{ fontSize: "1.3rem" }}>
            {content}
          </Typography>
        </Box>
        <Grid container justifyContent={"center"}>
          <Grid xs={6}>
            <Grid container>
              <Grid xs={2.5}>
                <Avatar src={picture} sx={{ height: "50px", width: "50px" }} alt="" />
              </Grid>
              <Grid xs={9.5}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  {name + " " + firstname}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  CreatedDate :{" "}
                  <Box component={"span"} sx={{ fontWeight: "600" }}>
                    {createdDate}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <Button
              variant="outlined"
              color="success"
              sx={{
                position: "relative",
                float: "right",
                borderColor: "hsl(133.24deg 74.36% 61.76%)",
                color: "hsl(133.24deg 74.36% 61.76%)",
              }}
            >
              Approve
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
