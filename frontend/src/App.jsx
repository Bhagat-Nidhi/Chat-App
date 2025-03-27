

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Routes, Route } from "react-router-dom";
/*/*
import axios from "axios";
import { axiosInstance } from "./lib/axios";
import { useAuthStore } from "./store/useAuthStore";

import { useEffect } from "react";

import { Loader } from "lucide-react"; //for buffer icon
*/

const App = () => {

  /*const {authUser,checkAuth, isCheckingAuth}= useAuthStore()

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if(isCheckingAuth && !authUser)
    return(
      <div className="flex items-center justify-normal h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
    );
*/
  return (
  <div> 

    <Navbar/>
    
    <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage /> } />
      </Routes>
 </div>
  );
};
export default App;
