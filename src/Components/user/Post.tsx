import React, { useEffect, useState } from "react";
import useApi, { useApiNew } from "../../hooks/useApi";
import { PostModel, BrandModel } from "../../api/data-contracts";
import { useNavigate } from "react-router-dom";
import { Switcher } from "../common/Switcher";
import { IReading, readingOff, readingOn, readingOnDark } from "../../types/interfaces/IReading";
import { retrieve } from "../../utils/encryption";
import { CommentsList } from "./CommentsList";
import { Modal } from "../common/Modal";
import { IconLike } from "../common/icons/IconLike";
import { IconComment } from "../common/icons/IconComment";
import { Photo } from "../common/Photo";
import menu from '../../../public/images/menu.svg'

export const Post = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState<PostModel | null>(null);
    const getPostDataApi = useApiNew<PostModel>("postsDetail", { token: true, immediate: false });

    // Загружаем данные поста
    useEffect(() => {
        getPostDataApi.execute(id).then((data) => {
            setPostData(data);
        });
    }, [id]);

    // Загружаем данные бренда, когда появится идентификатор бренда
    const [getInfo, setGetInfo] = useState<boolean>(false);
    const [brandInfo] = useApi<"brandsDetail", BrandModel>(
        "brandsDetail",
        postData?.brandGuid || "",
        {},
        getInfo
    );
    useEffect(() => {
        if (postData && postData?.brandGuid) {
            setGetInfo(true);
        }
    }, [postData]);

    const userId = retrieve("guid");
    // const sendLikeApi = useApiNew("addLike", { token: true, immediate: false }, { entity: EntityType.Post });
    // const getLikesApi = useApiNew("getLikesCount", { token: true, immediate: false }, { entity: EntityType.Post });

    // Режим чтения и переключатель яркости
    const [readingMode, setReadingMode] = useState<IReading>(readingOff);

    // Раскрытие в режиме чтения
    const isExpanded = readingMode.state !== "off";

    // колбек на изменение вышеуказанных стейтов
    const handleReadingMode = () => {
        if (readingMode.state === "off") {
            setReadingMode(readingOn);
        } else {
            setReadingMode(readingOff);
        }
    };

    // переключатель яркости фона
    const [enabledSwitch, setEnabledSwitch] = useState<boolean>(false);
    useEffect(() => {
        enabledSwitch
            ? setReadingMode(readingOnDark)
            : setReadingMode(readingOff);
    }, [enabledSwitch]);
    useEffect(() => {
        readingMode.state === "incr_dark"
            ? setEnabledSwitch(true)
            : setEnabledSwitch(false);
    }, [readingMode]);

    const handleProdsBag = () => {
        const prods = postData?.products?.map((prod) => prod.productGuid);
        if (prods && prods.length > 0) {
            navigate("./post_products", { state: { prodsData: prods } });
        }
    };

    const [commentsOpen, setCommentsOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);


    if (!postData) return null;

    // Формируем массив изображений для слайдера.
    // Добавляем основной файл, если он существует, и затем дополнительные файлы (только те, у которых определён guid).
    const images: { guid: string }[] = [];
    if (postData.file && postData.file.guid) {
        images.push({ guid: postData.file.guid });
    }
    if (postData.extraFiles && postData.extraFiles.length > 0) {
        images.push(
            ...postData.extraFiles.filter((file) => file.guid !== undefined).map((file) => ({ guid: file.guid! }))
        );
    }


    return (
        <div className="w-full pb-2">
            <Modal
                isOpen={commentsOpen}
                setIsOpen={setCommentsOpen}
                swipeable={false}
                additionalStyles={{
                    container: "fixed inset-0 overflow-hidden flex items-end justify-center",
                    panel: "w-full h-[80%] transform overflow-hidden rounded-t-2xl bg-white px-16 py-10",
                }}
            >
                <CommentsList
                    entityId={id}
                    updateCommentsCount={(newCount: number) =>
                        setPostData((prev) => (prev ? { ...prev, commentsCount: newCount } : prev))
                    }
                />
            </Modal>

            <div className="relative w-full bg-light-gray" style={{ paddingBottom: "175%" }}>
                <div className="absolute top-2 left-7 z-20">
                    <Switcher enabledSwitch={enabledSwitch} setEnabledSwitch={setEnabledSwitch} />
                </div>
                <div className="absolute top-3 right-4 z-20 w-6 h-6" onClick={handleProdsBag}>
                    <img src="/images/bag.svg" alt="отмеченные изделия" />
                </div>

                {/* Фоновый слайдер: изображение меняется при нажатии на точки пагинации */}
                <div className="absolute inset-0 z-0">
                    {images.length > 0 && (
                        <div className="relative w-full h-full">
                            <Photo
                                id={images[activeImageIndex].guid}
                                styles="w-full h-full object-cover"
                                alt={`Изображение ${activeImageIndex + 1}`}
                            />
                            {/* Точки пагинации */}
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                                {images.map((_, index) => (
                                    <span
                                        key={index}
                                        onClick={() => setActiveImageIndex(index)}
                                        className={`cursor-pointer text-[6px] ${activeImageIndex === index ? "text-custom-blue" : "text-white-fon"}`}
                                    >
                                        ●
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Затемнение фона согласно режиму чтения */}
                    <div className={`absolute inset-0 bg-black ${readingMode.opacity}`}></div>
                </div>

                {/* Оверлей с информацией о бренде, текстом поста и панелью с лайками/комментариями */}
                <div className="min-h-40 flex items-end gap-4 absolute bottom-1 left-0 z-30 w-full p-[10px] animate-fade-in">
                    <div className="w-80">
                        <div className="flex space-x-3 mb-3 cursor-pointer">
                            <Photo
                                id={brandInfo?.photo || null}
                                styles="rounded-full w-16"
                                alt="логотип бренда"
                            />
                            <div
                                onClick={() => navigate(`.././brand/${postData.brandGuid}`)}
                                className="text-white text-xs my-auto"
                            >
                                {brandInfo?.name}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-[10px]">
                            <p
                                className={`text-white text-xs overflow-hidden ${readingMode.lines}`}
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: isExpanded ? 'unset': 2,
                                }}
                                onClick={handleReadingMode}
                            >
                                {postData.text}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col align-center items-center absolute top-2 right-2 gap-1"
                        // onClick={() => {
                        //     sendLikeApi.execute({ fromGuid: userId, entityGuid: id }).then(() => {
                        //         getLikesApi.execute(id).then((newLikes: number) => {
                        //             setPostData((prev) => (prev ? { ...prev, likesCount: newLikes } : prev));
                        //         });
                        //     });
                        // }}
                        >
                        <IconLike hoverColor="white" hoverable={false} defaultColor="white" />
                        <p className={`text-white font-medium text-[10px] ${readingMode.lines}`}>{postData.likesCount}</p>
                        <div onClick={() => setCommentsOpen((prev) => !prev)}>
                        </div>
                        <IconComment defaultColor="white" />
                        <p className={`text-white font-medium text-[10px] ${readingMode.lines}`}>{postData.commentsCount}</p>
                        <div
                            onClick={() => {
                                // TODO: добавить логику для меню или дополнительных действий
                            }}
                        >
                        </div>
                        <img src="/images/menu.svg" alt="Menu" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
