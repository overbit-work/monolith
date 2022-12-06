import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscountListRelationFilter } from "../discount/DiscountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  discounts?: DiscountListRelationFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
