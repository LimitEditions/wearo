import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { UserModel } from "../../../../api/data-contracts";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { Button } from "../../../../Components/common/Button";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { ModalsDelete } from "../../../../Components/common/ModalsDelete";
import { TextItemsList } from "./TextItemsList";
import { IsLoading } from "../../../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../../../Components/common/InfoGroup/ErrorReq";
import { useUserUpdate } from "../../../../hooks/useUserUpdate";
import { Modal } from "../../../../Components/common/Modal";


export const EmployeeDetailsPage = () => {
    // Флаг для открытия модалки удаления сотрудника
    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const { id } = useParams();

    // Запрос на получение подробной информации о пользователе
    const [userData, setUserData] = useState<UserModel>({});
    const [data, isLoading, dataError] = useApi<"usersDetail", UserModel>(
        "usersDetail",
        id,
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );
    useEffect(() => {
        if(data) setUserData(data);
    }, [data]);

    // колбек на измениния в инпуте
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        // Разделение имени по точке
        const nameParts = name.split('.');
    
        // Функция для обновления вложенного объекта
        const updateNestedState = (obj: any, keys: string[], value: any) => {
            const lastKey = keys.pop() as string;
            const nestedObj = keys.reduce((acc, key) => acc[key], obj);
            nestedObj[lastKey] = value;
        };
    
        setUserData(prevState => {
            const newState = { ...prevState };
            updateNestedState(newState, nameParts, value);
            return newState;
        });
    };
    
    // стейт на кнопку редактирования
    const [editBtn, setEditBtn] = useState<boolean>(true);

    // обновление данных о сотруднике
    const [sendData, setSendData] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [updatedData, updatedDataError] = useUserUpdate(userData, sendData, setSendData);
    useEffect(() => {
        if(updatedData && !updatedDataError) {
            setTimeout(() => {
                setUserData(updatedData);
            }, 1000);
        };
    }, [updatedData, updatedDataError]);

    // По нажатию на кнопку Удалить открывается модальное окно "Точно ли хотите удалить" с кнопками удаления и отмены
    const handleClick = () => {
        setIsOpenPopup(true);
    };

    return (
        <div className={getStyles(containerStyle)}>
            <SectionsTitle
                needsClose={false}
                title={"Администратор"}
                needBottomSpasing={true}
            />
            <>
                <TextItemsList 
                    info={userData}
                    type="admin"
                    edit={!editBtn}
                    onChange={handleChange}
                />
                <div >
                    <Button 
                        showButton={true}
                        className={`absolute top-8 right-8 ${editBtn ? 'rotate-[-45deg]' : ''} transition-transform duration-300`}
                        onClick={() => setEditBtn(prevVal => !prevVal)}
                    >
                        <img src='/images/closeBtn.png' alt="редактировать, закрыть"/>
                    </Button>
                </div>
                <div className={getStyles(divStyle)}>
                    <Button showButton={editBtn} onClick={handleClick}>
                        Удалить сотрудника
                    </Button>
                </div>
                <div className={getStyles(divStyle)}>
                    <Button showButton={!editBtn} onClick={() => {setSendData(true); setModal(true); setEditBtn(true)}}>
                        Принять изменения
                    </Button>
                </div>
            </>
            <ModalsDelete
                apiMethod="usersDelete"
                isOpen1={isOpenPopup}
                setIsOpen1={setIsOpenPopup}
                messageSure="Вы уверены, что хотите удалить сотрудника"
                messageSuccess="Сотрудник удален"
            />
            <Modal
                isOpen={modal}
                setIsOpen={setModal}
                swipeable={true}
            >
                {
                    updatedData && !updatedDataError ?
                    <p>Данные успешно обновлены</p>:
                    <p>Ошибка! Данные не получилось обновить</p>
                }
                <div className="w-3/4 mx-auto my-5">
                    <Button showButton={true} onClick={() => setModal(false)}>
                        Ok
                    </Button>
                </div>
            </Modal>

            <IsLoading show={isLoading} />
            <ErrorReq show={!!dataError} error={dataError} />
        </div>
    );
};

const containerStyle: BlockStyle = {
    background: "relative bg-gray-100",
    blockSize: "min-h-screen",
};

const divStyle: BlockStyle = {
    blockSize: "w-3/4 max-w-96",
    spacing: "m-auto pt-10",
};
