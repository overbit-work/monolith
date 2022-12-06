import { ShipmentWhereInput } from "./ShipmentWhereInput";
import { ShipmentOrderByInput } from "./ShipmentOrderByInput";

export type ShipmentFindManyArgs = {
  where?: ShipmentWhereInput;
  orderBy?: Array<ShipmentOrderByInput>;
  skip?: number;
  take?: number;
};
