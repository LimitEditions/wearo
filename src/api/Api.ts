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

import {
  AddExtraFileToPostModel,
  AddFileToLookModel,
  AddProductToLookModel,
  AddTagToLookModel,
  AuthModel,
  BodyShape,
  BrandModel,
  BrandModelDataResult,
  BrandRequestModel,
  BrandRequestModelDataResult,
  ClothingCollectionModel,
  ClothingCollectionModelDataResult,
  ColorModel,
  ColorModelDataResult,
  Coloring,
  CommentModel,
  CommentModelDataResult,
  ConfirmConfirmitionModel,
  CreateBrandModel,
  CreateBrandRequestModel,
  CreateClothingCollectionModel,
  CreateColorsModel,
  CreateCommentModel,
  CreateConfiramtionEmailModel,
  CreateConfiramtionPhoneModel,
  CreateFavoriteModel,
  CreateFileProductModel,
  CreateHighlightModel,
  CreateLookModel,
  CreateMaterialModel,
  CreateMessageModel,
  CreatePostModel,
  CreateProductCategoryModel,
  CreateProductColor,
  CreateProductFileModel,
  CreateProductItemModel,
  CreateProductMaterialModel,
  CreateProductModel,
  CreatePromotionCodeModel,
  CreatePromotionModel,
  CreateScanModel,
  CreateStoryModel,
  CreateSubscriptionModel,
  CreateTipModel,
  CreateUserModel,
  EnitityViewType,
  EntityViewModelDataResult,
  FavoriteModel,
  FavoriteModelDataResult,
  FileModel,
  FileProductModel,
  FileType,
  FilterType,
  ForwardMessagesModel,
  HighlightModel,
  HighlightModelDataResult,
  ImportResult,
  Int32DataResult,
  LookModel,
  LookModelDataResult,
  MaterialModel,
  MessageModel,
  MessageModelDataResult,
  NotificationData,
  PostFileModel,
  PostModel,
  PostModelDataResult,
  ProblemDetails,
  ProductCategoryModel,
  ProductCategoryModelDataResult,
  ProductColorModel,
  ProductItemModel,
  ProductItemModelDataResult,
  ProductMaterialModel,
  ProductMeasurementModel,
  ProductModel,
  ProductModelDataResult,
  ProductStatus,
  PromotionModel,
  PromotionModelDataResult,
  PushSubscription,
  RefreshModel,
  RejectRequestModel,
  RequestStatus,
  ScanModel,
  ScanModelDataResult,
  Season,
  StoryModel,
  StoryModelDataResult,
  StringDataResult,
  SubscriptionModel,
  SubscriptionModelDataResult,
  TipModel,
  TokenModel,
  UpdateBrandModel,
  UpdateCommentModel,
  UpdateHighlightModel,
  UpdateLookModel,
  UpdateMaterialModel,
  UpdateMessageModel,
  UpdatePostModel,
  UpdateProductCategoryModel,
  UpdateProductItemModel,
  UpdateProductModel,
  UpdatePromotionModel,
  UpdateTipModel,
  UpdateUserModel,
  UserModel,
  UserModelDataResult,
  UserType,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name AuthCreate
   * @summary Авторизация в сервисе
   * @request POST:/api/Auth
   * @secure
   */
  authCreate = (data: AuthModel, params: RequestParams = {}) =>
    this.request<TokenModel, ProblemDetails>({
      path: `/api/Auth`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthMeList
   * @summary Получить информацию по авторизированному пользователю
   * @request GET:/api/Auth/Me
   * @secure
   */
  authMeList = (params: RequestParams = {}) =>
    this.request<UserModel, ProblemDetails>({
      path: `/api/Auth/Me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthRefreshTokenCreate
   * @summary Обновить токен
   * @request POST:/api/Auth/RefreshToken
   * @secure
   */
  authRefreshTokenCreate = (data: RefreshModel, params: RequestParams = {}) =>
    this.request<TokenModel, ProblemDetails>({
      path: `/api/Auth/RefreshToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsDetail
   * @summary Получение бренда по идентификатору
   * @request GET:/api/Brands/{id}
   * @secure
   */
  brandsDetail = (id: string, params: RequestParams = {}) =>
    this.request<BrandModel, ProblemDetails>({
      path: `/api/Brands/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsDelete
   * @summary Удаление бренда
   * @request DELETE:/api/Brands/{id}
   * @secure
   */
  brandsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Brands/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags Brands
 * @name BrandsList
 * @summary Поиск брендов по фильтрам
Для неадминов возвращает не удалённые записи
 * @request GET:/api/Brands
 * @secure
 */
  brandsList = (
    query?: {
      /** Наименование */
      Name?: string;
      /** Описание */
      Description?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BrandModelDataResult, any>({
      path: `/api/Brands`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsCreate
   * @summary Создание нового бренда
   * @request POST:/api/Brands
   * @secure
   */
  brandsCreate = (data: CreateBrandModel, params: RequestParams = {}) =>
    this.request<BrandModel, ProblemDetails>({
      path: `/api/Brands`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsUpdate
   * @summary Редактирование информации по бренду
   * @request PUT:/api/Brands
   * @secure
   */
  brandsUpdate = (data: UpdateBrandModel, params: RequestParams = {}) =>
    this.request<BrandModel, ProblemDetails>({
      path: `/api/Brands`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsRequestsCreate
   * @summary Создание запроса на создание бренда
   * @request POST:/api/Brands/Requests
   * @secure
   */
  brandsRequestsCreate = (data: CreateBrandRequestModel, params: RequestParams = {}) =>
    this.request<BrandRequestModel, ProblemDetails>({
      path: `/api/Brands/Requests`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Brands
 * @name BrandsRequestsList
 * @summary Поиск запросов на создание брендов по фильтрам
Если пользователь не админ, то вернёт только его заявки
 * @request GET:/api/Brands/Requests
 * @secure
 */
  brandsRequestsList = (
    query?: {
      /**
       * Заявитель
       * @format uuid
       */
      UserGuid?: string;
      /** Статус заявки */
      Status?: RequestStatus;
      /**
       * Редактировший
       * @format uuid
       */
      UpdateUser?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /** Наименование */
      Name?: string;
      /** Описание */
      Description?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BrandRequestModelDataResult, any>({
      path: `/api/Brands/Requests`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsRequestsUpdate
   * @summary Отклонить заявку на бренд
   * @request PUT:/api/Brands/Requests
   * @secure
   */
  brandsRequestsUpdate = (data: RejectRequestModel, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Brands/Requests`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsRequestsDetail
   * @summary Запросить запрос на создание бренда
   * @request GET:/api/Brands/Requests/{guid}
   * @secure
   */
  brandsRequestsDetail = (guid: string, params: RequestParams = {}) =>
    this.request<BrandRequestModel, ProblemDetails>({
      path: `/api/Brands/Requests/${guid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Brands
 * @name BrandsRequestsCreate2
 * @summary Одобрить заявку на создание бренда
При этом заявитель станет админом нового бренда
 * @request POST:/api/Brands/Requests/{id}
 * @originalName brandsRequestsCreate
 * @duplicate
 * @secure
 */
  brandsRequestsCreate2 = (id: string, params: RequestParams = {}) =>
    this.request<BrandModel, ProblemDetails>({
      path: `/api/Brands/Requests/${id}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ClothingCollections
   * @name ClothingCollectionsDetail
   * @summary Запрос коллекции
   * @request GET:/api/ClothingCollections/{id}
   * @secure
   */
  clothingCollectionsDetail = (id: string, params: RequestParams = {}) =>
    this.request<ClothingCollectionModel, ProblemDetails>({
      path: `/api/ClothingCollections/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ClothingCollections
   * @name ClothingCollectionsDelete
   * @request DELETE:/api/ClothingCollections/{id}
   * @secure
   */
  clothingCollectionsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/ClothingCollections/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags ClothingCollections
   * @name ClothingCollectionsList
   * @summary Поиск коллекций
   * @request GET:/api/ClothingCollections
   * @secure
   */
  clothingCollectionsList = (
    query?: {
      Name?: string;
      Description?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      publishDateStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      publishDateEnd?: string;
      /** @format uuid */
      BrandGuid?: string;
      Season?: Season;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ClothingCollectionModelDataResult, any>({
      path: `/api/ClothingCollections`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ClothingCollections
   * @name ClothingCollectionsCreate
   * @summary Создание коллекции
   * @request POST:/api/ClothingCollections
   * @secure
   */
  clothingCollectionsCreate = (data: CreateClothingCollectionModel, params: RequestParams = {}) =>
    this.request<ClothingCollectionModel, ProblemDetails>({
      path: `/api/ClothingCollections`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ClothingCollections
   * @name ClothingCollectionsUpdate
   * @request PUT:/api/ClothingCollections
   * @secure
   */
  clothingCollectionsUpdate = (data: ClothingCollectionModel, params: RequestParams = {}) =>
    this.request<ClothingCollectionModel, ProblemDetails>({
      path: `/api/ClothingCollections`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Colors
   * @name ColorsDetail
   * @summary Получить цвет по ид
   * @request GET:/api/Colors/{id}
   * @secure
   */
  colorsDetail = (id: string, params: RequestParams = {}) =>
    this.request<ColorModel, ProblemDetails>({
      path: `/api/Colors/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Colors
 * @name ColorsDelete
 * @summary Удалить цвет
Доступ только супер-админам
 * @request DELETE:/api/Colors/{id}
 * @secure
 */
  colorsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Colors/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Colors
   * @name ColorsList
   * @summary Поиск цветов по параметрам
   * @request GET:/api/Colors
   * @secure
   */
  colorsList = (
    query?: {
      /** Имя */
      Name?: string;
      /** Цвет */
      Hex?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ColorModelDataResult, any>({
      path: `/api/Colors`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Colors
 * @name ColorsCreate
 * @summary Создание цвета
Доступно админам
 * @request POST:/api/Colors
 * @secure
 */
  colorsCreate = (data: CreateColorsModel, params: RequestParams = {}) =>
    this.request<ColorModel, ProblemDetails>({
      path: `/api/Colors`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Colors
 * @name ColorsUpdate
 * @summary Редактирование цвета
Доступ только админам сайта
 * @request PUT:/api/Colors
 * @secure
 */
  colorsUpdate = (
    query?: {
      /**
       * Идентификатор
       * @format uuid
       */
      Guid?: string;
      /** Название цвета */
      Name?: string;
      /** Код */
      Hex?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ColorModel, ProblemDetails>({
      path: `/api/Colors`,
      method: "PUT",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsEmailCreate
   * @summary Установка email через запрос сообщения на почту
   * @request POST:/api/ConfirmationRequests/Email
   * @secure
   */
  confirmationRequestsEmailCreate = (data: CreateConfiramtionEmailModel, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/ConfirmationRequests/Email`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsEmailConfirmCreate
   * @summary Установка email через запрос сообщения на почту
   * @request POST:/api/ConfirmationRequests/Email/Confirm
   * @secure
   */
  confirmationRequestsEmailConfirmCreate = (data: ConfirmConfirmitionModel, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/ConfirmationRequests/Email/Confirm`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsPhoneCreate
   * @summary Установка номера через обратный flashcall
   * @request POST:/api/ConfirmationRequests/Phone
   * @secure
   */
  confirmationRequestsPhoneCreate = (data: CreateConfiramtionPhoneModel, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/ConfirmationRequests/Phone`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsPhoneCheckCreate
   * @summary Проверить статус запроса
   * @request POST:/api/ConfirmationRequests/Phone/Check/{guid}
   * @secure
   */
  confirmationRequestsPhoneCheckCreate = (guid: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/ConfirmationRequests/Phone/Check/${guid}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags ConfirmationRequests
 * @name ConfirmationRequestsPhoneNumberList
 * @summary Получить номер, на который надо звонить.
(сейчас номер статичный)
 * @request GET:/api/ConfirmationRequests/Phone/Number
 * @secure
 */
  confirmationRequestsPhoneNumberList = (params: RequestParams = {}) =>
    this.request<string, ProblemDetails>({
      path: `/api/ConfirmationRequests/Phone/Number`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsPhonePostbackCreate
   * @summary Метод для автоматического одабрения внешним сервисом
   * @request POST:/api/ConfirmationRequests/Phone/Postback
   * @secure
   */
  confirmationRequestsPhonePostbackCreate = (
    query?: {
      status?: string;
      callId?: string;
      phone?: string;
      secretCode?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/ConfirmationRequests/Phone/Postback`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Enums
   * @name EnumsList
   * @request GET:/api/Enums
   * @secure
   */
  enumsList = (
    query?: {
      name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Enums`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Favorites
   * @name FavoritesList
   * @summary Поиск фаворитов
   * @request GET:/api/Favorites
   * @secure
   */
  favoritesList = (
    query?: {
      /**
       * Ид пользователя
       * Должно быть заполнено оно либо продукт
       * @format uuid
       */
      UserGuid?: string;
      /**
       * Ид продукта
       * Должно быть заполнено оно либо пользователь
       * @format uuid
       */
      ProductGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FavoriteModelDataResult, ProblemDetails>({
      path: `/api/Favorites`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Favorites
   * @name FavoritesCreate
   * @summary Создание избранного
   * @request POST:/api/Favorites
   * @secure
   */
  favoritesCreate = (data: CreateFavoriteModel, params: RequestParams = {}) =>
    this.request<FavoriteModel, ProblemDetails>({
      path: `/api/Favorites`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Favorites
   * @name FavoritesDelete
   * @summary Удаление избранного
   * @request DELETE:/api/Favorites/{id}
   * @secure
   */
  favoritesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Favorites/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesDetail
   * @summary Получить файл
   * @request GET:/api/Files/{id}
   * @secure
   */
  filesDetail = (
    id: string,
    query?: {
      /**
       * S или XS для фото
       * @default ""
       */
      size?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Files/${id}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesDelete
   * @summary Удаление файлов
   * @request DELETE:/api/Files/{id}
   * @secure
   */
  filesDelete = (id: string, params: RequestParams = {}) =>
    this.request<FileModel, ProblemDetails>({
      path: `/api/Files/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesModelDetail
   * @summary Получить файл
   * @request GET:/api/Files/{id}/Model
   * @secure
   */
  filesModelDetail = (
    id: string,
    query?: {
      /** @default false */
      includeProducts?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileModel, ProblemDetails>({
      path: `/api/Files/${id}/Model`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesCreate
   * @summary Загрузка файла
   * @request POST:/api/Files
   * @secure
   */
  filesCreate = (
    data: {
      Name?: string;
      Type?: FileType;
      /** @format binary */
      File?: File;
    },
    params: RequestParams = {},
  ) =>
    this.request<string, ProblemDetails>({
      path: `/api/Files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesPartialUpdate
   * @summary Метод пока не закончен
   * @request PATCH:/api/Files/{type}/{field}/{id}
   * @secure
   */
  filesPartialUpdate = (
    type: string,
    field: string,
    id: string,
    query?: {
      value?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<FileModel, ProblemDetails>({
      path: `/api/Files/${type}/${field}/${id}`,
      method: "PATCH",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesProductsCreate
   * @summary Привязать ссылку на продукт к файлу
   * @request POST:/api/Files/Products
   * @secure
   */
  filesProductsCreate = (data: CreateFileProductModel, params: RequestParams = {}) =>
    this.request<FileProductModel, ProblemDetails>({
      path: `/api/Files/Products`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesProductsDelete
   * @summary Удаление привязки продукта к файлу
   * @request DELETE:/api/Files/Products/{id}
   * @secure
   */
  filesProductsDelete = (id: string, params: RequestParams = {}) =>
    this.request<FileModel, ProblemDetails>({
      path: `/api/Files/Products/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksDetail
   * @summary Получить образ по ИД
   * @request GET:/api/Looks/{id}
   * @secure
   */
  looksDetail = (id: string, params: RequestParams = {}) =>
    this.request<LookModel, ProblemDetails>({
      path: `/api/Looks/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksDelete
   * @summary Удаление образа
   * @request DELETE:/api/Looks/{id}
   * @secure
   */
  looksDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Looks/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksList
   * @summary Поиск образов по параметрам
   * @request GET:/api/Looks
   * @secure
   */
  looksList = (
    query?: {
      Name?: string;
      /**
       * Начало периода.
       * @format double
       */
      modelHeightStart?: number;
      /**
       * Конец периода.
       * @format double
       */
      modelHeightEnd?: number;
      /**
       * Начало периода.
       * @format double
       */
      modelWidthStart?: number;
      /**
       * Конец периода.
       * @format double
       */
      modelWidthEnd?: number;
      ModelShape?: BodyShape;
      Tags?: string[];
      Products?: string[];
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<LookModelDataResult, any>({
      path: `/api/Looks`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksCreate
   * @summary Публикация образа
   * @request POST:/api/Looks
   * @secure
   */
  looksCreate = (data: CreateLookModel, params: RequestParams = {}) =>
    this.request<LookModel, ProblemDetails>({
      path: `/api/Looks`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksUpdate
   * @summary Обновление образа
   * @request PUT:/api/Looks
   * @secure
   */
  looksUpdate = (data: UpdateLookModel, params: RequestParams = {}) =>
    this.request<LookModel, ProblemDetails>({
      path: `/api/Looks`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksFileCreate
   * @summary Добавление файла к образу
   * @request POST:/api/Looks/File
   * @secure
   */
  looksFileCreate = (data: AddFileToLookModel, params: RequestParams = {}) =>
    this.request<LookModel, ProblemDetails>({
      path: `/api/Looks/File`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksFileCreate2
   * @summary Удаление продукта от лука
   * @request POST:/api/Looks/File/{guid}
   * @originalName looksFileCreate
   * @duplicate
   * @secure
   */
  looksFileCreate2 = (guid: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Looks/File/${guid}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksProductCreate
   * @summary Добавление продукта к образу
   * @request POST:/api/Looks/Product
   * @secure
   */
  looksProductCreate = (data: AddProductToLookModel, params: RequestParams = {}) =>
    this.request<LookModel, ProblemDetails>({
      path: `/api/Looks/Product`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksProductCreate2
   * @summary Удаление продукта от лука
   * @request POST:/api/Looks/Product/{guid}
   * @originalName looksProductCreate
   * @duplicate
   * @secure
   */
  looksProductCreate2 = (guid: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Looks/Product/${guid}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksTagCreate
   * @summary Добавление тега к образу
   * @request POST:/api/Looks/Tag
   * @secure
   */
  looksTagCreate = (data: AddTagToLookModel, params: RequestParams = {}) =>
    this.request<LookModel, ProblemDetails>({
      path: `/api/Looks/Tag`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Looks
   * @name LooksTagCreate2
   * @summary Удаление тега от лука
   * @request POST:/api/Looks/Tag/{guid}
   * @originalName looksTagCreate
   * @duplicate
   * @secure
   */
  looksTagCreate2 = (guid: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Looks/Tag/${guid}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Materials
   * @name MaterialsDetail
   * @summary Получить материал по ид
   * @request GET:/api/Materials/{id}
   * @secure
   */
  materialsDetail = (id: string, params: RequestParams = {}) =>
    this.request<MaterialModel, ProblemDetails>({
      path: `/api/Materials/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Materials
   * @name MaterialsDelete
   * @summary Удалить материал
   * @request DELETE:/api/Materials/{id}
   * @secure
   */
  materialsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Materials/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Materials
   * @name MaterialsList
   * @summary Поиск материалов по фильтру
   * @request GET:/api/Materials
   * @secure
   */
  materialsList = (
    query?: {
      /** Тело фильтра */
      nameBody?: string;
      /** Тип фильтра */
      nameType?: FilterType;
      /**
       * Продукт
       * @format uuid
       */
      ProductGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MaterialModel, ProblemDetails>({
      path: `/api/Materials`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Materials
   * @name MaterialsCreate
   * @summary Создать материал
   * @request POST:/api/Materials
   * @secure
   */
  materialsCreate = (data: CreateMaterialModel, params: RequestParams = {}) =>
    this.request<MaterialModel, ProblemDetails>({
      path: `/api/Materials`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Materials
   * @name MaterialsUpdate
   * @summary Обновить материал
   * @request PUT:/api/Materials
   * @secure
   */
  materialsUpdate = (data: UpdateMaterialModel, params: RequestParams = {}) =>
    this.request<MaterialModel, ProblemDetails>({
      path: `/api/Materials`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesDetail
   * @summary Получить по ид
   * @request GET:/api/Messages/{id}
   * @deprecated
   * @secure
   */
  messagesDetail = (id: string, params: RequestParams = {}) =>
    this.request<MessageModel, ProblemDetails>({
      path: `/api/Messages/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesDelete
   * @summary Удаление сообщения
   * @request DELETE:/api/Messages/{id}
   * @deprecated
   * @secure
   */
  messagesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Messages/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesList
   * @summary Поиск сообщений
   * @request GET:/api/Messages
   * @deprecated
   * @secure
   */
  messagesList = (
    query?: {
      /**
       * От пользователя
       * @format uuid
       */
      FromUserGuid?: string;
      /**
       * Пользователю
       * @format uuid
       */
      ToUserGuid?: string;
      /** Запрашивать новые */
      Unreaded?: boolean;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MessageModelDataResult, ProblemDetails>({
      path: `/api/Messages`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesCreate
   * @summary Отправка сообщений
   * @request POST:/api/Messages
   * @deprecated
   * @secure
   */
  messagesCreate = (data: CreateMessageModel, params: RequestParams = {}) =>
    this.request<MessageModel, ProblemDetails>({
      path: `/api/Messages`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesUpdate
   * @summary Редактирование сообщения
   * @request PUT:/api/Messages
   * @deprecated
   * @secure
   */
  messagesUpdate = (data: UpdateMessageModel, params: RequestParams = {}) =>
    this.request<MessageModel, ProblemDetails>({
      path: `/api/Messages`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesForwardCreate
   * @summary Переслать сообщения
   * @request POST:/api/Messages/Forward
   * @deprecated
   * @secure
   */
  messagesForwardCreate = (data: ForwardMessagesModel, params: RequestParams = {}) =>
    this.request<MessageModel[], ProblemDetails>({
      path: `/api/Messages/Forward`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesMarkReadedUpdate
   * @summary Пометить сообщения как прочитанные
   * @request PUT:/api/Messages/MarkReaded
   * @deprecated
   * @secure
   */
  messagesMarkReadedUpdate = (data: string[], params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Messages/MarkReaded`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags PostComments
   * @name PostCommentsDetail
   * @summary Получить по ид
   * @request GET:/api/PostComments/{id}
   * @secure
   */
  postCommentsDetail = (id: string, params: RequestParams = {}) =>
    this.request<CommentModel, ProblemDetails>({
      path: `/api/PostComments/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PostComments
   * @name PostCommentsDelete
   * @request DELETE:/api/PostComments/{id}
   * @secure
   */
  postCommentsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/PostComments/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PostComments
   * @name PostCommentsList
   * @summary Поиск коментов
   * @request GET:/api/PostComments
   * @secure
   */
  postCommentsList = (
    query?: {
      /** @format uuid */
      UserGuid?: string;
      /** @format uuid */
      EntityGuid?: string;
      Text?: string;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CommentModelDataResult, any>({
      path: `/api/PostComments`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PostComments
   * @name PostCommentsCreate
   * @summary Создание комментария
   * @request POST:/api/PostComments
   * @secure
   */
  postCommentsCreate = (data: CreateCommentModel, params: RequestParams = {}) =>
    this.request<CommentModel, ProblemDetails>({
      path: `/api/PostComments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PostComments
   * @name PostCommentsUpdate
   * @summary Модель редактирования коммента
   * @request PUT:/api/PostComments
   * @secure
   */
  postCommentsUpdate = (data: UpdateCommentModel, params: RequestParams = {}) =>
    this.request<CommentModel, ProblemDetails>({
      path: `/api/PostComments`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Posts
   * @name PostsDetail
   * @summary Получить по ид
   * @request GET:/api/Posts/{id}
   * @secure
   */
  postsDetail = (id: string, params: RequestParams = {}) =>
    this.request<PostModel, ProblemDetails>({
      path: `/api/Posts/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Posts
   * @name PostsDelete
   * @summary Удаление поста
   * @request DELETE:/api/Posts/{id}
   * @secure
   */
  postsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Posts/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Posts
   * @name PostsList
   * @summary Поиск постов
   * @request GET:/api/Posts
   * @secure
   */
  postsList = (
    query?: {
      /** @format uuid */
      BrandGuid?: string;
      Text?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PostModelDataResult, any>({
      path: `/api/Posts`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Posts
   * @name PostsCreate
   * @summary Создание поста
   * @request POST:/api/Posts
   * @secure
   */
  postsCreate = (data: CreatePostModel, params: RequestParams = {}) =>
    this.request<PostModel, ProblemDetails>({
      path: `/api/Posts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Posts
   * @name PostsUpdate
   * @summary Редактирование поста
   * @request PUT:/api/Posts
   * @secure
   */
  postsUpdate = (data: UpdatePostModel, params: RequestParams = {}) =>
    this.request<PostModel, ProblemDetails>({
      path: `/api/Posts`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Posts
   * @name PostsFilesCreate
   * @summary Добавить файл к посту
   * @request POST:/api/Posts/Files
   * @secure
   */
  postsFilesCreate = (data: AddExtraFileToPostModel, params: RequestParams = {}) =>
    this.request<PostFileModel, ProblemDetails>({
      path: `/api/Posts/Files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Posts
   * @name PostsFilesDelete
   * @summary Отвязать файл от поста
   * @request DELETE:/api/Posts/Files
   * @secure
   */
  postsFilesDelete = (
    query?: {
      /** @format uuid */
      id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Posts/Files`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags ProductCategories
 * @name ProductCategoriesDetail
 * @summary Получить категорию по ИД
Придёт вместе с детьми и родителем
 * @request GET:/api/ProductCategories/{id}
 * @secure
 */
  productCategoriesDetail = (id: string, params: RequestParams = {}) =>
    this.request<ProductCategoryModel, ProblemDetails>({
      path: `/api/ProductCategories/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductCategories
   * @name ProductCategoriesDelete
   * @summary Удалить категорию
   * @request DELETE:/api/ProductCategories/{id}
   * @secure
   */
  productCategoriesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/ProductCategories/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductCategories
   * @name ProductCategoriesList
   * @summary Поиск категорий по параметрам
   * @request GET:/api/ProductCategories
   * @secure
   */
  productCategoriesList = (
    query?: {
      Name?: string;
      /** @format uuid */
      ParentCategoryGuid?: string;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProductCategoryModelDataResult, any>({
      path: `/api/ProductCategories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductCategories
   * @name ProductCategoriesCreate
   * @summary Публикация новой продуктовой категории
   * @request POST:/api/ProductCategories
   * @secure
   */
  productCategoriesCreate = (data: CreateProductCategoryModel, params: RequestParams = {}) =>
    this.request<ProductCategoryModel, ProblemDetails>({
      path: `/api/ProductCategories`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductCategories
   * @name ProductCategoriesUpdate
   * @summary Редактировать категорию
   * @request PUT:/api/ProductCategories
   * @secure
   */
  productCategoriesUpdate = (data: UpdateProductCategoryModel, params: RequestParams = {}) =>
    this.request<ProductCategoryModel, ProblemDetails>({
      path: `/api/ProductCategories`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductItems
   * @name ProductItemsDetail
   * @request GET:/api/ProductItems/{id}
   * @secure
   */
  productItemsDetail = (id: string, params: RequestParams = {}) =>
    this.request<ProductItemModel, ProblemDetails>({
      path: `/api/ProductItems/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductItems
   * @name ProductItemsDelete
   * @summary Удалить единицы одежды
   * @request DELETE:/api/ProductItems/{id}
   * @secure
   */
  productItemsDelete = (id: string, params: RequestParams = {}) =>
    this.request<ProductItemModel, ProblemDetails>({
      path: `/api/ProductItems/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductItems
   * @name ProductItemsByCodeDetail
   * @summary Запрос вещи по её коду
   * @request GET:/api/ProductItems/ByCode/{code}
   * @secure
   */
  productItemsByCodeDetail = (code: string, params: RequestParams = {}) =>
    this.request<ProductItemModel, ProblemDetails>({
      path: `/api/ProductItems/ByCode/${code}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductItems
   * @name ProductItemsList
   * @summary Поиск едениц изделий
   * @request GET:/api/ProductItems
   * @secure
   */
  productItemsList = (
    query?: {
      /**
       * ИД продукта
       * @format uuid
       */
      ProductGuid?: string;
      /**
       * ИД пользователя-владельца
       * @format uuid
       */
      UserGuid?: string;
      /**
       * ИД партии
       * @format uuid
       */
      ClothingPartyGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
      /** Включить в выборку продукт */
      IncludeProduct?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProductItemModelDataResult, any>({
      path: `/api/ProductItems`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductItems
   * @name ProductItemsCreate
   * @summary Создание единицы продукта
   * @request POST:/api/ProductItems
   * @secure
   */
  productItemsCreate = (data: CreateProductItemModel, params: RequestParams = {}) =>
    this.request<ProductItemModel, ProblemDetails>({
      path: `/api/ProductItems`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductItems
   * @name ProductItemsUpdate
   * @summary Редактирование единицы продукта
   * @request PUT:/api/ProductItems
   * @secure
   */
  productItemsUpdate = (data: UpdateProductItemModel, params: RequestParams = {}) =>
    this.request<ProductItemModel, ProblemDetails>({
      path: `/api/ProductItems`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsDetail
   * @summary Получить конкретный продукт
   * @request GET:/api/Products/{id}
   * @secure
   */
  productsDetail = (id: string, params: RequestParams = {}) =>
    this.request<ProductModel, ProblemDetails>({
      path: `/api/Products/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsList
   * @summary Поиск продуктов по фильтрам
   * @request GET:/api/Products
   * @secure
   */
  productsList = (
    query?: {
      /** Бренд */
      BrandsGuid?: string[];
      /** Статус вещи */
      Status?: ProductStatus;
      /** Сезон */
      Season?: Season;
      /** Коллекция */
      CollectionsGuid?: string[];
      /** Окраска */
      Coloring?: Coloring[];
      /** Категория товара */
      Catigories?: string[];
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProductModelDataResult, any>({
      path: `/api/Products`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsCreate
   * @summary Создать продукт
   * @request POST:/api/Products
   * @secure
   */
  productsCreate = (data: CreateProductModel, params: RequestParams = {}) =>
    this.request<ProductModel, ProblemDetails>({
      path: `/api/Products`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsUpdate
   * @summary Редактировать продукт
   * @request PUT:/api/Products
   * @secure
   */
  productsUpdate = (data: UpdateProductModel, params: RequestParams = {}) =>
    this.request<ProductModel, ProblemDetails>({
      path: `/api/Products`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsDelete
   * @summary Удалить продукт
   * @request DELETE:/api/Products
   * @secure
   */
  productsDelete = (
    query?: {
      /**
       * ИД продукта
       * @format uuid
       */
      id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Products`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsColorsCreate
   * @summary Добавить цвет к продукту
   * @request POST:/api/Products/Colors
   * @secure
   */
  productsColorsCreate = (data: CreateProductColor, params: RequestParams = {}) =>
    this.request<ProductColorModel, ProblemDetails>({
      path: `/api/Products/Colors`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsColorsDelete
   * @summary Отвязать цвет от продукта
   * @request DELETE:/api/Products/Colors/{productColorId}
   * @secure
   */
  productsColorsDelete = (productColorId: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Products/Colors/${productColorId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsFilesCreate
   * @summary Привязать файл к продукту
   * @request POST:/api/Products/files
   * @secure
   */
  productsFilesCreate = (data: CreateProductFileModel, params: RequestParams = {}) =>
    this.request<FileModel, ProblemDetails>({
      path: `/api/Products/files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsFilesDelete
   * @summary Отвязать файл
   * @request DELETE:/api/Products/files/{id}
   * @secure
   */
  productsFilesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Products/files/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsMaterialsCreate
   * @summary Добавить к продукту один из материалов
   * @request POST:/api/Products/Materials
   * @secure
   */
  productsMaterialsCreate = (data: CreateProductMaterialModel, params: RequestParams = {}) =>
    this.request<ProductMaterialModel, ProblemDetails>({
      path: `/api/Products/Materials`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsMaterialsDelete
   * @summary Удалить связку продукта с материалом
   * @request DELETE:/api/Products/Materials/{productMaterialId}
   * @secure
   */
  productsMaterialsDelete = (productMaterialId: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Products/Materials/${productMaterialId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsMeasurementsCreate
   * @summary Добавить к продукту измерение
   * @request POST:/api/Products/Measurements
   * @secure
   */
  productsMeasurementsCreate = (data: ProductMeasurementModel, params: RequestParams = {}) =>
    this.request<ProductMeasurementModel, ProblemDetails>({
      path: `/api/Products/Measurements`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsMeasurementsDelete
   * @summary Удалить измерение вещи
   * @request DELETE:/api/Products/Measurements/{productMeasurementId}
   * @secure
   */
  productsMeasurementsDelete = (productMeasurementId: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Products/Measurements/${productMeasurementId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsExportList
   * @request GET:/api/Products/Export
   * @secure
   */
  productsExportList = (
    query?: {
      /** @format uuid */
      brandId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<File, ProblemDetails>({
      path: `/api/Products/Export`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsImportCreate
   * @request POST:/api/Products/Import
   * @secure
   */
  productsImportCreate = (
    data: {
      /** @format binary */
      xlsx: File;
    },
    query?: {
      /** @format uuid */
      brandGuid?: string;
      /** @default true */
      testMode?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails | ImportResult>({
      path: `/api/Products/Import`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsDetail
   * @summary Получить по ид
   * @request GET:/api/Promotions/{id}
   * @secure
   */
  promotionsDetail = (id: string, params: RequestParams = {}) =>
    this.request<PromotionModel, ProblemDetails>({
      path: `/api/Promotions/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsDelete
   * @summary Удаление промика
   * @request DELETE:/api/Promotions/{id}
   * @secure
   */
  promotionsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Promotions/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsList
   * @summary Поиск промиков
   * @request GET:/api/Promotions
   * @secure
   */
  promotionsList = (
    query?: {
      /** Часть имени */
      Name?: string;
      /** Часть текста */
      Text?: string;
      /**
       * Бренд
       * @format uuid
       */
      BrandGuid?: string;
      /**
       * Ид пользователя
       * Для User обязательно указывать себя!
       * @format uuid
       */
      UserGuid?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PromotionModelDataResult, ProblemDetails>({
      path: `/api/Promotions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsCreate
   * @summary Создание промика
   * @request POST:/api/Promotions
   * @secure
   */
  promotionsCreate = (data: CreatePromotionModel, params: RequestParams = {}) =>
    this.request<PromotionModel, ProblemDetails>({
      path: `/api/Promotions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsUpdate
   * @summary Модель редактирования коммента
   * @request PUT:/api/Promotions
   * @secure
   */
  promotionsUpdate = (data: UpdatePromotionModel, params: RequestParams = {}) =>
    this.request<PromotionModel, ProblemDetails>({
      path: `/api/Promotions`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsCodesCreate
   * @summary Залить пачку кодов
   * @request POST:/api/Promotions/Codes
   * @secure
   */
  promotionsCodesCreate = (data: CreatePromotionCodeModel, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Promotions/Codes`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsCodesList
   * @summary Поиск промиков
   * @request GET:/api/Promotions/Codes
   * @secure
   */
  promotionsCodesList = (
    query?: {
      /** @format uuid */
      UserGuid?: string;
      /** @format uuid */
      BrandGuid?: string;
      /** @format uuid */
      PromotionGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<StringDataResult, ProblemDetails>({
      path: `/api/Promotions/Codes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Promotions
   * @name PromotionsCodesUpdate
   * @summary Активировать код
   * @request PUT:/api/Promotions/Codes
   * @secure
   */
  promotionsCodesUpdate = (
    query?: {
      /**
       * ИД промо акции
       * @format uuid
       */
      id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<string, ProblemDetails>({
      path: `/api/Promotions/Codes`,
      method: "PUT",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Push
   * @name PushSubscribeCreate
   * @request POST:/api/Push/subscribe
   * @secure
   */
  pushSubscribeCreate = (data: PushSubscription, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Push/subscribe`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Push
   * @name PushSendCreate
   * @request POST:/api/Push/send
   * @secure
   */
  pushSendCreate = (data: NotificationData, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Push/send`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Scans
   * @name ScansDetail
   * @summary Получить скан по ИД
   * @request GET:/api/Scans/{id}
   * @secure
   */
  scansDetail = (id: string, params: RequestParams = {}) =>
    this.request<ScanModel, ProblemDetails>({
      path: `/api/Scans/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scans
   * @name ScansList
   * @summary Поиск сканирований по ИД
   * @request GET:/api/Scans
   * @secure
   */
  scansList = (
    query?: {
      /**
       * Пользователь
       * @format uuid
       */
      UserGuid?: string;
      /**
       * Единица продукта
       * @format uuid
       */
      ProductItemGuid?: string;
      /**
       * Продукт
       * @format uuid
       */
      ProductGuid?: string;
      /**
       * Бренд
       * @format uuid
       */
      BrandGuid?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ScanModelDataResult, ProblemDetails>({
      path: `/api/Scans`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Scans
   * @name ScansCreate
   * @summary Создать запись сканирования
   * @request POST:/api/Scans
   * @secure
   */
  scansCreate = (data: CreateScanModel, params: RequestParams = {}) =>
    this.request<ScanModel, ProblemDetails>({
      path: `/api/Scans`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesDetail
   * @summary Получить сторис по ид
   * @request GET:/api/Stories/{id}
   * @secure
   */
  storiesDetail = (id: string, params: RequestParams = {}) =>
    this.request<StoryModel, ProblemDetails>({
      path: `/api/Stories/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesDelete
   * @summary Удалить сторис
   * @request DELETE:/api/Stories/{id}
   * @secure
   */
  storiesDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Stories/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesList
   * @summary Поиск сторис по параметрам
   * @request GET:/api/Stories
   * @secure
   */
  storiesList = (
    query?: {
      /**
       * Бренд
       * @format uuid
       */
      BrandGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<StoryModelDataResult, any>({
      path: `/api/Stories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Stories
 * @name StoriesCreate
 * @summary Создание сторис
Доступно админам
 * @request POST:/api/Stories
 * @secure
 */
  storiesCreate = (data: CreateStoryModel, params: RequestParams = {}) =>
    this.request<StoryModel, ProblemDetails>({
      path: `/api/Stories`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesHighlightsDetail
   * @summary Получить хайлайт по ид
   * @request GET:/api/Stories/Highlights/{id}
   * @secure
   */
  storiesHighlightsDetail = (id: string, params: RequestParams = {}) =>
    this.request<HighlightModel, ProblemDetails>({
      path: `/api/Stories/Highlights/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesHighlightsDelete
   * @summary Удалить хайлайт
   * @request DELETE:/api/Stories/Highlights/{id}
   * @secure
   */
  storiesHighlightsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Stories/Highlights/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesHighlightsList
   * @summary Поиск хайлайта по параметрам
   * @request GET:/api/Stories/Highlights
   * @secure
   */
  storiesHighlightsList = (
    query?: {
      /**
       * ИД бренда
       * @format uuid
       */
      BrandGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<HighlightModelDataResult, any>({
      path: `/api/Stories/Highlights`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesHighlightsCreate
   * @summary Создание хайлайта
   * @request POST:/api/Stories/Highlights
   * @secure
   */
  storiesHighlightsCreate = (data: CreateHighlightModel, params: RequestParams = {}) =>
    this.request<HighlightModel, ProblemDetails>({
      path: `/api/Stories/Highlights`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Stories
   * @name StoriesHighlightsUpdate
   * @summary Редактирование хайлайта
   * @request PUT:/api/Stories/Highlights
   * @secure
   */
  storiesHighlightsUpdate = (data: UpdateHighlightModel, params: RequestParams = {}) =>
    this.request<HighlightModel, ProblemDetails>({
      path: `/api/Stories/Highlights`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Subscriptions
   * @name SubscriptionsList
   * @summary Поиск подписок
   * @request GET:/api/Subscriptions
   * @secure
   */
  subscriptionsList = (
    query?: {
      /**
       * Ид юзера
       * @format uuid
       */
      UserGuid?: string;
      /**
       * Ид бренда
       * @format uuid
       */
      BrandGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<SubscriptionModelDataResult, ProblemDetails>({
      path: `/api/Subscriptions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Subscriptions
   * @name SubscriptionsCreate
   * @summary Создание подписки
   * @request POST:/api/Subscriptions
   * @secure
   */
  subscriptionsCreate = (data: CreateSubscriptionModel, params: RequestParams = {}) =>
    this.request<SubscriptionModel, ProblemDetails>({
      path: `/api/Subscriptions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Subscriptions
   * @name SubscriptionsDelete
   * @summary Удаление подписки
   * @request DELETE:/api/Subscriptions/{id}
   * @secure
   */
  subscriptionsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Subscriptions/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsProductsDetail
   * @summary Получить совет по продукту
   * @request GET:/api/Tips/Products/{id}
   * @secure
   */
  tipsProductsDetail = (id: string, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Products/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsProductsDelete
   * @summary Удаление продуктового совета
   * @request DELETE:/api/Tips/Products/{id}
   * @secure
   */
  tipsProductsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Tips/Products/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsProductsCreate
   * @summary Создание совета для продукта
   * @request POST:/api/Tips/Products
   * @secure
   */
  tipsProductsCreate = (data: CreateTipModel, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Products`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsProductsUpdate
   * @summary Редактирование совета продукта
   * @request PUT:/api/Tips/Products
   * @secure
   */
  tipsProductsUpdate = (data: UpdateTipModel, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Products`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsProductsFilesCreate
   * @summary Добавить файл к совету
   * @request POST:/api/Tips/Products/Files/{id}
   * @secure
   */
  tipsProductsFilesCreate = (id: string, data: FileModel, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Products/Files/${id}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsProductsFilesDelete
   * @summary Отвязать файл от совета
   * @request DELETE:/api/Tips/Products/Files
   * @secure
   */
  tipsProductsFilesDelete = (
    query?: {
      /** @format uuid */
      id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Tips/Products/Files`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsMaterialsDetail
   * @summary Получить совет по материалу по ИД
   * @request GET:/api/Tips/Materials/{id}
   * @secure
   */
  tipsMaterialsDetail = (id: string, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Materials/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsMaterialsDelete
   * @summary Удалить совет по материалу
   * @request DELETE:/api/Tips/Materials/{id}
   * @secure
   */
  tipsMaterialsDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Tips/Materials/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsMaterialsCreate
   * @request POST:/api/Tips/Materials
   * @secure
   */
  tipsMaterialsCreate = (data: CreateTipModel, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Materials`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsMaterialsUpdate
   * @summary Редактировать совет по материалу
   * @request PUT:/api/Tips/Materials
   * @secure
   */
  tipsMaterialsUpdate = (data: UpdateTipModel, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Materials`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsMaterialsFilesCreate
   * @request POST:/api/Tips/Materials/Files/{id}
   * @secure
   */
  tipsMaterialsFilesCreate = (id: string, data: FileModel, params: RequestParams = {}) =>
    this.request<TipModel, ProblemDetails>({
      path: `/api/Tips/Materials/Files/${id}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tips
   * @name TipsMaterialsFilesDelete
   * @summary Удалить файл совета по материалу
   * @request DELETE:/api/Tips/Materials/Files
   * @secure
   */
  tipsMaterialsFilesDelete = (
    query?: {
      /**
       * ИД
       * @format uuid
       */
      id?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Tips/Materials/Files`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersDetail
   * @summary Получить юзера по ИД
   * @request GET:/api/Users/{id}
   * @secure
   */
  usersDetail = (id: string, params: RequestParams = {}) =>
    this.request<UserModel, ProblemDetails>({
      path: `/api/Users/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersDelete
   * @summary Удалить пользователя
   * @request DELETE:/api/Users/{id}
   * @secure
   */
  usersDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Users/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersList
   * @summary Получить юзеров по фильтру
   * @request GET:/api/Users
   * @secure
   */
  usersList = (
    query?: {
      /** login */
      Username?: string;
      /** Имя */
      FirstName?: string;
      /** Фамилия */
      SecondName?: string;
      /** Тип пользователя */
      Types?: UserType[];
      /**
       * Ид бренда
       * @format uuid
       */
      BrandGuid?: string;
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
      /**
       * Начало периода.
       * @format date-time
       */
      createDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      createDtEnd?: string;
      /**
       * Начало периода.
       * @format date-time
       */
      updateDtStart?: string;
      /**
       * Конец периода.
       * @format date-time
       */
      updateDtEnd?: string;
      /** Отметка удаления */
      IsDeleted?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<UserModelDataResult, ProblemDetails>({
      path: `/api/Users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersCreate
   * @summary Создать нового пользователя
   * @request POST:/api/Users
   * @secure
   */
  usersCreate = (data: CreateUserModel, params: RequestParams = {}) =>
    this.request<UserModel, any>({
      path: `/api/Users`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * No description
 *
 * @tags Users
 * @name UsersUpdate
 * @summary Редактирование пользователя
Адммин бренда может назначать обычных пользователей своими сотрудниками
 * @request PUT:/api/Users
 * @secure
 */
  usersUpdate = (data: UpdateUserModel, params: RequestParams = {}) =>
    this.request<UserModel, ProblemDetails>({
      path: `/api/Users`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersCheckDetail
   * @summary Проверка свободен ли никнейм
   * @request GET:/api/Users/Check/{username}
   * @secure
   */
  usersCheckDetail = (username: string, params: RequestParams = {}) =>
    this.request<boolean, any>({
      path: `/api/Users/Check/${username}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Views
   * @name ViewsDetail
   * @summary Запрос просмотров для сущностей
   * @request GET:/api/Views/{entity}/{id}
   * @secure
   */
  viewsDetail = (
    entity: EnitityViewType,
    id: string,
    query?: {
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityViewModelDataResult, ProblemDetails>({
      path: `/api/Views/${entity}/${id}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Views
   * @name ViewsCreate
   * @request POST:/api/Views/{entity}/{id}
   * @secure
   */
  viewsCreate = (
    id: string,
    entity: string,
    query?: {
      entity?: EnitityViewType;
    },
    params: RequestParams = {},
  ) =>
    this.request<EntityViewModelDataResult, ProblemDetails>({
      path: `/api/Views/${entity}/${id}`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Views
   * @name ViewsCountDetail
   * @summary Запрос количества просмотров для сущностей
   * @request GET:/api/Views/{entity}/{id}/Count
   * @secure
   */
  viewsCountDetail = (
    entity: EnitityViewType,
    id: string,
    query?: {
      /**
       * Номер страницы (по умолчанию = 1).
       * @format int32
       */
      Page?: number;
      /**
       * Размер страницы (по умолчанию = 25).
       * @format int32
       */
      PageSize?: number;
      /** Поле, по которому происходит сортировка */
      SortMember?: string;
      /** Направление сортировки - по возрастанию */
      Ascending?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<Int32DataResult, ProblemDetails>({
      path: `/api/Views/${entity}/${id}/Count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
