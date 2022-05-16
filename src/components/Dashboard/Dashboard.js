import { Grid } from "@mui/material";
import AddPostCard from "./AddPostCard/AddPostCard";
import ProfileCard from "./ProfileCard/ProfileCard";
import RecentPosts from "./RecentPosts/RecentPosts";
import SettingsCard from "./SettingsCard/SettingsCard";

function Dashboard() {
  return (
    <Grid container spacing={3} sx={{ padding: "3rem", height: "100%" }}>
      <Grid item xs={12} md={6}>
        <ProfileCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <AddPostCard />
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
