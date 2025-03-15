import { useState } from "react";
import { BrandModel, PostModelDataResult } from "../../api/data-contracts";
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
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useApiNew } from "../../hooks/useApi";
import { SingleSlideSlider } from "./Slider/SingleSlideSlider";
import { MultiSlideSlider } from "./Slider/MultiSlideSlider";
import { Support } from "./Support";

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
                    <SingleSlideSlider collections={brandInfo?.collections || []}/>
                </DisclosurePanel>
            </Disclosure>
            
            <Item path={`/products/${brandInfo.guid}`}>Изделия</Item>

            <div className="w-full pt-[10px]">
                <MultiSlideSlider id={brandInfo?.guid || ""} />
            </div>

            <div className="uppercase pt-[40px]">Публикации</div>

            <div className="flex flex-wrap justify-between gap-x-[12px] gap-y-[20px]">
                {posts?.map((elem, ind) => {
                    if (ind > 3) return null; // Остановка рендеринга после 4 элементов
                    return (
                        <Link key={ind} to={`/post/${elem.guid}`}>
                            <div className="flex flex-col items-center">
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
                <Support brandInfo={brandInfo}/>
            </div>
        </>
    );
};