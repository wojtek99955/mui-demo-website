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
      <Stack spacing={3} sx={{ maxWidth: "550px", margin: "auto" }}>
        {posts.map((post) => {
          return (
            <Card sx={{ padding: "1rem" }}>
              <Stack direction="row" spacing={2} mb={3}>
                <UserIcon />
                <Typography variant="h6">{`${post.name} ${post.surname}`}</Typography>
              </Stack>
              <Typography variant="p">{post.text}</Typography>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}

export default PostList;
