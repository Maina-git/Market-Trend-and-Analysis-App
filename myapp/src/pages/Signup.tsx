import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
        <button className="bg-blue-600 text-white w-full py-2 rounded" onClick={() => navigate('/dashboard')}>Sign Up</button>
        <p className="text-sm mt-2 text-center">Already have an account? <a href="/login" className="text-blue-600">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;