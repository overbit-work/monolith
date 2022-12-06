import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";

export type PromotionCreateInput = {
  discount?: DiscountWhereUniqueInput | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
