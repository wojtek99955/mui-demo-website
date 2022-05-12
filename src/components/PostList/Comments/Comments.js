import { useContext, useState } from "react";
import { Context } from "../../../ContextProvider";
import styled from "styled-components";
import { Stack, Button, TextField } from "@mui/material";
import { v4 as uuid } from "uuid";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const UserIcon = styled(AccountCircleOutlinedIcon)``;
const CommentText = styled.div`
  margin-top: 1rem;
`;
const CommentsContainer = styled.ul`
  margin-top: 1rem;
  list-style-type: none;
  li {
    background-color: #f0f2f5;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;
const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  h3 {
    font-weight: 400;
    font-size: 1rem;
  }
`;
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
                    <UserData>
                      <UserIcon />
                      <h3>{`${ctx.userData.name} ${ctx.userData.name}`}</h3>
                    </UserData>
                    <CommentText>
                      <p>{comment.text} </p>
                    </CommentText>
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
