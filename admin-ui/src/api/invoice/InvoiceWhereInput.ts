import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type InvoiceWhereInput = {
  id?: StringFilter;
  order?: OrderListRelationFilter;
};
