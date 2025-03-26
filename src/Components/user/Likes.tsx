import { useState, useEffect } from "react";
import { useApiNew } from "../../hooks/useApi";
import { IconLike } from "../common/icons/IconLike";
import { LikesProps } from "../../types/interfaces/componentsProps/ILikesProps";
import { retrieve } from "../../utils/encryption";


export const Likes = ({ id, entityType }: LikesProps) => {
  const [likesCount, setLikesCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const { data, isLoading, error, execute: getLikes } = useApiNew<{
    likesCount: number;
    isLikedByCurrentUser: boolean;
  }>('likesCountDetail', { token: true, immediate: false });
  const { execute: createLike } = useApiNew('likesCreate', { token: true });
  const { execute: deleteLike } = useApiNew('likesDelete', { token: true });

  const userID = retrieve('guid');

  useEffect(() => {
    if (!id) return;

    // Запускаем запрос при изменении id или entityType
    getLikes({ id, entity: entityType, query: {} });
  }, [id, entityType]);

  useEffect(() => {
    if (data) {
      setLikesCount(data.likesCount ?? 0);
      setIsLiked(data.isLikedByCurrentUser ?? false);
    }
  }, [data]); // Обновляем состояние, когда data изменяется

  useEffect(() => {
    if (error) {
      console.error("Ошибка загрузки лайков:", error);
    }
  }, [error]);

  // Функция переключения лайка
  const toggleLike = async () => {
    if (!id) {
      console.error("Ошибка: ID отсутствует");
      return;
    }
    try {
      if (isLiked) {
        // Если лайк уже установлен, удаляем его
        console.log("Удаляем лайк, передаем в API:", { id, entity: entityType });
        await deleteLike({ id, entity: entityType });
        setLikesCount((prev) => Math.max(prev - 1, 0));
      } else {
        // Если лайк не установлен, создаем лайк
        const requestBody = { entityGuid: id, fromGuid: userID };
        console.log("Создаем лайк, передаем в API:", { entity: entityType, body: requestBody });
        const response = await createLike({ entity: entityType, body: requestBody });
        console.log("Ответ от сервера после создания лайка:", response);
        setLikesCount((prev) => prev + 1);
      }
      setIsLiked((prev) => !prev);
    } catch (error) {
      console.error("Ошибка при переключении лайка:", error);
    }
  };

  // Указываем цвет текста в зависимости от типа сущности
  const textColor = entityType === 'post' ? 'text-white' : 'text-black';

  return (
    <div className="flex flex-col items-center justify-end" onClick={toggleLike}>
      <IconLike
        hoverColor="white"
        isLiked={isLiked}
        color="#3447BC"
        entityType={entityType}
      />
      <p className={`font-medium text-[10px] ${textColor}`}>{likesCount}</p>
    </div>
  );
};
