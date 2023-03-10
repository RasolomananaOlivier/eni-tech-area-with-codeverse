import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ChalengeList from "./ChalengeList";
import RightSideBar from "../../components/organisms/LayoutWrapper/RightSideBar/RightSideBar.component";
import SideBar from "../../components/organisms/LayoutWrapper/SideBar/SideBar.component";

export default function PagesChalenges() {
  return (
    <>
      <Box sx={{ bgcolor: "#22242a" }}>
        <Box className="page" sx={{ position: "relative", mt: "5rem" }}>
          <SideBar />
          <div id="content">
            <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#313250" }}>
              <Box p={3}>
                <Grid container>
                  <Grid xs={7}>
                    <Typography variant="h5" style={{ fontWeight: "600", fontSize: "1.7rem", marginBottom: "32px" }}>
                      Your Challenges.
                    </Typography>
                  </Grid>
                  <Grid xs={5}>
                    <TuneIcon sx={{ height: "30px", width: "30px", position: "relative", float: "right" }} />
                  </Grid>
                </Grid>
                <ChalengeList />
              </Box>

              {/* </Box>
              </Box> */}
            </Box>
            <RightSideBar />
          </div>
        </Box>
      </Box>
    </>
  );
}
