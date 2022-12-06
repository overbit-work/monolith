import { DiscountUpdateManyWithoutUsersInput } from "./DiscountUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserUpdateInput = {
  discounts?: DiscountUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  username?: string;
};
