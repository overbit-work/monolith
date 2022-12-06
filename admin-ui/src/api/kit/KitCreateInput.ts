import { ProductCreateNestedManyWithoutKitsInput } from "./ProductCreateNestedManyWithoutKitsInput";

export type KitCreateInput = {
  product?: ProductCreateNestedManyWithoutKitsInput;
};
