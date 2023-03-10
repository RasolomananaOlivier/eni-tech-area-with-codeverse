import React from "react";
import { Box, Typography } from "@mui/material";
import ImageCard from "../../assets/change-pwd.jpg";

export default function CreateCardEvent() {
  //   const Array = [
  //     {
  //       title: "Events.",
  //       content:
  //         "Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day.",
  //     },
  //   ];
  return (
    <>
      <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#313250" }}>
        <Box p={3}>
          <Typography variant="h4" style={{ fontWeight: "600", fontSize: "2.3rem" }}>
            Events.
          </Typography>
          {/* {Array?.map((List)=>(
        
    )) */}

          <Box p={4} mt={"20px"} sx={{ backgroundColor: "hsl(238.24deg 18.68% 35.69%)", borderRadius: "12px" }}>
            <Typography sx={{ fontSize: "1.7rem", fontWeight: "600" }}>Tech Trends Symposium.</Typography>
            <Typography sx={{ fontSize: "1.2rem", mt: "12px", fontWeight: "400" }}>
              Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge,
              practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day.
              Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge,
              practicing a different pose each day.
            </Typography>
            <Box
              mt={3}
              component={"img"}
              src={ImageCard}
              sx={{ width: "52rem", height: "26rem", borderRadius: "12px", objectFit: "cover" }}
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
