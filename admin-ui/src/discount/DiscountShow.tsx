import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DISCOUNT_TITLE_FIELD } from "./DiscountTitle";

export const DiscountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Percentage" source="Percentage" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Promotion"
          target="DiscountId"
          label="Promotions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discount"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="StartDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
