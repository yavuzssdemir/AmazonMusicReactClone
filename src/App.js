import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Social from "./pages/Social";
import Library from "./pages/Library";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthProvider from "./provider/AuthProvider";
import MusicPlayer from "./components/music/MusicPlayer";
import AuthNavigator from "./navigator/AuthNavigator";
import MyProfile from "./pages/MyProfile";
import PostInfo from "./components/post/PostInfo";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/library" element={<Library />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route
            path="/play/:musicId"
            element={
              <AuthNavigator>
                <MusicPlayer />
              </AuthNavigator>
            }
          />
          <Route
            path="/post/:postId"
            element={
              <AuthNavigator>
                <PostInfo />
              </AuthNavigator>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
