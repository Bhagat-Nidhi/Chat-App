/*import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
*/
/*const SignUpPage = () => {
  /*const [showPassword, setShowPassword] = useState(false);*/
  /*const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore(); //import signup from useauth

  //user if not put everything error 
  const validateForm = () => {}
  
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return(
  <div className="min-h-screen grid lg:grid-cols-2">
  
  /*<div className="flex flex-col justify-center items-center p-6 sm:p-12">
    <div className="w-full max-w-md space-y-8">
      

      /*<div className="text-center mb-8">
        <div className="flex flex-col items-center gap-2 group">
          <div
            className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
          group-hover:bg-primary/20 transition-colors"
          >
            <MessageSquare className="size-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mt-2">Create Account</h1>
          <p className="text-base-content/60">Get started with your free account</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                     type="text"
                      className={`input input-bordered w-full pl-10`}
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            </form>
        </div>
      </div>
      </div>
  );
};
export default SignUpPage;
*/

import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore"; // Importing auth store

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State for error messages

  const { signup, isSigningUp } = useAuthStore(); // Accessing signup and state

  // Validate the form
  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("All fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signup(formData); // Call signup function
      alert("Signup successful!");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="********"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSigningUp}
          >
            {isSigningUp ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;