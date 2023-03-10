import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "../../assets/profil.png";

export default function AnswerQuestion() {
  return (
    <>
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
              <Grid xs={2}>
                <Avatar src={Image} alt="" />
              </Grid>
              <Grid xs={10}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  John Doe
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} sx={{ border: "dotted" }}>
            {/* <Typography variant="h"></Typography> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
