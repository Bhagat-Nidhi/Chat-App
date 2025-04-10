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
      set({ authUser: res.data }); // Update authUser state on success
    } catch (error) {
      console.error("Error in signup:", error);
      throw error; // Rethrow error to handle in the component
    } finally {
      set({ isSigningUp: false });
    }
  },
  // More auth methods like signup, login, logout can go here...
}));
