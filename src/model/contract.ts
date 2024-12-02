export type Contract = {
  id: string;
  userId: string;
  title: string;
  contractDate: string;
  contractAmount: number;
};

export type ContractDetail = {
  id: string;
  userId: string;
  title: string;
  contractDate: string;
  contractAmount: number;
  status: "진행중" | "완료" | "취소";
  paymentMethod: "현금" | "계좌이체" | "신용카드";
};
