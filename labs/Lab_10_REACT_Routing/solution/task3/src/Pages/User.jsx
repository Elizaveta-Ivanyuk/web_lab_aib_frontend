import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div>
      <h2>О пользователе:</h2>
      {user && (
        <div>
          <p>ID Пользователя: {id}</p>
          <p>Имя: {user.name}</p>
          <p>Рост:{user.height}</p>
          <p>Вес:{user.mass}</p>
          <p>Пол:{user.gender}</p>
        </div>
      )}
    </div>
  );
};

export default User;