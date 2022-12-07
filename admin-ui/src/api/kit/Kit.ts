import { Product } from "../product/Product";

export type Kit = {
  createdAt: Date;
  id: string;
  product?: Array<Product>;
  updatedAt: Date;
};
