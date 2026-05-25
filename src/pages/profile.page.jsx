import React from 'react';
import useUser from '../store/useUser';

const ProfilePage = () => {
  const user = useUser((state) => state.user);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-2xl font-bold">No User Found</h1>
      </div>
    );
  }

  const { firstName, lastName, email, phone, gender, photoUrl, skills, about } = user;

  return (
    <div className="flex justify-center mt-10 px-4 pb-4 mb-10">
      <div className="card bg-base-100 w-full max-w-2xl shadow-xl">
        <div className="card-body items-center text-center space-y-4">
          {/* Avatar */}
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring-2 ring-offset-2">
              <img src={photoUrl} alt="profile" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold">
            {firstName} {lastName}
          </h1>

          {/* About */}
          <p className="text-gray-500">{about}</p>

          {/* User Info */}
          <div className="w-full mt-4 space-y-3 text-left">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Email</span>
              <span>{email}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Phone</span>
              <span>{phone}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Gender</span>
              <span className="capitalize">{gender}</span>
            </div>
          </div>

          <div className="w-full mt-6">
            <h2 className="text-xl font-semibold mb-3 text-left">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills?.map((skill, index) => (
                <div key={index} className="badge badge-primary badge-outline p-4">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
