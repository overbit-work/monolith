import { Order } from "../order/Order";

export type Shipment = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  price: number | null;
  trackingNumber: string | null;
  updatedAt: Date;
  waybillNumber: string | null;
};
