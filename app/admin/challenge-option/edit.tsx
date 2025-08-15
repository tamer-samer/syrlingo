import {
  BooleanInput,
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={required()} label="ID" />
        <TextInput source="text" validate={required()} label="Text" />
        <ReferenceInput
          source="challengeId"
          reference="challenges"
          label="Challenge"
        />
        <BooleanInput source="correct" label="Correct" />
        <TextInput source="imageSrc" label="Image Source" />
        <TextInput source="audioSrc" label="Audio Source" />
      </SimpleForm>
    </Edit>
  );
};
