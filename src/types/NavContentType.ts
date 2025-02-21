import { UserType } from "../api/data-contracts";

export interface INavItem {
    path: string;
    icon: JSX.Element;
};

type LimitedUserType = UserType.User | UserType.BrandAdmin | UserType.Admin;

export type NavContentType = Record<LimitedUserType, INavItem[]>;

type NavIconType = 
  'IconPromo' | 
  'IconPosts' |
  'IconWardrobe' |
  'IconSettings' |
  'IconControl' |
  'IconAnalytic' |
  'IconProducts' |
  'IconBrand';

type NavTextType = 
  'Промокоды' | 
  'Лента' |
  'Мой гардероб' |
  'Настройки' |
  'Управление' |
  'Аналитика' |
  'Изделия' |
  'Мой бренд';

export type NavType = {
  navIcon: NavIconType,
  navText: NavTextType
};
