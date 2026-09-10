import React, { useContext } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleOnForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(async (result) => {
        const user = result.user;

        console.log("Firebase User:", user);

        // Firebase user profile update
        await updateProfile(user, {
          displayName: name,
        });

        console.log("Name updated:", user.displayName);

        // Backend send data
        const userInfo = {
          name: name,
          email: email,
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
      .then((data) => {
        console.log("Backend response:", data);
      })
      .catch((error) => {
        console.error("Signup Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Create Account
          </h2>

          <form className="space-y-4" onSubmit={handleOnForm}>
            
            {/* Name */}
            <div>
              <label className="label text-gray-700">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>

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

            <button className="btn btn-success w-full mt-2">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
