import { useContext } from "react";
import { Context } from "../../ContextProvider";
import { Stack } from "@mui/material";

import Post from "../Post/Post";

function PostList() {
  const ctx = useContext(Context);
  const { posts } = ctx;

  return (
    <>
      <Stack spacing={3} sx={{ maxWidth: "550px", margin: "auto" }}>
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </Stack>
    </>
  );
}

export default PostList;
