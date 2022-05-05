import styled from "styled-components";

const Container = styled.div`
  color: red;
`;

function ValidationError({ children }) {
  return <Container>{children}</Container>;
}

export default ValidationError;
