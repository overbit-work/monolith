import { OrderCreateNestedManyWithoutInvoicesInput } from "./OrderCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  order?: OrderCreateNestedManyWithoutInvoicesInput;
};
