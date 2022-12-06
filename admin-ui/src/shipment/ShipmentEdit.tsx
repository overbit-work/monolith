import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const ShipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <TextInput label="TrackingNumber" source="trackingNumber" />
        <TextInput label="WaybillNumber" source="waybillNumber" />
      </SimpleForm>
    </Edit>
  );
};
