import React, { useState } from "react";
import { BrandModel } from "../../api/data-contracts";
import useSubscribe from "../../hooks/useSubscribe";
import { Link } from "react-router-dom";
import { Photo } from "../common/Photo";
import { ContactButtons } from "../common/ContactButtons";
import { Button } from "../common/Button";
import { Highlights } from "./Stories&Hightlights/Highlights";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Arrow } from "../common/Arrow";
import { Modal } from "../common/Modal";
import { RingLoader } from "react-spinners";
import Item from "../common/ItemGroup/Item";
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

    return (
        <>
            <Photo
                id={brandInfo?.photo || null}
                styles={"border-4"}
                alt={"фото бренда"}
            />
            <div className="flex justify-between ">
                <Link
                    to={`${brandInfo.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {brandInfo?.name}
                </Link>
                <Button showButton={true} onClick={() => setModal(true)}>
                    Поддержка
                </Button>
                <div className="flex space-x-2">
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
                    panel: "w-full bg-transparent flex justify-center",
                }}
            >
                <div className="fixed bottom-0 h-[400px] bg-white left-0 w-full">
                    <h3 className="text-center mb-2">Служба поддержки</h3>
                    <Item path={`https://t.me/${brandInfo.telegramId}`}>
                        <Link
                            to={`https://t.me/${brandInfo.telegramId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <PiTelegramLogo className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                        </Link>
                    </Item>
                    <ContactButtons
                        telegram={brandInfo.telegramId || ""}
                        whatsapp={brandInfo.whatsappId || ""}
                        email={brandInfo.email || ""}
                        phone={"+78005558607"}
                    />
                </div>
            </Modal>
        </>
    );
};
