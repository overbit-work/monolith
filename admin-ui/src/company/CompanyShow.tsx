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

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Address"
          target="CompanyId"
          label="Addresses"
        >
          <Datagrid rowClick="show">
            <TextField label="Address 1" source="address_1" />
            <TextField label="Address 2" source="address_2" />
            <TextField label="City" source="city" />
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="State" source="state" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Zip" source="zip" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Team" target="CompanyId" label="Teams">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
