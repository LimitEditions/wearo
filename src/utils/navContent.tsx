import { NavContentType } from "../types/NavContentType";
import { IconPosts } from "../Components/common/icons/IconPosts";
import { IconPromo } from "../Components/common/icons/IconPromo";
import { IconWardrobe } from "../Components/common/icons/IconWardrobe";
import { IconGoods } from "../Components/common/icons/IconGoods";

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
            component: <IconGoods hoverColor="#3447BC" />,
        },
        {
            path: "/posts",
            name: "Лента",
            component: <IconPosts hoverColor="#3447BC" />,
        },
        {
            path: "/brand",
            name: "Мой бренд",
            component: <IconWardrobe hoverColor="#3447BC" />,
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
            component: <IconWardrobe hoverColor="#3447BC" />,
        },
    ],
};
