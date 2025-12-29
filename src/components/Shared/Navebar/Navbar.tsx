"use client";
 
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
 
 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
    
 

 

  return (
    <header
      className={`w-full h-[80px] fixed top-0 z-50 transition-all duration-300 bg-[#F5F5F5]`}
    >
      <nav className="md:w-full md:container mx-auto px-8 md:px-12 flex justify-between items-center h-full ">
       
        <h1 className="text-2xl font-bold">Alzaf</h1>

 
        

         

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-[105px] left-0 w-full z-40">
          

          {/* Mobile User Section */}
         
        </div>
      )}
    </header>
  );
};

export default Navbar;