import React from "react";
import { Button } from "../../../../Components/common/Button";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../../api/data-contracts";
import { UsersList } from "../../../../Components/superadmin/UsersList";


export const AdminsListPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[calc(100vh-150px)] pt-2 pb-24">
            <h3 className='w-full text-center uppercase my-4'>Администраторы</h3>
            <UsersList userType={UserType.Admin} />
            <div className='absolute bottom-32 left-1/2 -translate-x-1/2 w-3/4'>
                <Button showButton={true} onClick={() => navigate("./addadmin")}>
                    Добавить сотрудника
                </Button>
            </div>
        </div>
    );
};
