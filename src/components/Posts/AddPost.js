import { Card, TextField, Button, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const UserIcon = styled(AccountCircleOutlinedIcon)``;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

function AddPost() {
  const ctx = useContext(Context);
  const {
    userData: { fname, lname },
  } = ctx;

  const initialValues = {
    text: "",
  };
  const onSubmit = (values, { resetForm }) => {
    ctx.setPosts([
      {
        fname,
        lname,
        text: values.text,
        id: uuid(),
        liked: false,
        commentOpen: false,
        comments: [],
        edit: false,
      },
      ...ctx.posts,
    ]);
    resetForm();
  };
  const validationSchema = Yup.object({
    text: Yup.string().required(),
  });
  return (
    <Card sx={{ width: "550px", margin: " 1rem auto", padding: "1rem" }}>
      <Stack direction="row" spacing={2}>
        <UserIcon />
        <Typography>
          <StyledLink to="/profile">{`${fname} ${lname}`}</StyledLink>
        </Typography>
      </Stack>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
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
