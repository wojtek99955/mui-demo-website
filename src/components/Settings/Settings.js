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
            <StyledLink to="/settings/preferences">
              <Typography variant="h5">Preferences</Typography>
            </StyledLink>
            <StyledLink to="/settings/account">
              <Typography variant="h5">Account</Typography>
            </StyledLink>
          </Stack>
          <div>
            <Outlet />
          </div>
        </Stack>
      </Card>
    </Container>
  );
}

export default Settings;
