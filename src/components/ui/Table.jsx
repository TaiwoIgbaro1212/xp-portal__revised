import React from "react";
import { Link } from "react-router-dom";
import Modal, { useModal } from "../ui/Modal";

export default function TableComponent({users}) {
  const { closeModal } = useModal();

  if (users.length < 1) {
    return (
      <Modal isModalClosed={false} closeModal={closeModal} >
        <span className="loading loading-ring w-48 text-primary bg-yellow-400 text-center"></span>
      </Modal >
    )
  }

  return (
    <table className="table rounded-none bg-slate-50">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th>detail</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <UsersList users={users} />
      </tbody>
      {/* foot */}
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th>details</th>
          <th>action</th>
        </tr>
      </tfoot>
    </table>
  );
}

export function UsersList({ users }) {

  return (users.map((user, index) => {
    return (
      <tr key={index}>
        <th>
          <label>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-circle w-12 h-12">
                <img
                  src={user.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.country}</div>
            </div>
          </div>
        </td>
        <td>
          {user.company}
          <br />
          <span className="badge badge-ghost badge-sm">
            {user.job}
          </span>
        </td>
        <td>{user.color}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{user.gender}</button>
        </th>
        <td className="">
          <details className="dropdown">
            <summary className="text-lg btn">🚦</summary>
            <ul className="p-2 shadow menu z-10 right-0 dropdown-content bg-base-100 rounded-md w-52">
              <li>
                <Link onClick={() => { console.log(user.id) }} to="#">Check Id</Link>
              </li>
              <li>
                <Link to="#">Delete {user.name}</Link>
              </li>
            </ul>
          </details>
        </td>
      </tr>
    )
  }))
}
