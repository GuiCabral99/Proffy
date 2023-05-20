import "./globals.css";
import { Poppins, Archivo } from "next/font/google";

export const metadata = {
  title: "Proffy",
  description: "Sua plataforma de estudos online",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-archivo",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={`${poppins.variable} ${archivo.variable} font-poppins`}
    >
      <body>{children}</body>
    </html>
  );
}
