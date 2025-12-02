import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { sampleProfiles } from "../data/sampleProfiles";
import { TbBrandTinderFilled } from "react-icons/tb";
import { MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { name: "home", label: "Home", icon: <TbBrandTinderFilled className="w-6 h-6" /> },
    { name: "messages", label: "Messages", icon: <MdMessage className="w-6 h-6" /> },
    { name: "profile", label: "Profile", icon: <CgProfile className="w-6 h-6" /> },
    { name: "settings", label: "Settings", icon: <IoSettingsSharp className="w-6 h-6" /> },
  ];

  const handleNextProfile = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentProfile = sampleProfiles[currentIndex];

  return (
    <div className="min-h-screen pb-24 bg-gray-50">
      {/* Content area - shows different content depending on active tab */}
      <div className="p-4">
        {activeTab === "home" && (
          <div className="flex justify-center">
            <ProfileCard
              profile={currentProfile}
              onDislike={handleNextProfile}
              onLike={handleNextProfile}
              onSuperLike={handleNextProfile}
            />
          </div>
        )}

        {activeTab === "messages" && (
          <div className="text-center text-gray-500 mt-12">Messages view (coming soon)</div>
        )}

        {activeTab === "profile" && (
          <div className="text-center text-gray-500 mt-12">Profile view (coming soon)</div>
        )}

        {activeTab === "settings" && (
          <div className="text-center text-gray-500 mt-12">Settings view (coming soon)</div>
        )}
      </div>

      {/* Fixed bottom nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md">
        <div className="flex justify-around py-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex flex-col items-center text-sm cursor-pointer ${
                activeTab === tab.name ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {React.cloneElement(tab.icon, {
                className: `w-6 h-6 mb-1 ${
                  activeTab === tab.name ? "text-blue-500" : "text-gray-400"
                }`,
              })}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
