import React from "react";
import { Typography } from "@mui/material";
import "./RuleEvents.css";
export default function RuleEvents() {
  return (
    <div className="card">
      <div className="card-child">
        <div>
          <Typography variant="h2" component="div">
            Create Event
          </Typography>
          <Typography variant="p">Events for all ENI students.</Typography>
        </div>
        <div></div>
      </div>
    </div>
  );
}
