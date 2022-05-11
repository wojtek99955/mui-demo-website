import { Context } from "../../ContextProvider";
import { useContext } from "react";

function SavedPosts() {
  const ctx = useContext(Context);
  const likedPosts = ctx.posts.filter((notes) => notes.liked === true);

  return (
    <div>
      {likedPosts.map((post) => {
        return <h1>{post.text}</h1>;
      })}
    </div>
  );
}

export default SavedPosts;
