import React from "react";

const UsersListItem = ({
  id,
  firstName,
  lastName,
  birthday,
  email,
  telegram,
  deleteUser,
}) => {
  return (
    <li>
      <p>
        Name:
        <span> {firstName}</span> <span>{lastName}</span>
      </p>
      <p>birthday: {birthday}</p>
      <p>email: {email}</p>
      <p>telegram: {telegram}</p>
      <button id={id} onClick={deleteUser}>
        Delete
      </button>
    </li>
  );
};

export default UsersListItem;
