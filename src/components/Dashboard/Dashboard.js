import styled from "styled-components";
import { Button, Typography, Stack, Card, Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledSettingsIcon = styled(SettingsIcon)`
  color: grey;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Avatar = styled(AccountCircleOutlinedIcon)``;

function Dashboard() {
  const context = useContext(Context);
  const {
    userData: { fname },
  } = context;
  return (
    <Grid container spacing={3} sx={{ padding: "3rem" }}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="h4" component="h1" align="center">
            Welcome {fname}
          </Typography>
          <Avatar sx={{ fontSize: "5rem" }} />
          <Divider />
          <StyledLink to="/profile">
            <Button variant="outlined">My profile</Button>
          </StyledLink>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%", display: "flex" }}>
          <Button variant="contained" sx={{ margin: "auto" }}>
            Add Post
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <h3>Posts</h3>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%", display: "flex" }}>
          <StyledSettingsIcon sx={{ fontSize: "5rem", margin: "auto" }} />
          <Typography variant="h3" component="h3" sx={{ margin: "auto" }}>
            Settings
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
