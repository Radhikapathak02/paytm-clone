import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-96 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Welcome to PayTM App</h1>
        <p className="text-gray-700 mb-6">
          Send and receive money seamlessly. Fast. Secure. Reliable.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="border border-black text-black px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
