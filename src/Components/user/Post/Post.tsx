import { useEffect, useState } from "react";
import { useApiNew } from "../../../hooks/useApi";
import { PostModel, BrandModel, FileProductModel } from "../../../api/data-contracts";
import { useNavigate } from "react-router-dom";
import { Switcher } from "../../common/Switcher";
import { IReading, readingOff, readingOn, readingOnDark } from "../../../types/interfaces/IReading";
import { CommentsList } from "./CommentsList";
import { Modal } from "../../common/Modal";
import { IconComment } from "../../common/icons/IconComment";
import { IconEdit } from "../../common/icons/IconEdit";
import { Photo } from "../../common/Photo";
import { Likes } from "./Likes";
import PostSlider from "../Slider/PostSlider"
import HighlightedProducts from "./HighlightedProducts";

export const Post = ({ id }: { id: string }) => {
    const navigate = useNavigate();

    const [readingMode, setReadingMode] = useState<IReading>(readingOff);
    const [enabledSwitch, setEnabledSwitch] = useState<boolean>(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [highlightedProds, setHighlightedProds] = useState<string[]>([]);

    // //свечение отмеченных вещей
    // const [isHovered, setIsHovered] = useState(false);
    // const toggleHover = (value: boolean) => () => setIsHovered(value);

    // Загружаем данные поста
    const { data: postData, execute: getPostData } = useApiNew<PostModel>("postsDetail", { token: true, immediate: false });

    useEffect(() => {
        getPostData(id)
    }, [id]);

    // Загружаем данные бренда, когда появится идентификатор бренда
    const { data: brandInfo, execute: getBrandData } = useApiNew<BrandModel>("brandsDetail", { token: true, immediate: false });
    
    useEffect(() => {
        if (postData?.brandGuid) {
            getBrandData(postData.brandGuid);
        }
    }, [postData?.brandGuid, getBrandData]);

    // Загружаем данные отмеченных вещей
    const { data: FileData, execute: getFileData } = useApiNew<FileProductModel>("filesModelDetail", { 
        token: true, 
        immediate: false 
    });
    
    // Вызываем запрос с нужным id
    useEffect(() => {
        getFileData("d0290abb-4c63-46d9-b9b1-f7cc78013553");
    }, []);
    

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

    // const handleProdsBag = () => {
    //     if (!FileData?.productGuid) return;
    //     const prods = FileData.productGuid.map((prod) => prod.productGuid);
    //         if (prods.length > 0) {
    //         setHighlightedProds(prods);
    //     }
    // };

    const handleGoComments = () => {
        setCommentsOpen(true);
    };

    // Формируем массив изображений для слайдера.
    // Добавляем основной файл, если он существует, и затем дополнительные файлы (только те, у которых определён guid).
    const images = [postData?.file?.guid, ...(postData?.extraFiles?.map(file => file.guid) || [])].filter(Boolean);

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
                    updateCommentsCount={(count) => {
                        if (postData) postData.commentsCount = count;
                    }}
                    onClose={() => setCommentsOpen(false)}
                />
            </Modal>

            <div className="relative w-full bg-light-gray" style={{ paddingBottom: "155%" }}>
                {isExpanded && (
                    <div className="absolute top-2 left-7 z-20">
                        <Switcher enabledSwitch={enabledSwitch} setEnabledSwitch={setEnabledSwitch} />
                    </div>
                )}
                {/* <div className="absolute top-3 right-4 z-10 w-6 h-6 bg-white rounded-[50px] flex justify-center items-center shadow-lg" onClick={handleProdsBag}
                    onMouseEnter={toggleHover(true)}
                    onMouseLeave={toggleHover(false)}
                    style={{
                        cursor: "pointer",
                        transition: "box-shadow 0.3s ease-in-out",
                        boxShadow: isHovered ? "0 0 10px rgba(255, 255, 255, 1)" : "none"
                    }}>
                    <img src="/images/bag.svg" alt="отмеченные изделия" />
                </div> */}
                {FileData?.productGuid && <HighlightedProducts products={FileData.productGuid} />}
                {/* Фоновый слайдер: изображение меняется при нажатии на точки пагинации */}
                    <PostSlider images={images.map(guid => ({ guid }))} />
                    {/* Затемнение фона согласно режиму чтения */}
                    <div className={`absolute inset-0 bg-black ${readingMode.opacity}`}></div>

                {/* Оверлей с информацией о бренде, текстом поста и панелью с лайками/комментариями */}
                <div className="min-h-40 flex items-end justify-between gap-4 absolute bottom-1 left-0 z-10 w-full p-[10px] animate-fade-in">
                    <div className="w-80">
                        <div className="flex space-x-3 mb-3 cursor-pointer">
                            <Photo
                                id={brandInfo?.photo ?? null}
                                styles="rounded-full w-16"
                                alt="логотип бренда"
                            />
                            <div
                                onClick={() => navigate(`.././brand/${brandInfo?.guid}`)}
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
                                {brandInfo?.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[11px]">
                        {postData?.guid && <Likes id={postData.guid} entityType="Post" />}
                        <div className="flex flex-col items-center justify-center text-center gap-1"
                            onClick={handleGoComments}>
                            <IconComment
                                hoverColor="white"
                                defaultColor="white"
                                entityType="Post" />
                            <p className={`text-white font-medium text-[10px] ${readingMode.lines}`}>{postData?.commentsCount}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-1">
                            <IconEdit
                                hoverColor="white"
                                defaultColor="white"
                                entityType="Post" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
