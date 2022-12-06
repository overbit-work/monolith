import { ProductUpdateManyWithoutDiscountsInput } from "./ProductUpdateManyWithoutDiscountsInput";
import { PromotionUpdateManyWithoutDiscountsInput } from "./PromotionUpdateManyWithoutDiscountsInput";
import { UserUpdateManyWithoutDiscountsInput } from "./UserUpdateManyWithoutDiscountsInput";

export type DiscountUpdateInput = {
  Percentage?: number | null;
  product?: ProductUpdateManyWithoutDiscountsInput;
  promotions?: PromotionUpdateManyWithoutDiscountsInput;
  user?: UserUpdateManyWithoutDiscountsInput;
};
