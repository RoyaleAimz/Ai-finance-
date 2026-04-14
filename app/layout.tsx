import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0b0f17", color: "white", margin: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
