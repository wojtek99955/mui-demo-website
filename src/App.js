import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/EditProfile/EditProfile";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/GlobalStyle";
import styled from "styled-components";
import SideMenu from "./components/SideMenu/SideMenu";
import Help from "./components/Help/Help";
import Settings from "./components/Settings/Settings";
import Dashboard from "./components/Dashboard/Dashboard";
import ContextProvider from "./ContextProvider";
import Posts from "./components/Posts/Posts";
import SavedPosts from "./components/SavedPosts/SavedPosts";

const Wrapper = styled.div`
  background-color: #e5eaf3;
`;

const Container = styled.main`
  background-color: white;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  background-color: #f0f2f5;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <Wrapper>
          <Container>
            <Header />
            <Content>
              <SideMenu />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/help" element={<Help />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/saved-posts" element={<SavedPosts />} />
              </Routes>
            </Content>
          </Container>
        </Wrapper>
      </ContextProvider>
    </>
  );
}

export default App;
