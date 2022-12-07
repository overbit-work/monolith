import { Product } from "../product/Product";
import { Promotion } from "../promotion/Promotion";
import { User } from "../user/User";

export type Discount = {
  createdAt: Date;
  id: string;
  Percentage: number | null;
  product?: Array<Product>;
  promotions?: Array<Promotion>;
  updatedAt: Date;
  user?: Array<User>;
};
