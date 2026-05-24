import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, path }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userName, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
        <div className="card-body p-8">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold">{title}</h2>

            <p className="text-sm text-base-content/60 mt-2">Welcome back! Please {title} to continue.</p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="space-y-5">
            {/* Username */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Username</span>
              </label>

              <label className="input input-bordered flex items-center gap-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary">
                <User size={18} className="opacity-50" />

                <input
                  type="text"
                  className="grow"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <label className="input input-bordered flex items-center gap-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary">
                <Lock size={18} className="opacity-50" />

                <input
                  type="password"
                  className="grow"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            {/* Button */}
            <button type="submit" className="btn bg-primary-content w-full mt-2">
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-6">
            Don&apos;t have an account?{' '}
            <span className="link link-primary font-medium" onClick={() => navigate(`/${path}`)}>
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
