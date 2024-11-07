import { NavContentType } from "../types/NavContentType";
import { IconPosts } from "../Components/common/icons/IconPosts";
import { IconPromo } from "../Components/common/icons/IconPromo";
import { IconWardrobe } from "../Components/common/icons/IconWardrobe";
import { IconGoods } from "../Components/common/icons/IconGoods";
import { IconSettings } from "../Components/common/icons/IconSettings";
import { IconAnalytic } from "../Components/common/icons/IconAnalytic";
import { IconManage } from "../Components/common/icons/IconManage";

export const navContent: NavContentType = {
    Admin: [
        {
            path: "/settings",
            name: "Настройки",
            component: <IconSettings hoverColor="#3447BC" />,
        },
        {
            path: "/control",
            name: "Управление",
            component: <IconManage hoverColor="#3447BC" />,
        },
        {
            path: "/analytics",
            name: "Аналитика",
            component: <IconAnalytic hoverColor="#3447BC" />,
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
