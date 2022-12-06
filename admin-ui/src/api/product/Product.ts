import { Discount } from "../discount/Discount";
import { Kit } from "../kit/Kit";
import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  discounts?: Array<Discount>;
  id: string;
  itemPrice: number | null;
  kits?: Array<Kit>;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
