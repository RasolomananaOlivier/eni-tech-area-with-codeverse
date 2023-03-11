import React from "react";
import { Box, Typography, Grid, Avatar, styled, Button, Stack } from "@mui/material";
import { Paper } from "@mui/material";

const TagsOptions = styled(Typography)(({ theme }) => ({
  color: "white",
  width: "7rem",
  borderRadius: "12px",
  fontSize: "1.2rem",
  textAlign: "center",
  marginRight: "12px",
}));

export default function Challenges({
  key,
  name,
  firstname,
  title,
  content,
  difficult,
  expiredDate,
  picture,
  tag,
  answerLength,
}) {
  const [display, setDisplay] = React.useState(false);
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
            <Avatar sizes="large" sx={{ height: "50px", width: "50px" }} alt="" src={picture} />
          </Grid>
          <Grid xs={10.7}>
            <Grid container justifyContent={"center"}>
              <Grid xs={8}>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {name + " " + firstname}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "start", fontSize: "1.2rem" }}>
                  Expire :{" "}
                  <Box component={"span"} sx={{ fontWeight: "600" }}>
                    {expiredDate}
                  </Box>
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography
                  px={2}
                  pt={0.4}
                  pb={0.5}
                  sx={{
                    borderRadius: "20px",
                    position: "relative",
                    float: "right",
                    fontSize: "1.2rem",
                    backgroundColor: "#e14927",
                    fontWeight: "600",
                  }}
                >
                  {difficult}
                </Typography>
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
            <Box mt={"20px"} mb={"20px"} sx={{ display: "flex" }}>
              <TagsOptions
                p={0.4}
                sx={{
                  backgroundColor: "#d2e127",
                }}
              >
                {tag}
              </TagsOptions>
              {/* <TagsOptions
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
              </TagsOptions> */}
            </Box>
            <Stack direction="row" spacing={2}>
              <Box>
                <Typography px={1.8} variant="h3" sx={{ fontWeight: "600", textAlign: "center" }}>
                  {answerLength}
                </Typography>
                <Typography variant="body" px={1} ml={1} sx={{ fontWeight: "600", fontSize: "1.3rem", textAlign: "center" }}>
                  Approve
                </Typography>
              </Box>

              <Box>
                <Typography px={1.8} variant="h3" sx={{ fontWeight: "600", textAlign: "center" }}>
                  127
                </Typography>
                <Typography variant="body" px={1} ml={1} sx={{ fontWeight: "600", fontSize: "1.3rem", textAlign: "center" }}>
                  Answer
                </Typography>
              </Box>

              <Box>
                <Typography px={1.8} variant="h3" sx={{ fontWeight: "600", textAlign: "center" }}>
                  127
                </Typography>
                <Typography variant="body" px={1} ml={1} sx={{ fontWeight: "600", fontSize: "1.3rem", textAlign: "center" }}>
                  xxxx
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="outlined"
              color="success"
              onClick={() => setDisplay(!display)}
              sx={{
                fontSize: "1.1rem",
                // backgroundColor: "hsl(133.24deg 74.36% 61.76%)",
                borderColor: "hsl(133.24deg 74.36% 61.76%)",
                color: "hsl(133.24deg 74.36% 61.76%)",
                width: "12rem",
                marginTop: "32px",
                borderRadius: "12px",
              }}
            >
              Response
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        p={4}
        pb={4}
        sx={{
          display: display ? "block" : "none",
          mb: "32px",
          //   border: "1px solid #a19e9e",
          borderRadius: "12px",
          backgroundColor: "hsl(238.33deg 45% 15.69%)",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: "6px" }}>
          Add your response here
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
          placeholder="Write your response"
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
    </>
  );
}
