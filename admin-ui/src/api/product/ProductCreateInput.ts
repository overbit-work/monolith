import { DiscountCreateNestedManyWithoutProductsInput } from "./DiscountCreateNestedManyWithoutProductsInput";
import { KitCreateNestedManyWithoutProductsInput } from "./KitCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  discounts?: DiscountCreateNestedManyWithoutProductsInput;
  itemPrice?: number | null;
  kits?: KitCreateNestedManyWithoutProductsInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
