import React from "react";
import { Box, Typography } from "@mui/material";
import ImageCard from "../../assets/change-pwd.jpg";
import { getEvents } from "../../api/eventApi";
import { useQuery } from "@tanstack/react-query";

export default function CreateCardEvent() {
  const eventsQuery = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  console.log("eventsQuery", eventsQuery);

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
          {eventsQuery.data?.data?.events?.map((event) => (
            <Box
              p={4}
              key={event?.id}
              mt={"20px"}
              sx={{
                backgroundColor: "hsl(238.24deg 18.68% 35.69%)",
                borderRadius: "12px",
              }}
            >
              <Typography sx={{ fontSize: "1.7rem", fontWeight: "600" }}>
                {event?.title}
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", mt: "12px", fontWeight: "400" }}
              >
                {event?.content}
              </Typography>
              <Box
                mt={3}
                component={"img"}
                src={event?.images ?? ImageCard}
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
