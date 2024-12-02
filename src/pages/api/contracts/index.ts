import { CONTRACTS } from "@/constants/contracts";
import { Contract } from "@/model";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contract[] | { error: string }>
) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "UserId is required" });
  }

  const filteredContracts = CONTRACTS.filter(
    (contracts) => contracts.userId === userId
  );

  res.status(200).json(filteredContracts);
}
