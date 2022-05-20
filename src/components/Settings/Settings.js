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
import { Outlet, NavLink } from "react-router-dom";

function Settings() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#1976D2" : "black",
      textDecoration: "none",
    };
  };
  return (
    <Container>
      <Typography variant="h4" align="center">
        Settings
      </Typography>
      <Card sx={{ margin: " 1rem auto", maxWidth: "800px", padding: "1rem" }}>
        <Stack direction="row" spacing={2}>
          <Stack>
            <NavLink to="preferences" style={navLinkStyles}>
              <Typography variant="h5">Preferences</Typography>
            </NavLink>
            <NavLink to="account" style={navLinkStyles}>
              <Typography variant="h5">Account</Typography>
            </NavLink>
          </Stack>
          <Outlet />
        </Stack>
      </Card>
    </Container>
  );
}

export default Settings;
