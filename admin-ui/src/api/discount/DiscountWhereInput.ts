import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type DiscountWhereInput = {
  id?: StringFilter;
  Percentage?: FloatNullableFilter;
  product?: ProductListRelationFilter;
  user?: UserListRelationFilter;
};
