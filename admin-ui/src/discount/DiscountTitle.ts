import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "id";

export const DiscountTitle = (record: TDiscount): string => {
  return record.id || record.id;
};
