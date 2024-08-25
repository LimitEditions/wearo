import React, { useEffect, useState } from "react";
import { ITextItemsListProps } from "../../../../types/interfaces/componentsProps/ITextItemsListProps";
import { BrandRequestModel, UserModel } from "../../../../api/data-contracts";
import { getBrandRequestInfo, getUserInfo } from "../../../../utils/getTextItems";
import Item from "../../../../Components/common/ItemGroup/Item";
import { Input } from "../../../../Components/common/InputGroup/Input";
import { Button } from "../../../../Components/common/Button";
import { useUserUpdate } from "../../../../hooks/useUserUpdate";


export const TextItemsList: React.FC<ITextItemsListProps> = ({
    info,
    type,
    edit,
    onChange
}) => {
    // стейт на обновление данных
    const [updatedData, setUpdatedData] = useState(info);
    const [sendData, setSendData] = useState<boolean>(false);
    const [data, error] = useUserUpdate(updatedData, sendData, setSendData);
    useEffect(() => {
        if(data && !error) setUpdatedData(data);
    }, [data, error])

    // Определяем, данные какого типа пришли
    const currentModel =
        type === "brandRequest" ? (updatedData as BrandRequestModel) : (updatedData as UserModel);
    
    // Создаем массив с названиями полей и их значениями
    const currentInfo =
        type === "brandRequest"
        ? getBrandRequestInfo(currentModel)
        : getUserInfo(currentModel, type);

    return (
        <>
            {currentInfo.map((el) => {
                return (
                    !edit? <Item key={el.infoTitle}>
                        <div className='w-full bg-gray-100 flex justify-between animate-fade-in'>
                            <div>
                                <h3 className='text-xs font-normal'>{el.infoTitle}</h3>
                                {el.value ? (
                                    <span className='font-normal text-sm'>{el.value}</span>
                                    ) : (
                                    <span className='font-normal text-sm'>
                                        Данные не указаны
                                    </span>
                                )}
                            </div>
                        </div>
                    </Item>:
                    <div key={el.infoTitle} className="py-1 px-2">
                        {
                            el.infoTitle.includes('Дата') ?
                            <></>:
                            <div className="animate-fade-in">
                                <label htmlFor={el.infoTitle}>
                                    {el.infoTitle}
                                    {el.value && <span className="float-right">Текущее значение: {el.value}</span>}
                                </label>
                                <Input
                                    name={el.name}
                                    onChange={onChange}
                                />
                            </div>
                        }
                    </div>
                );
            })}
            <div className='w-3/4 max-w-96 m-auto'>
                <Button showButton={edit || false} onClick={() => setSendData(true)}>Принять</Button>
            </div>
        </>
    );
};
