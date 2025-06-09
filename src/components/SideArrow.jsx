import React from "react";

const SideArrow = () => {
  return (
    <div className="flex items-center">
      {/* Faded Line */}
      <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-gray-400 to-gray-800"></div>

      {/* Dot */}
      <div className="w-3 h-3 rounded-full bg-gray-800 "></div>
    </div>
  );
};

export default SideArrow;
