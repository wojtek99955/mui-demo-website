import { Card, TextField, Button, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const UserIcon = styled(AccountCircleOutlinedIcon)``;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

function AddPost() {
  const ctx = useContext(Context);
  const {
    userData: { name, surname },
  } = ctx;

  const initialValues = {
    name,
    surname,
    text: "",
    id: "",
  };
  const onSubmit = (values, { resetForm }) => {
    ctx.setPosts([
      {
        name: values.name,
        surname: values.surname,
        text: values.text,
        id: uuid(),
      },
      ...ctx.posts,
    ]);
    resetForm();
  };
  console.log(ctx.posts);
  return (
    <Card sx={{ width: "550px", margin: " 1rem auto", padding: "1rem" }}>
      <Stack direction="row" spacing={2}>
        <UserIcon />
        <Typography>
          <StyledLink to="/profile">{`${name} ${surname}`}</StyledLink>
        </Typography>
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
