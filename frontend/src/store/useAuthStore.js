/*import { create } from "zustand";
import axios from "axios";
import { axiosInstance } from "../lib/axios";
// import { signup } from "../../../backend/src/controllers/auth.controller";
//authStore--->for authentication

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("http://localhost:5001/api/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // signup: async (data) =>{

  // }
}));
*/

import { create } from "zustand";
import { axiosInstance } from "../lib/axios"; // ✅ assumes axios is configured in this file
import toast from "daisyui/components/toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("http://localhost:5001/api/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.error("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("http://localhost:5001/api/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully"); // Update authUser state on success
    } catch (error) {
      //console.error("Error in signup:", error);
      //throw error; // Rethrow error to handle in the component
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");

      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  // More auth methods like signup, login, logout can go here...
}));
