import { Context } from "../../ContextProvider";
import { useContext } from "react";
import Post from "../Post/Post";
import { Stack, Typography } from "@mui/material";

function SavedPosts() {
  const ctx = useContext(Context);
  const likedPosts = ctx.posts.filter((notes) => notes.liked === true);

  return (
    <Stack spacing={3} sx={{ minWidth: "550px", margin: " 1rem auto" }}>
      {likedPosts.length === 0 ? (
        <Typography variant="h4" component="h1" align="center">
          No saved posts here!
        </Typography>
      ) : null}
      {likedPosts.map((post) => {
        return <Post post={post} />;
      })}
    </Stack>
  );
}

export default SavedPosts;
