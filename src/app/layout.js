import AuthProvider from "@/components/authProvider/AuthProvider";
import "./globals.css";
import { Inter, M_PLUS_1 } from "next/font/google";

const m_plus_1 = M_PLUS_1({ subsets: ["latin"] });

export const metadata = {
  title: "Tanya Jawab Syariah",
  description: "Website tanya jawab seputar keislaman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={m_plus_1.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
