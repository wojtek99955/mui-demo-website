import { Card, TextField, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";

function AddPost() {
  const ctx = useContext(Context);
  const {
    userData: { name, surname },
  } = ctx;
  return (
    <Card sx={{ width: "550px", margin: " 1rem auto", padding: "1rem" }}>
      <Typography>{`${name} ${surname}`}</Typography>
      <TextField
        multiline
        maxRows={4}
        fullWidth
        label="Create Post"
        variant="standard"
      />
      <Button variant="contained" fullWidth sx={{ marginTop: "3rem" }}>
        Save Post
      </Button>
    </Card>
  );
}

export default AddPost;
