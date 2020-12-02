import React, { Component } from "react";
import styles from './UserForm.module.css';

const initialState = {
  firstName: "",
  lastName: "",
  birthday: "",
  email: "",
  telegram: "",
};

class UserForm extends Component {
  state = { ...initialState };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state };
    this.props.addUser(user);
    this.setState({ ...initialState });
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, birthday, email, telegram } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit} className={styles.formContainer}>
        <label>
          FirstName:
          <input
            type='text'
            value={firstName}
            name='firstName'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          LastName:
          <input
            type='text'
            value={lastName}
            name='lastName'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Birthday:
          <input
            type='date'
            value={birthday}
            name='birthday'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            value={email}
            name='email'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Telegram:
          <input
            type='text'
            value={telegram}
            name='telegram'
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add user</button>
      </form>
    );
  }
}

export default UserForm;
