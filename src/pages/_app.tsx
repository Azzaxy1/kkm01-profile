import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 900, // Durasi animasi (ms)
      mirror: true,
    });
  }, []);

  return (
    <NextUIProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </NextUIProvider>
  );
}

