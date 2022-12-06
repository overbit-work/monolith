import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type CompanyWhereInput = {
  addresses?: AddressListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  teams?: TeamListRelationFilter;
};
