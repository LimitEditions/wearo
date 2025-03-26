import { useEffect, useState } from "react";
import useApi, { useApiNew } from "../../hooks/useApi";
import { PostModel, BrandModel } from "../../api/data-contracts";
import { useNavigate } from "react-router-dom";
import { Switcher } from "../common/Switcher";
import { IReading, readingOff, readingOn, readingOnDark } from "../../types/interfaces/IReading";
import { CommentsList } from "./CommentsList";
import { Modal } from "../common/Modal";
import { IconComment } from "../common/icons/IconComment";
import { IconEdit } from "../common/icons/IconEdit";
import { Photo } from "../common/Photo";
import { Likes } from "./Likes";

export const Post = ({ entity, id }: { entity: string; id: string }) => {
    const navigate = useNavigate();

    const [getInfo, setGetInfo] = useState<boolean>(false);
    const [readingMode, setReadingMode] = useState<IReading>(readingOff);
    const [enabledSwitch, setEnabledSwitch] = useState<boolean>(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    //свечение отмеченных вещей
    const [isHovered, setIsHovered] = useState(false);
    const toggleHover = (value: boolean) => () => setIsHovered(value);

    // Загружаем данные поста
    const { data, execute: getPostData } = useApiNew<PostModel>("postsDetail", { token: true, immediate: false, body: id });

    useEffect(() => {
        getPostData(id)
    }, [id]);

    // Загружаем данные бренда, когда появится идентификатор бренда
    const [brandInfo] = useApi<"brandsDetail", BrandModel>(
        "brandsDetail",
        data?.brandGuid || "",
        {},
        getInfo
    );
    useEffect(() => {
        if (data && data?.brandGuid) {
            setGetInfo(true);
        }
    }, [data]);

    // Режим чтения и переключатель яркости
    // Раскрытие в режиме чтения
    const isExpanded = readingMode.state !== "off";

    // переключатель яркости фона
    useEffect(() => {
        if (!isExpanded) return;
        setReadingMode(enabledSwitch ? readingOnDark : readingOn);
    }, [enabledSwitch, isExpanded]);

    // колбек на изменение вышеуказанных стейтов
    const handleReadingMode = () => {
        if (readingMode.state === "off") {
            setReadingMode(readingOn);
        } else {
            setReadingMode(readingOff);
            setEnabledSwitch(false);
        }
    };

    const handleProdsBag = () => {
        const prods = data?.products?.map((prod) => prod.productGuid);
        if (prods && prods.length > 0) {
            navigate("./post_products", { state: { prodsData: prods } });
        }
    };

    const handleGoComments = () => {
        setCommentsOpen(true);
    };

    if (!data) return null;
    // Формируем массив изображений для слайдера.
    // Добавляем основной файл, если он существует, и затем дополнительные файлы (только те, у которых определён guid).
    const images: { guid: string }[] = [];
    if (data.file && data.file.guid) {
        images.push({ guid: data.file.guid });
    }
    if (data.extraFiles && data.extraFiles.length > 0) {
        images.push(
            ...data.extraFiles.filter((file) => file.guid !== undefined).map((file) => ({ guid: file.guid! }))
        );
    }

    return (
        <div className="w-full pb-2">
            <Modal
                isOpen={commentsOpen}
                setIsOpen={setCommentsOpen}
                swipeable={false}
                additionalStyles={{
                    container: "fixed inset-0 flex overflow-hidden items-end justify-center",
                    panel: "w-full h-[70vh] transform overflow-hidden scrollbar-hide bg-white flex flex-col rounded-t-[18px]",
                }}
            >
                <CommentsList
                    entityId={id}
                    updateCommentsCount={(newCount: number) => {
                        if (!data || data.commentsCount === newCount) return;
                        data.commentsCount = newCount;
                    }}
                    onClose={() => setCommentsOpen(false)}
                />
            </Modal>

            <div className="relative w-full bg-light-gray" style={{ paddingBottom: "175%" }}>
                {isExpanded && (
                    <div className="absolute top-2 left-7 z-20">
                        <Switcher enabledSwitch={enabledSwitch} setEnabledSwitch={setEnabledSwitch} />
                    </div>
                )}
                <div className="absolute top-3 right-4 z-10 w-6 h-6 bg-white rounded-[50px] flex justify-center items-center shadow-lg" onClick={handleProdsBag}
                    onMouseEnter={toggleHover(true)}
                    onMouseLeave={toggleHover(false)}
                    style={{
                        cursor: "pointer",
                        transition: "box-shadow 0.3s ease-in-out",
                        boxShadow: isHovered ? "0 0 10px rgba(255, 255, 255, 1)" : "none"
                    }}>
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
                <div className="min-h-40 flex items-end justify-between gap-4 absolute bottom-1 left-0 z-10 w-full p-[10px] animate-fade-in">
                    <div className="w-80">
                        <div className="flex space-x-3 mb-3 cursor-pointer">
                            <Photo
                                id={brandInfo?.photo || null}
                                styles="rounded-full w-16"
                                alt="логотип бренда"
                            />
                            <div
                                onClick={() => navigate(`.././brand/${data.brandGuid}`)}
                                className="text-white text-xs my-auto"
                            >
                                {brandInfo?.name}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-[10px]">
                            <p
                                className={'text-white text-xs overflow-hidden transition-[max-height] duration-600 ease-in-out cursor-pointer'}
                                style={{
                                    maxHeight: isExpanded ? "1000px" : "3em",
                                    lineHeight: "1.5em",
                                }}
                                onClick={handleReadingMode}
                            >
                                {data.text}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[11px]">
                        {data.guid && <Likes id={data.guid} entityType="post" />}
                        <div className="flex flex-col items-center justify-center text-center gap-1"
                            onClick={handleGoComments}>
                            <IconComment
                                hoverColor="white"
                                defaultColor="white"
                                entityType="post" />
                            <p className={`text-white font-medium text-[10px] ${readingMode.lines}`}>{data.commentsCount}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-1">
                            <IconEdit
                                hoverColor="white"
                                defaultColor="white"
                                entityType="post" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
