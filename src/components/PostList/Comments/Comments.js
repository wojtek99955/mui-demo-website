import { useContext, useState } from "react";
import { Context } from "../../../ContextProvider";
import styled from "styled-components";
import { Stack, Button, TextField } from "@mui/material";
const CommentsContainer = styled.ul`
  list-style-type: none;
  li {
    background-color: #f0f2f5;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;
function Comments({ post }) {
  const ctx = useContext(Context);
  const { posts } = ctx;
  const [comment, setComment] = useState("");
  const CommentsOnchange = (e) => {
    setComment(e.target.value);
  };
  const addComment = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const nnewArray = [...posts];
    nnewArray[elementId] = {
      ...nnewArray[elementId],
      comments: [comment, ...posts[elementId].comments],
    };
    ctx.setPosts(nnewArray);
  };
  return (
    <>
      {post.commentOpen ? (
        <Stack direction="row" spacing={1}>
          <TextField onChange={CommentsOnchange} fullWidth size="small" />
          <Button variant="contained" onClick={() => addComment(post.id)}>
            Add
          </Button>
        </Stack>
      ) : null}
      <CommentsContainer>
        {post.comments.map((comment) => {
          return <li>{comment}</li>;
        })}
      </CommentsContainer>
    </>
  );
}

export default Comments;
