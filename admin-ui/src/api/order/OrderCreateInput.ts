import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutOrdersInput } from "./InvoiceCreateNestedManyWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ShipmentCreateNestedManyWithoutOrdersInput } from "./ShipmentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  invoices?: InvoiceCreateNestedManyWithoutOrdersInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  shipments?: ShipmentCreateNestedManyWithoutOrdersInput;
  totalPrice?: number | null;
};
