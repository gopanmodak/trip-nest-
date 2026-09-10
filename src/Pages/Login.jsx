import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigation = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleOnForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        console.log("Firebase User:", result.user);

        // Backend  email send
        const userInfo = {
          email: result.user.email,
        };

        return fetch("http://localhost:3000/signin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
          credentials: "include",
        });
      })
      .then((res) => res.json())
      .then(() => {
        navigation(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Welcome Back
          </h2>

          <form className="space-y-4" onSubmit={handleOnForm}>
            {/* Email */}
            <div>
              <label className="label text-gray-700">Email</label>

              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label text-gray-700">Password</label>

              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>

            {/* Forgot Password */}
            

            {/* Login Button */}
            <button className="btn btn-primary w-full mt-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
