import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { ProductItemModel, ProductItemModelDataResult, UserModel } from '../../api/data-contracts';
import { retrieve } from '../../utils/encryption';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { Photo } from '../../Components/common/Photo';
import { Button } from '../../Components/common/Button';
import Item from '../../Components/common/ItemGroup/Item';
import { Products } from '../../Components/user/Product/Products';


export const UserPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = useMemo(() => retrieve("token"), []);
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [userData, setUserData] = useState<UserModel | null>(null);

    // запрос данных о пользователе
    const [data, isLoading, error] = useApi<'usersDetail', UserModel>(
        'usersDetail',
        id,
        config,
        true
    );
    useEffect(() => {
        setUserData(data || null)
    }, [data, error])


    // отправляем запрос по изделиям только в случае успешного ответа по юзеру
    const [getProds, setGetProds] = useState<boolean>(false)
    useEffect(() => {
        if(userData?.guid) {setGetProds(true)}
    }, [userData?.guid])

    // стейт и запрос на список изделий
    const [prodList, setProdList] = useState<ProductItemModel[]>();
    const [prodsData, ,] = useApi<'productItemsList', ProductItemModelDataResult>(
        'productItemsList',
        {UserGuid: userData?.guid, IncludeProduct: true},
        config,
        getProds
    );
    useEffect(() => {
        setProdList(prodsData?.data);
    }, [prodsData])

    const handleWrite = () => {
        if(userData?.userInfo?.telegramId) {
            navigate(`https://t.me/${userData?.userInfo?.telegramId}`)
        } else {
            console.log('ooops')
        };
    };

    const getStyleBtn = (type: 'write' | 'subscribe') => {
        let additionStyle;
        switch(type) {
            case('write'):
                additionStyle = 'bg-white-fon hover:bg-custom-blue text-custom-blue hover:text-white';
                break;
            case('subscribe'):
                additionStyle = 'bg-custom-blue hover:bg-white-fon text-white hover:text-custom-blue';
                break;
        };
        return `w-full border border-custom-blue p-1 ${additionStyle} text-sm rounded-lg shadow-lg transition-all duration-300`
    };

    return (
        <>
            <h1 className='w-full my-3 text-center text-lg uppercase'>Профиль</h1>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            <div className='w-1/3 flex items-center space-x-4 mx-4 my-8'>
                <Photo id={userData?.mainAvatarGuid || null} styles={'w-20 h-20 rounded-full'} alt={'фото профиля'} />
                <span className='text-md uppercase'>{userData?.username}</span>
            </div>
            <div className='w-full flex space-x-1 px-2'>
                <Button 
                    showButton={true}
                    styles={getStyleBtn('write')} 
                    onClick={handleWrite}
                >
                    Написать
                </Button>
                <Button 
                    showButton={true}
                    styles={getStyleBtn('subscribe')}
                >
                    Подписаться
                </Button>
            </div>
            <div className='mt-4 mx-2'>
                <Item path=''><span className='text-md uppercase'>Подписки</span></Item>
            </div>

            <h3 className='text-md uppercase mt-8 mx-4'>изделия</h3>
            {
                prodList && prodList?.length > 0 ? 
                <Products productsList={prodList} />:
                <span>У данного юзера нет вещей во владении</span>
            }
        </>
    );
};
