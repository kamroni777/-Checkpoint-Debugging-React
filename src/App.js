import { useState } from 'react';
import UserProfile from './components/UserProfile/UserProfile';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const toggleActive = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, active: !user.active } : user
    ));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    
    if (selectedUser?.id === updatedUser.id) {
      setSelectedUser(updatedUser);
    }
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserList 
        users={users} 
        onSelect={setSelectedUser}
        onToggleActive={toggleActive}
      />
      {selectedUser && (
        <UserProfile 
          user={selectedUser}
          onUpdate={updateUser} 
        />
      )}
    </div>
  );
}

export default App;