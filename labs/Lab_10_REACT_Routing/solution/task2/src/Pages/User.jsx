import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams;
    const userId = params.id;
  return (
    <div>Пользователь №{userId}</div>
  )
}

export default User