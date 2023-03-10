import { Typography } from "@mui/material";
import React from "react";
import "./style.css";
export default function ChallengesCreate() {
  return (
    <div className="card">
      <div className="card-child">
        <div>
          <Typography variant="h2" component="div">
            Create Challenge
          </Typography>
          <Typography variant="p">Challenge and test others</Typography>
        </div>
        <div></div>
      </div>
    </div>
  );
}
