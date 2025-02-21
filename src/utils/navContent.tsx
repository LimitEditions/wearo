import { NavContentType } from "../types/NavContentType";

import { IconWrapper } from "../Components/common/navIcons/IconWrapper";

export const navContent: NavContentType = {
    Admin: [
        {
            path: "/settings",
            icon: <IconWrapper navIcon="IconSettings" navText="Настройки"/>,
        },
        {
            path: "/control",
            icon: <IconWrapper navIcon="IconControl" navText="Управление"/>,
        },
        {
            path: "/analytics",
            icon: <IconWrapper navIcon="IconAnalytic" navText="Аналитика"/>,
        },
    ],
    BrandAdmin: [
        {
            path: "/products",
            icon: <IconWrapper navIcon="IconProducts" navText="Изделия"/>,
        },
        {
            path: "/posts",
            icon: <IconWrapper navIcon="IconPosts" navText="Лента"/>,
        },
        {
            path: "/brand",
            icon: <IconWrapper navIcon="IconWardrobe" navText="Мой бренд"/>,
        },
    ],
    User: [
        {
            path: "/promotions",
            icon: <IconWrapper navIcon="IconPromo" navText="Промокоды"/>,
        },
        {
            path: "/posts",
            icon: <IconWrapper navIcon="IconPosts" navText="Лента"/>,
        },
        {
            path: "/wardrobe",
            icon: <IconWrapper navIcon="IconWardrobe" navText="Мой гардероб"/>,
        },
    ],
};
