import {
  BooleanInput,
  Create,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
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
    </Create>
  );
};
