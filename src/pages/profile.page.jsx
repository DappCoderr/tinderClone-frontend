import React from 'react';
import useUser from '../store/useUser';

const ProfilePage = () => {
  const user = useUser((state) => state.user);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <h1 className="text-xl sm:text-2xl font-semibold">No User Found</h1>
      </div>
    );
  }

  const { firstName, lastName, email, phone, gender, photoUrl, skills, about } = user;

  return (
    <div className="flex justify-center py-6 sm:py-10">
      <div className="card bg-base-100 w-full max-w-2xl shadow-xl border border-base-300">
        <div className="card-body items-center text-center p-5 sm:p-8">
          <div className="avatar mb-4">
            <div className="ring-primary ring-offset-base-100 w-24 sm:w-28 rounded-full ring-2 ring-offset-2">
              <img src={photoUrl} alt="profile" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold">
            {firstName} {lastName}
          </h1>

          <p className="text-sm sm:text-base text-base-content/60 max-w-lg">{about}</p>

          <div className="w-full mt-6 space-y-3 text-sm sm:text-base">
            <div className="flex justify-between border-b border-base-300 pb-2">
              <span className="font-semibold">Email</span>
              <span>{email}</span>
            </div>

            <div className="flex justify-between border-b border-base-300 pb-2">
              <span className="font-semibold">Phone</span>
              <span>{phone}</span>
            </div>

            <div className="flex justify-between border-b border-base-300 pb-2">
              <span className="font-semibold">Gender</span>
              <span className="capitalize">{gender}</span>
            </div>
          </div>

          <div className="w-full mt-7">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-left">Skills</h2>

            <div className="flex flex-wrap gap-2">
              {skills?.map((skill, index) => (
                <div key={index} className="badge badge-primary badge-outline px-4 py-3">
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
