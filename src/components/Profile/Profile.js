import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.section``;
const Wrapper = styled.div`
  margin: auto;
  margin-top: 5rem;
  max-width: 600px;
  border: 1px solid grey;
  padding: 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Profile() {
  return (
    <Container>
      <Wrapper>
        <Typography variant="h3" component="h1" align="center">
          Your Profile
        </Typography>
        <Stack direction="row" justifyContent="space-around">
          <Typography>Name</Typography>
          <Typography>Surname</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-around">
          <Typography>Age</Typography>
          <Typography>Address</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-around">
          <Typography>Zip Code</Typography>
          <Typography>City</Typography>
        </Stack>
        <Box textAlign="center">
          <StyledLink to="/edit-profile">
            <Button variant="contained">Update</Button>
          </StyledLink>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Profile;
