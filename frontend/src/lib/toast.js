// filepath: C:/Users/Lenovo/Desktop/Chat-App/frontend/src/lib/toast.js
import toast from "react-hot-toast";

export function safeToast(message, options) {
  if (typeof message === "string" && message.trim() !== "") {
    toast(message, options);
  }
}