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

  const getLikesApi = useApiNew('likesCountDetail', { token: true, immediate: false });
  const createLikeApi = useApiNew('likesCreate', { token: true });
  const deleteLikeApi = useApiNew('likesDelete', { token: true });

  useEffect(() => {
    if (!id) return;

    // Выполняем запрос для получения количества лайков и текущего статуса лайка
    getLikesApi.execute({ id, entity: entityType, query: {} })
      .then((data) => {
        if (!data) return;
        setLikesCount(data.likesCount ?? 0);
        setIsLiked(data.isLikedByCurrentUser ?? false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки лайков:", error);
      });
  }, [id, entityType]);
  console.log(id);

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
        await deleteLikeApi.execute({ id, entity: entityType });
        setLikesCount((prev) => Math.max(prev - 1, 0));
      } else {
        // Если лайк не установлен, создаем лайк
        const requestBody = { id };
        console.log("Создаем лайк, передаем в API:", { entity: entityType, body: requestBody });
        const response = await createLikeApi.execute({ entity: entityType, body: requestBody });
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
