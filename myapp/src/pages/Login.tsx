import { motion } from "framer-motion";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center px-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md prose prose-invert">
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Welcome to <span className="text-white">FX Vision</span>
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Sign in to access your forex dashboard.
        </p>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              required/>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
              required/>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300">
            Sign In
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <span className="text-blue-500 underline cursor-pointer">Sign Up</span>
        </p>
      </motion.div>
    </div>
  );
};
export default Login;
