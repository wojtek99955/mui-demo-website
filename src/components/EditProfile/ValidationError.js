import styled from "styled-components";

const Container = styled.div`
  color: red;
  margin-top: 0;
  font-size: 0.9rem;
`;

function ValidationError({ children }) {
  return <Container>{children}</Container>;
}

export default ValidationError;
