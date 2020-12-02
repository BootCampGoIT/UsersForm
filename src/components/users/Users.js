import React, { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Filter from "./filter/Filter";
import UserForm from "./userForm/UserForm";
// import UserForm from "./userForm/UserForm";
import List from "./usersList/UsersList";

class Users extends Component {
  state = {
    users: [],
    filter: "",
  };

  addUser = (user) => {
    this.setState((prevState) => ({
      users: [...prevState.users, { id: uuidv4(), ...user }],
    }));
  };

  deleteUser = (e) => {
    const id = e.target.id;
    this.setState((prevState) => ({
      users: [...prevState.users.filter((user) => user.id !== id)],
    }));
  };

  onHandleChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFiteredUsers = () => {
    return [
      ...this.state.users.filter((user) =>
        user.firstName.toLowerCase().includes(this.state.filter.toLowerCase())
      ),
    ];
  };

  render() {
    return (
      <>
        <UserForm addUser={this.addUser} />
        <Filter
          filter={this.state.filter}
          onHandleChangeFilter={this.onHandleChangeFilter}
        />
        <List userList={this.getFiteredUsers()} deleteUser={this.deleteUser} />
      </>
    );
  }
}

export default Users;

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   const addUser = (user) => {
//     setUsers((prevState) => ({
//       users: [...prevState.users, { id: uuidv4(), ...user }],
//     }));
//   };

//   return (
//     <>
//       <UserForm addUser={addUser} />
//       <List userList={users} />
//     </>
//   );
// };

// export default Users;
