import { Discount } from "../discount/Discount";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  discounts?: Array<Discount>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
