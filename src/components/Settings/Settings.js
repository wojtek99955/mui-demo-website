import { Card, Typography, Switch, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function Settings() {
  return (
    <Container>
      <Card sx={{ margin: " 1rem auto", maxWidth: "800px", padding: "1rem" }}>
        <Typography variant="h4" align="center">
          Settings
        </Typography>

        <Link to="/settings/preferences">
          <Typography variant="h5">Account</Typography>
        </Link>
        <Typography variant="h5">Preferences</Typography>
        <Outlet />
      </Card>
    </Container>
  );
}

export default Settings;
