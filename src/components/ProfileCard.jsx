import React from "react";
import { GiCancel } from "react-icons/gi";
import { GoHeartFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

const ProfileCard = ({ profile, onDislike, onLike, onSuperLike }) => {
  if (!profile) return <p className="text-center mt-10 text-gray-600 text-lg">No more profiles</p>;

  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden mx-auto my-5">
      {/* Profile Image */}
      <div className="w-full h-80 overflow-hidden">
        <img
          src={profile.photo}
          alt={`${profile.name}'s photo`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold">
          {profile.name}, {profile.age}
        </h2>
        <p className="text-gray-500 mt-1">{profile.distance} km away</p>
        <p className="mt-2 text-gray-700">{profile.bio}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around py-3 border-t border-gray-200">
        {/* Dislike / Reject Button */}
        <button
          onClick={onDislike}
          className="text-2xl text-red-500 hover:scale-125 transform transition duration-200 cursor-pointer"
          title="Reject"
        >
          <GiCancel />
        </button>

        {/* Like Button */}
        <button
          onClick={onLike}
          className="text-2xl text-blue-500 hover:scale-125 transform transition duration-200 cursor-pointer"
          title="Like"
        >
          <GoHeartFill />
        </button>

        {/* Super Like Button */}
        <button
          onClick={onSuperLike}
          className="text-2xl text-green-500 hover:scale-125 transform transition duration-200 cursor-pointer"
          title="Super Like"
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
