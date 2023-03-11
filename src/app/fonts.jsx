import { Poppins, Archivo } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins",
  display: "swap",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-archivo",
});
