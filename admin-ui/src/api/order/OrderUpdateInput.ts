import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceUpdateManyWithoutOrdersInput } from "./InvoiceUpdateManyWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ShipmentUpdateManyWithoutOrdersInput } from "./ShipmentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  invoices?: InvoiceUpdateManyWithoutOrdersInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  shipments?: ShipmentUpdateManyWithoutOrdersInput;
  totalPrice?: number | null;
};
