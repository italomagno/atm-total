import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "./HeaderComponent";
import { AsideComponent } from "./AsideComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTOP-RE",
  description: "App criado para resolver algumas demandas da OTOP no Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body className={`${inter.className} flex min-h-screen w-full flex-col bg-muted/40`}>
        <AsideComponent />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <HeaderComponent/>
      {children}
      </div>


      </body>
    </html>
  );
}
