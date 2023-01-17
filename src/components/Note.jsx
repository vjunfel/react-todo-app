import React from "react";
import { Paper } from "@mui/material";

function Note() {
  return (
    <Paper
      style={{
        minWidth: "200px",
        minHeight: "100px",
        padding: "10px",
        margin: "20px",
        display: "inline-flex",
        justifyContent:"center"
      }}
    >
    <div>
      <h1>Title</h1>
      <p>Content</p>
    </div>
    </Paper>
  );
}

export default Note;
