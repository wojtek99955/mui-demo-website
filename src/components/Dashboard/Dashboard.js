import styled from "styled-components";
import {
  Button,
  Typography,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard/ProfileCard";

const StyledSettingsIcon = styled(SettingsIcon)`
  color: grey;
`;

function Dashboard() {
  const context = useContext(Context);
  const { posts } = context;

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
        <Card sx={{ height: "100%", padding: "1rem" }}>
          <Typography variant="h5" component="h3" align="center">
            Recent Posts
          </Typography>
          <List>
            {posts.slice(0, 4).map((post) => {
              return (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <AccountCircleOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText primary={`${post.text}`} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
          <Box textAlign="center" mt={2}>
            <Button variant="outlined" onClick={() => navigate("/posts")}>
              More
            </Button>
          </Box>
        </Card>
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
