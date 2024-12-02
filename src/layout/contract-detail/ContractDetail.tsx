import { TopBar } from "@/components/TopBar";
import { ContractDetail } from "@/model";
import { useEffect, useState } from "react";

type Props = {
  contractId: string;
};

export function FindContractDetail({ contractId }: Props) {
  const [contract, setContract] = useState<ContractDetail | null>(null);

  useEffect(() => {
    fetch(`/api/contracts/${contractId}`)
      .then((res) => res.json())
      .then((data) => setContract(data));
  }, [contractId]);

  return (
    <>
      <TopBar title="계약 상세 조회하기" />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {contract === null ? (
          <div>로딩중...</div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              계약 상세
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                backgroundColor: "#f5f5f5",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <div>
                <div style={{ color: "#666", marginBottom: "4px" }}>
                  계약내용
                </div>
                <div style={{ whiteSpace: "pre-wrap" }}>{contract.title}</div>
              </div>
              <div>
                <div style={{ color: "#666", marginBottom: "4px" }}>
                  계약금액
                </div>
                <div>{contract.contractAmount}원</div>
              </div>

              <div>
                <div style={{ color: "#666", marginBottom: "4px" }}>
                  지급 방법
                </div>
                <div>{contract.paymentMethod}</div>
              </div>
              <div>
                <div style={{ color: "#666", marginBottom: "4px" }}>계약일</div>
                <div>{contract.contractDate}</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
