import React, { useEffect, useState } from "react";
import { UserModel, UserModelDataResult, UserType} from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { getEmployeePosition } from "../../utils/getEmployeePosition";
import Item from "./ItemGroup/Item";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { ErrorReq } from "./InfoGroup/ErrorReq";
import { IsLoading } from "./InfoGroup/IsLoading";


export const EmployeeList = ({ userType }: { userType: UserType }) => {
    const [employeeList, setEmployeeList] = useState<UserModel[]>([]);

    // Должность сотрудника
    const position = getEmployeePosition(userType);
    // Запрос на получение списка пользователей с определенным типом
    const [data, isLoading, dataError] = useApi<'usersList', UserModelDataResult>(
        "usersList",
        { Types: userType },
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );
    
    useEffect(() => {
        const employees = data?.data?.filter(el => !el.isDeleted) as UserModel[];
        setEmployeeList(employees);
    }, [data])
    

    return (
        <>
            {employeeList &&
                employeeList.map((el) => {
                    return (
                        <Item path={`./admin/${el.guid}`} key={el.guid}>
                            <div>
                                <h3 className={getStyles(h3Style)}>
                                    {el.firstName ? el.firstName : "Имя не указано"}
                                </h3>
                                <span className={getStyles(spanStyle)}>{position}</span>
                            </div>
                        </Item>
                    )
                })
            }
            <IsLoading show={isLoading}/>
            <ErrorReq show={!!dataError} error={dataError}/>
        </>
    );
};

const h3Style: BlockStyle = {
    text: "text-sm font-normal",
};

const spanStyle: BlockStyle = {
    text: "font-normal text-xs text-gray-500",
};
