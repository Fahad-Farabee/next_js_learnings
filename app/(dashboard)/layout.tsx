import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      dashboard Navbar
      {children}
    </div>
  );
};

export default Layout;
