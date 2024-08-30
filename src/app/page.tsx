'use client';
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import Awards from "@/components/Awards";

import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden relative bg-cover bg-center my-7 h-[655px] rounded-2xl before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-20" style={{ backgroundImage: "url('/header-bg.jpg')" }}>
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
