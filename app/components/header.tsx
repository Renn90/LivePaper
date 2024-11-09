import React from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="w-full container">
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <Image src={logo} alt="bell icon" className="w-[25px] mr-1"/>
          <h2>LivePaper</h2>
        </div>
        {children}
        {/* <div className="flex items-center">
          <Image src={search} alt="bell icon" className="mr-4 w-[16px]" />
          <Image src={bell} alt="bell icon" className="mr-4 w-[16px]" />
          <Image src={user} alt="bell icon" className="w-[35px] h-[35px] object-cover rounded-full"/>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
