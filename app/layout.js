import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "RentCar – Location de voitures premium",
  description: "Louez la voiture de vos rêves en quelques clics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${raleway.variable} ${inter.variable} font-inter bg-gray-50`}>
        <Header />
        
        <div className="pt-20">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}