import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={required()} label="Title" />
        <TextInput
          source="description"
          validate={required()}
          label="Description"
        />
        <ReferenceInput source="courseId" reference="courses" label="Course" />
        <NumberInput source="order" validate={required()} label="Order" />
      </SimpleForm>
    </Create>
  );
};
