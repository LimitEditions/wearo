import React from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Product } from '../../Components/user/Product/Product';
import useApi from '../../hooks/useApi';
import { ProductModel } from '../../api/data-contracts';
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { CommentsPage } from './CommentsPage';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';


export const ProductPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const { color } = location.state || {};
    
    
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
                        {data && <Product data={data} color={color} />}
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
  
