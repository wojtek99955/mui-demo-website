import AddPost from "./AddPost";
import styled from "styled-components";
import PostList from "../PostList/PostList";

const Container = styled.div`
  margin: 0 auto;
  height: 500px;
  overflow: scroll;
  width: 100%;
  height: 90vh;
`;

function Posts() {
  return (
    <Container>
      <AddPost />
      <PostList />
    </Container>
  );
}

export default Posts;
