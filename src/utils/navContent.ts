import { NavContentType } from "../types/NavContentType";

export const navContent: NavContentType = {
    'Admin': [
        {
            path: "/options",
            name: "Настройки"
        },
        {
            path: "/control",
            name: "Управление"
        },
        {
            path: "/analytics",
            name: "Аналитика"
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
            image: "/images/promo.png"
        },
        {
            path: "/posts",
            name: "Лента",
            image: "/images/posts.png"
        },
        {
            path: "/wardrobe",
            name: "Мой гардероб",
            image: "/images/wardrobe.png"
        },
    ],
};
