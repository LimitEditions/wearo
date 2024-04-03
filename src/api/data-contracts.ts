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
  name?: string;
  type?: LookTagType;
  /**
   * ИД образа
   * @format uuid
   */
  lookGuid?: string;
}

/** Авторизация */
export interface AuthModel {
  username?: string;
  password?: string;
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
export interface BrandModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
  /** Красивое описание */
  descriptionRichContent?: string;
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

/** Результат чтения данных. */
export interface BrandModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: BrandModel[];
}

/** Бренд */
export interface BrandRequestModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
  /** Красивое описание */
  descriptionRichContent?: string;
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
  /** Коментарий */
  comment?: string | null;
  /** Пользователь */
  user?: UserModel;
  /** Приложенные файлы */
  files?: FileModel[] | null;
}

/** Результат чтения данных. */
export interface BrandRequestModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: BrandRequestModel[];
}

/** Коллекция одежды */
export interface ClothingCollectionModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Бренд */
  brand?: BrandModel;
  /** Список продуктов */
  products?: ProductModel[] | null;
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string;
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

/** Результат чтения данных. */
export interface ClothingCollectionModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: ClothingCollectionModel[];
}

/** Партия одежды */
export interface ClothingPartyModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  origin?: string;
}

export interface ColorModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Название цвета */
  name?: string;
  /** Код */
  hex?: string;
}

/** Результат чтения данных. */
export interface ColorModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: ColorModel[];
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
  /** Отметка удаления */
  isDeleted?: boolean;
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
  data?: CommentModel[];
}

/** Бренд */
export interface CreateBrandModel {
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
  /** Красивое описание */
  descriptionRichContent?: string;
  /**
   * Лого
   * @format uuid
   */
  photo?: string | null;
  /** Ссылка на сайт */
  link?: string | null;
}

/** Бренд */
export interface CreateBrandRequestModel {
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
  /** Красивое описание */
  descriptionRichContent?: string;
  /**
   * Лого
   * @format uuid
   */
  photo?: string | null;
  /** Ссылка на сайт */
  link?: string | null;
  /** Коментарий */
  comment?: string;
  /** Файлы */
  files?: string[] | null;
}

/** Коллекция одежды */
export interface CreateClothingCollectionModel {
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string;
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

/** Цвет */
export interface CreateColorsModel {
  /** Название цвета */
  name?: string;
  /** Код */
  hex?: string;
}

/** Комментарий */
export interface CreateCommentModel {
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

/** Совместимость вещей */
export interface CreateLookModel {
  /** Наименование */
  name?: string;
  /** @format double */
  modelHeight?: number | null;
  /** @format double */
  modelWidth?: number | null;
  modelShape?: BodyShape;
}

/** Материал */
export interface CreateMaterialModel {
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
}

/** Публикация */
export interface CreatePostModel {
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /** Текст */
  text?: string;
}

/** Тип одежды */
export interface CreateProductCategoryModel {
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string;
  /**
   * Родительская категория
   * @format uuid
   */
  parentCategoryGuid?: string | null;
}

export interface CreateProductColor {
  /**
   * ИД продукта
   * @format uuid
   */
  id?: string;
  /**
   * ИД цвета
   * @format uuid
   */
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

/** Конкретное изделие */
export interface CreateProductItemModel {
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
  /**
   * Цвет
   * @format uuid
   */
  colorGuid?: string | null;
  /**
   * Ид партии одежды
   * @format uuid
   */
  clothingPartyGuid?: string | null;
}

/** Материал продукта */
export interface CreateProductMaterialModel {
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
}

/** Продукт */
export interface CreateProductModel {
  /** Название продукта */
  name?: string;
  /** Описание */
  description?: string;
  coloring?: Coloring;
  status?: ProductStatus;
  season?: Season;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /**
   * Категория вещи
   * @format uuid
   */
  categoryGuid?: string;
  /**
   * Ид коллекции
   * @format uuid
   */
  collectionGuid?: string | null;
}

export interface CreateScanModel {
  /** @format uuid */
  userGuid?: string | null;
  code?: string;
}

/** Советы */
export interface CreateTipModel {
  /** Наименование */
  name?: string | null;
  /** Текст */
  text?: string;
  /**
   * Ид сущности
   * @format uuid
   */
  entityGuid?: string;
}

/** Модель создания пользователя */
export interface CreateUserModel {
  /** UserName */
  username?: string;
  /** Пароль пользователя */
  password?: string;
  /** Имя */
  firstName?: string | null;
  /** Фамилия */
  secondName?: string | null;
}

/** Ссылка на файл */
export interface FileModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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

/** Совместимость вещей */
export interface LookModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Наименование */
  name?: string;
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
  data?: LookModel[];
}

/** Продукт образа */
export interface LookProductModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Совместимость вещей */
  look?: LookModel;
  /**
   * ИД тега
   * @format uuid
   */
  lookGuid?: string;
  type?: LookTagType;
  /** Наименование */
  name?: string;
}

export enum LookTagType {
  Event = "Event",
  Style = "Style",
  Wether = "Wether",
}

/** Материал */
export interface MaterialModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
}

/** Публикация */
export interface PostModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Текст */
  text?: string;
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
  data?: PostModel[];
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

/** Тип одежды */
export interface ProductCategoryModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string;
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
  data?: ProductCategoryModel[];
}

export interface ProductColorModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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

/** Конкретное изделие */
export interface ProductItemModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  uniqeCode?: string;
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
export interface ProductMaterialModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Название продукта */
  name?: string;
  /** Описание */
  description?: string;
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
  data?: ProductModel[];
}

export enum ProductStatus {
  Prepublish = "Prepublish",
  Published = "Published",
  Discontinued = "Discontinued",
}

export interface RefreshModel {
  /**
   * ид юзера
   * @format uuid
   */
  userGuid?: string;
  /** токен */
  refreshToken?: string;
}

export interface RejectRequestModel {
  /** @format uuid */
  guid?: string;
  comment?: string;
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
  /** Отметка удаления */
  isDeleted?: boolean;
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
  data?: ScanModel[];
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
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** Текст */
  text?: string;
  /** @format uuid */
  entityGuid?: string;
  /** Наименование */
  name?: string | null;
  /** Файлы совета */
  files?: FileModel[] | null;
}

export interface TokenModel {
  token?: string;
  /** @format int32 */
  tokenExpireIn?: number;
  refreshToken?: string;
  /** @format int32 */
  refreshTokenExpireIn?: number;
  /** @format uuid */
  guid?: string;
}

/** Бренд */
export interface UpdateBrandModel {
  /** @format uuid */
  guid?: string;
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
  /** Красивое описание */
  descriptionRichContent?: string;
  /**
   * Лого
   * @format uuid
   */
  photo?: string | null;
  /** Ссылка на сайт */
  link?: string | null;
}

/** Комментарий */
export interface UpdateCommentModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * От пользователя
   * @format uuid
   */
  userGuid?: string;
  /** Текст */
  text?: string | null;
  /** Нравится ли */
  isLike?: boolean | null;
}

/** Совместимость вещей */
export interface UpdateLookModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Наименование */
  name?: string;
  /** @format double */
  modelHeight?: number | null;
  /** @format double */
  modelWidth?: number | null;
  modelShape?: BodyShape;
}

/** Материал */
export interface UpdateMaterialModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
}

/** Публикация */
export interface UpdatePostModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /** Текст */
  text?: string;
}

/** Тип одежды */
export interface UpdateProductCategoryModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string;
  /**
   * Родительская категория
   * @format uuid
   */
  parentCategoryGuid?: string | null;
}

export interface UpdateProductItemModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** @format uuid */
  productGuid?: string;
  /** @format uuid */
  userGuid?: string | null;
  /** @format uuid */
  colorGuid?: string | null;
  /** @format uuid */
  clothingPartyGuid?: string | null;
}

/** Продукт */
export interface UpdateProductModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Название продукта */
  name?: string;
  /** Описание */
  description?: string;
  coloring?: Coloring;
  status?: ProductStatus;
  season?: Season;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /**
   * Категория вещи
   * @format uuid
   */
  categoryGuid?: string;
  /**
   * Ид коллекции
   * @format uuid
   */
  collectionGuid?: string | null;
}

/** Советы */
export interface UpdateTipModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Наименование */
  name?: string | null;
  /** Текст */
  text?: string;
  /**
   * Ид сущности
   * @format uuid
   */
  entityGuid?: string;
}

/** Пользователь */
export interface UpdateUserModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Пароль пользователя */
  password?: string | null;
  /** UserName */
  username?: string;
  /** Имя */
  firstName?: string | null;
  /** Фамилия */
  secondName?: string | null;
  type?: UserType;
}

/** Пользователь */
export interface UserModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Отметка удаления */
  isDeleted?: boolean;
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
  /** UserName */
  username?: string;
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
