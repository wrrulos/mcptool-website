"use client";

import Image from "next/image";
import { useState } from "react";

import { MCPTOOL_ICON } from "@/app/constants/imageConstants";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-transparent p-4 fixed top-0 z-10 w-full">
      <Image src={MCPTOOL_ICON} alt="MCPTool Icon" width={50} height={50} />

      <div className="md:hidden">
        <a className="text-white" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? "Cerrar" : "☰"}
        </a>
      </div>
  
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">Services</a>
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white">Contact</a>
      </div>
      {/* Menú hamburguesa para dispositivos móviles */}
      {showMenu && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <a href="#" className="text-white mb-2">Home</a>
          <a href="#" className="text-white mb-2">Services</a>
          <a href="#" className="text-white mb-2">About</a>
          <a href="#" className="text-white mb-2">Contact</a>
        </div>
      )}
    </nav>
  );
}
