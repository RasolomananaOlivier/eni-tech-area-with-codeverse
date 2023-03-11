import React from "react";
import { Box, Typography, Grid, Avatar, styled, Button } from "@mui/material";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

export default function Question({
  name,
  firstname,
  key,
  content,
  createdDate,
  title,
  picture,
  setOpen,
}) {
  return (
    <>
      <Box
        p={3}
        key={key}
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
              src={picture}
            />
          </Grid>
          <Grid xs={10.7}>
            <Grid container justifyContent={"center"}>
              <Grid xs={8}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {name + " " + firstname}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "start", fontSize: "1.2rem" }}
                >
                  Asked :{" "}
                  <Box component={"span"} sx={{ fontWeight: "600" }}>
                    {createdDate}
                  </Box>
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Button
                  onClick={() => setOpen(true)}
                  color="success"
                  variant="contained"
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
              }}
            >
              {title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.3rem" }}>
              {content}
            </Typography>
            <Box mt={"20px"} sx={{ display: "flex" }}>
              <TagsOptions
                p={0.4}
                sx={{
                  backgroundColor: "#d2e127",
                }}
              >
                React
              </TagsOptions>
              <TagsOptions
                p={0.4}
                sx={{
                  backgroundColor: "#e14927",
                }}
              >
                Laravel
              </TagsOptions>
              <TagsOptions
                p={0.4}
                sx={{
                  backgroundColor: "#8427e1",
                }}
              >
                Full stack
              </TagsOptions>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
