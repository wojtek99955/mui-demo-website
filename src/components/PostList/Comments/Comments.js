import { useContext, useState, useRef } from "react";
import { Context } from "../../../ContextProvider";
import styled from "styled-components";
import { Stack, Button, TextField } from "@mui/material";
import { v4 as uuid } from "uuid";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { isOptionGroup } from "@mui/base";

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
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
function Comments({ post }) {
  const inputRef = useRef(null);
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
    if (inputRef.current.value) {
      ctx.setPosts(newArray);
    }
  };

  return (
    <>
      {post.commentOpen ? (
        <>
          <Stack direction="row" spacing={1} mt={2}>
            <TextField
              inputRef={inputRef}
              onChange={CommentsOnchange}
              fullWidth
              size="small"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addComment(post.id);
                }
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                addComment(post.id);
              }}
            >
              Add
            </Button>
          </Stack>
          <CommentsContainer>
            {post.comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <UserData>
                    <UserIcon />
                    <StyledLink to="/profile">{`${ctx.userData.fname} ${ctx.userData.lname}`}</StyledLink>
                  </UserData>
                  <CommentText>
                    <p>{comment.text} </p>
                  </CommentText>
                </li>
              );
            })}
          </CommentsContainer>
        </>
      ) : null}
    </>
  );
}

export default Comments;
