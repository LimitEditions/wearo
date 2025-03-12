import React, { useState } from "react";
import { BrandModel, HighlightModelDataResult, PostModelDataResult, StoryModelDataResult } from "../../api/data-contracts";
import useSubscribe from "../../hooks/useSubscribe";
import { Link } from "react-router-dom";
import { Photo } from "../common/Photo";
import { Button } from "../common/Button";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Arrow } from "../common/Arrow";
import Item from "../common/ItemGroup/Item";
import { SlPhone, SlEnvolope } from "react-icons/sl";
import { PiWhatsappLogo, PiTelegramLogo } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useApiNew } from "../../hooks/useApi";
import { Stories } from "./Stories&Hightlights/Stories";
import { Post } from "./Post";
import { Modal } from "flowbite-react";

type Contact = {
    href: string;
    Icon: React.ElementType;
};  

export const Brand = ({ brandInfo }: { brandInfo: BrandModel }) => {
    // статус подписки с возможностью подписаться/отписаться
    const [disabled, setDisabled] = useState(false);
    const [subStatus, handlerSub] = useSubscribe(brandInfo.guid as string);
    const handleClick = (event: any) => {
        if (disabled) return; // Если кнопка уже отключена, ничего не делаем

        setDisabled(true); // Делаем кнопку неактивной
        handlerSub();

        setTimeout(() => {
            setDisabled(false); // Включаем кнопку обратно через 500 мс
        }, 500);
    };

    // Cтейт и колбек на разворот стрелки вниз и обратно
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const handleRotate = () => {
        setIsRotated(!isRotated);
    };    

    // Добавляет phone как необязательное поле (после его добовления ошибок не будет)
    const brandInfoWithOptionalFields = brandInfo as BrandModel & Partial<{ phone: string }>;

    const potentialContacts: Array<Contact | null> = [
        brandInfoWithOptionalFields.whatsappId ? { href: `https://wa.me/${brandInfoWithOptionalFields.whatsappId}`, Icon: PiWhatsappLogo } : null,
        brandInfoWithOptionalFields.telegramId ? { href: `https://t.me/${brandInfoWithOptionalFields.telegramId}`, Icon: PiTelegramLogo } : null,
        brandInfoWithOptionalFields.email ? { href: `mailto:${brandInfoWithOptionalFields.email}`, Icon: SlEnvolope } : null,
        brandInfoWithOptionalFields.phone ? { href: `tel:${brandInfoWithOptionalFields.phone}`, Icon: SlPhone } : null
    ];

    // Фильтруем null-значения
    const contacts: Array<Contact> = potentialContacts.filter((contact): contact is Contact => contact !== null);
    
    // Параметры для слайдеров
    const settingsSlider = [{
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    },{
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }];

    // Хайлайты бренда
    const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
    const { data: highlightsData } = useApiNew<HighlightModelDataResult>("storiesHighlightsList", {
        token: true, 
        immediate: true, 
        body: { BrandGuid: brandInfo.guid }
    });
    const highlights = highlightsData?.data ?? [];
    
    // Публикации бренда
    const { data: postsData } = useApiNew<PostModelDataResult>("postsList", {
        token: true, 
        immediate: true, 
        body: { BrandGuid: brandInfo.guid }
    });
    const posts = postsData?.data ?? [];
    return (
        <>
            <Photo
                id={brandInfo?.photo || null}
                styles={"border-4"}
                alt={"фото бренда"}
            />
            <div className="flex items-center gap-[40px] justify-between pb-[20px]">
                <Link
                    to={`${brandInfo.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {brandInfo?.name}
                </Link>
                <Button style={{width: "130px", height: "36px", fontSize: "13px", margin: "0px", padding: "0px"}} showButton={true} disabled={disabled} onClick={handleClick}>
                    {subStatus ? "Вы подписаны" : "Подписаться"}
                </Button>
            </div>

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
                <DisclosurePanel style={{paddingBottom: "16px"}}>
                    {<Slider {...settingsSlider[0]}>
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
                    </Slider>}
                </DisclosurePanel>
            </Disclosure>
            
            <Item path={`/products/${brandInfo.guid}`}>Изделия</Item>

            <div className="w-full pt-[10px]">
                <Slider {...settingsSlider[1]}>
                    {highlights?.map((elem, ind) => (
                        <div onClick={() => setActiveHighlight(elem?.mainPhotoGuid || null)} key={ind} className="p-[4px]">
                            <Photo
                                id={elem.mainPhotoGuid || null}
                                styles="w-[150px] h-[180px] rounded-[10px] object-cover"
                                alt="Хайлайт бренда"
                            />
                            <p className="text-[12px]">{elem.name}</p>
                            {activeHighlight === elem.mainPhotoGuid && (
                                <Stories
                                    close={() => setActiveHighlight(null)}
                                    stories={elem.storiesGuids as string[]}
                                />
                            )}
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="uppercase pt-[40px]">Публикации</div>

            <div className="flex flex-wrap justify-between gap-x-[12px] gap-y-[20px]">
                {posts?.map((elem, ind) => {
                    if (ind > 3) return null; // Остановка рендеринга после 4 элементов
                    return (
                        <Link to={""}>
                            <div key={ind} className="flex flex-col items-center">
                                <Photo
                                    id={elem.fileGuid || null}
                                    styles="w-[150px] h-[150px] object-cover"
                                    alt="Публикация бренда"
                                />
                                <p className="text-[12px] pt-[8px] truncate w-[150px] overflow-hidden whitespace-nowrap text-ellipsis">{elem.text}</p>
                            </div>
                        </Link>  
                    );
                })}
            </div>

            <Link className="flex justify-between items-center" to={`/brand/${brandInfo.guid}/posts`}>
                <p className="text-[15px]">Смотреть все публикации</p>
                <Arrow direct={"right"} />
            </Link>

            <div className="pt-[50px] text-center">
                <p>Служба поддержки</p>
                <div className="flex items-center justify-center gap-[30px] pt-[20px]">
                    {contacts.map(({href, Icon}, ind) => {
                        return (
                            <Link key={ind} to={href} target="_blank" rel="noopener noreferrer">
                                <Icon className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};