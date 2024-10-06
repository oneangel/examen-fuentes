import "./globals.css";
import { Work_Sans } from "next/font/google";
export const metadata = {
  title: "Examen",
  description: "Examen Fuentes",
};

const worksans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  );
}
