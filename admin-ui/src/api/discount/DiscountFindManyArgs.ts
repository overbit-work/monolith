import { DiscountWhereInput } from "./DiscountWhereInput";
import { DiscountOrderByInput } from "./DiscountOrderByInput";

export type DiscountFindManyArgs = {
  where?: DiscountWhereInput;
  orderBy?: Array<DiscountOrderByInput>;
  skip?: number;
  take?: number;
};
