import type { Metadata } from "next";
import "./globals.css";
import React from "react";

import { createContext } from "react";
import { ModalProvider } from "./projects/components/ModalContext";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "AUNG KO HTET",
  description: "AUNG KO HTET's PORTFOLIO",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        
      </head>
     
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      /> */}
      <body>
        <NavBar/>
        
        {children}
      </body>
    </html>
    </ModalProvider>
  );
}
