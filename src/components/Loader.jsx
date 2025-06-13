import React from "react";
import logo from "../images/bookMySquad-logo.png";

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">
      {/* Soft glow behind the logo */}
      <div className="absolute w-[250px] h-[250px] bg-themeRed opacity-20 blur-[100px] rounded-full animate-ping"></div>

      {/* Animated logo with shimmer and rotation */}
      <div className="relative z-10 group">
        <div className="relative w-[100px] h-[100px] animate-float-slow">
          <img
            src={logo}
            alt="BookMySquad Logo"
            className="w-full h-full object-contain transition-transform duration-700 group-hover:rotate-12"
          />
          {/* shimmer reflection */}
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-white/10 via-white/60 to-white/10 rotate-12 animate-shimmer rounded-full" />
        </div>
      </div>

      <p className="mt-6 text-themeRed font-semibold text-lg animate-pulse tracking-wider z-10">
        Finding your perfect squad...
      </p>
    </div>
  );
};

export default Loader;
