import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import SignupForm from "../authentication/SignupForm";

export default function AddUser() {
  return (
    <Modal>
      <Modal.Open opens="add-user">
        <Button>Add User</Button>
      </Modal.Open>
      <Modal.Window name="add-user">
        <SignupForm />
      </Modal.Window>
    </Modal>
  );
}
