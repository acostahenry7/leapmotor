"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutClientProps {
  children: React.ReactNode;
}

export const LayoutClient = ({ children }: LayoutClientProps) => {
  return (
    <>
      <Navbar />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
};
