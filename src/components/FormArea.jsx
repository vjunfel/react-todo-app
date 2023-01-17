import { Fab, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function FormArea({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setNote((preValues) => {
      return { ...preValues, [name]: value };
    });
  }
  //   console.log(note);

  function clickHandle() {
    addNote(note);
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
      <form>
        <TextField
          onChange={changeHandler}
          name="title"
          value={note.title}
          label="Title"
          fullWidth
          autoComplete="off"
        ></TextField>
        <TextField
          onChange={changeHandler}
          name="content"
          value={note.content}
          label="Content"
          multiline
          rows={4}
          fullWidth
          autoComplete="off"
          style={{ margin: "15px 0" }}
        ></TextField>
      </form>
      <Fab onClick={clickHandle} style={{ marginTop: "20px" }}>
        <AddIcon />
      </Fab>
    </Paper>
  );
}

export default FormArea;
