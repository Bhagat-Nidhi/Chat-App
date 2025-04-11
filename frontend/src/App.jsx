//import { Routes, Route } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { useEffect } from "react";
import { Loader } from "lucide-react";

import { useAuthStore } from "./store/useAuthStore"; // ✅ corrected import

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore(); // ✅ correct usage

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-10 h-10 text-gray-700" /> {/* ✅ Loader usage fixed */}
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;


/*import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { useEffect } from "react";
import {Loader} from "lucide-react";

const App = () => {
  const {authUser,checkAuth,isCheckingAuth}=userAuthStore();
  useEffect(() => {
    checkAuth()
  },[checkAuth]);

  console.log({ authUser });

  if (true)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="text-2xl font-bold text-gray-700">Loading...</Loader>
      </div>
    );{
  return (
        <div>
          <Navbar />
  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
  );
};
export default App;
*/