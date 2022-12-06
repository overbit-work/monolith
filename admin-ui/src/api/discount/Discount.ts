import { Product } from "../product/Product";
import { User } from "../user/User";

export type Discount = {
  createdAt: Date;
  id: string;
  Percentage: number | null;
  product?: Array<Product>;
  updatedAt: Date;
  user?: Array<User>;
};
