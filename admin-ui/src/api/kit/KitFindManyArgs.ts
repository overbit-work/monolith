import { KitWhereInput } from "./KitWhereInput";
import { KitOrderByInput } from "./KitOrderByInput";

export type KitFindManyArgs = {
  where?: KitWhereInput;
  orderBy?: Array<KitOrderByInput>;
  skip?: number;
  take?: number;
};
