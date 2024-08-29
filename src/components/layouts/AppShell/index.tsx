import React from "react";
import Nav from "../Navbar";
import DynamicTitle from "@/components/DynamicTitle";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <DynamicTitle />
      <Nav />
      {children}
    </main>
  );
};

export default AppShell;
