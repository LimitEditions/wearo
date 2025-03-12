import axios from "axios";
import { useState, useEffect } from "react";
import { useApiNew } from "../../hooks/useApi";
import { IconLike } from "../common/icons/IconLike";

interface LikesProps {
    id: string;
    entityType: "post" | "postComment";
}

export const Likes = ({ id, entityType }: LikesProps) => {
    const [likesCount, setLikesCount] = useState<number>(0);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const getLikesApi = useApiNew('likesCountDetail', { token: true, immediate: false }, { entity: entityType });
    const createLikeApi = useApiNew('likesCreate', { token: true }, { entity: entityType });
    const deleteLikeApi = useApiNew('likesDelete', { token: true }, { entity: entityType });

    useEffect(() => {
        if (!id) return;

        getLikesApi.execute(id).then((data) => {
            setLikesCount(data?.likesCount ?? 0);
            setIsLiked(data?.isLikedByCurrentUser ?? false);
        });
    }, [id, entityType]);

    // Переключение лайка
    const toggleLike = async () => {
        try {
            if (isLiked) {
                await deleteLikeApi.execute({ id });
                setLikesCount((prev) => prev - 1);
            } else {
                await createLikeApi.execute({ id });
                setLikesCount((prev) => prev + 1);
            }

            // Обновляем статус лайка
            setIsLiked((prev) => !prev);
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

    const textColor = entityType === 'post' ? 'text-white' : 'text-#121212';

    return (
        <div className="flex flex-col align-center items-center justify-end gap-1" onClick={toggleLike}>
            <IconLike hoverColor="white"
                isLiked={isLiked}
                color="#3447BC"
                entityType={entityType}
            />
            <p className={`font-medium text-[10px] ${textColor}`}>{likesCount}</p>
        </div>
    )
}