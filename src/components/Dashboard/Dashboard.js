import { Button, Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard/ProfileCard";
import RecentPosts from "./RecentPosts/RecentPosts";
import SettingsCard from "./SettingsCard/SettingsCard";

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
        <SettingsCard />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
