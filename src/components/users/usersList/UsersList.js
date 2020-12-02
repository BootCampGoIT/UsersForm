import React from "react";
import UsersListItem from "./usersListItem/UsersListItem";

// const initialState = {
//     firstName: "",
//     lastName: "",
//     birthday: "",
//     email: "",
//     telegram: "",
//   };

const UsersList = ({ userList, deleteUser }) => {
  return (
    <ul>
      {userList.map((user) => (
        <UsersListItem {...user} key={user.id} deleteUser={deleteUser}/>
      ))}
    </ul>
  );
};

export default UsersList;

{
  /* {
        // const  = user;
        return (
         
        );
      }) */
}
