import { Card, Typography, Switch, Container } from "@mui/material";

function Settings() {
  return (
    <Container>
      <Card sx={{ margin: " 1rem auto", maxWidth: "800px", padding: "1rem" }}>
        <Typography variant="h4" align="center">
          Settings
        </Typography>
        <Typography variant="h5">Account</Typography>
        <Typography variant="h5">Preferences</Typography>
        <Typography variant="h5">Username</Typography>
        <Switch />
      </Card>
    </Container>
  );
}

export default Settings;
