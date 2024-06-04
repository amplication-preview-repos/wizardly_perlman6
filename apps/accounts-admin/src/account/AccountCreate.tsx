import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="E-Mail" source="eMail" type="email" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Create>
  );
};
