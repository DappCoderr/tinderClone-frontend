import React from 'react';
import { navbar_profile } from '../constant/navbar';
import useUser from '../store/useUser';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ title }) => {
  const user = useUser((state) => state.user);
  const removeUser = useUser((state) => state.removeUser);

  const navigate = useNavigate();

  const logoutHandler = () => {
    removeUser();
    navigate('/login');
  };

  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-3 sm:px-5 sticky top-0 z-50">
      <div className="flex-1">
        <button className="text-lg sm:text-xl font-bold tracking-tight" onClick={() => navigate('/home')}>
          {title}
        </button>
      </div>

      <div className="flex items-center gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="profile" src={user?.photoUrl || navbar_profile} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-300"
            >
              <li>
                <button onClick={() => navigate('/profile')}>Profile</button>
              </li>
              <li>
                <button>Settings</button>
              </li>

              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-sm btn-primary" onClick={() => navigate('/login')}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
