import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import { ProductItem } from '../../Components/user/ProductItem/ProductItem';
import useApi from '../../hooks/useApi';
import { ProductItemModel } from '../../api/data-contracts';
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';


export const ProductItemPage = () => {
    const { id } = useParams();
    const [data, isLoading, error] = useApi<'productItemsDetail', ProductItemModel>(
      'productItemsDetail', id, {}, true
    );
    
    return (
        <>
            <Routes>
                <Route index element={
                    <div className={getStyles(containerStyle)}>
                        <IsLoading show={isLoading} />
                        <ErrorReq show={!!error} error={error}/>
                        {data && <ProductItem data={data}/>}
                    </div>
                }/>
                <Route path='/clothing_party' element={<>Партия одежды {data?.clothingParty}</>} />
            </Routes>
        </>
    )
};

const containerStyle: BlockStyle = {
    container: 'w-full sm:w-1/4',
    spacing: 'px-2 space-y-7',
};
  