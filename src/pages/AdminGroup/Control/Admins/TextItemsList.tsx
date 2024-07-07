import React from "react";
import { ITextItemsListProps } from "../../../../types/interfaces/componentsProps/ITextItemsListProps";
import { BrandRequestModel, UserModel } from "../../../../api/data-contracts";
import { getBrandRequestInfo, getUserInfo } from "../../../../utils/getTextItems";
import Item from "../../../../Components/common/ItemGroup/Item";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { Input } from "../../../../Components/common/InputGroup/Input";


export const TextItemsList: React.FC<ITextItemsListProps> = ({
    info,
    type,
    edit,
    onChange
}) => {
    // Определяем, данные какого типа пришли
    const currentModel =
        type === "brandRequest" ? (info as BrandRequestModel) : (info as UserModel);
    
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
                        <div className={getStyles(containerStyle)}>
                            <div>
                                <h3 className={getStyles(h3Style)}>{el.infoTitle}</h3>
                                {el.value ? (
                                    <span className={getStyles(spanStyle)}>{el.value}</span>
                                    ) : (
                                    <span className={getStyles(spanStyle)}>
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
        </>
    );
};

const h3Style: BlockStyle = {
    text: "text-xs font-normal",
};

const spanStyle: BlockStyle = {
    text: "font-normal text-sm",
};

const containerStyle: BlockStyle = {
    blockSize: "w-full",
    background: "bg-gray-100",
    container: "flex justify-between",
    transitionsAnimation: 'animate-fade-in'
};
