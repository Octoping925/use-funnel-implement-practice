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
        height: "50px",
        backgroundColor: "green",
        border: "1px solid black",
      }}
    >
      <button onClick={onBack}>{"<-"}</button>
      <div style={{ fontSize: "20px", color: "white" }}>{title}</div>
      <button onClick={onClose}>X</button>
    </header>
  );
}
