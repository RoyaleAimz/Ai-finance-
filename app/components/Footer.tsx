import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0b0f17", color: "white", margin: 0 }}>
        <Navbar />

        <div style={{ minHeight: "80vh" }}>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
