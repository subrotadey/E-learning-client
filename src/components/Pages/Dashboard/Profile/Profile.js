import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-2xl border">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-accent shadow-md object-cover"
            />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-gray-300 bg-gray-100 text-gray-400 text-4xl">
              ?
            </div>
          )}
        </div>

        {/* Profile Details */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold text-primary">👤 {user?.displayName || "Unnamed User"}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base-content">
            <p>
              <span className="font-semibold">📧 Email:</span><br />
              {user?.email}
            </p>
            <p>
              <span className="font-semibold">🆔 UID:</span><br />
              {user?.uid}
            </p>
            <p>
              <span className="font-semibold">🔑 Role:</span><br />
              {user?.role || "N/A"}
            </p>
            <p>
              <span className="font-semibold">📅 Joined:</span><br />
              {user?.metadata?.creationTime || "Unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
