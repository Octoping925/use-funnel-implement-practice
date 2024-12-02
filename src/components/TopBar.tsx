type Props = {
  title: string;
  onBack?: () => void;
  onClose?: () => void;
};

export function TopBar({ title, onBack, onClose }: Props) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "56px",
        backgroundColor: "green",
        padding: "0 16px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={onBack}
        style={{
          border: "none",
          background: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          padding: "8px",
        }}
      >
        ←
      </button>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {title}
      </div>
      <button
        onClick={onClose}
        style={{
          border: "none",
          background: "none",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          padding: "8px",
        }}
      >
        ✕
      </button>
    </header>
  );
}
