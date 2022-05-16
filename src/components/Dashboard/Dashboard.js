import styled from "styled-components";
import { Button, Typography, Card, Grid } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard/ProfileCard";
import RecentPosts from "./RecentPosts/RecentPosts";

const StyledSettingsIcon = styled(SettingsIcon)`
  color: grey;
`;

function Dashboard() {
  let navigate = useNavigate();

  return (
    <Grid container spacing={3} sx={{ padding: "3rem", height: "100%" }}>
      <Grid item xs={12} md={6}>
        <ProfileCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%", display: "flex" }}>
          <Button
            variant="contained"
            sx={{ margin: "auto" }}
            onClick={() => navigate("/posts")}
          >
            Add Post
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentPosts />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{ height: "100%", display: "flex", cursor: "pointer" }}
          onClick={() => navigate("/settings")}
        >
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
