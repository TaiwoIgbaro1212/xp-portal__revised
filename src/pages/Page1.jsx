import React from "react";
import TableComponent from "../components/ui/Table";
import {allUsers} from "../store/slices/userSlice"
import { useSelector } from "react-redux";

export default function Page1() {
  const users = useSelector(allUsers);

  return (
    <div className="min-h-screen p-6">
      <h1>PAGE 1</h1>
      <TableComponent users={users} />
    </div>
  );
}
