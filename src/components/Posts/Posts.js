import AddPost from "./AddPost";
import styled from "styled-components";
import PostList from "../PostList/PostList";

const Container = styled.div`
  margin: 0 auto;
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
