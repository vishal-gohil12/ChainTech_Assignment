import { useState } from "react";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user?.email === email && user.password === password) {
      login({ email, password });
      navigate("/account");
    } else {
      alert("Email or Password is Wrong. Try again");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h3>
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <a href="register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};
