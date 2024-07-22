"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Button } from "./ui/button";
import { Compass, Download } from "lucide-react";

interface HeroProps {
  isDark: boolean;
}

const Hero = ({ isDark }: HeroProps) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Pengembang",
        "Konten Kreator",
        "Mahasiswa",
        "Pendiri HJ Codin Tech",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true, // Looping
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div
        className={
          !isDark
            ? "bg-gray-800 flex lg:flex-nowrap flex-wrap justify-center text-white  py-16 lg:justify-normal items-center "
            : " bg-white flex flex-wrap justify-center py-16 lg:flex-nowrap lg:justify-normal items-center "
        }
      >
        <div className="w-1/2 mx-4">
          <h1 className="font-bold text-xl lg:text-3xl">Hansen Jonatan</h1>
          <h3 className="mt-2">
            Saya Seorang <span ref={el} className="font-bold"></span>
          </h3>

          <div className="mt-4">
            <div className=" hidden md:flex space-x-4 items-center">
              <div className="">
                <div className="flex-col">
                  <h1 className="text-center font-bold">1</h1>

                  <h1>Project</h1>
                </div>
              </div>
              <div className="">
                <div className="flex-col">
                  <h1 className="text-center font-bold">2</h1>

                  <h1>Portofolio</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-center flex-wrap space-y-2 space-x-2 lg:space-y-0 lg:justify-normal">
              <Button>
                <Compass className="mr-2" />
                Jelajahi Saya
              </Button>
              <Button variant={"ghost"}>
                <div className="flex items-center">
                  <Download
                    color={!isDark ? "lightblue" : "blue"}
                    className="mr-2"
                  />
                  <span
                    className={
                      !isDark ? "text-sky-500" : "text-blue-900 font-bold"
                    }
                  >
                    {" "}
                    Download CV
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className=" flex items-center justify-center md:w-64 md:h-64 w-48 mt-8 md:mt-0 h-48  border-white border-2 rounded-full">
            <img
              src="/profil.jpeg"
              alt=""
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-cover transition-all duration- hover:opacity-50"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
