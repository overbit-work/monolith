import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";

export type PromotionUpdateInput = {
  discount?: DiscountWhereUniqueInput | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
