"use client";
import { ThemeProvider } from "@mui/material";
import { Roboto } from "next/font/google";
import { lightTheme } from "./theme/theme";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <html>
        <body className={roboto.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
