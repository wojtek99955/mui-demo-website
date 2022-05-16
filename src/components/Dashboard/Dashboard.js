import styled from "styled-components";
import {
  Button,
  Typography,
  Stack,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import NotesIcon from "@mui/icons-material/Notes";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StyledSettingsIcon = styled(SettingsIcon)`
  color: grey;
`;

const AvatarIcon = styled(AccountCircleOutlinedIcon)``;

function Dashboard() {
  const context = useContext(Context);
  const {
    userData: { fname },
  } = context;
  const { posts } = context;

  let navigate = useNavigate();
  const likedPosts = posts.filter((notes) => notes.liked === true);

  return (
    <Grid container spacing={3} sx={{ padding: "3rem", height: "100%" }}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            padding: "1rem",
          }}
        >
          <Typography variant="h4" component="h1" align="center">
            Welcome {fname}
          </Typography>
          <AvatarIcon sx={{ fontSize: "5rem" }} />
          <Typography variant="h5" component="h3" m={2}>
            My Stats
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <NotesIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`posts: ${posts.length}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FavoriteIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`saved: ${likedPosts.length}`} />
            </ListItem>
          </List>
          <Button variant="outlined" onClick={() => navigate("/profile")}>
            My profile
          </Button>
        </Card>
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
