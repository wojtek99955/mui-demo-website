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
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

const UserIcon = styled(AccountCircleOutlinedIcon)``;
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
              <Typography variant="p" onClick={() => handleDelete(post.id)}>
                {post.text}
              </Typography>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}

export default PostList;
