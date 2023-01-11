import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "trackingNumber";

export const ShipmentTitle = (record: TShipment): string => {
  return record.trackingNumber || String(record.id);
};
