/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddFileToLookModel {
  /**
   * Ид файла
   * @format uuid
   */
  fileGuid?: string;
  /**
   * ИД образа
   * @format uuid
   */
  lookGuid?: string;
}

export interface AddProductToLookModel {
  /**
   * Ид продукта
   * @format uuid
   */
  productGuid?: string;
  /**
   * ИД образа
   * @format uuid
   */
  lookGuid?: string;
}

export interface AddTagToLookModel {
  /** Ид тега */
  name?: string | null;
  type?: LookTagType;
  /**
   * ИД образа
   * @format uuid
   */
  lookGuid?: string;
}

/** Авторизация */
export interface AuthModel {
  username?: string | null;
  password?: string | null;
}

export enum BodyPart {
  Chest = "Chest",
  Hip = "Hip",
  Waist = "Waist",
}

export enum BodyShape {
  Triangle = "Triangle",
  Rectangle = "Rectangle",
  Apple = "Apple",
  Hourglass = "Hourglass",
  Pear = "Pear",
  Oval = "Oval",
  Trapezoid = "Trapezoid",
  InvertTriangle = "InvertTriangle",
}

/** Бренд */
export interface Brand {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /** Название бренда */
  name?: string | null;
  /** Некое описание */
  description?: string | null;
  /** Красивое описание */
  descriptionRichContent?: string | null;
  /**
   * Лого
   * @format uuid
   */
  photo?: string | null;
  /** Ссылка на сайт */
  link?: string | null;
  /** Продукты компнии */
  products?: Product[] | null;
}

/** Бренд */
export interface BrandModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Название бренда */
  name?: string | null;
  /** Некое описание */
  description?: string | null;
  /** Красивое описание */
  descriptionRichContent?: string | null;
  /**
   * Лого
   * @format uuid
   */
  photo?: string | null;
  /** Ссылка на сайт */
  link?: string | null;
  /** Продукты компнии */
  products?: ProductModel[] | null;
}

/** Бренд */
export interface BrandRequestModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Название бренда */
  name?: string | null;
  /** Некое описание */
  description?: string | null;
  /** Красивое описание */
  descriptionRichContent?: string | null;
  /**
   * Лого
   * @format uuid
   */
  photo?: string | null;
  /** Ссылка на сайт */
  link?: string | null;
  /**
   * Изменивший
   * @format uuid
   */
  updateUser?: string | null;
  status?: RequestStatus;
  /**
   * От пользователя
   * @format uuid
   */
  userGuid?: string;
  /** Пользователь */
  user?: UserModel;
}

/** Коллекция одежды */
export interface ClothingCollectionModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Бренд */
  brand?: BrandModel;
  /** Список продуктов */
  products?: ProductModel[] | null;
  /** Наименование */
  name?: string | null;
  /** Описание */
  description?: string | null;
  /**
   * Дата публикации
   * @format date-time
   */
  publishDate?: string;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  season?: Season;
}

/** Партия одежды */
export interface ClothingPartyModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Продукт */
  product?: ProductModel;
  /** Единицы продуктов */
  items?: ProductItemModel[] | null;
  /**
   * Дата постваки?
   * @format date-time
   */
  date?: string;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /** Происхождение */
  origin?: string | null;
}

/** Цвет */
export interface Color {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /** Название цвета */
  name?: string | null;
  /** Код */
  hex?: string | null;
}

export interface ColorModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Название цвета */
  name?: string | null;
  /** Код */
  hex?: string | null;
}

/** Результат чтения данных. */
export interface ColorModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: ColorModel[] | null;
}

export enum Coloring {
  Monocolor = "Monocolor",
  Bicolor = "Bicolor",
  Multicolor = "Multicolor",
  Pattern = "Pattern",
  Print = "Print",
  Jeans = "Jeans",
  Effect = "Effect",
}

/** Комментарий */
export interface CommentModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Пользователь */
  user?: UserModel;
  /**
   * От пользователя
   * @format uuid
   */
  userGuid?: string;
  /** Текст */
  text?: string | null;
  /** Нравится ли */
  isLike?: boolean | null;
  /**
   * Ид сущности
   * @format uuid
   */
  entityGuid?: string;
}

/** Результат чтения данных. */
export interface CommentModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: CommentModel[] | null;
}

export interface CreateColor {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  colorId?: string;
}

export interface CreateProductFileModel {
  /**
   * Ид продукта
   * @format uuid
   */
  productId?: string;
  /**
   * Ид загруженного файла
   * @format uuid
   */
  fileGuid?: string;
  /**
   * Ид цвета
   * @format uuid
   */
  colorGuid?: string | null;
  /**
   * Позиция файла
   * @format int64
   */
  position?: number;
  fileType?: FileType;
}

export interface CreateScanModel {
  /** @format uuid */
  userGuid?: string | null;
  code?: string | null;
}

/** Ссылка на файл */
export interface FileModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Позиция файла
   * @format int64
   */
  position?: number;
  fileType?: FileType;
  /**
   * Ид Файла
   * @format uuid
   */
  fileGuid?: string;
}

export enum FileType {
  Jpg = "Jpg",
  Jpeg = "Jpeg",
  Png = "Png",
  Svg = "Svg",
  Gif = "Gif",
  Tiff = "Tiff",
  Tif = "Tif",
  Mp4 = "Mp4",
  Mpeg = "Mpeg",
  Webm = "Webm",
}

/** Запрос на поиск "запросов" */
export interface GetBrandRequestsModel {
  name?: string | null;
  description?: string | null;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format uuid */
  userGuid?: string | null;
  status?: RequestStatus;
  /** @format uuid */
  updateUser?: string | null;
}

export interface GetBrandsModel {
  name?: string | null;
  description?: string | null;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
}

/** Совместимость вещей */
export interface LookModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Наименование */
  name?: string | null;
  /** @format double */
  modelHeight?: number | null;
  /** @format double */
  modelWidth?: number | null;
  modelShape?: BodyShape;
  /** Продукт */
  products?: LookProductModel[] | null;
  /** Образ */
  files?: FileModel[] | null;
  /** Теги */
  tags?: LookTagModel[] | null;
}

/** Результат чтения данных. */
export interface LookModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: LookModel[] | null;
}

/** Продукт образа */
export interface LookProductModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Совместимость вещей */
  look?: LookModel;
  /** Продукт */
  product?: ProductModel;
  /**
   * Образ
   * @format uuid
   */
  lookGuid?: string;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
}

/** Тег образа */
export interface LookTagModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Совместимость вещей */
  look?: LookModel;
  /**
   * ИД тега
   * @format uuid
   */
  lookGuid?: string;
  type?: LookTagType;
  /** Наименование */
  name?: string | null;
}

export enum LookTagType {
  Event = "Event",
  Style = "Style",
  Wether = "Wether",
}

/** Материал */
export interface Material {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /** Название бренда */
  name?: string | null;
  /** Некое описание */
  description?: string | null;
}

/** Материал */
export interface MaterialModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Название бренда */
  name?: string | null;
  /** Некое описание */
  description?: string | null;
}

/** Публикация */
export interface PostModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Текст */
  text?: string | null;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /** Бренд */
  brand?: BrandModel;
  /** Комментарии */
  comments?: CommentModel[] | null;
}

/** Результат чтения данных. */
export interface PostModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: PostModel[] | null;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

/** Продукт */
export interface Product {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /** Название продукта */
  name?: string | null;
  /** Описание */
  description?: string | null;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /** Бренд */
  brand?: Brand;
  /** Советы */
  tips?: ProductTip[] | null;
  /** Снимки товара */
  photos?: ProductFileLink[] | null;
  /** Доступные цвета */
  colors?: ProductColor[] | null;
  /** Комментарии */
  comments?: ProductComment[] | null;
  coloring?: Coloring;
  status?: ProductStatus;
  /** Состав вещи */
  composition?: ProductMaterial[] | null;
  season?: Season;
  /**
   * Ид коллекции
   * @format uuid
   */
  collectionGuid?: string | null;
  /**
   * Категория вещи
   * @format uuid
   */
  categoryGuid?: string;
}

/** Тип одежды */
export interface ProductCategoryModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Наименование */
  name?: string | null;
  /** Описание */
  description?: string | null;
  /**
   * Родительская категория
   * @format uuid
   */
  parentCategoryGuid?: string | null;
  /** Тип одежды */
  parentCategory?: ProductCategoryModel;
  /** Продукты, относящиеся к категории */
  products?: ProductModel[] | null;
  /** Дочернии категории */
  children?: ProductCategoryModel[] | null;
}

/** Результат чтения данных. */
export interface ProductCategoryModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: ProductCategoryModel[] | null;
}

/** Цвет продукта */
export interface ProductColor {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /**
   * Цвет
   * @format uuid
   */
  colorGuid?: string;
  /** Продукт */
  product?: Product;
  /** Цвет */
  color?: Color;
}

export interface ProductColorModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /**
   * Цвет
   * @format uuid
   */
  colorGuid?: string;
  /** Продукт */
  product?: ProductModel;
  color?: ColorModel;
}

/** Отзвы на вещь */
export interface ProductComment {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /**
   * От пользователя
   * @format uuid
   */
  userGuid?: string;
  /** Текст */
  text?: string | null;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /** Продукт */
  product?: Product;
  /** Пользователь */
  user?: User;
  /** Отсканированно */
  isScanned?: boolean;
  /** Нравится ли */
  isLike?: boolean | null;
}

/** Ссылка на файл */
export interface ProductFileLink {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /**
   * Позиция файла
   * @format int64
   */
  position?: number;
  fileType?: FileType;
  /**
   * Продут
   * @format uuid
   */
  productGuid?: string;
  /**
   * Цвет
   * @format uuid
   */
  colorGuid?: string | null;
  /**
   * Ид Файла
   * @format uuid
   */
  fileGuid?: string;
  /** Файлик */
  file?: VneFile;
  /** Продукт */
  product?: Product;
  /** Цвет продукта */
  color?: ProductColor;
}

/** Конкретное изделие */
export interface ProductItemModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  uniqeCode?: string | null;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /**
   * Пользователь-владелец
   * @format uuid
   */
  userGuid?: string | null;
  /** Продукт */
  product?: ProductModel;
  /** Пользователь */
  user?: UserModel;
  color?: ColorModel;
  /**
   * Цвет
   * @format uuid
   */
  colorGuid?: string | null;
  /** Партия одежды */
  clothingParty?: ClothingPartyModel;
  /**
   * Ид партии одежды
   * @format uuid
   */
  clothingPartyGuid?: string | null;
}

/** Материал продукта */
export interface ProductMaterial {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /**
   * Материал
   * @format uuid
   */
  materialGuid?: string;
  /**
   * Доля в издеелии
   * @format double
   */
  share?: number;
  /** Продукт */
  product?: Product;
  /** Материал */
  material?: Material;
}

/** Материал продукта */
export interface ProductMaterialModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /**
   * Материал
   * @format uuid
   */
  materialGuid?: string;
  /**
   * Доля в издеелии
   * @format double
   */
  share?: number;
  /** Продукт */
  product?: ProductModel;
  /** Материал */
  material?: MaterialModel;
}

/** Размер продукта */
export interface ProductMeasurementModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Размер, по которому будет произведена группировка
   * @format int32
   */
  size?: number;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string;
  /**
   * Измерение
   * @format double
   */
  measurement?: number;
  part?: BodyPart;
}

/** Продукт */
export interface ProductModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Название продукта */
  name?: string | null;
  /** Описание */
  description?: string | null;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /** Советы */
  tips?: TipModel[] | null;
  /** Снимки товара */
  photos?: FileModel[] | null;
  /** Бренд */
  brand?: BrandModel;
  /** Доступные цвета */
  colors?: ProductColorModel[] | null;
  /** Комментарии */
  comments?: CommentModel[] | null;
  /** Состав вещи */
  composition?: ProductMaterialModel[] | null;
  coloring?: Coloring;
  status?: ProductStatus;
  season?: Season;
  /**
   * Ид коллекции
   * @format uuid
   */
  collectionGuid?: string | null;
  /**
   * Категория вещи
   * @format uuid
   */
  categoryGuid?: string;
}

/** Результат чтения данных. */
export interface ProductModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: ProductModel[] | null;
}

export enum ProductStatus {
  Prepublish = "Prepublish",
  Published = "Published",
  Discontinued = "Discontinued",
}

/** Советы по одежде */
export interface ProductTip {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /** Текст */
  text?: string | null;
  /**
   * Продукт к которому относится совет
   * @format uuid
   */
  productGuid?: string;
  /** Файлы совета */
  files?: ProductTipFileLink[] | null;
  /** Продукт */
  product?: Product;
  /** Наименование */
  name?: string | null;
}

/** Ссылка на файл */
export interface ProductTipFileLink {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /**
   * Позиция файла
   * @format int64
   */
  position?: number;
  fileType?: FileType;
  /**
   * Совет
   * @format uuid
   */
  tipGuid?: string;
  /** Файлик */
  file?: VneFile;
  /** Советы по одежде */
  tip?: ProductTip;
  /**
   * Ид Файла
   * @format uuid
   */
  fileGuid?: string;
}

export interface RefreshModel {
  /**
   * ид юзера
   * @format uuid
   */
  userGuid?: string;
  /** токен */
  refreshToken?: string | null;
}

export enum RequestStatus {
  New = "New",
  Rejected = "Rejected",
  Accepted = "Accepted",
}

/** Единичное сканирование */
export interface ScanModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Пользователь */
  user?: UserModel;
  /** Конкретное изделие */
  productItem?: ProductItemModel;
  /**
   * ID пользователя
   * @format uuid
   */
  userGuid?: string | null;
  /**
   * ИД единицы товара
   * @format uuid
   */
  productItemGuid?: string;
}

/** Результат чтения данных. */
export interface ScanModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: ScanModel[] | null;
}

export enum Season {
  Summer = "Summer",
  Winter = "Winter",
  SpringSummer = "SpringSummer",
  PreFall = "PreFall",
  AutumnWinter = "AutumnWinter",
  ResortCruise = "ResortCruise",
}

/** Советы по одежде */
export interface TipModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Текст */
  text?: string | null;
  /** @format uuid */
  entityGuid?: string;
  /** Наименование */
  name?: string | null;
  /** Файлы совета */
  files?: FileModel[] | null;
}

export interface TokenModel {
  token?: string | null;
  /** @format int32 */
  tokenExpireIn?: number;
  refreshToken?: string | null;
  /** @format int32 */
  refreshTokenExpireIn?: number;
}

/** Пользователь */
export interface User {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /** UserName */
  userName?: string | null;
  /** Имя */
  firstName?: string | null;
  /** Фамилия */
  secondName?: string | null;
  /** Пароль пользователя */
  password?: string | null;
  type?: UserType;
  /**
   * Бренд-работодатель
   * @format uuid
   */
  brandGuid?: string | null;
}

/** Пользователь */
export interface UserModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** UserName */
  userName?: string | null;
  /** Имя */
  firstName?: string | null;
  /** Фамилия */
  secondName?: string | null;
  type?: UserType;
}

export enum UserType {
  User = "User",
  BrandAdmin = "BrandAdmin",
  BrandSeller = "BrandSeller",
  Admin = "Admin",
  SuperAdmin = "SuperAdmin",
}

/** Файлик */
export interface VneFile {
  /**
   * Идентификатор БД
   * @format int64
   */
  id?: number;
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Дата создания
   * @format date-time
   */
  createDT?: string;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
  /** Путь к файлу */
  path?: string | null;
  /** Наименование */
  name?: string | null;
  fileType?: FileType;
}
