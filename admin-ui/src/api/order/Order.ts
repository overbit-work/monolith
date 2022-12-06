import { Customer } from "../customer/Customer";
import { Invoice } from "../invoice/Invoice";
import { Product } from "../product/Product";
import { Shipment } from "../shipment/Shipment";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  invoices?: Array<Invoice>;
  product?: Product | null;
  quantity: number | null;
  shipments?: Array<Shipment>;
  totalPrice: number | null;
  updatedAt: Date;
};
