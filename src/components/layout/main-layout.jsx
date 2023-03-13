import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
