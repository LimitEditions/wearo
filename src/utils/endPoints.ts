import { ControlPage } from "../pages/AdminGroup/Control/ControlPage";
import { SettingsPage } from "../pages/AdminGroup/Settings/SettingsPage";
import { Authorization } from "../pages/AuthRegGroup/Authorization";
import { BrandPage } from "../pages/UserGroup/BrandPage";
import { CollectionPage } from "../pages/UserGroup/CollectionPage";
import { PostsPage } from "../pages/UserGroup/PostsPage";
import { ProductItemPage } from "../pages/UserGroup/ProductItemPage";
import { ProductPage } from "../pages/UserGroup/ProductPage";
import { ProductsPage } from "../pages/UserGroup/ProductsPage";
import { PromotionsPage } from "../pages/UserGroup/PromotionsPage";
import { UserPage } from "../pages/UserGroup/UserPage";
import { WardrobePage } from "../pages/UserGroup/WardrobePage";
import { CreateBrandPage } from "../pages/UserGroup/CreateBrandPage";

export const endPoints = [
    //user
    {
        path: "/auth/*",
        component: Authorization,
    },
    {
        path: "/wardrobe/*",
        component: WardrobePage,
    },
    {
        path: "/product/:id/*",
        component: ProductPage,
    },
    {
        path: "/posts/*",
        component: PostsPage,
    },
    {
        path: "/post/:id",
        component: PostPage
    },
    {
        path: "/brand/:id/*",
        component: BrandPage,
    },
    {
        path: "/brand/:id/posts",
        component: BrandPostsPage
    },
    {
        path: "/brand/create/",
        component: CreateBrandPage,
    },
    {
        path: "/promotions/*",
        component: PromotionsPage,
    },
    {
        path: "/collection/:id",
        component: CollectionPage,
    },
    {
        path: "/products/:id",
        component: ProductsPage,
    },
    {
        path: "/user/:id",
        component: UserPage,
    },
    {
        path: "/pi/:code",
        component: ProductItemPage,
    },


    //admin
    {
        path: "/settings/*",
        component: SettingsPage,
    },
    {
        path: "/control/*",
        component: ControlPage,
    },
];
