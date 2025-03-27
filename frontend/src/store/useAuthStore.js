import { create } from "zustand";

import { signup } from "../../../backend/src/controllers/auth.controller";
//authStore--->for authentication

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp:false,
    isLoggingIng:false,
    isUpdatingProfile:false,

    isCheckingAuth:true,

    checkAuth: async() => {
        try{
            const res= await axiosInstance.get("/auth/check");
            set({authUser:res.data});
        }
        catch(error){
            console.log("Error in checkAuth:", error);
            set({authUser:null});
        }
        finally{
            set({isCheckingAuth:false});
        }
    },

    signup: async (data) =>{
        
    }
})

)