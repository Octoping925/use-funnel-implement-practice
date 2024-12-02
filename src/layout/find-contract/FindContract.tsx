import { ListItem } from "@/components/ListItem";
import { TopBar } from "@/components/TopBar";
import { Contract } from "@/model";

type Props = {
  onSelectContract: (contract: Contract) => void;
};

export function FindContract({ onSelectContract }: Props) {
  const contracts: Contract[] = [
    {
      id: "1",
      userId: "1",
      title: "친구에게 돈 받기",
      contractDate: "2024-01-01",
      contractAmount: 500,
    },
    {
      id: "2",
      userId: "2",
      title: "외상 값 내기",
      contractDate: "2024-01-02",
      contractAmount: 1000,
    },
  ];

  return (
    <>
      <TopBar title="계약 정보 조회하기" />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          계약을 선택해주세요
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <div>결과</div>
          {contracts.map((contract) => (
            <ListItem
              key={contract.id}
              onClick={() => onSelectContract(contract)}
              renderMain={contract.title}
              renderData={[
                contract.contractDate,
                contract.contractAmount + "원",
              ]}
            />
          ))}
          {contracts !== null && contracts.length === 0 && (
            <div style={{ textAlign: "center", color: "#666" }}>
              검색 결과가 없습니다
            </div>
          )}
        </div>
      </main>
    </>
  );
}
