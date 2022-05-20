import {
  Card,
  Typography,
  Stack,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Settings() {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Settings
      </Typography>
      <Card sx={{ margin: " 1rem auto", maxWidth: "800px", padding: "1rem" }}>
        <Stack direction="row" spacing={2}>
          <Stack>
            <StyledLink to="preferences">
              <Typography variant="h5">Preferences</Typography>
            </StyledLink>
            <StyledLink to="account">
              <Typography variant="h5">Account</Typography>
            </StyledLink>
          </Stack>
          <Outlet />
        </Stack>
      </Card>
    </Container>
  );
}

export default Settings;
