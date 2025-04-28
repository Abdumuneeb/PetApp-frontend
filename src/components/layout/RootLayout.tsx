import React, { ReactElement } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const RootLayout = (children: ReactElement) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default RootLayout;
