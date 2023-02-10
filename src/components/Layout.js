import React from "react";
import Sidebar from "@/components/Sidebar";
import Meta from "./Meta";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>
        <Sidebar />
        <div className="main-content">
          <Nav />
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
