import { USERS } from "@/constants";
import { User } from "@/model";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | { error: string }>
) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const filteredUsers = USERS.filter((user) => user.name === name);

  res.status(200).json(filteredUsers);
}
