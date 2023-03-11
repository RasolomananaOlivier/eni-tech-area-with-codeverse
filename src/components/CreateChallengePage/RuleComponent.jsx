import { Box, Button, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
// import "./AuthForm.styles.scss";
// import "./style.css";
import "./index.css";
import { TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { TagsInput } from "react-tag-input-component";
import { createChallenge } from "../../api/challengesApi";
import { useNavigate } from "react-router-dom";

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

// export const AppTagsInput = ({ array, setArray }) => {
//   return <TagsInput value={array} onChange={setArray} name="tag" placeHolder="write your tag" />;
// };

export default function RuleComponent() {
  const navigate = useNavigate();
  const [tags, setTag] = React.useState([]);
  const [question, setQuestion] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("Easy");
  const [answer, setAnswer] = React.useState("");
  const [endAt, setEndAt] = React.useState(null);
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

  const handleCreateChalenge = async () => {
    const res = await createChallenge({ tags, question, difficulty, title, answer, endAt });
    navigate("/");
  };

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
          <Box component={"input"} style={style} onChange={(e) => setTitle(e.target.value)} />
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
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <Box mt={2} mb={2}>
            <Typography mb={2} variant="h4" sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
              Tags
            </Typography>

            <TagsInput value={tags} onChange={setTag} />

            {/* <h1>Tags</h1> */}
            {/* <TextField fullWidth id="fullWidth" style={{ width: "100%", backgroundColor: "#313250" }} /> */}
          </Box>

          <div className="Input">
            <Typography mb={2} variant="h4" sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
              Difficult
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={difficulty}
              name="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <FormControlLabel value="Difficult" control={<Radio />} sx={{ fontSize: "1.5rem" }} label="Difficult" />
              <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
            </RadioGroup>
          </div>

          <div class="new-project-form__input-group new-project-form__input-group--textarea">
            <Typography variant="h4" mt={2} sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
              Answer
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
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div class="new-project-form__input-group new-project-form__input-group--textarea">
            <Typography variant="h4" mt={2} sx={{ fontWeight: "600", fontSize: "1.6rem" }}>
              Expire date
            </Typography>
            {/* <Box component={"textarea"} rows={5} style={style} /> */}
            <Box
              component={"input"}
              type="date"
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
              onChange={(e) => setEndAt(e.target.value)}
            />
          </div>

          <div className="button">
            <Button
              onClick={handleCreateChalenge}
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
