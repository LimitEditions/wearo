import React, { useState } from "react";
import { BrandModel } from "../../api/data-contracts";
import useSubscribe from "../../hooks/useSubscribe";
import { Link } from "react-router-dom";
import { Photo } from "../common/Photo";
import { Button } from "../common/Button";
import { Highlights } from "./Stories&Hightlights/Highlights";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Arrow } from "../common/Arrow";
import Item from "../common/ItemGroup/Item";
import { SlPhone, SlEnvolope } from "react-icons/sl";
import { PiWhatsappLogo, PiTelegramLogo } from "react-icons/pi";

export const Brand = ({ brandInfo }: { brandInfo: BrandModel }) => {
    // статус подписки с возможностью подписаться/отписаться
    const [subStatus, handlerSub] = useSubscribe(brandInfo.guid as string);
    const handleClick = (event: any) => {
        handlerSub();
    };

    // Cтейт и колбек на разворот стрелки вниз и обратно
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const handleRotate = () => {
        setIsRotated(!isRotated);
    };
    console.log(brandInfo)

    type Contact = {
        href: string;
        Icon: React.ElementType;
    };      

    const brandInfoWithOptionalFields = brandInfo as BrandModel & Partial<{ phone: string }>;

    const potentialContacts: Array<Contact | null> = [
        brandInfoWithOptionalFields.whatsappId ? { href: `https://wa.me/${brandInfoWithOptionalFields.whatsappId}`, Icon: PiWhatsappLogo } : null,
        brandInfoWithOptionalFields.telegramId ? { href: `https://t.me/${brandInfoWithOptionalFields.telegramId}`, Icon: PiTelegramLogo } : null,
        brandInfoWithOptionalFields.email ? { href: `mailto:${brandInfoWithOptionalFields.email}`, Icon: SlEnvolope } : null,
        brandInfoWithOptionalFields.phone ? { href: `tel:${brandInfoWithOptionalFields.phone}`, Icon: SlPhone } : null
    ];

    // Фильтруем null-значения
    const contacts: Array<Contact> = potentialContacts.filter((contact): contact is Contact => contact !== null);

    return (
        <>
            <Photo
                id={brandInfo?.photo || null}
                styles={"border-4"}
                alt={"фото бренда"}
            />
            <div className="flex flex-col justify-between">
                <Link
                    to={`${brandInfo.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {brandInfo?.name}
                </Link>
                <div className="flex flex-row w-full gap-3 pt-5">

                    <Button showButton={true} onClick={handleClick}>
                        {subStatus ? "Вы подписаны" : "Подписаться"}
                    </Button>
                </div>
            </div>
            <Highlights brandId={brandInfo.guid || null} />
            <div className="text-center">{brandInfo?.description}</div>
            <Disclosure>
                <DisclosureButton
                    className="w-full flex justify-between relative"
                    onClick={handleRotate}
                >
                    <div className="uppercase px-2">Коллекции</div>
                    <div
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isRotated ? "rotate-90" : ""}`}
                    >
                        <Arrow direct={"right"} />
                    </div>
                </DisclosureButton>
                <DisclosurePanel>
                    {brandInfo.collections?.map((col) => {
                        return (
                            <Item
                                path={`../../collection/${col.guid}`}
                                key={col.guid}
                            >
                                {col.name}
                            </Item>
                        );
                    })}
                </DisclosurePanel>
            </Disclosure>
            <Item path={`/products/${brandInfo.guid}`}>Изделия</Item>
            <div className="uppercase px-2">Публикации</div>

            <div className="flex items-center justify-between px-20 pt-7">
                {contacts.map(({href, Icon}) => {
                    return (
                        <Link to={href} target="_blank" rel="noopener noreferrer">
                            <Icon className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                        </Link>
                    );
               })}
            </div>


        </>
    );
};
