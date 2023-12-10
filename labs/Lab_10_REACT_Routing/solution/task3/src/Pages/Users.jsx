import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const userData = await response.json();
        setUsers(userData.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Пользователи</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index + 1}>
            <Link to={`/user/${index + 1}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
