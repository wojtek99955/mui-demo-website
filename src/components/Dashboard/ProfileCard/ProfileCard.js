import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../ContextProvider";
import { useNavigate } from "react-router-dom";
import NotesIcon from "@mui/icons-material/Notes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useState } from "react";

const AvatarIcon = styled(AccountCircleOutlinedIcon)``;

function ProfileCard() {
  const context = useContext(Context);
  const {
    userData: { fname },
  } = context;
  const { posts } = context;

  let navigate = useNavigate();
  const likedPosts = posts.filter((notes) => notes.liked === true);
  const All = posts.flatMap(({ comments }) => comments);

  return (
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
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ChatBubbleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`comments: ${All.length}  `} />
        </ListItem>
      </List>
      <Button variant="outlined" onClick={() => navigate("/profile")}>
        My profile
      </Button>
    </Card>
  );
}

export default ProfileCard;
