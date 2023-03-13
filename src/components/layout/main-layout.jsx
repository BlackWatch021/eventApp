import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
