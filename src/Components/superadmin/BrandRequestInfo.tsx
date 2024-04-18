import React, { useEffect, useState } from 'react'
import { SectionsTitle } from '../common/SectionsTitle'
import { useParams } from 'react-router-dom'
import { BrandRequestModel } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { retrieve } from '../../utils/encryption';
import { Photo } from '../common/Photo';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

export const BrandRequestInfo = () => {
  const [brandInfo, setBrandInfo] = useState<BrandRequestModel>();
  const {id} = useParams();
  const [data, isLoading, dataError] = useApi(
    "brandsRequestsDetail",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setBrandInfo(data);
      console.log(data);
      
    }
  }, [data, isLoading, dataError]);
  return (
    <>
      <SectionsTitle needsClose={true} title='Заявка на открытие бренда' />
      {brandInfo?.photo && <Photo id={brandInfo?.photo} styles={getStyles(imgStyle)}/>}
    </>
  )
}

const imgStyle: BlockStyle = {
  blockSize: 'w-1/2',
  spacing: 'm-auto'
}
