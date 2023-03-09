import "./globals.css";
import { poppins, archivo } from "./fonts";

export const metadata = {
  title: {
    default: "Proffy",
    template: "%s | Proffy",
  },
  description: "Sua plataforma de estudos online!",
  icons: {
    shortcut: "/images/icons/purple-heart.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${archivo.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
