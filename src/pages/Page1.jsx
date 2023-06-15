import React from "react";
import TableComponent from "../components/ui/Table";
import {users} from "../store/slices/userSlice"
import { useSelector } from "react-redux";

export default function Page1() {
  const usersData = useSelector(users);

  return (
    <div className="min-h-screen p-6">
      <h1>PAGE 1</h1>
      <TableComponent users={usersData} />
    </div>
  );
}
