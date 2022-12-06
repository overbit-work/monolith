import { DiscountUpdateManyWithoutProductsInput } from "./DiscountUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  discounts?: DiscountUpdateManyWithoutProductsInput;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
