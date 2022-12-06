import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PromotionWhereInput = {
  discount?: DiscountWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
