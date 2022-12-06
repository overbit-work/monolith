import { AddressUpdateManyWithoutCompaniesInput } from "./AddressUpdateManyWithoutCompaniesInput";
import { TeamUpdateManyWithoutCompaniesInput } from "./TeamUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  addresses?: AddressUpdateManyWithoutCompaniesInput;
  name?: string | null;
  teams?: TeamUpdateManyWithoutCompaniesInput;
};
