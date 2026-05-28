import { useState } from 'react';

const ResetPassword = () => {

  const [password, setPassword] =
    useState('');

  const [confirmPassword,
    setConfirmPassword] =
    useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      alert('Passwords do not match');

      return;
    }

    alert('Password Reset Successful');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold text-center mb-6">

        Reset Password

      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">

          Reset Password

        </button>

      </form>

    </div>
  );
};

export default ResetPassword;