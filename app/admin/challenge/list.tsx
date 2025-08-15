import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const ChallengeList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="question" />
        <ReferenceField source="lessonId" reference="lessons" />
        <TextField source="type" />
        <TextField source="order" />
      </Datagrid>
    </List>
  );
};
