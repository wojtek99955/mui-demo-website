import styled from "styled-components";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  Link,
  Card,
  Divider,
} from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Profile() {
  const context = useContext(Context);
  const {
    userData: { fname, lname, address, zipCode, city, email },
  } = context;
  return (
    <>
      <Container>
        <Typography variant="h3" component="h1" align="center">
          Your Profile
        </Typography>
        <Card
          sx={{
            maxWidth: "600px",
            margin: "auto",
            marginTop: "1rem",
            padding: "1rem",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <AccountCircleOutlinedIcon
              sx={{ fontSize: "5rem", margin: "auto" }}
            />
          </Box>
          <Typography variant="h4" align="center">
            {fname} {lname}
          </Typography>
          <Typography variant="h6" align="center">
            {email}
          </Typography>
          <Stack direction="row" justifyContent="space-around">
            <Typography>{address}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-around">
            <Typography>{zipCode}</Typography>
            <Typography>{city}</Typography>
          </Stack>
          <Box textAlign="center">
            <StyledLink to="/edit-profile">
              <Button variant="contained">Update</Button>
            </StyledLink>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default Profile;
