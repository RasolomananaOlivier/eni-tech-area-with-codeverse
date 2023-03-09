import React, { Fragment } from "react";
import "./SideBarWidget.styles.scss";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button, styled } from "@mui/material";
//change
import { Grid, Item } from "@mui/material";
const usestyle = makeStyles({
  Component: {
    backgroundColor: "#313250",
    padding: "12px",
    marginTop: "7rem",
    borderRadius: "8px",
  },
});
const CustomButton = styled(Button)(({ theme }) => ({
  padding: "0.7rem",
  fontSize: "1rem",
  width: "16rem",
  marginLeft: "12px",
  borderRadius: "8px",
  marginBottom: "12px",
}));

const Action = () => {
  const classes = usestyle();
  return (
    <>
      <Box className={classes.Component}>
        <Typography variant="h4" style={{ fontWeight: "600" }}>
          Actions
        </Typography>
        <Grid container>
          <Grid xs={12}>
            <CustomButton
              variant="contained"
              color="success"
              sx={{
                backgroundColor: "#55e675",
              }}
            >
              ASK QUESTION
            </CustomButton>
            <CustomButton variant="outlined" color="success" sx={{ color: "#55e675" }}>
              CREATE CHALLENGE
            </CustomButton>
          </Grid>
          <Grid xs={12}></Grid>
        </Grid>
      </Box>
    </>
  );
};

const FeaturedEvent = () => {
  return <></>;
};
const SideBarWidget = () => {
  return (
    <Fragment>
      <Action />
      <FeaturedEvent />
    </Fragment>
  );
};

export default SideBarWidget;
