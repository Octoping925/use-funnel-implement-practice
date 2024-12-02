export function ListItem({
  onClick,
  renderMain,
  renderData,
}: {
  onClick: () => void;
  renderMain: string;
  renderData: (string | number)[];
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "white",
        cursor: "pointer",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div style={{ fontWeight: "bold" }}>{renderMain}</div>
      {renderData.map((data) => (
        <div key={data} style={{ fontSize: "14px", color: "#666" }}>
          {data}
        </div>
      ))}
    </button>
  );
}
