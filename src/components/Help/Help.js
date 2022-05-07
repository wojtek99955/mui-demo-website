import { Container, Typography, Button, Box } from "@mui/material";

function Help() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center" mt={2}>
        Support
      </Typography>
      <Box textAlign="center" mt={4}>
        <Button variant="contained">contact support</Button>
      </Box>
    </Container>
  );
}

export default Help;
