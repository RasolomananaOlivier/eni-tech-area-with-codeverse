// import { Dialog } from "@mui/material";
import { Box, Modal, Typography, Button, Grid, Avatar, styled, IconButton } from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  // border: "2px solid white",
  boxShadow: 24,
  p: 4,
  backgroundColor: "hsl(238.33deg 45% 15.69%)",
  borderRadius: "12px",
};

export default function ModalAddQuestion({ open, setOpen, content, title }) {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <Box>
              <IconButton
                sx={{ position: "relative", float: "right", top: "-26px", right: "-16px", color: "#eaeaea" }}
                onClick={() => setOpen(false)}
              >
                <Close />
              </IconButton>
            </Box>

            <Box p={3} mt={3} sx={{ borderRadius: "8px", backgroundColor: "#4a4a6c", marginBottom: "2rem" }}>
              <Typography variant="h4" style={{ fontWeight: "600", fontSize: "2rem", marginBottom: "12px" }}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.3rem" }}>
                {content}
              </Typography>
            </Box>
            <Box mt={2} mb={2}>
              <Typography variant="body1" sx={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: "6px" }}>
                Add your answer here
              </Typography>
              <input
                type={"textarea"}
                class="input2"
                style={{
                  width: "100%",
                  height: "54px",
                  borderRadius: "12px",
                  color: "white",
                  paddingLeft: "12px",
                  fontSize: "1.2rem",
                  border: "1px solid white",
                  backgroundColor: "hsl(238.06deg 24.03% 25.29%)",
                }}
                placeholder="Write your answer"
              />

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
            </Box>
          </Box>
        </>
      </Modal>
    </>
  );
}
