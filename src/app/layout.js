import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { UserProvider } from "./context/UserContext";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Abroad Educares",
  description: "We are providing the best service and consultancy for your delightful immigration experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <UserProvider>
          <Navbar />
          {children}
          <Footer />
          </UserProvider>
      </body>
    </html>
  );
}
