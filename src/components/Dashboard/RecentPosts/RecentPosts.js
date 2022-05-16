import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Divider,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function RecentPosts() {
  const context = useContext(Context);
  const { posts } = context;
  let navigate = useNavigate();

  return (
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
  );
}

export default RecentPosts;
