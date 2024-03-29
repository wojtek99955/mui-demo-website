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
import SignUp from "./components/SignUp";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Preferences from "./components/Settings/Preferences/Preferences";
import Account from "./components/Settings/Account";

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
                <Route path="/signup" element={<SignUp />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/edit-profile" element={<EditProfile />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="settings" element={<Settings />}>
                    <Route path="preferences" element={<Preferences />} />
                    <Route path="account" element={<Account />} />
                  </Route>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/saved-posts" element={<SavedPosts />} />
                </Route>
              </Routes>
            </Content>
          </Container>
        </Wrapper>
      </ContextProvider>
    </>
  );
}

export default App;
