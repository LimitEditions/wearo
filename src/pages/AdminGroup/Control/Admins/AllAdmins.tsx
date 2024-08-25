import React from "react";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { EmployeeList } from "../../../../Components/common/EmployeeList";
import { Button } from "../../../../Components/common/Button";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../../api/data-contracts";


export const AllAdmins = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("./addadmin");
    };

    return (
        <div className="h-[calc(100vh-100px)] pt-2 pb-24">
            <SectionsTitle title="Администраторы" needsClose={true}/>
            <EmployeeList userType={UserType.Admin}/>
            <div className='absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4'>
                <Button showButton={true} onClick={handleClick}>
                    Добавить сотрудника
                </Button>
            </div>
        </div>
    );
};
