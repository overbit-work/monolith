import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { DiscountTitle } from "../discount/DiscountTitle";

export const PromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
