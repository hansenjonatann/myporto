"use client";
import Blog from "@/components/Portofolio";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Navbar setDark={setIsDark} isDark={isDark} />
      <Hero isDark={isDark} />
      <Blog isDark={isDark} />
    </>
  );
}
