import React from "react";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { EmployeeList } from "../../../../Components/common/EmployeeList";
import { Button } from "../../../../Components/common/Button";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
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
            <div className={getStyles(divStyle)}>
                <Button showButton={true} onClick={handleClick}>
                    Добавить сотрудника
                </Button>
            </div>
        </div>
    );
};

const divStyle: BlockStyle = {
    container: 'absolute bottom-12 left-1/2 -translate-x-1/2',
    blockSize: "w-3/4",
};
