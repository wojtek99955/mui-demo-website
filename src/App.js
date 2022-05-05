import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
