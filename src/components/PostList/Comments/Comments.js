import { useContext, useState } from "react";
import { Context } from "../../../ContextProvider";
import styled from "styled-components";
import { Stack, Button, TextField } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { v4 as uuid } from "uuid";
const CommentsContainer = styled.ul`
  margin-top: 1rem;
  list-style-type: none;
  li {
    background-color: #f0f2f5;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const DeleteIcon = styled(HighlightOffOutlinedIcon)``;
function Comments({ post }) {
  const ctx = useContext(Context);
  const { posts } = ctx;
  const [comment, setComment] = useState(null);
  const CommentsOnchange = (e) => {
    setComment(e.target.value);
  };
  const addComment = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const newArray = [...posts];
    newArray[elementId] = {
      ...newArray[elementId],
      comments: [
        ...posts[elementId].comments,
        {
          text: comment,
          id: uuid(),
        },
      ],
    };
    ctx.setPosts(newArray);
  };

  return (
    <>
      {post.commentOpen ? (
        <>
          <Stack direction="row" spacing={1}>
            <TextField onChange={CommentsOnchange} fullWidth size="small" />
            <Button variant="contained" onClick={() => addComment(post.id)}>
              Add
            </Button>
          </Stack>
          <CommentsContainer>
            {post.comments.map((comment) => {
              return (
                <>
                  <li>
                    {comment.text}{" "}
                    <DeleteIcon sx={{ marginLeft: "4rem" }} size="small" />
                  </li>
                </>
              );
            })}
          </CommentsContainer>
        </>
      ) : null}
    </>
  );
}

export default Comments;
