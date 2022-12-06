import { Discount } from "../discount/Discount";
import { JsonValue } from "type-fest";
import { Team } from "../team/Team";

export type User = {
  createdAt: Date;
  discounts?: Array<Discount>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  team?: Team | null;
  updatedAt: Date;
  username: string;
};
