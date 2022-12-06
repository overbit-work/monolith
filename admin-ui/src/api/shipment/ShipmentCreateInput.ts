import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentCreateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  trackingNumber?: string | null;
  waybillNumber?: string | null;
};
