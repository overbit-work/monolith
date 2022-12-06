import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  createdAt?: SortOrder;
  discountId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
