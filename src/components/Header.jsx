// components/Header.jsx
import React from "react";
import { ReactComponent as ClockIcon } from "./icons/clock.svg"; // or inline SVG
import { ReactComponent as SearchIcon } from "./icons/search.svg";

const Header = () => {
  return (
    <header className="px-5 pt-8 pb-2 flex justify-between items-center bg-black">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-[#2A2A2A] overflow-hidden flex items-center justify-center border border-[#333]">
            <span className="text-lg">💸</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-[#888] font-medium leading-tight">@LeandroMilosavljevi</span>
          <span className="text-[15px] font-semibold leading-tight mt-0.5">LM</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ClockIcon className="w-6 h-6 text-white stroke-[1.5]" />
        <SearchIcon className="w-6 h-6 text-white stroke-[1.5]" />
      </div>
    </header>
  );
};

export default Header;
