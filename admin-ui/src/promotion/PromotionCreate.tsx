import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { DiscountTitle } from "../discount/DiscountTitle";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="discount.id"
          reference="Discount"
          label="Discount"
        >
          <SelectInput optionText={DiscountTitle} />
        </ReferenceInput>
        <DateTimeInput label="EndDate" source="endDate" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
