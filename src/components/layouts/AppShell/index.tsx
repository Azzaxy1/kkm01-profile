import React from "react";
import Nav from "../Navbar";
import DynamicTitle from "@/components/DynamicTitle";
import Footer from "../Footer";
import { motion, useScroll } from "framer-motion";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <main>
        <DynamicTitle />
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default AppShell;
