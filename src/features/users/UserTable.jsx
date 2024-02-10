import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import useUsers from "./useUsers";
import UserRow from "./UserRow";
import Menus from "../../ui/Menus";

export default function UserTable() {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="1fr 1.5fr 1.5fr 1fr 4rem">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Created at</div>
          <div>Avatar</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={users}
          render={(user) => <UserRow user={user} key={user.id} />}
        />
      </Table>
    </Menus>
  );
}
