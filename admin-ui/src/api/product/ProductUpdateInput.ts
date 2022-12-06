import { DiscountUpdateManyWithoutProductsInput } from "./DiscountUpdateManyWithoutProductsInput";
import { KitUpdateManyWithoutProductsInput } from "./KitUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  discounts?: DiscountUpdateManyWithoutProductsInput;
  itemPrice?: number | null;
  kits?: KitUpdateManyWithoutProductsInput;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
