import React from "react";
import { Box, Typography } from "@mui/material";
import ImageCard from "../../assets/change-pwd.jpg";

export default function CreateCardEvent() {
  const Array = [
    {
      id: 1,
      title: "Events.",
      content:
        "Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day.",
      picture: ImageCard,
    },
    {
      id: 1,
      title: "Events.",
      content:
        "Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day. Complete a 30-day yoga challenge, practicing a different pose each day.",
      picture: ImageCard,
    },
  ];
  return (
    <>
      <Box p={3}>
        <Box>
          <Typography
            variant="h4"
            style={{ fontWeight: "600", fontSize: "2.3rem" }}
          >
            Events.
          </Typography>
          {Array?.map((List) => (
            <Box
              p={4}
              key={List.id}
              mt={"20px"}
              sx={{
                backgroundColor: "hsl(238.24deg 18.68% 35.69%)",
                borderRadius: "12px",
              }}
            >
              <Typography sx={{ fontSize: "1.7rem", fontWeight: "600" }}>
                {List.title}
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", mt: "12px", fontWeight: "400" }}
              >
                {List.content}
              </Typography>
              <Box
                mt={3}
                component={"img"}
                src={List.picture}
                sx={{
                  width: "100%",
                  height: "26rem",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
