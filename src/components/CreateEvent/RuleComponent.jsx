import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
// import "./AuthForm.styles.scss";
// import "./style.css";
import "./index.css";

import { FileUploader } from "react-drag-drop-files";
import { createQuestion } from "../../api/questionApi";

const style = {
  border: "1px solid #eaeaea",
  width: "100%",
  height: "44px",
  backgroundColor: "#313250",
  borderRadius: "8px",
  marginTop: "12px",
  color: "white",
  fontSize: "1.2rem",
  paddingLeft: "1rem",
};

const fileTypes = ["JPG", "PNG", "GIF"];

export default function RuleComponent() {
  const [file, setFile] = React.useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

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

  // const handleSubmit = async () => {
  //   const res = await createQuestion({})
  // }

  return (
    <div style={{ backgroundColor: "#16173a", width: "100%" }}>
      <Box
        sx={{
          borderRadius: "5px",
          position: "absolute",
          top: 230,
          left: 110,
          backgroundColor: "#313250",
          width: "52%",
          p: 3,
        }}
      >
        <div className="Input">
          <Typography variant="h4" sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
            Title
          </Typography>
          <Box component={"input"} style={style} />
          {/* <TextField fullWidth id="fullWidth" style={{ width: "100%" }} /> */}
        </div>

        <div>
          <div class="new-project-form__input-group new-project-form__input-group--textarea">
            <Typography variant="h4" mt={2} sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
              Content
            </Typography>
            {/* <Box component={"textarea"} rows={5} style={style} /> */}
            <Box
              component={"textarea"}
              rows={7}
              style={{
                width: "100%",
                borderRadius: "12px",
                color: "white",
                paddingLeft: "12px",
                fontSize: "1.2rem",
                border: "1px solid white",
                backgroundColor: "hsl(238.06deg 24.03% 25.29%)",
                marginTop: "12px",
              }}
            />
          </div>

          <Box mt={2} mb={2}>
            <Typography variant="h4" mt={2} mb={2} sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
              Background Pictures
            </Typography>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            {/* <h1>Tags</h1> */}
            {/* <TextField fullWidth id="fullWidth" style={{ width: "100%", backgroundColor: "#313250" }} /> */}
          </Box>
          <Box mt={2} mb={2}>
            <Typography variant="h4" mt={2} mb={2} sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
              Event Picture
            </Typography>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            {/* <h1>Tags</h1> */}
            {/* <TextField fullWidth id="fullWidth" style={{ width: "100%", backgroundColor: "#313250" }} /> */}
          </Box>

          <div className="button">
            <Button
              variant="contained"
              color="success"
              sx={{
                position: "relative",
                float: "center",
                fontSize: "1rem",
                marginTop: "20px",
                backgroundColor: "hsl(133.24deg 74.36% 61.76%)",
                width: "10rem",
                borderRadius: "20px",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Box>

      <div className="flexbox">
        <Box
          sx={{
            borderRadius: "5px",
            position: "relative",
            top: -45,
            left: -40,
            backgroundColor: "#313250",
            width: "75%",
            p: 3,
          }}
        >
          <Typography variant="body1" mb={2} style={{ fontWeight: "600", fontSize: "1.7rem" }}>
            Rules
          </Typography>
          {table.map((param, i) => (
            <div className="box-child" key={i}>
              <div className="box3">
                <Typography variant="body1" style={{ paddingBottom: "10px", fontWeight: "bold", fontSize: "1.5rem" }}>
                  {param.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  {param.p}
                </Typography>
              </div>
            </div>
          ))}
        </Box>
      </div>
    </div>
  );
}
