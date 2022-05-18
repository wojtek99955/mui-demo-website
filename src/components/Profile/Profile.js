import styled from "styled-components";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  Card,
  Divider,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Profile() {
  const context = useContext(Context);
  const {
    userData: { fname, lname, address, zipCode, city, email, password },
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
          <Typography variant="subtitle1" align="center">
            {email}
          </Typography>
          <Divider />
          <Stack direction="column" alignItems="center">
            <Typography>Address: {address}</Typography>

            <Typography>City: {city}</Typography>
            <Typography>Zip Code: {zipCode}</Typography>

            <TextField
              value={password}
              type="password"
              variant="standard"
              label="password"
              disabled
            />
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
