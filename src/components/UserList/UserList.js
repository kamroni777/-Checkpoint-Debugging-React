function UserList({ users, onSelect, onToggleActive }) {
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <span onClick={() => onSelect(user)}>
                {user.name} ({user.age})
              </span>
              <button onClick={() => onToggleActive(user.id)}>
                {user.active ? 'Deactivate' : 'Activate'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserList;