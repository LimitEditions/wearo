import React from "react";
import { Photo } from "./Photo";

// Компонент для создания круглой аватарки/логотипа с именем/названием
export const AvatarAndName = ({
    photoId,
    name,
}: {
    photoId: string | null;
    name: string | null;
}) => {
    return (
        <>
            <div className="flex gap-4 items-center px-2 py-4">
                <Photo
                    id={photoId}
                    styles="w-12 h-12 object-cover rounded-3xl"
                    alt="Аватар пользователя"
                />
                <span>{name ? name : "Имя не указано"}</span>
            </div>
        </>
    );
};
