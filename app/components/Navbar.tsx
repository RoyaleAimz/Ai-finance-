import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        borderBottom: "1px solid #1f2937",
        background: "#0b0f17"
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "600" }}>
        AI Financial
      </div>

      <div style={{ display: "flex", gap: "14px", fontSize: "14px" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>
        <Link href="/bills" style={{ color: "white", textDecoration: "none" }}>
          Bills
        </Link>
        <Link href="/income" style={{ color: "white", textDecoration: "none" }}>
          Income
        </Link>
        <Link href="/transactions" style={{ color: "white", textDecoration: "none" }}>
          Transactions
        </Link>
        <Link href="/settings" style={{ color: "white", textDecoration: "none" }}>
          Settings
        </Link>
      </div>
    </div>
  );
}
