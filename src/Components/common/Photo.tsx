import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi';
import { retrieve } from '../../utils/encryption';

export const Photo = ({id, styles}: {id: string, styles: string}) => {
  const [file, setFile] = useState<any>();
  const [data, isLoading, dataError] = useApi(
    "filesDetail",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setFile(data);
      console.log(data);
      
    }
  }, [data, isLoading, dataError]);


  if (!id) return null;
  return (
    <div>File</div>
  )
}
