import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  shipments?: ShipmentListRelationFilter;
  totalPrice?: IntNullableFilter;
};
