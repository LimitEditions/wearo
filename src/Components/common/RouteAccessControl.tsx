import React, { useContext } from 'react'
import AuthContext from '../../context/AuthProvider';
import { UserType } from '../../api/data-contracts';
import { Page404 } from './Page404';


export const RouteAccessControl: React.FC<{roleArr: UserType[], children: JSX.Element}> = ({ roleArr, children }) => {
    const { isAuth } = useContext(AuthContext);

    if(isAuth.type && roleArr.includes(isAuth.type)) {
        return children;
    } else {
        return <Page404/>
    };
};
