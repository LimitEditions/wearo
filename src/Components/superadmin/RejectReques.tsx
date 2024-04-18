import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { retrieve } from '../../utils/encryption';
import { Button } from '../common/Button';
import { BlockStyle } from '../../types/interfaces/IStyles';

export const RejectReques = () => {
    const [shouldExecuteReject, setShouldExecuteReject] = useState<boolean>(false)
    const {id} = useParams();
    const [dataReject, isLoading, dataError] = useApi(
        "brandsRequestsUpdate",
        {guid: id, comment: 'Запрос отклонен'},
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        shouldExecuteReject
      );
  
    useEffect(() => {
      if (dataReject) {
        // setBrandInfo(data); 
        console.log(dataReject);
          
      }
    }, [dataReject, isLoading, dataError]);
  return (
        <Button showButton={true} styles={buttonStyle}>
            Отклонить
        </Button>
  )
}

const buttonStyle: BlockStyle = {
    blockSize: "w-full",
    background: "bg-white",
    spacing: "p-2 mb-3",
    text: "text-gray-500",
    border: "rounded-3xl border-gray-500 border",
  };
