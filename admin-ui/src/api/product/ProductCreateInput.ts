import { DiscountCreateNestedManyWithoutProductsInput } from "./DiscountCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  discounts?: DiscountCreateNestedManyWithoutProductsInput;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
