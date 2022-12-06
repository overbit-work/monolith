import { Discount } from "../discount/Discount";

export type Promotion = {
  createdAt: Date;
  discount?: Discount | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
