import { PromotionWhereInput } from "./PromotionWhereInput";
import { PromotionOrderByInput } from "./PromotionOrderByInput";

export type PromotionFindManyArgs = {
  where?: PromotionWhereInput;
  orderBy?: Array<PromotionOrderByInput>;
  skip?: number;
  take?: number;
};
