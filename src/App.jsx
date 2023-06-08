import React from 'react';
import { UserProvider } from './UserContext';
import UserManagement from './UserManagement';

const App = () => {
  return (
    <UserProvider>
      <UserManagement />
    </UserProvider>
  )
}

export default App;
