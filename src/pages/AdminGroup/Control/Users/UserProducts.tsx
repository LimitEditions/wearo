import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useApi from '../../../../hooks/useApi';
import { retrieve } from '../../../../utils/encryption';
import { ProductItemModel, ProductItemModelDataResult } from '../../../../api/data-contracts';
import { Products } from '../../../../Components/user/Product/Products';
import { IsLoading } from '../../../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../../../Components/common/InfoGroup/ErrorReq';


export const UserProducts = () => {
    const { id } = useParams();
    const [data, isLoading, dataError] = useApi<"productItemsList", ProductItemModelDataResult>(
        "productItemsList",
        { PageSize: 100, UserGuid: id, IncludeProduct: true },
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );

    const [prods, setProds] = useState<ProductItemModel[] | []>([]);
    useEffect(() => {
        if(data && !dataError) {
            setProds(data.data as ProductItemModel[]);
        };
    }, [data, dataError]);
    

    return (
        <div>
            {prods && <Products productsList={prods}/>}
            <IsLoading show={isLoading} />
            <ErrorReq show={!!dataError} error={dataError} />
        </div>
    );
};
