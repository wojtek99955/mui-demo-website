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
import TuneIcon from "@mui/icons-material/Tune";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
            <List>
              <ListItem>
                <ListItemIcon>
                  <TuneIcon />
                </ListItemIcon>
                <NavLink to="preferences" style={navLinkStyles}>
                  <Typography variant="h5">Preferences</Typography>
                </NavLink>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <NavLink to="account" style={navLinkStyles}>
                  <Typography variant="h5">Account</Typography>
                </NavLink>
              </ListItem>
            </List>
          </Stack>
          <Outlet />
        </Stack>
      </Card>
    </Container>
  );
}

export default Settings;
