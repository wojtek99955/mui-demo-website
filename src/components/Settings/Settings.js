import { Card, Typography, Stack, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

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
          </Stack>
          <Outlet />
        </Stack>
      </Card>
    </Container>
  );
}

export default Settings;
