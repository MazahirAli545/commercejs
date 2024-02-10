import Row from "../ui/Row";
import Heading from "../ui/Heading";
import UpdateUserDataForm from "../features/users/UpdateUserDataForm";
import UpdatePasswordForm from "../features/users/UpdatePasswordForm";

export default function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row type="vertical">
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row type="vertical">
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}
