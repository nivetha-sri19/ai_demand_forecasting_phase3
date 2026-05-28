import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = (e) => {

    e.preventDefault();

    localStorage.setItem(
      'token',
      'demo-token'
    );

    navigate('/dashboard');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold text-center mb-6">

        Login

      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">

          Login

        </button>

      </form>

    </div>
  );
};

export default Login;