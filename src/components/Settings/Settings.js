import { Container, Typography, Switch } from "@mui/material";

function Settings() {
  return (
    <Container>
      <Typography variant="h4">Settings</Typography>
      <Typography variant="h5">Account</Typography>
      <Typography variant="h5">Preferences</Typography>
      <Switch />
    </Container>
  );
}

export default Settings;
