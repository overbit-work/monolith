import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { PromotionTitle } from "../promotion/PromotionTitle";
import { UserTitle } from "../user/UserTitle";

export const DiscountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Percentage" source="Percentage" />
        <ReferenceArrayInput
          source="product"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="promotions"
          reference="Promotion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromotionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="user"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
