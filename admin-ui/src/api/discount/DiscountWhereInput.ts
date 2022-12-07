import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { PromotionListRelationFilter } from "../promotion/PromotionListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type DiscountWhereInput = {
  id?: StringFilter;
  Percentage?: FloatNullableFilter;
  product?: ProductListRelationFilter;
  promotions?: PromotionListRelationFilter;
  user?: UserListRelationFilter;
};
