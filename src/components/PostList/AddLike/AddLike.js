import { useContext } from "react";
import { Context } from "../../../ContextProvider";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const UnlikedIcon = styled(FavoriteBorderIcon)`
  color: red;
  cursor: pointer;
`;
const LikedIcon = styled(FavoriteIcon)`
  color: red;
  cursor: pointer;
`;

function AddLike({ post }) {
  const ctx = useContext(Context);
  const { posts } = ctx;

  const handleLiked = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const newArray = [...posts];
    newArray[elementId] = {
      ...newArray[elementId],
      liked: !newArray[elementId].liked,
    };
    ctx.setPosts(newArray);
  };
  return (
    <>
      <div onClick={() => handleLiked(post.id)}>
        {post.liked ? (
          <LikedIcon fontSize="small" />
        ) : (
          <UnlikedIcon fontSize="small" />
        )}
      </div>
    </>
  );
}

export default AddLike;
