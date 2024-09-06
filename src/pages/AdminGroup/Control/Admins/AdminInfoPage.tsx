import React, { useEffect, useState } from 'react'
import useApi from '../../../../hooks/useApi';
import { UserDetails } from '../../../../Components/superadmin/UserDetails';
import { retrieve } from '../../../../utils/encryption';
import { UserModel } from '../../../../api/data-contracts';
import { useParams } from 'react-router-dom';
import { IsLoading } from '../../../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../../../Components/common/InfoGroup/ErrorReq';


export const AdminInfoPage = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState<UserModel>({});
    const [data, isLoading, dataError] = useApi<"usersDetail", UserModel>(
        "usersDetail",
        id,
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );
    useEffect(() => {
        if(data && !dataError) setUserData(data);
    }, [data, dataError]);

    return (
        <>
            <h3 className='w-full text-center uppercase my-4'>Администратор</h3> 
            <IsLoading show={isLoading} />
            <ErrorReq show={!!dataError} error={dataError} />
            <UserDetails userData={userData} setUserData={setUserData}/>
        </>
    );
};
