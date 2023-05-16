import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"]
});

export const metadata = {
  title: "Results Summary App",
  description: "Created by Toyeesh Sinha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hanken.className}>{children}</body>
      {/* <body style={{fontFamily: "HankenGrotesk-Medium"}}>{children}</body> */}
    </html>
  );
}
