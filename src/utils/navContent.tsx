import { NavContentType } from "../types/NavContentType";

import IconWrapper from "../Components/common/icons/IconWrapper";

export const navContent: NavContentType = {
    Admin: [
        {
            path: "/settings",
            name: "Настройки",
            component:  <IconWrapper iconName="IconSettings" params={{hoverColor: "#3447BC"}}/>,
        },
        {
            path: "/control",
            name: "Управление",
            component: <IconWrapper iconName="IconManage" params={{hoverColor: "#3447BC"}}/>,
        },
        {
            path: "/analytics",
            name: "Аналитика",
            component: <IconWrapper iconName="IconAnalytic" params={{hoverColor: "#3447BC"}}/>,
        },
    ],
    BrandAdmin: [
        {
            path: "/products",
            name: "Изделия",
            component:  <IconWrapper iconName="IconGoods" params={{hoverColor: "#3447BC"}}/>,
        },
        {
            path: "/posts",
            name: "Лента",
            component: <IconWrapper iconName="IconPosts" params={{hoverColor: "#3447BC"}}/>,
        },
        {
            path: "/brand",
            name: "Мой бренд",
            component: <IconWrapper iconName="IconWardrobe" params={{hoverColor: "#3447BC"}}/>,
        },
    ],
    User: [
        {
            path: "/promotions",
            name: "Промокоды",
            image: "/images/nav/promo.svg",
            component: <IconWrapper iconName="IconPromo" params={{hoverColor: "#3447BC"}}/>,
        },
        {
            path: "/posts",
            name: "Лента",
            component: <IconWrapper iconName="IconPosts" params={{hoverColor: "#3447BC"}}/>,
        },
        {
            path: "/wardrobe",
            name: "Мой гардероб",
            component: <IconWrapper iconName="IconWardrobe" params={{hoverColor: "#3447BC"}}/>,
        },
    ],
};
