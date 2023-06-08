import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import "./App.css"
const UserManagement = () => {
  const { users, dispatch } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
    setName('');
    setEmail('');
  };

  const handleUpdateUser = (user) => {
    const updatedUser = { ...user, name: `${user.name} Updated` };
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
  };

  const handleDeleteUser = (userId) => {
    dispatch({ type: 'DELETE_USER', payload: userId });
  };

  return (
    <div className="Container">
      <div className="Main">
      <form onSubmit={handleAddUser}>
    <div className='Input'>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        </div>
        <button className="Submit" type="submit">Add User</button>
      </form>
      </div>
      <div className='B'>
      <table className="Table" border={3} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdateUser(user)}>
                  Update
                </button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserManagement;
