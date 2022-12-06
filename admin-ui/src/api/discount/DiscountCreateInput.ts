import { ProductCreateNestedManyWithoutDiscountsInput } from "./ProductCreateNestedManyWithoutDiscountsInput";
import { PromotionCreateNestedManyWithoutDiscountsInput } from "./PromotionCreateNestedManyWithoutDiscountsInput";
import { UserCreateNestedManyWithoutDiscountsInput } from "./UserCreateNestedManyWithoutDiscountsInput";

export type DiscountCreateInput = {
  Percentage?: number | null;
  product?: ProductCreateNestedManyWithoutDiscountsInput;
  promotions?: PromotionCreateNestedManyWithoutDiscountsInput;
  user?: UserCreateNestedManyWithoutDiscountsInput;
};
