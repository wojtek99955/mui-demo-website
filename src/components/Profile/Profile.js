import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

const Container = styled.section``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Profile() {
  return (
    <Card sx={{ maxWidth: "600px", margin: "auto", marginTop: "1rem" }}>
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
    </Card>
  );
}

export default Profile;
