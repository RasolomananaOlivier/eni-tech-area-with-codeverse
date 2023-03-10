import React from "react";
import { Box, Typography } from "@mui/material";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import Image from "../../assets/home-students-2.jpg";
import NotifContent from "../NotificationComponent/NotifContent";

export default function Notification() {
  const Header = () => {
    return (
      <Box position="relative">
        <img src={Image} alt="" width="100%" height={260} />
        <Box
          position="absolute"
          top={60}
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ width: "50%", px: 8 }}
        >
          <Typography variant="h3" fontWeight="bold">
            Notifications
          </Typography>
          <Typography variant="h5">
            Stay updated and tuned for latest events.
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <Box sx={{ bgcolor: "#313250" }}>
        <Box sx={{ position: "relative", top: 68 }}>
          <Header />
        </Box>
        <Box className="page" sx={{ position: "relative", mt: "5rem" }}>
          <SideBar />

          <div id="content">
            <Box
              sx={{
                bgcolor: "#313250",
                width: "46%",
                position: "absolute",
                margin: "25px 20px ",
              }}
            >
              <NotifContent />
            </Box>
            <RightSideBar />
          </div>
        </Box>
      </Box>
    </>
  );
}
