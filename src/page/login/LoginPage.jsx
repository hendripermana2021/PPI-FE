import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Ganti URL dengan endpoint login backend-mu
      const response = await axios.post(API_BASE_URL + "/login", {
        email,
        password,
      });

      // Misal token ada di response.data.token
      const token = response.data.token;

      // Simpan token di localStorage
      localStorage.setItem("authToken", token);

      // Redirect ke halaman utama (misal '/')
      navigate("/stuff");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Autumn Fest"
          src="/clover.png"
          className="mx-auto h-12 w-auto drop-shadow-md"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-orange-800 drop-shadow-sm">
          🍂 Sign in to Autumn Fest 🍁
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-orange-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border border-orange-300 bg-white px-3 py-2 text-base text-orange-900 placeholder:text-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-orange-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-orange-600 hover:text-orange-800"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border border-orange-300 bg-white px-3 py-2 text-base text-orange-900 placeholder:text-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-400 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full justify-center rounded-md bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-orange-700">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-orange-600 hover:text-orange-800"
          >
            Join the autumn food stand 🍁
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
