import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscountListRelationFilter } from "../discount/DiscountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { KitListRelationFilter } from "../kit/KitListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  discounts?: DiscountListRelationFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  kits?: KitListRelationFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
