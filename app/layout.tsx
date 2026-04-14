import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0b0f17", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
