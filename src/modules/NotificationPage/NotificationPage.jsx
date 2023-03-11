import React from "react";
import { Box, Typography } from "@mui/material";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import Image from "../../assets/home-students-2.jpg";
import NotifContent from "../NotificationComponent/NotifContent";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";

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
    <LayoutWrapper>
      <Box sx={{ bgcolor: "#313250", width: "230rem" }}>
        <Box sx={{ p: 3 }}>
          <NotifContent />
        </Box>
      </Box>
    </LayoutWrapper>
  );
}
