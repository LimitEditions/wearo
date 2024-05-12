import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import { Product } from '../../Components/user/Product';
import useApi from '../../hooks/useApi';
import { ProductModel } from '../../api/data-contracts';
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { IsLoading } from '../../Components/common/IsLoading';
import { CommentsPage } from './CommentsPage';
import { ErrorReq } from '../../Components/common/ErrorReq';

export const ProductPage = () => {
    const { id } = useParams();
    const [data, isLoading, error] = useApi<'productsDetail', ProductModel>(
      'productsDetail', id, {}, true
    );
    
    return (
        <>
            <Routes>
                <Route index element={
                    <div className={getStyles(containerStyle)}>
                        <IsLoading show={isLoading} />
                        <ErrorReq show={!!error} error={error}/>
                        {data && <Product data={data}/>}
                    </div>
                }/>
                <Route path='/comments' element={<CommentsPage comments={data?.comments || []}/>} />
                <Route path='/buy_item' element={<>Покупка изделия</>} />
            </Routes>
        </>
    )
};

const containerStyle: BlockStyle = {
    container: 'w-full sm:w-1/4',
    spacing: 'px-2 space-y-7',
};
  
