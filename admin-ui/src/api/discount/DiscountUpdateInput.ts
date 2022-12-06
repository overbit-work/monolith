import { ProductUpdateManyWithoutDiscountsInput } from "./ProductUpdateManyWithoutDiscountsInput";
import { UserUpdateManyWithoutDiscountsInput } from "./UserUpdateManyWithoutDiscountsInput";

export type DiscountUpdateInput = {
  Percentage?: number | null;
  product?: ProductUpdateManyWithoutDiscountsInput;
  user?: UserUpdateManyWithoutDiscountsInput;
};
