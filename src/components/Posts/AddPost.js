import { Card, TextField, Button } from "@mui/material";

function AddPost() {
  return (
    <Card sx={{ width: "550px", margin: " 1rem auto", padding: "1rem" }}>
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
