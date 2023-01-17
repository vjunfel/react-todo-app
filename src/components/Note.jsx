import React from "react";
import { Button, Paper } from "@mui/material";
import { Delete } from "@mui/icons-material";

function Note({ title, content, id, delNote }) {
  function clickHandler() {
    delNote(id);
  }
  return (
    <Paper
      style={{
        minWidth: "200px",
        minHeight: "100px",
        padding: "10px",
        margin: "20px",
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} style={{ marginLeft: "100px" }}>
        <Delete style={{ color: "red" }} />
      </Button>
    </Paper>
  );
}

export default Note;
