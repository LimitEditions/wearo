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
            name: "Промокоды"
        },
        {
            path: "/posts",
            name: "Лента"
        },
        {
            path: "/wardrobe",
            name: "Мой гардероб"
        },
    ],
};
