import { NavContentType } from "../types/NavContentType";
import { IconPosts } from "../Components/common/icons/IconPosts";
import { IconPromo } from "../Components/common/icons/IconPromo";
import { IconWardrobe } from "../Components/common/icons/IconWardrobe";

export const navContent: NavContentType = {
    Admin: [
        {
            path: "/settings",
            name: "Настройки",
            image: "/images/nav/settings.png",
        },
        {
            path: "/control",
            name: "Управление",
            image: "/images/nav/control.png",
        },
        {
            path: "/analytics",
            name: "Аналитика",
            image: "/images/nav/analytics.png",
        },
    ],
    BrandAdmin: [
        {
            path: "/products",
            name: "Изделия",
        },
        {
            path: "/posts",
            name: "Лента",
        },
        {
            path: "/brand",
            name: "Мой бренд",
        },
    ],
    User: [
        {
            path: "/promotions",
            name: "Промокоды",
            image: "/images/nav/promo.svg",
            component: <IconPromo hoverColor="#3447BC" />,
        },
        {
            path: "/posts",
            name: "Лента",
            component: <IconPosts hoverColor="#3447BC" />,
        },
        {
            path: "/wardrobe",
            name: "Мой гардероб",
            image: "/images/nav/wardrobe.svg",
            component: <IconWardrobe hoverColor="#3447BC" />,
        },
    ],
};
