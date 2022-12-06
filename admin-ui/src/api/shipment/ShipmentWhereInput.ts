import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShipmentWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  trackingNumber?: StringNullableFilter;
  waybillNumber?: StringNullableFilter;
};
