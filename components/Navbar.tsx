"use client";
import { Menu, MoonStar, Sun, ToggleLeft } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  isDark: boolean;
  setDark: any;
}

const Navbar = ({ isDark, setDark }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleTheme = () => {
    setDark(!isDark);
  };

  const navList = [
    {
      id: 1,
      path: "/",
      label: "Beranda",
    },
    {
      id: 2,
      path: "/blog",
      label: "Blog",
    },
    {
      id: 3,
      path: "/portofolio",
      label: "Portofolio",
    },
    {
      id: 4,
      path: "/kontak",
      label: "Kontak",
    },
  ];

  return (
    <>
      <div
        className={
          isDark
            ? "bg-white p-4 text-blue-800 border-b  border-2 "
            : "bg-gray-800 p-4 text-white border-b"
        }
      >
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="font-bold">Hansen Jonatan</h1>
          </div>
          <div className=" flex items-center">
            <ul className="hidden lg:flex lg:space-x-4 lg:text-sm">
              {navList.map((nav, index: number) => (
                <li key={index}>
                  <Link
                    className="
                    transition-all
                    duration-300
                    hover:underline
                    
                    font-semibold"
                    href={nav.path}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
              <button onClick={handleTheme}>
                {!isDark ? <Sun /> : <MoonStar color="black" />}
              </button>
            </ul>
            <div className="flex space-x-2 md:space-x-0 lg:hidden">
              <button onClick={handleTheme}>
                {!isDark ? <Sun /> : <MoonStar color="black" />}
              </button>
              <button onClick={handleModal} className=" flex lg:hidden">
                <Menu color={!isDark ? "white" : "black"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
