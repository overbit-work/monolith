import { ProductCreateNestedManyWithoutDiscountsInput } from "./ProductCreateNestedManyWithoutDiscountsInput";
import { UserCreateNestedManyWithoutDiscountsInput } from "./UserCreateNestedManyWithoutDiscountsInput";

export type DiscountCreateInput = {
  Percentage?: number | null;
  product?: ProductCreateNestedManyWithoutDiscountsInput;
  user?: UserCreateNestedManyWithoutDiscountsInput;
};
