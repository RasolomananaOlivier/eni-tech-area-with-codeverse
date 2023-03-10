import React from "react";
import ProfilComponent from ".";
import { Grid, Box, Avatar, Typography } from "@mui/material";
import Image1 from "../../../assets/profil.png";
import RightSideBar from "../../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../../components/organisms/LayoutWrapper/SideBar/SideBar.component";
import Image from "../../../assets/home-students-2.jpg";
import { useAuth } from "../../../hooks/useAuth";

export default function ProfilePage() {
  useAuth();

  const Profil = () => {
    const [open, setOpen] = React.useState(false);
    let role = "admin";
    return (
      <Box position="relative">
        <Box
          component={"img"}
          src={Image}
          sx={{
            height: { xs: 260, sm: 240 },
            width: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            paddingLeft: { xs: "0", sm: "12rem" },
            paddingRight: { xs: "0", sm: "14.8rem" },
            top: "80px",
            width: "100%",
          }}
        >
          <Grid container>
            <Grid xs={7}>
              <Grid container>
                <Grid xs={1.8}>
                  <Avatar
                    src={Image1}
                    sx={{ height: "80px", width: "80px" }}
                    alt=""
                  />
                </Grid>
                <Grid xs={10}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "600", color: "white" }}
                  >
                    Aria Stone
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.3rem", textDecoration: "underline" }}
                  >
                    ljnxr@zohomail.com
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: "600" }}>
                    1465 GB
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={5}>
              <Typography
                variant="h4"
                p={1}
                sx={{
                  position: "relative",
                  float: "right",
                  width: "10rem",
                  textAlign: "center",
                  borderRadius: "12px",
                  backgroundColor: "hsl(270deg 75.61% 51.76%)",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                Admin
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <Box sx={{ bgcolor: "#22242a" }}>
        <Box sx={{ position: "relative", top: 68 }}>
          <Profil />
        </Box>
        <Box className="page" sx={{ position: "relative", mt: "5rem" }}>
          <SideBar />
          <div id="content">
            <ProfilComponent />
            <RightSideBar />
          </div>
        </Box>
      </Box>
    </>
  );
}
