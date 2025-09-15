import React from "react";

const Header = () => {
  return (
    <div className="w-full p-4 bg-pink-300 h-32">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img src={"/back.png"} alt="back_button" className="h-3 w-2" />
          <p>Back</p>
        </div>
        <h2 className=" font-semibold text-2xl">Dashboard</h2>
        <img src={"/profile.png"} alt="profile" className=" rounded-full" />
      </div>
    </div>
  );
};

export default Header;
