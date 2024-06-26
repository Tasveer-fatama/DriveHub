import React from 'react'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './(main)/Navbar'






import { Toaster } from "react-hot-toast";
import {Route, BrowserRouter } from "react-router-dom";
import PrelineScript from '@/PrelineScrpt';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <Toaster position="top-center" />
        {children}

        </body> 
        <PrelineScript/>
       
    </html>
  );
}
