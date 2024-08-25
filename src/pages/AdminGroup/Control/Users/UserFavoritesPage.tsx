import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFavorites } from '../../../../hooks/useFavorites';
import { ProductMini } from '../../../../Components/user/Product/ProductMini';


export const UserFavoritesPage = () => {
    const { id } = useParams();
    const [getData, setGetData] = useState<boolean>(true);
    
    const { favoritesList } = useFavorites({
        sendData: getData,
        setSendData: setGetData,
        mode: 'check',
        userGuid: id
    });
    const [favProdGuids, setFavProdGuides] = useState<(string | undefined)[]>();
    useEffect(() => {
        setFavProdGuides(favoritesList?.filter(fav => !fav.isDeleted)?.map(fav => fav.productGuid));
    }, [favoritesList]);

    return (
        <div className='flex items-center justify-between'>
            {favProdGuids && favProdGuids.map(fav => {
                return <ProductMini id={fav || ''} key={fav}/>
            })}
            {!favProdGuids && <div>Тут пока ничего нет</div>}
        </div>
    );
};
