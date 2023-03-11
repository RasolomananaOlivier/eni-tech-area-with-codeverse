import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { AppTagsInput } from "../../components/Tags";
import "./style.css";

export default function CreateQuestionPage() {
  const [tags, setTags] = useState([]);

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
    <>
      <Box className="card card-img">
        <Box sx={{ position: "relative", height: "100%" }}>
          <Stack sx={{ position: "relative", top: 100, px: 10 }}>
            <Typography variant="h2">Ask Question.</Typography>
            <Typography variant="h6">
              Share with others what is your problems.
            </Typography>
          </Stack>
        </Box>
      </Box>
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
            <h1>Title</h1>
            <input
              className="title-input s-input"
              type="text"
              name="title"
              // value={title}
              // onChange={(e) => onChange(e)}
              id="title"
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              required
            />
          </div>

          <div className="Input">
            <div class="new-project-form__input-group new-project-form__input-group--textarea">
              <h1> Description </h1>
              <textarea
                name="project-text"
                rows="10"
                className="title-input s-input"
              ></textarea>
            </div>
            <div className="tag-grid">
              <label className="form-label s-label">Tags</label>
              <TagsInput
                classNames={{ tag: "tag-style" }}
                array={tags}
                setArray={setTags}
              />
            </div>
            <div className="button">
              <Button
                onClick={() => {}}
                color="success"
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#55e575",
                  borderRadius: "20px",
                }}
              >
                Post your question
              </Button>
            </div>
          </div>
        </Box>

        <div className="flexbox">
          <div></div>
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
          </Box>
        </div>
      </div>
    </>
  );
}
