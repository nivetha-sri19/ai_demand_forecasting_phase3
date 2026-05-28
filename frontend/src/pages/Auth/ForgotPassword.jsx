import { useState } from 'react';

const ForgotPassword = () => {

  const [email, setEmail] =
    useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Password reset link sent to ${email}`
    );
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold text-center mb-6">

        Forgot Password

      </h1>

      <form
        onSubmit={handleSubmit}
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

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg">

          Send Reset Link

        </button>

      </form>

    </div>
  );
};

export default ForgotPassword;