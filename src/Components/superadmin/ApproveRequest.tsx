import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { retrieve } from '../../utils/encryption';
import { Button } from '../common/Button';
import { SuccessfulPopup } from '../common/SuccessfulPopup';
import { Info } from '../common/Info';

export const ApproveRequest = () => {
    const [shouldExecuteApprove, setShouldExecuteApprove] = useState<boolean>(false)
    const [showPopup, setShowPopup] = useState<boolean>(false)
    const {id} = useParams();
    const navigate = useNavigate()
    const [dataApprove, isLoading, dataError] = useApi(
      "brandsRequestsCreate2",
      id,
      { headers: { Authorization: `Bearer ${retrieve("token")}` } },
      shouldExecuteApprove
    );
  
    useEffect(() => {
      if (shouldExecuteApprove && (dataApprove || dataError)) {
        setShouldExecuteApprove(false)
        if(dataApprove){
            console.log(dataApprove);
            setShowPopup(true);
        }    
      }
    }, [dataApprove, isLoading, dataError]);
  return (
        <>
            <Button showButton={true} onClick={() => setShouldExecuteApprove(true)}>
            Одобрить
        </Button>
        {showPopup && <SuccessfulPopup message='Заявка успешно одобрена'/>}
        <Info msg='Ошибка запроса' showInfo={!!dataError} style=''/>
        </>
  )
}
