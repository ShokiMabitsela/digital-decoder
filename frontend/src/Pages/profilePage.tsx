import React, { useState } from "react";
import { CameraIcon, TrashIcon } from "@heroicons/react/outline"; // Import TrashIcon

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center py-12">
      <div className="bg-gray-900 w-full max-w-lg p-8 rounded-xl shadow-lg">
        {/* Profile Header */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src={profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-700 object-cover"
            />
            <label
              htmlFor="profile-pic"
              className="absolute bottom-0 right-0 p-2 bg-gray-800 rounded-full cursor-pointer"
            >
              <CameraIcon className="w-6 h-6 text-white" />
            </label>
            <input
              type="file"
              id="profile-pic"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Personal Information Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-400">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-400">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your last name"
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-400">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your phone Number"
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6 items-center">
          <div className="flex items-center space-x-2">
            {/* Remove Account with Trash Icon */}
            <a href="" className="text-red-500 flex items-center space-x-2 hover:text-red-400">
              <TrashIcon className="w-5 h-5 text-red-500" />
              <span>Remove Account</span>
            </a>
          </div>

          <div className="flex space-x-4">
            <button className="w-full py-3 px-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
              Save 
            </button>
            <button className="w-full py-3 px-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
