import React from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import Link from "next/link";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="w-full px-4">
      <div className="flex w-full justify-between items-center py-2">
        <Link href='/' className="flex items-center">
          <Image src={logo} alt="bell icon" className="w-[25px] mr-1"/>
          <h2>LivePaper</h2>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Header;
