import React, { useEffect, useState } from "react";
import useApi, { useApiNew } from "../../hooks/useApi";
import { BrandModel, EntityType, PostModel } from "../../api/data-contracts";
import { Photo } from "../common/Photo";
import { useNavigate } from "react-router-dom";
import { Switcher } from "../common/Switcher";
import {
    IReading,
    readingOff,
    readingOn,
    readingOnDark,
} from "../../types/interfaces/IReading";
import { retrieve } from "../../utils/encryption";
import { IconLike } from "../common/icons/IconLike";
import { IconComment } from "../common/icons/IconComment";
import { IconMenu } from "../common/icons/IconMenu";
import { CommentsList } from "./CommentsList";
import { Modal } from "../common/Modal";

export const Post = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    // данные по посту
    const getPostDataApi = useApiNew<PostModel>("postsDetail", { token: true, immediate: false})
    const [postData, setPostData] = useState<PostModel>({})
    useEffect(() => {
        getPostDataApi.execute(id).then((data) => {
            setPostData(data)
        })
    }, [])

    // данные по бренду
    const [getInfo, setGetInfo] = useState<boolean>(false);
    const [brandInfo, ,] = useApi<"brandsDetail", BrandModel>(
        "brandsDetail",
        postData?.brandGuid,
        {},
        getInfo
    );
    const userId = retrieve('guid');
    
    const sendLikeApi = useApiNew('addLike', { token: true, immediate: false}, { entity: EntityType.Post})
    const getLikesApi = useApiNew('getLikesCount', { token: true, immediate: false}, { entity: EntityType.Post})
    useEffect(() => {
        if (postData) {
            setGetInfo(true);
        }
    }, [postData]);

    const [readingMode, setReadingMode] = useState<IReading>(readingOff);

    // колбек на изменение вышеуказанных стейтов
    const hanldeReadingMode = () => {
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

    // переход к отмеченным изделиям
    const handleProdsBag = () => {
        const prods = postData?.products?.map((prod) => prod.productGuid);
        return (
            prods &&
            prods.length > 0 &&
            navigate("./post_products", { state: { prodsData: prods } })
        );
    };

    const [commentsOpen, setCommentsOpen] = useState(false)

    return (
        <div className="w-full pb-2">
            <Modal
                isOpen={commentsOpen} 
                setIsOpen={setCommentsOpen} 
                swipeable={false}
                additionalStyles={{
                    container:
                        "fixed inset-0 overflow-hidden flex items-end justify-center",
                    panel: "w-full h-[80%] transform overflow-hidden rounded-t-2xl bg-white px-16 py-10",
                }}
            >
                <CommentsList entityId={id} updateCommentsCount={(newCount: number) => setPostData({...postData, commentsCount: newCount})}/>
            </Modal>
            {!getPostDataApi.error && postData && (
                <div
                    className="relative w-full bg-light-gray"
                    style={{ paddingBottom: "175%" }}
                >
                    <div className="absolute top-2 left-7 z-10">
                        <Switcher
                            enabledSwitch={enabledSwitch}
                            setEnabledSwitch={setEnabledSwitch}
                        />
                    </div>
                    <div
                        className={`absolute top-3 right-4 w-6 h-6 ${readingMode.z_index}`}
                        onClick={handleProdsBag}
                    >
                        <img src="/images/bag.svg" alt="отмеченные изделия" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <Photo
                            id={postData.file?.guid ?? null}
                            styles="object-contain max-h-full"
                            alt="изображение поста"
                        />
                        <div
                            className={`absolute inset-0 bg-black ${readingMode.opacity}`}
                        ></div>
                    </div>
                    <div
                        className={`absolute bottom-4 left-8 animate-fade-in ${readingMode.slide}`}
                    >
                        <div className="flex space-x-3 mb-3 cursor-pointer">
                            <Photo
                                id={brandInfo?.photo ?? null}
                                styles="rounded-full w-16"
                                alt="изображение логотипа бренда"
                            />
                            <div
                                onClick={() =>
                                    navigate(`.././brand/${postData.brandGuid}`)
                                }
                                className="text-white text-sm my-auto"
                            >
                                {brandInfo?.name}
                            </div>
                        </div>
                        <div style={{display:"flex",justifyContent: "space-between", marginRight: "32px", marginLeft: "10px"}}>
                            <div>
                                <p
                                    className={`text-white text-sm overflow-hidden ${readingMode.lines}`}
                                    onClick={hanldeReadingMode}
                                >
                                    {postData.text}
                                </p>
                            </div>

                            <div style={{justifyContent: "center", alignItems: "center"}}>
                                <div onClick={() => {
                                    sendLikeApi.execute({fromGuid: userId, entityGuid: id}).then(() => {
                                        getLikesApi.execute(id).then((newLikes) => {
                                            setPostData(
                                                {
                                                    ...postData,
                                                    likesCount: newLikes
                                                }
                                            )
                                        })
                                    })
                                }}>
                                    <IconLike hoverColor="white" hoverable={false} defaultColor="black"/>
                                </div>
                                <p style={{margin: "0px"}} className={`text-black ${readingMode.lines}`}>
                                    {postData.likesCount}
                                </p>
                                <div onClick={() => {
                                    setCommentsOpen((prev) => !prev)
                                }}>
                                    <IconComment defaultColor="black"/>
                                </div>
                                <p style={{margin: "0px"}} className={`text-black ${readingMode.lines}`}>
                                    {postData.commentsCount}
                                </p>
                                <div onClick={() => {/* TODO ADD COMMENTS */}}>
                                    <IconMenu strokeColor="black"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
