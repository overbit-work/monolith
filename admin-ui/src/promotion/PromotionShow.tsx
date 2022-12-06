import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";

export const PromotionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
