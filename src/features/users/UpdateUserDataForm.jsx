import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import useUser from "../authentication/useUser";
import { useState } from "react";
import useUpdateUser from "./useUpdateUser";

export default function UpdateUserDataForm() {
  const { user } = useUser();
  const {
    email,
    user_metadata: { fullName: currentFullName },
  } = user;

  const [fullName, setUserName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);
  const { updateUser, isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (fullName) updateUser({ fullName, avatar });
  }

  function handleCancel() {
    setAvatar(null);
    setUserName(fullName);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email Address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full Name">
        <Input
          type="text"
          id="fullName"
          defaultValue={currentFullName}
          onChange={(e) => setUserName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar Image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset" onClick={handleCancel}>
          Cancel
        </Button>
        <Button>Update User</Button>
      </FormRow>
    </Form>
  );
}
