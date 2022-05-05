import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/EditProfile/EditProfile";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/GlobalStyle";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #e5eaf3;
`;

const Container = styled.main`
  background-color: white;
  border-radius: 20px;
  min-height: 900px;
  margin: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
