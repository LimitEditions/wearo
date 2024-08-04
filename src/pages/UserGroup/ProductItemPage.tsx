import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { ProductItemModel } from '../../api/data-contracts';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { Button } from '../../Components/common/Button';
import { BlockStyle } from '../../types/interfaces/IStyles';


export const ProductItemPage = () => {
    const { code } = useParams();
    const navigate = useNavigate();

    // стейт на сведения по изделию
    const [itemInfo, setItemInfo] = useState({
        itemGuid: '',
        userGuid: '',
        colorGuid: ''
    })

    // данные с сервера по изделию, важно чтобы приходили параметры изделия (цвет, размер)
    const [data, isLoading, error] = useApi<'productItemsByCodeDetail', ProductItemModel>(
        'productItemsByCodeDetail',
        code,
        {},
        true
    );
    useEffect(() => {
        if(!data?.isDeleted) {
            setItemInfo({
                itemGuid: data?.productGuid as string,
                userGuid: data?.userGuid as string,
                colorGuid: data?.color?.colorGuid as string
            });
        };
    }, [data])

    // колбек на переход к изделию
    const handleClickItem = () => {
        navigate(`../product/${itemInfo.itemGuid}`,{
            state: {
                color: itemInfo.colorGuid || 'itemColor',
            }
        });
    };
    const handleClickUser = () => {
        navigate(`../user/${itemInfo.userGuid}`);
    };

    return (
        <>
            <div className='m-4'>
                <IsLoading show={isLoading} />
                <ErrorReq show={!!error} error={error}/>
                {error && <p>Неверный код! Обратитесь в службу поддержки.</p>}
                {/* {data && <div className='text-xs'>
                    <p>Id изделия: {itemInfo.itemGuid}</p>
                    <p>Id владельца: {itemInfo.userGuid}</p>
                    </div>} */}
            </div>
            
            {itemInfo.itemGuid &&
            <div className='h-[calc(80vh-60px)] mx-2 flex items-center justify-around space-x-2 '>
                <Button showButton={true} onClick={handleClickItem} styles={btnStyle}>Перейти на страницу изделия</Button>
                <Button showButton={true} onClick={handleClickUser} styles={btnStyle}>Перейти на страницу владельца</Button>
            </div>}
        </>
    );
};

const btnStyle: BlockStyle = {
    container: 'rounded-md',
    spacing: 'px-2 py-3',
    background: 'bg-violet',
    text: 'text-sm'
};
