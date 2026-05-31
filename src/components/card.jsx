import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useUser from '../store/useUser';
import { dummyUser } from '../data/loginUser';

const Card = ({ title, path }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addUser = useUser((state) => state.addUser);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    addUser(dummyUser);
    setLoading(false);
    navigate('/home');
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-3 sm:px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body p-6 sm:p-8">
          <div className="text-center mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>

            <p className="text-sm text-base-content/60 mt-2">Welcome back! Please {title.toLowerCase()} to continue.</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Username</span>
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <User size={18} className="opacity-50" />

                <input
                  type="text"
                  className="grow text-sm"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Password</span>
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <Lock size={18} className="opacity-50" />

                <input
                  type="password"
                  className="grow text-sm"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary w-full mt-2">
              {loading ? 'Please wait...' : title}
            </button>
          </form>

          <p className="text-center text-sm mt-5 text-base-content/70">
            {title === 'Login' ? "Don't have an account?" : 'Already have an account?'}

            <span className="link link-primary ml-1" onClick={() => navigate(`/${path}`)}>
              {path}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
