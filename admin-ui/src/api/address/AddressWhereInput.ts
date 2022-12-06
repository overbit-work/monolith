import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  company?: CompanyWhereUniqueInput;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
