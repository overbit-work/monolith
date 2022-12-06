import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const ShipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <TextInput label="TrackingNumber" source="trackingNumber" />
        <TextInput label="WaybillNumber" source="waybillNumber" />
      </SimpleForm>
    </Create>
  );
};
