import { useState } from 'react';

function UserProfile({ user, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(prevUsers => 
      prevUsers.map(u => u.id === user.id ? formData : u)
    );
    setEditing(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Status: {user.active ? 'Active' : 'Inactive'}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;