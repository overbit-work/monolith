import { DiscountCreateNestedManyWithoutUsersInput } from "./DiscountCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserCreateInput = {
  discounts?: DiscountCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  username: string;
};
