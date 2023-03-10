import React from "react";
import { Grid, Box } from "@mui/material";
export default function NotifContent() {
  const array = [
    {
      Notif: "Zara Patel has  respond  to your questions .",
    },
    {
      Notif: "The  admin publish a new Event .",
    },
    {
      Notif: "Zara Patel has  respond  to your questions .",
    },
    {
      Notif: "The  admin publish a new Event .",
    },
  ];
  return (
    <>
      <h2 style={{ paddingLeft: "9px", fontWeight: "bold" }}>Notifications.</h2>
      {array.map((param, i) => (
        <Box sx={{ flexGrow: 1 }} key={i}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              style={{
                border: "none",
                padding: "5px",
                width: "100%",
              }}
            >
              <p
                style={{
                  backgroundColor: "#4a4a6c",
                  padding: "15px",
                  borderRadius: "6px",
                }}
              >
                {param.Notif}
              </p>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}
