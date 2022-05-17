import {
  Card,
  Stack,
  Typography,
  Tooltip,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AddLike from "../PostList/AddLike/AddLike";
import Comments from "../PostList/Comments/Comments";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const UserIcon = styled(AccountCircleOutlinedIcon)``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Post({ post }) {
  const ctx = useContext(Context);
  const { posts } = ctx;
  const [editedValue, setEditedValue] = useState("");

  function handleDelete(id) {
    const newList = posts.filter((post) => post.id !== id);
    ctx.setPosts(newList);
  }

  const openComment = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const nnewArray = [...posts];
    nnewArray[elementId] = {
      ...nnewArray[elementId],
      commentOpen: !nnewArray[elementId].commentOpen,
    };
    ctx.setPosts(nnewArray);
  };
  const openEdditing = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const newArray = [...posts];
    newArray[elementId] = {
      ...newArray[elementId],
      edit: !newArray[elementId].edit,
    };
    ctx.setPosts(newArray);
  };
  const editOnChange = (e) => {
    setEditedValue(e.target.value);
  };
  const handleAddChange = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const newArray = [...posts];
    newArray[elementId] = {
      ...newArray[elementId],
      text: editedValue,
      edit: false,
    };
    ctx.setPosts(newArray);
  };
  return (
    <Card key={post.id} sx={{ padding: "1rem" }}>
      <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <UserIcon />
          <Typography variant="h6">
            <StyledLink to="/profile">{`${post.fname} ${post.lname}`}</StyledLink>
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          <Tooltip
            onClick={() => openEdditing(post.id)}
            sx={{ marginLeft: "auto" }}
            title="edit"
          >
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
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
      </Stack>
      {post.edit ? (
        <>
          <TextField
            onChange={editOnChange}
            fullWidth
            defaultValue={post.text}
            multiline
            autoFocus
          />
          <Button
            onClick={() => {
              handleAddChange(post.id);
            }}
          >
            Save
          </Button>
        </>
      ) : (
        <Typography variant="p">{post.text}</Typography>
      )}
      <Divider sx={{ margin: "1rem 0" }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2}>
          <AddLike post={post} />
          <CommentOutlinedIcon
            onClick={() => openComment(post.id)}
            fontSize="small"
            sx={{ cursor: "pointer" }}
          />
        </Stack>
        <Typography
          variant="p"
          onClick={() => openComment(post.id)}
          sx={{ cursor: "pointer" }}
        >
          comments: {post.comments.length}
        </Typography>
      </Stack>
      <Comments post={post} />
    </Card>
  );
}

export default Post;
