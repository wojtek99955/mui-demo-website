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

function Settings() {
  return (
    <Container>
      <Typography variant="h4" align="center">
        Settings
      </Typography>
      <Card sx={{ margin: " 1rem auto", maxWidth: "800px", padding: "1rem" }}>
        <Stack direction="row" spacing={2}>
          <Stack>
            <Link to="/settings/preferences">
              <Typography variant="h5">Preferences</Typography>
            </Link>
            <Link to="/settings/account">
              <Typography variant="h5">Account</Typography>
            </Link>
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
