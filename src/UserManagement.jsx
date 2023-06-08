import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

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
    <div>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Add User</button>
      </form>
      
      <table>
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
  );
};

export default UserManagement;
