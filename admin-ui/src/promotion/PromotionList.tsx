import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";

export const PromotionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Promotions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
