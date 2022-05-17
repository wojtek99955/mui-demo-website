import { Context } from "../../ContextProvider";
import { useContext } from "react";
import Post from "../Post/Post";
import { Stack } from "@mui/material";

function SavedPosts() {
  const ctx = useContext(Context);
  const likedPosts = ctx.posts.filter((notes) => notes.liked === true);

  return (
    <Stack spacing={3} sx={{ minWidth: "550px", margin: " 1rem auto" }}>
      {likedPosts.length === 0 ? <h1>No saved posts here!</h1> : null}
      {likedPosts.map((post) => {
        return <Post post={post} />;
      })}
    </Stack>
  );
}

export default SavedPosts;
