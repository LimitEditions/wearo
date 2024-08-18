import React, { useEffect, useState } from 'react'
import { useFavorites } from '../../hooks/useFavorites';
import { retrieve } from '../../utils/encryption';
import { Button } from '../../Components/common/Button';
import { useNavigate } from 'react-router-dom';
import { ProductMini } from '../../Components/user/Product/ProductMini';


export const FavoritesPage = () => {
    const navigate = useNavigate();
    const [getData, setGetData] = useState<boolean>(false);
    const userGuid = retrieve('guid');
    useEffect(() => {
        if(userGuid) setGetData(true);
    }, [userGuid]);
    const { favoritesList } = useFavorites({
        sendData: getData,
        setSendData: setGetData,
        mode: 'check',
        userGuid: userGuid
    });
    const [favProdGuids, setFavProdGuides] = useState<(string | undefined)[]>();
    useEffect(() => {
        setFavProdGuides(favoritesList?.filter(fav => !fav.isDeleted)?.map(fav => fav.productGuid));
    }, [favoritesList]);

    return (
        <>
            {
                favProdGuids && favProdGuids.length > 0 ? 
                <div className='flex items-center justify-between'>
                    {favProdGuids.map(fav => {
                        return <ProductMini id={fav || ''} key={fav}/>
                    })}
                </div>: 
                <div className="h-[calc(100vh-250px)] flex justify-center items-center">
                    <div className="text-center w-3/4 ">
                        <p className='text-back'>Здесь будут храниться понравившиеся вам изделия</p>
                        <p className='text-gray-500'>Перейдите к поиску, чтобы найти подходящее вам изделие.</p>
                        <div className='mx-auto my-6'>
                            <Button showButton={true} onClick={() => navigate('./../posts')}>Перейти к поиску</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

