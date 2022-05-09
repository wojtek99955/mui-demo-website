import { Card, TextField, Button, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import Posts from "./Posts";

const UserIcon = styled(AccountCircleOutlinedIcon)``;

function AddPost() {
  const ctx = useContext(Context);
  const {
    userData: { name, surname },
  } = ctx;

  const initialValues = {
    name,
    surname,
    text: "",
  };
  const onSubmit = (values) => {
    ctx.setPosts([values, ...ctx.posts]);
  };
  console.log(ctx.posts);
  return (
    <Card sx={{ width: "550px", margin: " 1rem auto", padding: "1rem" }}>
      <Stack direction="row" spacing={2}>
        <UserIcon />
        <Typography>{`${name} ${surname}`}</Typography>
      </Stack>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field
            as={TextField}
            multiline
            maxRows={4}
            fullWidth
            label="Create Post"
            variant="standard"
            name="text"
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ marginTop: "3rem" }}
          >
            Save Post
          </Button>
        </Form>
      </Formik>
    </Card>
  );
}

export default AddPost;
