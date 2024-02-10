import React from "react";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import UserTable from "../features/users/UserTable";
import AddUser from "../features/users/AddUser";

export default function Users() {
  return (
    <Row type="vertical">
      <Heading as="h1">All Users</Heading>
      <UserTable />
      <div>
        <AddUser />
      </div>
    </Row>
  );
}
