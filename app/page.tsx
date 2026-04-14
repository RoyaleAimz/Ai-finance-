export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "22px", marginBottom: "20px" }}>
        Dashboard
      </h1>

      <div
        style={{
          background: "#111827",
          padding: "16px",
          borderRadius: "10px",
          marginBottom: "15px"
        }}
      >
        Balance: $0
      </div>

      <div
        style={{
          background: "#111827",
          padding: "16px",
          borderRadius: "10px",
          marginBottom: "15px"
        }}
      >
        Bills: None
      </div>

      <div
        style={{
          background: "#111827",
          padding: "16px",
          borderRadius: "10px"
        }}
      >
        Income: None
      </div>
    </div>
  );
}
