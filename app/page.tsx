import LoginForm from "./components/LoginForm";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center uppercase mb-4">Admin Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default Home;
