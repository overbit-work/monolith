import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type KitWhereInput = {
  id?: StringFilter;
  product?: ProductListRelationFilter;
};
