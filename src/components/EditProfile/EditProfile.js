import { Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.section`
  max-width: 500px;
  margin: auto;
  margin-top: 5rem;
  border: 1px solid grey;
  padding: 1.5rem;
`;

function EditProfile() {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center">
        Edit Your Profile
      </Typography>
    </Container>
  );
}

export default EditProfile;
