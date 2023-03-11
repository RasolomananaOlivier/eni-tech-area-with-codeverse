import React, { Fragment } from "react";

import SideBar from "./SideBar/SideBar.component";
import RightSideBar from "./RightSideBar/RightSideBar.component";
import Footer from "../Footer/Footer.component";
import Image from "../../../assets/home-students-2.jpg";
import { Box, Typography, Button, Grid, Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
// import UploadFile from "../../../modules/AllUsersPage/Profil/uploadFile";
import Image1 from "../../../assets/profil.png";
import { useSocket } from "../../../hooks/useSocket";
import { Profile } from "../../../modules/ProfilePage/NewProfilePage/Profile.Page";

const Header = () => {
  const location = useLocation();

  return (
    <Box position="relative">
      {location.pathname !== "/profile" && (
        <img src={Image} alt="" width="100%" height={260} />
      )}

      {location.pathname === "/profile" ? (
        <Profile />
      ) : (
        <Box
          position="absolute"
          top={60}
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ width: "50%", px: 8 }}
        >
          <Typography variant="h4" fontWeight="bold">
            Share & grow the Appworld's knowledge!
          </Typography>
          <Typography>
            We want to connect the people who have knowledge to the people who
            need it, to bring together people with different perspectives so
            they can understand each other better, and to empower everyone to
            share their knowledge.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const LayoutWrapper = ({ children }) => {
  useSocket();

  return (
    <>
      <Box>
        <Box sx={{ position: "relative", top: 68 }}>
          <Header />
        </Box>
        <Box
          sx={{
            position: "relative",
            mt: "5rem",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            px: 5,
            bgcolor: "#16173A",
          }}
        >
          <SideBar />
          {children}
          <RightSideBar />
        </Box>
      </Box>
    </>
  );
};

export default LayoutWrapper;
