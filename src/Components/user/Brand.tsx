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
import { Modal } from "../common/Modal";
import Item from "../common/ItemGroup/Item";
import { SlPhone, SlEnvolope } from "react-icons/sl";
import { PiWhatsappLogo, PiTelegramLogo } from "react-icons/pi";

export const Brand = ({ brandInfo }: { brandInfo: BrandModel }) => {
    // статус подписки с возможностью подписаться/отписаться
    const [subStatus, handlerSub] = useSubscribe(brandInfo.guid as string);
    const [modal, setModal] = useState<boolean>(false);
    const handleClick = (event: any) => {
        handlerSub();
        // отключаем кнопку и выводим модальное на передний план
        setModal(true);
        event.target.disabled = true;
        const timer = setTimeout(() => {
            setModal(false);
            event.target.disabled = false;
        }, 5000);
        return () => clearTimeout(timer);
    };

    // Cтейт и колбек на разворот стрелки вниз и обратно
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const handleRotate = () => {
        setIsRotated(!isRotated);
    };
    console.log(brandInfo)
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
                    <Button showButton={true} onClick={() => setModal(true)}>
                        Поддержка
                    </Button>

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
            
            <Modal
                isOpen={modal}
                setIsOpen={setModal}
                swipeable={false}
                additionalStyles={{
                    container:
                        "fixed inset-0 overflow-hidden flex items-end justify-center",
                    panel: "w-full h-[42%] transform overflow-hidden rounded-t-2xl bg-white p-4 mb-[70px]",
                }}
            >
                <h3 className="p-4 uppercase">Служба поддержки</h3>

                <Link
                    to={`https://t.me/${brandInfo.telegramId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Item>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <PiTelegramLogo className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                            Telegram
                        </div>
                    </Item>
                </Link>

                <Link
                    to={`https://wa.me/${brandInfo.whatsappId || ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Item>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <PiWhatsappLogo className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                            WhatsApp
                        </div>
                    </Item>
                </Link>

                <Link
                    to={`mailto:${brandInfo.email || ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Item>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <SlEnvolope className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                            E-mail
                        </div>
                    </Item>
                </Link>

                <Link
                    to={`tel:${"+78005558607"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Item>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <SlPhone className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                            +78005558607
                        </div>
                    </Item>
                </Link>

            </Modal>
        </>
    );
};
