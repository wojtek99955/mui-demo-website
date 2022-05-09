import { Card, TextField, Button, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";

const UserIcon = styled(AccountCircleOutlinedIcon)``;
function AddPost() {
  const ctx = useContext(Context);
  const {
    userData: { name, surname },
  } = ctx;
  return (
    <Card sx={{ width: "550px", margin: " 1rem auto", padding: "1rem" }}>
      <Stack direction="row" spacing={2}>
        <UserIcon />
        <Typography>{`${name} ${surname}`}</Typography>
      </Stack>
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
