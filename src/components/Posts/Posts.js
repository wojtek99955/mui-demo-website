import AddPost from "./AddPost";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;

function Posts() {
  return (
    <Container>
      <AddPost />
    </Container>
  );
}

export default Posts;
