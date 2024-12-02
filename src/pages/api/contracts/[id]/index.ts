import { CONTRACT_DETAILS } from "@/constants";
import { ContractDetail } from "@/model";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContractDetail | { error: string }>
) {
  const contractId = req.query.id;

  if (!contractId) {
    return res.status(400).json({ error: "ContractId is required" });
  }

  const contract = CONTRACT_DETAILS.find((it) => it.id === contractId);

  if (!contract) {
    return res.status(404).json({ error: "Contract not found" });
  }

  res.status(200).json(contract);
}
