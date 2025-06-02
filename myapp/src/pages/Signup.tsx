import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 px-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md prose prose-invert">
        <h2 className="text-3xl font-bold mb-4 text-green-500 text-center">Create Your FX Vision</h2>
        <p className="text-gray-400 text-sm mb-6 text-center">
          Get started with real-time forex trends and insights.
        </p>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition">
          Sign Up
        </button>
        <p className="text-sm mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
