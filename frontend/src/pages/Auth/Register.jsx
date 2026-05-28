import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      password: ''
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    navigate('/');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold text-center mb-6">

        Register

      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg">

          Register

        </button>

      </form>

    </div>
  );
};

export default Register;