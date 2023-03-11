import React, { Fragment } from "react";

import SideBarWidget from "./SideBarWidget/SideBarWidget.component";
import TagsWidget from "./TagsWidget/TagsWidget.component";

import "./RightSideBar.styles.scss";
import { Box } from "@mui/material";

const RightSideBar = () => {
  return (
    <Box sx={{ bgcolor: "#16173A", px: 1.5, position: "relative" }}>
      <SideBarWidget />
      {/* <TagsWidget /> */}
    </Box>
  );
};

export default RightSideBar;
