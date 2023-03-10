import { TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import "./cardStyle.css";
import { TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
export default function RuleComponent() {
  const table = [
    {
      title: "Clearly define the problem",
      p: "the challenge should have  a clear and concise problem statement.It should  state  what  the input and output  requirement  are ,and  what the  contraite are.",
    },
    {
      title: "set the difficulty level ",
      p: "the challenge should have  a clear and concise problem statement.It should  state  what  the input and output  requirement  are ,and  what the  contraite are. ",
    },
    {
      title: "Provide feedback",
      p: "the challenge should have  a clear and concise problem statement.It should  state  what  the input and output  requirement  are ,and  what the  contraite are.  ",
    },
  ];
  return (
    <div style={{ backgroundColor: "#202050", width: "100%" }}>
      <div className="box2" style={{ borderRadius: "5px" }}>
        <div className="Input">
          <h1>Challenge</h1>
          <TextField fullWidth id="fullWidth" style={{ width: "100%" }} />
        </div>

        <div className="Input">
          <div class="new-project-form__input-group new-project-form__input-group--textarea">
            <h1>Description Project </h1>
            <textarea
              name="project-text"
              id="project-text"
              rows="10"
              style={{
                width: "100%",
                backgroundColor: "#313250",
                border: " 1px solid rgba(255, 255, 255, 0.2);",
                borderRadius: "15px !important",
              }}
            ></textarea>
          </div>

          <div className="Input">
            <h1>Tags</h1>
            <TextField
              fullWidth
              id="fullWidth"
              style={{ width: "100%", backgroundColor: "#313250" }}
            />
          </div>

          <div className="Input">
            <h1>Difficulty</h1>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              colo
            >
              <FormControlLabel
                value="Difficult"
                control={<Radio />}
                label="Difficult"
              />
              <FormControlLabel
                value="Medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="flexbox">
        <div></div>
        <div className="box">
          <h1 style={{ fontWeight: "bold", fontSize: "medium" }}>Rules</h1>
          {table.map((param, i) => (
            <div className="box-child" key={i}>
              <div className="box3">
                <Typography
                  variant="h6"
                  style={{ paddingBottom: "10px", fontWeight: "bold" }}
                >
                  {param.title}
                </Typography>
                <Typography variant="p">{param.p}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
