import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from "../components/Header";
import Footer from "../components/Footer";

const bricolage_grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cropica",
  description:
    "Cropica is a cutting-edge web application designed to revolutionize the way farmers track and manage crop prices. By providing real-time market data, historical trends, and expert analysis, Cropica empowers farmers to make informed decisions and maximize their profits. The platform is user-friendly, supports multiple languages, and offers offline access, ensuring that farmers have the information they need, whenever and wherever they need it.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage_grotesque.variable} font-serif`}>
        <Theme>
          <Header></Header>
          {children}
          <Footer></Footer>
        </Theme>
      </body>
    </html>
  );
}
