import { AddressCreateNestedManyWithoutCompaniesInput } from "./AddressCreateNestedManyWithoutCompaniesInput";
import { TeamCreateNestedManyWithoutCompaniesInput } from "./TeamCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  addresses?: AddressCreateNestedManyWithoutCompaniesInput;
  name?: string | null;
  teams?: TeamCreateNestedManyWithoutCompaniesInput;
};
