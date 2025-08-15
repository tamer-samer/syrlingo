import {
  Edit,
  required,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={required()} label="ID" />
        <TextInput source="title" validate={required()} label="Title" />
        <TextInput source="imageSrc" validate={required()} label="Image" />
      </SimpleForm>
    </Edit>
  );
};
