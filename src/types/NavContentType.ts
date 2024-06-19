import { UserType } from "../api/data-contracts";

export interface INavItem {
    path: string;
    name: string;
    image?: string;
};

type LimitedUserType = UserType.User | UserType.BrandAdmin | UserType.Admin;

export type NavContentType = Record<LimitedUserType, INavItem[]>;
