import { useContext } from "react";
import { Context } from "../../ContextProvider";
import { Card, Button, Typography, Stack } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";

const UserIcon = styled(AccountCircleOutlinedIcon)``;

function PostList() {
  const ctx = useContext(Context);
  const { posts } = ctx;

  return (
    <>
      {posts.map((post) => {
        return (
          <Card>
            <Stack direction="row" spacing={2}>
              <UserIcon />
              <Typography variant="h6">{`${post.name} ${post.surname}`}</Typography>
            </Stack>
            <Typography variant="p">{post.text}</Typography>
          </Card>
        );
      })}
    </>
  );
}

export default PostList;
