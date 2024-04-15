import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { retrieve } from '../../utils/encryption';

export const EmployeeDetails = () => {
  const { id } = useParams();
  const token = retrieve('token');
  const [data, isLoading, dataError] = useApi(
    "usersDetail",
    'b5c5f220-e408-4394-b97b-115a1270e000',
    {headers: {Authorization: `Bearer ${token}`}},
    true
  );

  useEffect(() => {
    if (data || dataError) {
      console.log(data);
    }

  }, [data, isLoading, dataError])

  
  return (
    <div>Employee</div>
  )
}
