import { TextField, Typography, Button, Stack, Card } from "@mui/material";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ValidationError from "./EditProfile/ValidationError";
import { useContext } from "react";
import { Context } from "../ContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  max-width: 500px;
  margin: auto;
  margin-top: 5rem;
  border: 1px solid grey;
  padding: 1.5rem;
`;

function SignUp() {
  let navigate = useNavigate();
  const context = useContext(Context);
  const [saveMessage, setSaveMessage] = useState(false);
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    tel: "",
    address: "",
    zipCode: "",
    city: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    context.setUserData(values);
    setSaveMessage(true);
    navigate("/dashboard");
  };
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("required"),
    lname: Yup.string().required("required"),
    email: Yup.string().email("type valid email").required("required"),
    tel: Yup.string(),
    address: Yup.string().required("required"),
    zipCode: Yup.string().required("required"),
    city: Yup.string().required("required"),
    password: Yup.string().required("required").min(6),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "password must match")
      .required("required"),
  });

  return (
    <Card sx={{ margin: "auto", padding: "1rem", marginTop: "2rem" }}>
      <Typography variant="h4" component="h1" align="center" mb={3}>
        SignUp
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack spacing={1}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Field
                  as={TextField}
                  label="name"
                  variant="outlined"
                  name="fname"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="fname" component={ValidationError} />
              </Stack>
              <Stack>
                <Field
                  as={TextField}
                  label="surname"
                  variant="outlined"
                  name="lname"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="lname" component={ValidationError} />
              </Stack>
            </Stack>
            <Stack>
              <Field
                as={TextField}
                label="email"
                variant="outlined"
                name="email"
                type="text"
                fullWidth
              />
              <ErrorMessage name="email" component={ValidationError} />
            </Stack>
            <Field
              as={TextField}
              label="phone number"
              variant="outlined"
              name="tel"
              type="text"
              fullWidth
            />
            <ErrorMessage name="tel" />
            <Stack>
              <Field
                as={TextField}
                label="address"
                variant="outlined"
                name="address"
                type="text"
                fullWidth
              />
              <ErrorMessage name="address" component={ValidationError} />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Field
                  as={TextField}
                  label="zip code"
                  variant="outlined"
                  name="zipCode"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="zipCode" component={ValidationError} />
              </Stack>
              <Stack>
                <Field
                  as={TextField}
                  label="city"
                  variant="outlined"
                  name="city"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="city" component={ValidationError} />
              </Stack>
            </Stack>
            <Stack>
              <Field
                as={TextField}
                label="password"
                variant="outlined"
                name="password"
                type="password"
                fullWidth
              />
              <ErrorMessage name="password" component={ValidationError} />
            </Stack>
            <Stack>
              <Field
                as={TextField}
                label="confirm password"
                variant="outlined"
                name="confirmPassword"
                type="password"
                fullWidth
              />
              <ErrorMessage
                name="confirmPassword"
                component={ValidationError}
              />
            </Stack>
          </Stack>
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "2rem", padding: "0.6rem" }}
          >
            Save Changes
          </Button>
        </Form>
      </Formik>
      {saveMessage ? (
        <Typography variant="h6" sx={{ color: "green" }}>
          Changes saved!
        </Typography>
      ) : null}
    </Card>
  );
}

export default SignUp;
