import { Card, Stack, Typography, Divider } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AddLike from "../PostList/AddLike/AddLike";
import Comments from "./Comments/Comments";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Edit from "./Edit/Edit";
import ToolTips from "./ToolTips/ToolTips";

const UserIcon = styled(AccountCircleOutlinedIcon)``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Post({ post }) {
  const ctx = useContext(Context);
  const { posts } = ctx;

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
    <Card key={post.id} sx={{ padding: "1rem" }}>
      <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <UserIcon />
          <Typography variant="h6">
            <StyledLink to="/profile">{`${post.fname} ${post.lname}`}</StyledLink>
          </Typography>
        </Stack>
        <ToolTips post={post} />
      </Stack>
      <Edit post={post} />
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
