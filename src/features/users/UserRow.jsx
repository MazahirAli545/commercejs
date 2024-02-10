import { format } from "date-fns";
import Table from "../../ui/Table";
import styled from "styled-components";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteUser from "./useDeleteUser";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiTrash } from "react-icons/hi2";

const Name = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
`;

const CreateDate = styled.div`
  color: var(--color-grey-500);
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

export default function UserRow({ user }) {
  console.log(user);
  const { deleteUser, isDeleting } = useDeleteUser();
  const {
    id: userId,
    email,
    created_at,
    user_metadata: { fullName, avatar },
  } = user;

  return (
    <Table.Row>
      <Name>{fullName}</Name>
      <div>{email}</div>
      <CreateDate>{format(new Date(created_at), "MMM dd yyyy")}</CreateDate>
      <Avatar src={avatar || "default-user.jpg"} />

      <Modal>
        <Modal.Open opens="delete-row">
          <ButtonIcon variation="danger">
            <HiTrash />
          </ButtonIcon>
        </Modal.Open>

        <Modal.Window name="delete-row">
          <ConfirmDelete
            disabled={isDeleting}
            onConfirm={() => deleteUser(userId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
