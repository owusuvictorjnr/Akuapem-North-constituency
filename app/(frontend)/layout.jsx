"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function FrontendLayout({ children }) {
  // AOS INIT
  useEffect(() => {
    AOS.init({
      offsets: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
