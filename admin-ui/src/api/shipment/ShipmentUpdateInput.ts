import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  trackingNumber?: string | null;
  waybillNumber?: string | null;
};
