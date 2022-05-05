import { TextField, Typography, Button, Stack } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";

const Container = styled.section`
  max-width: 500px;
  margin: auto;
  margin-top: 5rem;
  border: 1px solid grey;
  padding: 1.5rem;
`;

function EditProfile() {
  const initialValues = {
    name: "",
    surname: "",
    age: "",
    address: "",
    zipCode: "",
    city: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" mb={3}>
        Edit Your Profile
      </Typography>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <Field
                as={TextField}
                label="name"
                variant="outlined"
                name="name"
                type="text"
                fullWidth
              />
              <Field
                as={TextField}
                label="surname"
                variant="outlined"
                name="surname"
                type="text"
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Field
                as={TextField}
                label="age"
                variant="outlined"
                name="age"
                type="text"
                fullWidth
              />
              <Field
                as={TextField}
                label="address"
                variant="outlined"
                name="address"
                type="text"
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Field
                as={TextField}
                label="zipp code"
                variant="outlined"
                name="zipCode"
                type="text"
                fullWidth
              />
              <Field
                as={TextField}
                label="city"
                variant="outlined"
                name="city"
                type="text"
                fullWidth
              />
            </Stack>
          </Stack>
          <Button variant="outlined" type="submit" sx={{ marginTop: "2rem" }}>
            Save Changes
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default EditProfile;
