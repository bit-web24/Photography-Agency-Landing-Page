'use client';

import React, {useState, useEffect } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import Awards from "@/components/Awards";

import "./globals.css";

export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = '/header-bg.jpg';
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <>
      <div
      className={`relative bg-cover bg-center my-7 h-[670px] rounded-2xl ${bgLoaded ? 'bg-bg-img-1' : 'bg-gray-300'}`}
    >
      <Navbar />
      <Header />
    </div>

      <About />
      <Expertise />
      <Work />
      <Awards />
      <Footer />
    </>
  );
}
