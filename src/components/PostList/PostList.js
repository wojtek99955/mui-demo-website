import { useContext, useState } from "react";
import { Context } from "../../ContextProvider";
import {
  Card,
  Button,
  Typography,
  Stack,
  IconButton,
  Menu,
  Tooltip,
  Divider,
  TextField,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

const UserIcon = styled(AccountCircleOutlinedIcon)``;
const UnlikedIcon = styled(FavoriteBorderIcon)`
  color: red;
`;
const LikedIcon = styled(FavoriteIcon)`
  color: red;
`;
const AddIcon = styled(BookmarkAddedIcon)`
  color: green;
  margin-right: 0.5rem;
`;
const StyledDeleteIcon = styled(DeleteIcon)`
  color: red;
  margin-right: 0.5rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function PostList() {
  const ctx = useContext(Context);
  const { posts } = ctx;

  function handleDelete(id) {
    const newList = posts.filter((post) => post.id !== id);
    ctx.setPosts(newList);
  }

  const handleLiked = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const newArray = [...posts];
    newArray[elementId] = {
      ...newArray[elementId],
      liked: !newArray[elementId].liked,
    };
    ctx.setPosts(newArray);
  };

  const openComment = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const nnewArray = [...posts];
    nnewArray[elementId] = {
      ...nnewArray[elementId],
      commentOpen: !nnewArray[elementId].commentOpen,
    };
    ctx.setPosts(nnewArray);
  };
  return (
    <>
      <Stack spacing={3} sx={{ maxWidth: "550px", margin: "auto" }}>
        {posts.map((post) => {
          return (
            <Card key={post.id} sx={{ padding: "1rem" }}>
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <UserIcon />
                  <Typography variant="h6">
                    <StyledLink to="/profile">{`${post.name} ${post.surname}`}</StyledLink>
                  </Typography>
                </Stack>
                <Tooltip
                  sx={{ marginLeft: "auto" }}
                  title="delete"
                  onClick={() => handleDelete(post.id)}
                >
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Typography variant="p">{post.text}</Typography>
              <Divider sx={{ margin: "1rem 0" }} />
              <Stack direction="row" spacing={2}>
                <div onClick={() => handleLiked(post.id)}>
                  {post.liked ? (
                    <LikedIcon fontSize="small" />
                  ) : (
                    <UnlikedIcon fontSize="small" />
                  )}
                </div>
                <CommentOutlinedIcon
                  onClick={() => openComment(post.id)}
                  fontSize="small"
                />
              </Stack>
              {post.commentOpen ? (
                <Stack direction="row" spacing={1}>
                  <TextField fullWidth size="small" />
                  <Button variant="contained">Add</Button>
                </Stack>
              ) : null}
            </Card>
          );
        })}
      </Stack>
    </>
  );
}

export default PostList;
