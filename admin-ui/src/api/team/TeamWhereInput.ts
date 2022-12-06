import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TeamWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  users?: UserListRelationFilter;
};
