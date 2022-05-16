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
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import NotesIcon from "@mui/icons-material/Notes";
import { useNavigate } from "react-router-dom";

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

  return (
    <Grid container spacing={3} sx={{ padding: "3rem", height: "100%" }}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
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
          <h3>Posts</h3>
          <ul>
            <Grid container spacing={3} direction="column">
              {posts.slice(0, 4).map((post) => {
                return (
                  <Grid item>
                    <Typography variant="p" component="p">
                      {post.text}
                    </Typography>
                    <Divider />
                  </Grid>
                );
              })}
            </Grid>
          </ul>
          <Button variant="outlined" onClick={() => navigate("/posts")}>
            More
          </Button>
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
