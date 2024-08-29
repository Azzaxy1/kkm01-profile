import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </NextUIProvider>
  );
}

