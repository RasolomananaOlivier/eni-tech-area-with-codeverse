import React, { Fragment } from "react";
import "./SideBarWidget.styles.scss";
import { makeStyles } from "@mui/styles";
import { Box, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button, styled } from "@mui/material";
import BG from "../../../../../assets/bg.png";
import { Grid, Item } from "@mui/material";
const usestyle = makeStyles({
  Component: {
    backgroundColor: "#313250",
    borderRadius: "8px",
  },
});
const CustomButton = styled(Button)(({ theme }) => ({
  padding: "0.7rem",
  fontSize: "1rem",
  width: "100%",
  borderRadius: "8px",
}));

const Action = () => {
  const Role = "admin";
  const classes = usestyle();
  return (
    <Stack
      className={classes.Component}
      spacing={1}
      sx={{
        padding: "12px",
        marginTop: "3rem",
        marginBottom: "22px",
        width: "100%",
        py: 2.5,
      }}
    >
      <Typography
        variant="h4"
        style={{ fontWeight: "600", paddingLeft: "12px" }}
      >
        Actions
      </Typography>
      <Stack spacing={1.5}>
        <CustomButton
          variant={Role === "admin" ? "contained" : "outlined"}
          color="success"
          sx={{
            color: "white",
            backgroundColor: "#55e675",
            display: Role === "admin" ? "block" : "none",
          }}
        >
          CREATE EVENT
        </CustomButton>
        <CustomButton
          variant={Role === "admin" ? "outlined" : "contained"}
          color="success"
          sx={{
            backgroundColor: Role !== "admin" ? "#55e675" : null,
            color: Role === "admin" ? "#55e675" : "white",
          }}
        >
          ASK QUESTION
        </CustomButton>
        <CustomButton
          variant="outlined"
          color="success"
          sx={{ color: "#55e675" }}
        >
          CREATE CHALLENGE
        </CustomButton>
      </Stack>
    </Stack>
  );
};

const FeaturedEvent = () => {
  const classes = usestyle();
  return (
    <>
      <Box
        className={classes.Component}
        sx={{
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "9px",
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontWeight: "600",
            fontSize: "2.4rem",
            marginBottom: "-7px",
            paddingLeft: "12px",
          }}
        >
          TechX Summit
        </Typography>
        <Box
          p={2}
          sx={{
            textAlign: "initial",
            justifyContent: "center",
            display: "grid",
            color: "#eaeaea",
          }}
        >
          <Typography
            variant="body"
            style={{
              fontSize: "1.3rem",
              color: "#eaeaea",
              textAlign: "left",
              paddingRight: "15px",
            }}
          >
            A conference on Emerging Techologies.The TechX summit is a one-day
            conference aimed at showcasing the latest trends and emerging
            technologies in worlds of technologie.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
const PopularChange = () => {
  const classes = usestyle();
  const Difficult = "easy";
  return (
    <>
      <Typography
        variant="h4"
        style={{ fontSize: "2rem", fontWeight: "600", marginTop: "22px" }}
      >
        Popular challenges
      </Typography>
      <Box className={classes.Component} p={3}>
        <Grid container>
          <Grid xs={11}>
            <Typography
              variant="h7"
              sx={{ fontSize: "1.4rem", fontWeight: "600" }}
            >
              Code Your Way Out.
            </Typography>
          </Grid>
          <Grid
            xs={1}
            sx={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {Difficult === "Difficult" ? (
              <Box
                sx={{
                  height: "14px",
                  width: "14px",
                  borderRadius: "100%",
                  backgroundColor: "red",
                }}
              />
            ) : null}
            {Difficult === "easy" ? (
              <Box
                sx={{
                  height: "14px",
                  width: "14px",
                  borderRadius: "100%",
                  backgroundColor: "red",
                }}
              />
            ) : null}
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          style={{ color: "#eaeaea", fontSize: "1.3rem", marginTop: "1rem" }}
        >
          A programming Challenge to Solve Complex Algorigthm
        </Typography>
        <Grid container mt={"12px"}>
          <Grid xs={5}>
            <Typography
              sx={{
                backgroundColor: "yellow",
                borderRadius: "12px",
                textAlign: "center",
                fontSize: "1.2rem",
                color: "white",
                padding: "3px",
              }}
            >
              Algorigthm
            </Typography>
          </Grid>
          <Grid xs={5} ml={"12px"}>
            <Typography
              sx={{
                backgroundColor: "#2788e1",
                borderRadius: "12px",
                textAlign: "center",
                fontSize: "1.2rem",
                color: "white",
                padding: "3px",
              }}
            >
              React
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
const SideBarWidget = () => {
  return (
    <Fragment>
      <Action />
      <FeaturedEvent />
      <PopularChange />
    </Fragment>
  );
};

export default SideBarWidget;
