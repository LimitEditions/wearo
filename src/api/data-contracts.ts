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

export interface AddExtraFileToPostModel {
  /**
   * Ид Файла
   * @format uuid
   */
  fileGuid?: string;
  /**
   * Ид поста
   * @format uuid
   */
  postGuid?: string;
  /**
   * Номер
   * @format int32
   */
  order?: number;
}

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
  /**
   * Позиция файла
   * @format int32
   */
  position?: number;
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
  /**
   * Цвет продукта
   * @format uuid
   */
  productColorGuid?: string | null;
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
  Neck = "Neck",
  SleeveLength = "SleeveLength",
  ShoulderWidth = "ShoulderWidth",
  LegLength = "LegLength",
  Height = "Height",
  BicepWristCircumference = "BicepWristCircumference",
  CalfAnkleCircumference = "CalfAnkleCircumference",
  Bust = "Bust",
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  /** Коллекции одежды */
  collections?: ClothingCollectionModel[] | null;
  /** Email */
  email?: string | null;
  /** Логин Telegram */
  telegramId?: string | null;
  /** Логин WhatsApp */
  whatsappId?: string | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  /** Email */
  email?: string | null;
  /** Логин Telegram */
  telegramId?: string | null;
  /** Логин WhatsApp */
  whatsappId?: string | null;
  /** Полное наименование. */
  fullName?: string;
  /** Юр адрес. */
  address?: string;
  /** ИНН. */
  inn?: string;
  /** КПП. */
  kpp?: string;
  /** ОГРН. */
  ogrn?: string;
  /** Номер телефона. */
  phoneNumber?: string;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  Abstract = "Abstract",
  Animalistic = "Animalistic",
  Argyle = "Argyle",
  Geometric = "Geometric",
  PolkaDot = "PolkaDot",
  Houndstooth = "Houndstooth",
  Dip = "Dip",
  Other = "Other",
  Check = "Check",
  Logo = "Logo",
  Military = "Military",
  Marine = "Marine",
  Lettering = "Lettering",
  Monochrome = "Monochrome",
  Ornament = "Ornament",
  Landscape = "Landscape",
  Paisley = "Paisley",
  Stripe = "Stripe",
  Patchwork = "Patchwork",
  Multicolored = "Multicolored",
  Religious = "Religious",
  GlowInTheDark = "GlowInTheDark",
  TieDye = "TieDye",
  Ethnic = "Ethnic",
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Пользователь */
  user?: UserModel;
  /**
   * От пользователя
   * @format uuid
   */
  userGuid?: string;
  /** Текст */
  text?: string | null;
  isLike?: boolean | null;
  /** Отсканирована ли вещь комментатором. */
  isSсanned?: boolean | null;
  /** Лайкнул ли пользователь этот коммент */
  isLikedByUser?: boolean | null;
  /**
   * Ид сущности
   * @format uuid
   */
  entityGuid?: string;
  /**
   * Ответ на коммент
   * @format uuid
   */
  replyAtGuid?: string | null;
  /**
   * Количество ответов на комментарий.
   * @format int32
   */
  repliesCount?: number;
  /**
   * Количество ответов с лайками
   * @format int32
   */
  likesCount?: number;
  /** Привязанные файлы. */
  files?: FileModel[] | null;
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

export interface ConfirmConfirmitionModel {
  /** @format uuid */
  guid?: string;
  code?: string;
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
  /** Email */
  email?: string | null;
  /** Логин Telegram */
  telegramId?: string | null;
  /** Логин WhatsApp */
  whatsappId?: string | null;
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
  /** Email */
  email?: string | null;
  /** Логин Telegram */
  telegramId?: string | null;
  /** Логин WhatsApp */
  whatsappId?: string | null;
  /** Полное наименование. */
  fullName?: string;
  /** Юр адрес. */
  address?: string;
  /** ИНН. */
  inn?: string;
  /** КПП. */
  kpp?: string;
  /** ОГРН. */
  ogrn?: string;
  /** Номер телефона. */
  phoneNumber?: string;
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
  isLike?: boolean | null;
  /**
   * Ид сущности
   * @format uuid
   */
  entityGuid?: string;
  /**
   * Ответ на коммент
   * @format uuid
   */
  replyAtGuid?: string | null;
  /** Прикрепляемые файлы. */
  files?: string[] | null;
}

export interface CreateConfiramtionEmailModel {
  /** @format uuid */
  guid?: string;
  email?: string;
}

export interface CreateConfiramtionPhoneModel {
  /** @format uuid */
  guid?: string;
  phone?: string;
}

export interface CreateFavoriteModel {
  /**
   * Пользователь
   * @format uuid
   */
  userGuid?: string;
  /**
   * Товар
   * @format uuid
   */
  productGuid?: string;
}

export interface CreateFileProductModel {
  /**
   * Гуид файла
   * @format uuid
   */
  fileGuid?: string;
  /**
   * Гуид продукта
   * @format uuid
   */
  productGuid?: string;
  /**
   * Относительная позиция по оси Х
   * @format double
   */
  x?: number;
  /**
   * Относительная позиция по оси У
   * @format double
   */
  y?: number;
  /**
   * Ссылка на цвет вещи
   * @format uuid
   */
  productColorGuid?: string | null;
}

export interface CreateHighlightModel {
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  /** Возможное имя хайлайта */
  name?: string | null;
  /**
   * Картинка, считающаяся основной
   * @format uuid
   */
  mainPhotoGuid?: string | null;
  /** Набор входящих сторис */
  stories?: string[];
}

/** Модель создания лайка. */
export interface CreateLikeModel {
  /**
   * Сущность.
   * @format uuid
   */
  entityGuid?: string;
  /**
   * Ид пользователя.
   * @format uuid
   */
  fromGuid?: string;
}

/** Образ/лукбук */
export interface CreateLookModel {
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string | null;
  /**
   * Рост модели
   * @format double
   */
  modelHeight?: number | null;
  /**
   * Обхват бедер
   * @format double
   */
  modelHip?: number | null;
  modelShape?: BodyShape;
  /** Набор файлов */
  files?: string[] | null;
  /** Набор тегов */
  tags?: CreateLookModelTag[] | null;
  /** Набор продуктов */
  products?: CreateLookModelProduct[] | null;
  /**
   * Заглавная фото
   * @format uuid
   */
  mainFileGuid?: string | null;
  /**
   * Обхват груди
   * @format double
   */
  modelChest?: number | null;
  /**
   * Обхват талии
   * @format double
   */
  waist?: number | null;
}

export interface CreateLookModelProduct {
  /** @format uuid */
  productGuid?: string;
  /** @format uuid */
  productColorGuid?: string | null;
}

export interface CreateLookModelTag {
  name?: string;
  type?: LookTagType;
}

/** Материал */
export interface CreateMaterialModel {
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
}

export interface CreateMessageModel {
  /**
   * От пользователя
   * @format uuid
   */
  fromUserGuid?: string;
  /**
   * К пользователю
   * @format uuid
   */
  toUserGuid?: string;
  /**
   * Приложенный файл
   * @format uuid
   */
  fileGuid?: string | null;
  /** Текст */
  text?: string | null;
  /**
   * Группирующий гуид
   * @format uuid
   */
  groupId?: string | null;
  /**
   * Время прочтения
   * @format date-time
   */
  readDt?: string | null;
  /**
   * Ответ на сообщение
   * @format uuid
   */
  replyAtGuid?: string | null;
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
  /**
   * Файл
   * @format uuid
   */
  fileGuid?: string | null;
  /**
   * Ссылка на колекцию
   * @format uuid
   */
  collectionGuid?: string | null;
  /**
   * Ссылка на образ
   * @format uuid
   */
  lookGuid?: string | null;
  /**
   * Ссылка на совет
   * @format uuid
   */
  tipGuid?: string | null;
  /**
   * Ссылка на промоакцию
   * @format uuid
   */
  promoGuid?: string | null;
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
  productColorGuid?: string | null;
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
  productGuid?: string | null;
  /**
   * Бренд, усли продукт не задан
   * @format uuid
   */
  brandGuid?: string | null;
  /**
   * Пользователь-владелец
   * @format uuid
   */
  userGuid?: string | null;
  /**
   * Цвет
   * @format uuid
   */
  productColorGuid?: string | null;
  /**
   * Ид партии одежды
   * @format uuid
   */
  clothingPartyGuid?: string | null;
  /**
   * Количество создаваемых элементов
   * @format int32
   */
  count?: number | null;
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
   * Бренд ИД
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
  /**
   * Главное фото
   * @format uuid
   */
  mainPhotoGuid?: string | null;
  /** Пол */
  gender?: Gender;
  /** URI Продукта */
  uri?: string | null;
  /** Код изделия */
  code?: string | null;
}

export interface CreatePromotionCodeModel {
  /**
   * Ид промо
   * @format uuid
   */
  promotionGuid?: string;
  /** Набор кодов */
  codes?: string[];
}

/** Модель для создания промо-акции */
export interface CreatePromotionModel {
  /** Наименование */
  name?: string;
  /** Текст */
  text?: string;
  /**
   * Обложка акции
   * @format uuid
   */
  imageGuid?: string | null;
  /**
   * Необходимое количество вещей во владении
   * @format int32
   */
  productInOwnershipCount?: number;
  /**
   * Количество необходимых отсканированных вещей
   * @format int32
   */
  scannedProductCount?: number;
  /** Для всех ли вещей бренда акция */
  isForAllProducts?: boolean;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  /** Набор продуктов */
  products?: string[] | null;
  /** Код, если он один на всех */
  universalCode?: string | null;
  /**
   * Дата начала действия
   * @format date-time
   */
  start?: string;
  /**
   * Дата оканчания действия
   * @format date-time
   */
  end?: string | null;
  /**
   * Ограничение на использование пользователями
   * @format int32
   */
  codePerUserLimit?: number | null;
}

/** Подписка на уведомления */
export interface CreatePushSubscribtionModel {
  /**
   * Пользователь
   * @format uuid
   */
  userGuid?: string;
  pushAuth?: string;
  pushEndpoint?: string;
  pushP256DH?: string;
}

export interface CreateScanModel {
  /** @format uuid */
  userGuid?: string | null;
  code?: string;
}

export interface CreateSizeChartModel {
  /** Наименование. */
  name?: string;
  categories?: string[];
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  unit?: MeasurementUnits;
  /** Измерения */
  measures?: CreateSizeSizeChartMeasureModel[];
}

export interface CreateSizeSizeChartMeasureModel {
  sizeName?: string;
  /** @format double */
  measurement?: number;
  part?: BodyPart;
}

export interface CreateStoryModel {
  /**
   * Файл сторис
   * @format uuid
   */
  fileGuid?: string;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
}

/** Подписка на бренд */
export interface CreateSubscriptionModel {
  /**
   * Юзер
   * @format uuid
   */
  userGuid?: string;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
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
  type?: UserType;
  /**
   * ИД аватара
   * @format uuid
   */
  mainAvatarGuid?: string | null;
  /** @format date */
  birthDate?: string | null;
  city?: string | null;
  /** @format double */
  height?: number | null;
  /** @format double */
  weight?: number | null;
}

export enum EditType {
  None = "None",
  Delete = "Delete",
  Add = "Add",
}

export enum EnitityLikeType {
  Story = "Story",
  ProductComment = "ProductComment",
  Post = "Post",
  PostComment = "PostComment",
}

export enum EnitityViewType {
  Story = "Story",
  Product = "Product",
  Post = "Post",
}

/** Просмотр сущности */
export interface EntityViewModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Ид Сущности
   * @format uuid
   */
  entityGuid?: string;
  /**
   * Ид пользователя
   * @format uuid
   */
  userGuid?: string;
}

/** Результат чтения данных. */
export interface EntityViewModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: EntityViewModel[];
}

/** Избранная вещь пользователя */
export interface FavoriteModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Пользователь
   * @format uuid
   */
  userGuid?: string;
  /**
   * Товар
   * @format uuid
   */
  productGuid?: string;
}

/** Результат чтения данных. */
export interface FavoriteModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: FavoriteModel[];
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Позиция файла
   * @format int64
   */
  position?: number;
  /** Наименование */
  name?: string | null;
  fileType?: FileType;
  /**
   * Ид Файла
   * @format uuid
   */
  fileGuid?: string;
  /** Ссылки на продукты */
  products?: FileProductModel[] | null;
  /**
   * Ид сущности
   * @format uuid
   */
  entityGuid?: string;
}

/** Отображение файла на изображении */
export interface FileProductModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Гуид файла
   * @format uuid
   */
  fileGuid?: string;
  /**
   * Гуид продукта
   * @format uuid
   */
  productGuid?: string;
  /**
   * Относительная позиция по оси Х
   * @format double
   */
  x?: number;
  /**
   * Относительная позиция по оси У
   * @format double
   */
  y?: number;
  /**
   * Ссылка на цвет вещи
   * @format uuid
   */
  productColorGuid?: string | null;
}

export enum FileType {
  Jpg = "Jpg",
  Jpeg = "Jpeg",
  Png = "Png",
  Webm = "Webm",
  Webp = "Webp",
  Mp4 = "Mp4",
}

export enum FilterType {
  StartsWith = "StartsWith",
  EndsWith = "EndsWith",
  Contains = "Contains",
}

export interface ForwardMessagesModel {
  /**
   * Кому идёт пересылка
   * @format uuid
   */
  to: string;
  /** Перечень пересылаемых сообщений */
  messages: string[];
  /** Текст сообщения */
  text?: string | null;
}

/** Пол */
export enum Gender {
  Male = "Male",
  Female = "Female",
  Boy = "Boy",
  Girl = "Girl",
  Unisex = "Unisex",
  UnisexKid = "UnisexKid",
}

export interface GetPushSubscribtionsModel {
  /** @format uuid */
  userGuid?: string | null;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  sortMember?: string | null;
  ascending?: boolean;
}

/** Модель редактирования */
export interface GuidEditModel {
  /**
   * ИД
   * @format uuid
   */
  guid?: string;
  edit?: EditType;
}

/** Хайлайт из набора сторис */
export interface HighlightModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Набор вложенных сторис */
  stories?: HighlightStoryModel[] | null;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  /** Возможное имя хайлайта */
  name?: string | null;
  /**
   * Картинка, считающаяся основной
   * @format uuid
   */
  mainPhotoGuid?: string | null;
  /** Список сторей */
  storiesGuids?: string[] | null;
}

/** Результат чтения данных. */
export interface HighlightModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: HighlightModel[];
}

/** Связка хайлайта и сторис */
export interface HighlightStoryModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Сторис */
  story?: StoryModel;
  /** Хайлайт из набора сторис */
  highlight?: HighlightModel;
  /**
   * Хайлайт
   * @format uuid
   */
  highlightGuid?: string;
  /**
   * Сторис
   * @format uuid
   */
  storyGuid?: string;
}

export interface ImportResult {
  resultCode?: ImportResultCode;
  errorDetail?: string | null;
  productsResult?: Record<string, ImportResultCode>;
}

export enum ImportResultCode {
  Ok = "Ok",
  OkCreated = "OkCreated",
  OkEdited = "OkEdited",
  InvalidCategory = "InvalidCategory",
  InvalidValue = "InvalidValue",
  InvalidFile = "InvalidFile",
  EntityExists = "EntityExists",
}

/** Сущность лайкосика. */
export interface LikeModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Сущность.
   * @format uuid
   */
  entityGuid?: string;
  /**
   * Ид пользователя.
   * @format uuid
   */
  fromGuid?: string;
}

/** Результат чтения данных. */
export interface LikeModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: LikeModel[];
}

/** Образ/лукбук */
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string | null;
  /**
   * Рост модели
   * @format double
   */
  modelHeight?: number | null;
  /**
   * Обхват бедер
   * @format double
   */
  modelHip?: number | null;
  modelShape?: BodyShape;
  /** Продукт */
  products?: LookProductModel[] | null;
  /** Образ */
  files?: FileModel[] | null;
  /** Теги */
  tags?: LookTagModel[] | null;
  /**
   * Заглавная фото
   * @format uuid
   */
  mainFileGuid?: string | null;
  /**
   * Обхват груди
   * @format double
   */
  modelChest?: number | null;
  /**
   * Обхват талии
   * @format double
   */
  waist?: number | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Образ/лукбук */
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
  productColor?: ProductColorModel;
  /**
   * Цвет продукта
   * @format uuid
   */
  productColorGuid?: string | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Образ/лукбук */
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
  Weather = "Weather",
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Название бренда */
  name?: string;
  /** Некое описание */
  description?: string;
}

export enum MeasurementUnits {
  ValueСentimeter = "Сentimeter",
  Millimeter = "Millimeter",
  Meter = "Meter",
  Inch = "Inch",
}

/** Сообщение одного пользователя другому */
export interface MessageModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * От пользователя
   * @format uuid
   */
  fromUserGuid?: string;
  /**
   * К пользователю
   * @format uuid
   */
  toUserGuid?: string;
  /**
   * Приложенный файл
   * @format uuid
   */
  fileGuid?: string | null;
  /** Текст */
  text?: string | null;
  /**
   * Группирующий гуид
   * @format uuid
   */
  groupId?: string | null;
  /**
   * Время прочтения
   * @format date-time
   */
  readDt?: string | null;
  /**
   * Ответ на сообщение
   * @format uuid
   */
  replyAtGuid?: string | null;
}

/** Результат чтения данных. */
export interface MessageModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: MessageModel[];
}

export interface NotificationData {
  /** @format uuid */
  userGuid?: string;
  title?: string;
  message?: string;
}

export interface NotificationSubscriptionModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
}

/** Результат чтения данных. */
export interface NotificationSubscriptionModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: NotificationSubscriptionModel[];
}

/** Дополнительные файлы к посту */
export interface PostFileModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Ид поста
   * @format uuid
   */
  postGuid?: string;
  /**
   * Ид файла
   * @format uuid
   */
  fileGuid?: string;
  /**
   * Порядковый номер
   * @format int32
   */
  order?: number;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Текст */
  text?: string;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
  /**
   * Файл
   * @format uuid
   */
  fileGuid?: string | null;
  /** Бренд */
  brand?: BrandModel;
  /** Комментарии */
  comments?: CommentModel[] | null;
  /** Ссылка на файл */
  file?: FileModel;
  /** Дополнительные файлы */
  extraFiles?: PostFileModel[] | null;
  /** Коллекция одежды */
  collection?: ClothingCollectionModel;
  /** Образ/лукбук */
  look?: LookModel;
  /** Советы по одежде */
  tip?: TipModel;
  /** Акция */
  promo?: PromotionModel;
  /**
   * Ссылка на колекцию
   * @format uuid
   */
  collectionGuid?: string | null;
  /**
   * Ссылка на образ
   * @format uuid
   */
  lookGuid?: string | null;
  /**
   * Ссылка на совет
   * @format uuid
   */
  tipGuid?: string | null;
  /**
   * Ссылка на промоакцию
   * @format uuid
   */
  promoGuid?: string | null;
  /** Ссылки на товары при наличии */
  products?: PostProductModel[] | null;
  /** @format int32 */
  likesCount?: number;
  /** @format int32 */
  commentsCount?: number;
  isLikedByCurrentUser?: boolean;
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

export interface PostProductModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Ид поста
   * @format uuid
   */
  postGuid?: string;
  /**
   * Ид продукта
   * @format uuid
   */
  productGuid?: string;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  uniqeCode?: string;
  /**
   * Продукт
   * @format uuid
   */
  productGuid?: string | null;
  /**
   * Пользователь-владелец
   * @format uuid
   */
  userGuid?: string | null;
  /** Продукт */
  product?: ProductModel;
  /** Пользователь */
  user?: UserModel;
  color?: ProductColorModel;
  /**
   * Цвет
   * @format uuid
   */
  productColorGuid?: string | null;
  /** Партия одежды */
  clothingParty?: ClothingPartyModel;
  /**
   * Ид партии одежды
   * @format uuid
   */
  clothingPartyGuid?: string | null;
  /** @format uuid */
  brandGuid?: string | null;
}

/** Результат чтения данных. */
export interface ProductItemModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: ProductItemModel[];
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Размер, по которому будет произведена группировка */
  size?: string;
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
  unit?: MeasurementUnits;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Название продукта */
  name?: string;
  /** Описание */
  description?: string;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
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
  /**
   * Главное фото
   * @format uuid
   */
  mainPhotoGuid?: string | null;
  /** URI Продукта */
  uri?: string | null;
  /** Бренд */
  brand?: BrandModel;
  /** Коллекция одежды */
  collection?: ClothingCollectionModel;
  /** Тип одежды */
  category?: ProductCategoryModel;
  /** Советы */
  tips?: TipModel[] | null;
  /** Снимки товара */
  photos?: FileModel[] | null;
  /** Доступные цвета */
  colors?: ProductColorModel[] | null;
  /** Комментарии */
  comments?: CommentModel[] | null;
  /** Состав вещи */
  composition?: ProductMaterialModel[] | null;
  /** Измерения вещи */
  measurement?: ProductMeasurementModel[] | null;
  /** Пол */
  gender?: Gender;
  /** Код изделия */
  code?: string | null;
  /**
   * Количество отзывов.
   * @format int32
   */
  commentsCount?: number | null;
  /**
   * Процент лаков
   * @format double
   */
  likePercent?: number | null;
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

/** Акция */
export interface PromotionModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Бренд */
  brand?: BrandModel;
  /** Продукты участвующие в акции */
  products?: PromotionProductModel[] | null;
  /** Наименование */
  name?: string;
  /** Текст */
  text?: string;
  /**
   * Обложка акции
   * @format uuid
   */
  imageGuid?: string | null;
  /**
   * Необходимое количество вещей во владении
   * @format int32
   */
  productInOwnershipCount?: number;
  /**
   * Количество необходимых отсканированных вещей
   * @format int32
   */
  scannedProductCount?: number;
  /** Для всех ли вещей бренда акция */
  isForAllProducts?: boolean;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  /** Код, если он один на всех */
  universalCode?: string | null;
  /**
   * Дата начала действия
   * @format date-time
   */
  start?: string;
  /**
   * Дата оканчания действия
   * @format date-time
   */
  end?: string | null;
  /**
   * Ограничение на использование пользователями
   * @format int32
   */
  codePerUserLimit?: number | null;
}

/** Результат чтения данных. */
export interface PromotionModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: PromotionModel[];
}

/** Связка продуктов участвующих в акции */
export interface PromotionProductModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Ид продукта
   * @format uuid
   */
  productGuid?: string;
  /**
   * Ид акции
   * @format uuid
   */
  promotionGuid?: string;
  /** Акция */
  promotion?: PromotionModel;
  /** Продукт */
  product?: ProductModel;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  AnySeason = "AnySeason",
  Demiseason = "Demiseason",
}

export interface SizeChartCategoryModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Тип одежды */
  category?: ProductCategoryModel;
  /** Размерная сетка. */
  sizeChart?: SizeChartModel;
  /**
   * Ид Размерной сетки.
   * @format uuid
   */
  sizeChartGuid?: string;
  /**
   * Ид категории.
   * @format uuid
   */
  categoryGuid?: string;
}

/** Измерение */
export interface SizeChartMeasureModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Имя размера. */
  sizeName?: string;
  /**
   * Ссылка на размерную сетку.
   * @format uuid
   */
  sizeChartGuid?: string;
  /**
   * Измерение
   * @format double
   */
  measurement?: number;
  part?: BodyPart;
}

/** Размерная сетка. */
export interface SizeChartModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Наименование. */
  name?: string;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  unit?: MeasurementUnits;
  /** Измерения. */
  measures?: SizeChartMeasureModel[] | null;
  /** Бренд */
  brand?: BrandModel;
  /** Список категорий. */
  categories?: SizeChartCategoryModel[] | null;
}

/** Результат чтения данных. */
export interface SizeChartModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: SizeChartModel[];
}

/** Сторис */
export interface StoryModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * Файл сторис
   * @format uuid
   */
  fileGuid?: string;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
}

/** Результат чтения данных. */
export interface StoryModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: StoryModel[];
}

/** Результат чтения данных. */
export interface StringDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: string[];
}

/** Подписка на бренд */
export interface SubscriptionModel {
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /** Пользователь */
  user?: UserModel;
  /** Бренд */
  brand?: BrandModel;
  /**
   * Юзер
   * @format uuid
   */
  userGuid?: string;
  /**
   * Бренд
   * @format uuid
   */
  brandGuid?: string;
}

/** Результат чтения данных. */
export interface SubscriptionModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: SubscriptionModel[];
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
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
  /** Email */
  email?: string | null;
  /** Логин Telegram */
  telegramId?: string | null;
  /** Логин WhatsApp */
  whatsappId?: string | null;
}

/** Коллекция одежды */
export interface UpdateClothingCollectionModel {
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
  isLike?: boolean | null;
  /**
   * Ответ на коммент
   * @format uuid
   */
  replyAtGuid?: string | null;
  /** Модель редактирования набора файлов. */
  files?: GuidEditModel[] | null;
}

export interface UpdateHighlightModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  /** Возможное имя хайлайта */
  name?: string | null;
  /**
   * Картинка, считающаяся основной
   * @format uuid
   */
  mainPhotoGuid?: string | null;
  /** Модель редактирования набора сторис */
  stories?: GuidEditModel[] | null;
}

/** Образ/лукбук */
export interface UpdateLookModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Наименование */
  name?: string;
  /** Описание */
  description?: string | null;
  /**
   * Рост модели
   * @format double
   */
  modelHeight?: number | null;
  /**
   * Обхват бедер
   * @format double
   */
  modelHip?: number | null;
  modelShape?: BodyShape;
  /**
   * Заглавная фото
   * @format uuid
   */
  mainFileGuid?: string | null;
  /**
   * Обхват груди
   * @format double
   */
  modelChest?: number | null;
  /**
   * Обхват талии
   * @format double
   */
  waist?: number | null;
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

/** Модель обновления сообщения */
export interface UpdateMessageModel {
  /**
   * Ид
   * @format uuid
   */
  guid?: string;
  /**
   * Приложенный файл
   * @format uuid
   */
  fileGuid?: string | null;
  /** Текст */
  text?: string | null;
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
  /**
   * Файл
   * @format uuid
   */
  fileGuid?: string | null;
  /**
   * Ссылка на колекцию
   * @format uuid
   */
  collectionGuid?: string | null;
  /**
   * Ссылка на образ
   * @format uuid
   */
  lookGuid?: string | null;
  /**
   * Ссылка на совет
   * @format uuid
   */
  tipGuid?: string | null;
  /**
   * Ссылка на промоакцию
   * @format uuid
   */
  promoGuid?: string | null;
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
  /** Идентификационный номер устройства */
  tagUID?: string | null;
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
   * Бренд ИД
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
  /**
   * Главное фото
   * @format uuid
   */
  mainPhotoGuid?: string | null;
  /** Пол */
  gender?: Gender;
  /** URI Продукта */
  uri?: string | null;
  /** Код изделия */
  code?: string | null;
}

/** Модель редактирования промо */
export interface UpdatePromotionModel {
  /**
   * Идентификатор
   * @format uuid
   */
  guid?: string;
  /** Наименование */
  name?: string;
  /** Текст */
  text?: string;
  /**
   * Обложка акции
   * @format uuid
   */
  imageGuid?: string | null;
  /**
   * Необходимое количество вещей во владении
   * @format int32
   */
  productInOwnershipCount?: number;
  /**
   * Количество необходимых отсканированных вещей
   * @format int32
   */
  scannedProductCount?: number;
  /** Для всех ли вещей бренда акция */
  isForAllProducts?: boolean;
  /**
   * Бренд ИД
   * @format uuid
   */
  brandGuid?: string;
  /** Набор продуктов */
  products?: GuidEditModel[] | null;
  /** Код, если он один на всех */
  universalCode?: string | null;
  /**
   * Дата начала действия
   * @format date-time
   */
  start?: string;
  /**
   * Дата оканчания действия
   * @format date-time
   */
  end?: string | null;
  /**
   * Ограничение на использование пользователями
   * @format int32
   */
  codePerUserLimit?: number | null;
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
  /**
   * ИД аватара
   * @format uuid
   */
  mainAvatarGuid?: string | null;
  /** Номер телефона */
  phone?: string | null;
  /** Электронная почта */
  email?: string | null;
  /** Id Тг */
  telegramId?: string | null;
  /** Id Вк */
  vkId?: string | null;
  /** Флаги доступности */
  flags?: UserInfoFlags;
  /** @format date */
  birthDate?: string | null;
  city?: string | null;
  /** @format double */
  height?: number | null;
  /** @format double */
  weight?: number | null;
}

/** Флаги доступности */
export enum UserInfoFlags {
  Secret = "Secret",
  ShowPhone = "ShowPhone",
  ShowEmail = "ShowEmail",
  ShowTelegram = "ShowTelegram",
  ShowVkId = "ShowVkId",
  ShowAll = "ShowAll",
}

/** Информация о пользователе */
export interface UserInfoModel {
  /** Номер телефона */
  phone?: string | null;
  /** Электронная почта */
  email?: string | null;
  /** Id Тг */
  telegramId?: string | null;
  /** Id Вк */
  vkId?: string | null;
  /** Флаги доступности */
  flags?: UserInfoFlags;
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
  createDT?: string | null;
  /**
   * Дата обнавления
   * @format date-time
   */
  updateDT?: string | null;
  /**
   * ИД бренда
   * @format uuid
   */
  brandGuid?: string | null;
  /** UserName */
  username?: string;
  /** Имя */
  firstName?: string | null;
  /** Фамилия */
  secondName?: string | null;
  type?: UserType;
  /** Информация о пользователе */
  userInfo?: UserInfoModel;
  /**
   * ИД аватара
   * @format uuid
   */
  mainAvatarGuid?: string | null;
  /** @format date */
  birthDate?: string | null;
  city?: string | null;
  /** @format double */
  height?: number | null;
  /** @format double */
  weight?: number | null;
}

/** Результат чтения данных. */
export interface UserModelDataResult {
  /**
   * Общее количество найденных элементов.
   * @format int32
   */
  total?: number;
  /** Данные. */
  data?: UserModel[];
}

export enum UserType {
  Unauthorized = "Unauthorized",
  User = "User",
  BrandSeller = "BrandSeller",
  BrandAdmin = "BrandAdmin",
  Admin = "Admin",
  SuperAdmin = "SuperAdmin",
}
