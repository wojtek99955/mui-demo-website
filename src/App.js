import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/EditProfile/EditProfile";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
