import { NavContentType } from "../types/NavContentType";

export const navContent: NavContentType = {
    'Admin': [
        {
            path: "/settings",
            name: "Настройки",
            image: "/images/nav/settings.png"
        },
        {
            path: "/control",
            name: "Управление",
            image: "/images/nav/control.png"
        },
        {
            path: "/analytics",
            name: "Аналитика",
            image: "/images/nav/analytics.png"
        },
    ],
    'BrandAdmin': [
        {
            path: "/products",
            name: "Изделия"
        },
        {
            path: "/posts",
            name: "Лента"
        },
        {
            path: "/brand",
            name: "Мой бренд"
        },
    ],
    'User': [
        {
            path: "/promotions",
            name: "Промокоды",
            image: "/images/nav/promo.png"
        },
        {
            path: "/posts",
            name: "Лента",
            image: "/images/nav/posts.png"
        },
        {
            path: "/wardrobe",
            name: "Мой гардероб",
            image: "/images/nav/wardrobe.png"
        },
    ],
};
