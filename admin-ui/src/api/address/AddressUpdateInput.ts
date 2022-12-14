import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  company?: CompanyWhereUniqueInput | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
