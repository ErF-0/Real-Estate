import NextAuthProvider from "@/providers/NextAuthProvider";
import { yekan } from "@/utils/fonts";

import Layout from "@/layout/Layout";
import "./globals.css";

export const metadata = {
  title: "املاک",
  description: "خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
  themeColor: "#a62626",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
