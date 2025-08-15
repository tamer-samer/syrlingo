import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" validate={required()} label="Question" />
        <ReferenceInput source="lessonId" reference="lessons" label="Lesson" />
        <SelectInput
          source="type"
          choices={[
            { id: "SELECT", name: "Select" },
            { id: "ASSIST", name: "Assist" },
          ]}
          validate={required()}
          label="Type"
        />
        <NumberInput source="order" validate={required()} label="Order" />
      </SimpleForm>
    </Create>
  );
};
