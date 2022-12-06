import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
  waybillNumber?: SortOrder;
};
