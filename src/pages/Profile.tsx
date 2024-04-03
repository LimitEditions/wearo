import React from 'react'
import useAuth from '../hooks/useAuth';

export const Profile = () => {
  const isAuthenticated = useAuth();

  console.log(isAuthenticated)

  return (
    <div>Profile</div>
  )
}
