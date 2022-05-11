import { Context } from "../../ContextProvider";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 2rem;
  }
`;
function SavedPosts() {
  const ctx = useContext(Context);
  const likedPosts = ctx.posts.filter((notes) => notes.liked === true);

  return (
    <Container>
      {likedPosts.length === 0 ? <h1>No saved posts here!</h1> : null}
      {likedPosts.map((post) => {
        return <h1>{post.text}</h1>;
      })}
    </Container>
  );
}

export default SavedPosts;
