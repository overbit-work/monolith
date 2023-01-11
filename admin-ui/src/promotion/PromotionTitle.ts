import { Promotion as TPromotion } from "../api/promotion/Promotion";

export const PROMOTION_TITLE_FIELD = "name";

export const PromotionTitle = (record: TPromotion): string => {
  return record.name || String(record.id);
};
