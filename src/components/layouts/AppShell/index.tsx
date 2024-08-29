import React from "react";
import Nav from "../Navbar";
import DynamicTitle from "@/components/DynamicTitle";
import Footer from "../Footer";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <DynamicTitle />
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
