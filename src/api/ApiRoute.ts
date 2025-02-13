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
  CreateLikeModel,
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
  CreatePushSubscribtionModel,
  CreateScanModel,
  CreateSizeChartModel,
  CreateStoryModel,
  CreateSubscriptionModel,
  CreateTipModel,
  CreateUserModel,
  EnitityLikeType,
  EnitityViewType,
  EntityViewModelDataResult,
  FavoriteModel,
  FavoriteModelDataResult,
  FileModel,
  FileProductModel,
  FileType,
  FilterType,
  ForwardMessagesModel,
  GetPushSubscribtionsModel,
  HighlightModel,
  HighlightModelDataResult,
  LikeModel,
  LikeModelDataResult,
  LookModel,
  LookModelDataResult,
  MaterialModel,
  MessageModel,
  MessageModelDataResult,
  NotificationData,
  NotificationSubscriptionModel,
  NotificationSubscriptionModelDataResult,
  PostFileModel,
  PostModel,
  PostModelDataResult,
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
  RefreshModel,
  RejectRequestModel,
  RequestStatus,
  ScanModel,
  ScanModelDataResult,
  Season,
  SizeChartModel,
  SizeChartModelDataResult,
  StoryModel,
  StoryModelDataResult,
  StringDataResult,
  SubscriptionModel,
  SubscriptionModelDataResult,
  TipModel,
  TokenModel,
  UpdateBrandModel,
  UpdateClothingCollectionModel,
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

export namespace Api {
  /**
   * No description
   * @tags Auth
   * @name AuthCreate
   * @summary Авторизация в сервисе
   * @request POST:/api/Auth
   * @secure
   */
  export namespace AuthCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthModel;
    export type RequestHeaders = {};
    export type ResponseBody = TokenModel;
  }

  /**
   * No description
   * @tags Auth
   * @name AuthMeList
   * @summary Получить информацию по авторизированному пользователю
   * @request GET:/api/Auth/Me
   * @secure
   */
  export namespace AuthMeList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserModel;
  }

  /**
   * No description
   * @tags Auth
   * @name AuthRefreshTokenCreate
   * @summary Обновить токен
   * @request POST:/api/Auth/RefreshToken
   * @secure
   */
  export namespace AuthRefreshTokenCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RefreshModel;
    export type RequestHeaders = {};
    export type ResponseBody = TokenModel;
  }

  /**
   * No description
   * @tags Brands
   * @name BrandsDetail
   * @summary Получение бренда по идентификатору
   * @request GET:/api/Brands/{id}
   * @secure
   */
  export namespace BrandsDetail {
    export type RequestParams = {
      /**
       * Ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BrandModel;
  }

  /**
   * No description
   * @tags Brands
   * @name BrandsDelete
   * @summary Удаление бренда
   * @request DELETE:/api/Brands/{id}
   * @secure
   */
  export namespace BrandsDelete {
    export type RequestParams = {
      /**
       * Ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * No description
 * @tags Brands
 * @name BrandsList
 * @summary Поиск брендов по фильтрам
Для неадминов возвращает не удалённые записи
 * @request GET:/api/Brands
 * @secure
*/
  export namespace BrandsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BrandModelDataResult;
  }

  /**
   * No description
   * @tags Brands
   * @name BrandsCreate
   * @summary Создание нового бренда
   * @request POST:/api/Brands
   * @secure
   */
  export namespace BrandsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateBrandModel;
    export type RequestHeaders = {};
    export type ResponseBody = BrandModel;
  }

  /**
   * No description
   * @tags Brands
   * @name BrandsUpdate
   * @summary Редактирование информации по бренду
   * @request PUT:/api/Brands
   * @secure
   */
  export namespace BrandsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateBrandModel;
    export type RequestHeaders = {};
    export type ResponseBody = BrandModel;
  }

  /**
   * No description
   * @tags Brands
   * @name BrandsRequestsCreate
   * @summary Создание запроса на создание бренда
   * @request POST:/api/Brands/Requests
   * @secure
   */
  export namespace BrandsRequestsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateBrandRequestModel;
    export type RequestHeaders = {};
    export type ResponseBody = BrandRequestModel;
  }

  /**
 * No description
 * @tags Brands
 * @name BrandsRequestsList
 * @summary Поиск запросов на создание брендов по фильтрам
Если пользователь не админ, то вернёт только его заявки
 * @request GET:/api/Brands/Requests
 * @secure
*/
  export namespace BrandsRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BrandRequestModelDataResult;
  }

  /**
   * No description
   * @tags Brands
   * @name BrandsRequestsUpdate
   * @summary Отклонить заявку на бренд
   * @request PUT:/api/Brands/Requests
   * @secure
   */
  export namespace BrandsRequestsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RejectRequestModel;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Brands
   * @name BrandsRequestsDetail
   * @summary Запросить запрос на создание бренда
   * @request GET:/api/Brands/Requests/{guid}
   * @secure
   */
  export namespace BrandsRequestsDetail {
    export type RequestParams = {
      /**
       * Идентификатор
       * @format uuid
       */
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BrandRequestModel;
  }

  /**
 * No description
 * @tags Brands
 * @name BrandsRequestsCreate2
 * @summary Одобрить заявку на создание бренда
При этом заявитель станет админом нового бренда
 * @request POST:/api/Brands/Requests/{id}
 * @originalName brandsRequestsCreate
 * @duplicate
 * @secure
*/
  export namespace BrandsRequestsCreate2 {
    export type RequestParams = {
      /**
       * ИД запроса
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BrandModel;
  }

  /**
   * No description
   * @tags ClothingCollections
   * @name ClothingCollectionsDetail
   * @summary Запрос коллекции
   * @request GET:/api/ClothingCollections/{id}
   * @secure
   */
  export namespace ClothingCollectionsDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ClothingCollectionModel;
  }

  /**
   * No description
   * @tags ClothingCollections
   * @name ClothingCollectionsDelete
   * @request DELETE:/api/ClothingCollections/{id}
   * @secure
   */
  export namespace ClothingCollectionsDelete {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags ClothingCollections
   * @name ClothingCollectionsList
   * @summary Поиск коллекций
   * @request GET:/api/ClothingCollections
   * @secure
   */
  export namespace ClothingCollectionsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ClothingCollectionModelDataResult;
  }

  /**
   * No description
   * @tags ClothingCollections
   * @name ClothingCollectionsCreate
   * @summary Создание коллекции
   * @request POST:/api/ClothingCollections
   * @secure
   */
  export namespace ClothingCollectionsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateClothingCollectionModel;
    export type RequestHeaders = {};
    export type ResponseBody = ClothingCollectionModel;
  }

  /**
   * No description
   * @tags ClothingCollections
   * @name ClothingCollectionsUpdate
   * @request PUT:/api/ClothingCollections
   * @secure
   */
  export namespace ClothingCollectionsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateClothingCollectionModel;
    export type RequestHeaders = {};
    export type ResponseBody = ClothingCollectionModel;
  }

  /**
   * No description
   * @tags Colors
   * @name ColorsDetail
   * @summary Получить цвет по ид
   * @request GET:/api/Colors/{id}
   * @secure
   */
  export namespace ColorsDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ColorModel;
  }

  /**
 * No description
 * @tags Colors
 * @name ColorsDelete
 * @summary Удалить цвет
Доступ только супер-админам
 * @request DELETE:/api/Colors/{id}
 * @secure
*/
  export namespace ColorsDelete {
    export type RequestParams = {
      /**
       * Ид цвета
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Colors
   * @name ColorsList
   * @summary Поиск цветов по параметрам
   * @request GET:/api/Colors
   * @secure
   */
  export namespace ColorsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ColorModelDataResult;
  }

  /**
 * No description
 * @tags Colors
 * @name ColorsCreate
 * @summary Создание цвета
Доступно админам
 * @request POST:/api/Colors
 * @secure
*/
  export namespace ColorsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateColorsModel;
    export type RequestHeaders = {};
    export type ResponseBody = ColorModel;
  }

  /**
 * No description
 * @tags Colors
 * @name ColorsUpdate
 * @summary Редактирование цвета
Доступ только админам сайта
 * @request PUT:/api/Colors
 * @secure
*/
  export namespace ColorsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Идентификатор
       * @format uuid
       */
      Guid?: string;
      /** Название цвета */
      Name?: string;
      /** Код */
      Hex?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ColorModel;
  }

  /**
   * No description
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsEmailCreate
   * @summary Установка email через запрос сообщения на почту
   * @request POST:/api/ConfirmationRequests/Email
   * @secure
   */
  export namespace ConfirmationRequestsEmailCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateConfiramtionEmailModel;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsEmailConfirmCreate
   * @summary Установка email через запрос сообщения на почту
   * @request POST:/api/ConfirmationRequests/Email/Confirm
   * @secure
   */
  export namespace ConfirmationRequestsEmailConfirmCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfirmConfirmitionModel;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsPhoneCreate
   * @summary Установка номера через обратный flashcall
   * @request POST:/api/ConfirmationRequests/Phone
   * @secure
   */
  export namespace ConfirmationRequestsPhoneCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateConfiramtionPhoneModel;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsPhoneCheckCreate
   * @summary Проверить статус запроса
   * @request POST:/api/ConfirmationRequests/Phone/Check/{guid}
   * @secure
   */
  export namespace ConfirmationRequestsPhoneCheckCreate {
    export type RequestParams = {
      /** @format uuid */
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * No description
 * @tags ConfirmationRequests
 * @name ConfirmationRequestsPhoneNumberList
 * @summary Получить номер, на который надо звонить.
(сейчас номер статичный)
 * @request GET:/api/ConfirmationRequests/Phone/Number
 * @secure
*/
  export namespace ConfirmationRequestsPhoneNumberList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags ConfirmationRequests
   * @name ConfirmationRequestsPhonePostbackCreate
   * @summary Метод для автоматического одабрения внешним сервисом
   * @request POST:/api/ConfirmationRequests/Phone/Postback
   * @secure
   */
  export namespace ConfirmationRequestsPhonePostbackCreate {
    export type RequestParams = {};
    export type RequestQuery = {
      status?: string;
      callId?: string;
      phone?: string;
      secretCode?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Enums
   * @name EnumsList
   * @request GET:/api/Enums
   * @secure
   */
  export namespace EnumsList {
    export type RequestParams = {};
    export type RequestQuery = {
      name?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Favorites
   * @name FavoritesList
   * @summary Поиск фаворитов
   * @request GET:/api/Favorites
   * @secure
   */
  export namespace FavoritesList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FavoriteModelDataResult;
  }

  /**
   * No description
   * @tags Favorites
   * @name FavoritesCreate
   * @summary Создание избранного
   * @request POST:/api/Favorites
   * @secure
   */
  export namespace FavoritesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateFavoriteModel;
    export type RequestHeaders = {};
    export type ResponseBody = FavoriteModel;
  }

  /**
   * No description
   * @tags Favorites
   * @name FavoritesDelete
   * @summary Удаление избранного
   * @request DELETE:/api/Favorites/{id}
   * @secure
   */
  export namespace FavoritesDelete {
    export type RequestParams = {
      /**
       * ИД подписки
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Files
   * @name FilesDetail
   * @summary Получить файл
   * @request GET:/api/Files/{id}
   * @secure
   */
  export namespace FilesDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {
      /**
       * S или XS для фото
       * @default ""
       */
      size?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Files
   * @name FilesDelete
   * @summary Удаление файлов
   * @request DELETE:/api/Files/{id}
   * @secure
   */
  export namespace FilesDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FileModel;
  }

  /**
   * No description
   * @tags Files
   * @name FilesModelDetail
   * @summary Получить файл
   * @request GET:/api/Files/{id}/Model
   * @secure
   */
  export namespace FilesModelDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {
      /** @default false */
      includeProducts?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FileModel;
  }

  /**
   * No description
   * @tags Files
   * @name FilesCreate
   * @summary Загрузка файла
   * @request POST:/api/Files
   * @secure
   */
  export namespace FilesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      Name?: string;
      Type?: FileType;
      /** @format binary */
      File?: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags Files
   * @name FilesPartialUpdate
   * @summary Метод пока не закончен
   * @request PATCH:/api/Files/{type}/{field}/{id}
   * @secure
   */
  export namespace FilesPartialUpdate {
    export type RequestParams = {
      type: string;
      field: string;
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {
      value?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FileModel;
  }

  /**
   * No description
   * @tags Files
   * @name FilesProductsCreate
   * @summary Привязать ссылку на продукт к файлу
   * @request POST:/api/Files/Products
   * @secure
   */
  export namespace FilesProductsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateFileProductModel;
    export type RequestHeaders = {};
    export type ResponseBody = FileProductModel;
  }

  /**
   * No description
   * @tags Files
   * @name FilesProductsDelete
   * @summary Удаление привязки продукта к файлу
   * @request DELETE:/api/Files/Products/{id}
   * @secure
   */
  export namespace FilesProductsDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FileModel;
  }

  /**
   * No description
   * @tags Likes
   * @name LikesDetail
   * @summary Запрос лайков для сущностей
   * @request GET:/api/Likes/{entity}/{id}
   * @secure
   */
  export namespace LikesDetail {
    export type RequestParams = {
      /** @format uuid */
      id: string;
      entity: EnitityLikeType;
    };
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LikeModelDataResult;
  }

  /**
   * No description
   * @tags Likes
   * @name LikesDelete
   * @summary Удалить лайк.
   * @request DELETE:/api/Likes/{entity}/{id}
   * @secure
   */
  export namespace LikesDelete {
    export type RequestParams = {
      /**
       * Ид цвета
       * @format uuid
       */
      id: string;
      entity: EnitityLikeType;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Likes
   * @name LikesCountDetail
   * @summary Запрос кол-ва лайков для сущностей
   * @request GET:/api/Likes/{entity}/{id}/Count
   * @secure
   */
  export namespace LikesCountDetail {
    export type RequestParams = {
      /** @format uuid */
      id: string;
      entity: EnitityLikeType;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = number;
  }

  /**
   * No description
   * @tags Likes
   * @name LikesCreate
   * @summary Запрос лайков для сущностей
   * @request POST:/api/Likes/{entity}
   * @secure
   */
  export namespace LikesCreate {
    export type RequestParams = {
      entity: EnitityLikeType;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateLikeModel;
    export type RequestHeaders = {};
    export type ResponseBody = LikeModel;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksDetail
   * @summary Получить образ по ИД
   * @request GET:/api/Looks/{id}
   * @secure
   */
  export namespace LooksDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LookModel;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksDelete
   * @summary Удаление образа
   * @request DELETE:/api/Looks/{id}
   * @secure
   */
  export namespace LooksDelete {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksList
   * @summary Поиск образов по параметрам
   * @request GET:/api/Looks
   * @secure
   */
  export namespace LooksList {
    export type RequestParams = {};
    export type RequestQuery = {
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
      modelHipStart?: number;
      /**
       * Конец периода.
       * @format double
       */
      modelHipEnd?: number;
      /**
       * Начало периода.
       * @format double
       */
      modelChestStart?: number;
      /**
       * Конец периода.
       * @format double
       */
      modelChestEnd?: number;
      /**
       * Начало периода.
       * @format double
       */
      modelWaistStart?: number;
      /**
       * Конец периода.
       * @format double
       */
      modelWaistEnd?: number;
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LookModelDataResult;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksCreate
   * @summary Публикация образа со всеми связанными сущностями
   * @request POST:/api/Looks
   * @secure
   */
  export namespace LooksCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateLookModel;
    export type RequestHeaders = {};
    export type ResponseBody = LookModel;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksUpdate
   * @summary Обновление образа
   * @request PUT:/api/Looks
   * @secure
   */
  export namespace LooksUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateLookModel;
    export type RequestHeaders = {};
    export type ResponseBody = LookModel;
  }

  /**
 * No description
 * @tags Looks
 * @name LooksFileCreate
 * @summary Добавление файла к образу
Будут изменены позиции файлов
 * @request POST:/api/Looks/File
 * @secure
*/
  export namespace LooksFileCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddFileToLookModel;
    export type RequestHeaders = {};
    export type ResponseBody = LookModel;
  }

  /**
 * No description
 * @tags Looks
 * @name LooksFileDelete
 * @summary Удаление продукта от лука
Так же у других файлов лука будет изменена позиция
 * @request DELETE:/api/Looks/File/{guid}
 * @secure
*/
  export namespace LooksFileDelete {
    export type RequestParams = {
      /** @format uuid */
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksProductCreate
   * @summary Добавление продукта к образу
   * @request POST:/api/Looks/Product
   * @secure
   */
  export namespace LooksProductCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddProductToLookModel;
    export type RequestHeaders = {};
    export type ResponseBody = LookModel;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksProductDelete
   * @summary Удаление продукта от лука
   * @request DELETE:/api/Looks/Product/{guid}
   * @secure
   */
  export namespace LooksProductDelete {
    export type RequestParams = {
      /** @format uuid */
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksTagCreate
   * @summary Добавление тега к образу
   * @request POST:/api/Looks/Tag
   * @secure
   */
  export namespace LooksTagCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddTagToLookModel;
    export type RequestHeaders = {};
    export type ResponseBody = LookModel;
  }

  /**
   * No description
   * @tags Looks
   * @name LooksTagDelete
   * @summary Удаление тега от лука
   * @request DELETE:/api/Looks/Tag/{guid}
   * @secure
   */
  export namespace LooksTagDelete {
    export type RequestParams = {
      /** @format uuid */
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Materials
   * @name MaterialsDetail
   * @summary Получить материал по ид
   * @request GET:/api/Materials/{id}
   * @secure
   */
  export namespace MaterialsDetail {
    export type RequestParams = {
      /**
       * ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MaterialModel;
  }

  /**
   * No description
   * @tags Materials
   * @name MaterialsDelete
   * @summary Удалить материал
   * @request DELETE:/api/Materials/{id}
   * @secure
   */
  export namespace MaterialsDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Materials
   * @name MaterialsList
   * @summary Поиск материалов по фильтру
   * @request GET:/api/Materials
   * @secure
   */
  export namespace MaterialsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MaterialModel;
  }

  /**
   * No description
   * @tags Materials
   * @name MaterialsCreate
   * @summary Создать материал
   * @request POST:/api/Materials
   * @secure
   */
  export namespace MaterialsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateMaterialModel;
    export type RequestHeaders = {};
    export type ResponseBody = MaterialModel;
  }

  /**
   * No description
   * @tags Materials
   * @name MaterialsUpdate
   * @summary Обновить материал
   * @request PUT:/api/Materials
   * @secure
   */
  export namespace MaterialsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateMaterialModel;
    export type RequestHeaders = {};
    export type ResponseBody = MaterialModel;
  }

  /**
   * No description
   * @tags Messages
   * @name MessagesDetail
   * @summary Получить по ид
   * @request GET:/api/Messages/{id}
   * @deprecated
   * @secure
   */
  export namespace MessagesDetail {
    export type RequestParams = {
      /**
       * ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MessageModel;
  }

  /**
   * No description
   * @tags Messages
   * @name MessagesDelete
   * @summary Удаление сообщения
   * @request DELETE:/api/Messages/{id}
   * @deprecated
   * @secure
   */
  export namespace MessagesDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Messages
   * @name MessagesList
   * @summary Поиск сообщений
   * @request GET:/api/Messages
   * @deprecated
   * @secure
   */
  export namespace MessagesList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MessageModelDataResult;
  }

  /**
   * No description
   * @tags Messages
   * @name MessagesCreate
   * @summary Отправка сообщений
   * @request POST:/api/Messages
   * @deprecated
   * @secure
   */
  export namespace MessagesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateMessageModel;
    export type RequestHeaders = {};
    export type ResponseBody = MessageModel;
  }

  /**
   * No description
   * @tags Messages
   * @name MessagesUpdate
   * @summary Редактирование сообщения
   * @request PUT:/api/Messages
   * @deprecated
   * @secure
   */
  export namespace MessagesUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateMessageModel;
    export type RequestHeaders = {};
    export type ResponseBody = MessageModel;
  }

  /**
   * No description
   * @tags Messages
   * @name MessagesForwardCreate
   * @summary Переслать сообщения
   * @request POST:/api/Messages/Forward
   * @deprecated
   * @secure
   */
  export namespace MessagesForwardCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ForwardMessagesModel;
    export type RequestHeaders = {};
    export type ResponseBody = MessageModel[];
  }

  /**
   * No description
   * @tags Messages
   * @name MessagesMarkReadedUpdate
   * @summary Пометить сообщения как прочитанные
   * @request PUT:/api/Messages/MarkReaded
   * @deprecated
   * @secure
   */
  export namespace MessagesMarkReadedUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags PostComments
   * @name PostCommentsDetail
   * @summary Получить по ид
   * @request GET:/api/PostComments/{id}
   * @secure
   */
  export namespace PostCommentsDetail {
    export type RequestParams = {
      /**
       * ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModel;
  }

  /**
   * No description
   * @tags PostComments
   * @name PostCommentsDelete
   * @request DELETE:/api/PostComments/{id}
   * @secure
   */
  export namespace PostCommentsDelete {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags PostComments
   * @name PostCommentsList
   * @summary Поиск коментов
   * @request GET:/api/PostComments
   * @secure
   */
  export namespace PostCommentsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format uuid */
      UserGuid?: string;
      /** @format uuid */
      EntityGuid?: string;
      /** @format uuid */
      ReplyAtGuid?: string;
      IgnoreReplies?: boolean;
      Text?: string;
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModelDataResult;
  }

  /**
   * No description
   * @tags PostComments
   * @name PostCommentsCreate
   * @summary Создание комментария
   * @request POST:/api/PostComments
   * @secure
   */
  export namespace PostCommentsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCommentModel;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModel;
  }

  /**
   * No description
   * @tags PostComments
   * @name PostCommentsUpdate
   * @summary Модель редактирования коммента
   * @request PUT:/api/PostComments
   * @secure
   */
  export namespace PostCommentsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateCommentModel;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModel;
  }

  /**
   * No description
   * @tags Posts
   * @name PostsDetail
   * @summary Получить по ид
   * @request GET:/api/Posts/{id}
   * @secure
   */
  export namespace PostsDetail {
    export type RequestParams = {
      /**
       * ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostModel;
  }

  /**
   * No description
   * @tags Posts
   * @name PostsDelete
   * @summary Удаление поста
   * @request DELETE:/api/Posts/{id}
   * @secure
   */
  export namespace PostsDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Posts
   * @name PostsList
   * @summary Поиск постов
   * @request GET:/api/Posts
   * @secure
   */
  export namespace PostsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostModelDataResult;
  }

  /**
   * No description
   * @tags Posts
   * @name PostsCreate
   * @summary Создание поста
   * @request POST:/api/Posts
   * @secure
   */
  export namespace PostsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreatePostModel;
    export type RequestHeaders = {};
    export type ResponseBody = PostModel;
  }

  /**
   * No description
   * @tags Posts
   * @name PostsUpdate
   * @summary Редактирование поста
   * @request PUT:/api/Posts
   * @secure
   */
  export namespace PostsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdatePostModel;
    export type RequestHeaders = {};
    export type ResponseBody = PostModel;
  }

  /**
   * No description
   * @tags Posts
   * @name PostsFilesCreate
   * @summary Добавить файл к посту
   * @request POST:/api/Posts/Files
   * @secure
   */
  export namespace PostsFilesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddExtraFileToPostModel;
    export type RequestHeaders = {};
    export type ResponseBody = PostFileModel;
  }

  /**
   * No description
   * @tags Posts
   * @name PostsFilesDelete
   * @summary Отвязать файл от поста
   * @request DELETE:/api/Posts/Files
   * @secure
   */
  export namespace PostsFilesDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format uuid */
      id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * No description
 * @tags ProductCategories
 * @name ProductCategoriesDetail
 * @summary Получить категорию по ИД
Придёт вместе с детьми и родителем
 * @request GET:/api/ProductCategories/{id}
 * @secure
*/
  export namespace ProductCategoriesDetail {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductCategoryModel;
  }

  /**
   * No description
   * @tags ProductCategories
   * @name ProductCategoriesDelete
   * @summary Удалить категорию
   * @request DELETE:/api/ProductCategories/{id}
   * @secure
   */
  export namespace ProductCategoriesDelete {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags ProductCategories
   * @name ProductCategoriesList
   * @summary Поиск категорий по параметрам
   * @request GET:/api/ProductCategories
   * @secure
   */
  export namespace ProductCategoriesList {
    export type RequestParams = {};
    export type RequestQuery = {
      Name?: string;
      /** @format uuid */
      ParentCategoryGuid?: string;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductCategoryModelDataResult;
  }

  /**
   * No description
   * @tags ProductCategories
   * @name ProductCategoriesCreate
   * @summary Публикация новой продуктовой категории
   * @request POST:/api/ProductCategories
   * @secure
   */
  export namespace ProductCategoriesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateProductCategoryModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductCategoryModel;
  }

  /**
   * No description
   * @tags ProductCategories
   * @name ProductCategoriesUpdate
   * @summary Редактировать категорию
   * @request PUT:/api/ProductCategories
   * @secure
   */
  export namespace ProductCategoriesUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateProductCategoryModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductCategoryModel;
  }

  /**
   * No description
   * @tags ProductItems
   * @name ProductItemsDetail
   * @request GET:/api/ProductItems/{id}
   * @secure
   */
  export namespace ProductItemsDetail {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductItemModel;
  }

  /**
   * No description
   * @tags ProductItems
   * @name ProductItemsDelete
   * @summary Удалить единицы одежды
   * @request DELETE:/api/ProductItems/{id}
   * @secure
   */
  export namespace ProductItemsDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductItemModel;
  }

  /**
   * No description
   * @tags ProductItems
   * @name ProductItemsByCodeDetail
   * @summary Запрос вещи по её коду
   * @request GET:/api/ProductItems/ByCode/{code}
   * @secure
   */
  export namespace ProductItemsByCodeDetail {
    export type RequestParams = {
      /** Уникальный код */
      code: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductItemModel;
  }

  /**
   * No description
   * @tags ProductItems
   * @name ProductItemsByCodeCheckDetail
   * @summary Проверка оригинальности вещи
   * @request GET:/api/ProductItems/ByCode/{code}/Check/{tagUid}
   * @secure
   */
  export namespace ProductItemsByCodeCheckDetail {
    export type RequestParams = {
      /** Уникальный код вещи */
      code: string;
      /** Ид тега */
      tagUid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }

  /**
   * No description
   * @tags ProductItems
   * @name ProductItemsList
   * @summary Поиск едениц изделий
   * @request GET:/api/ProductItems
   * @secure
   */
  export namespace ProductItemsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * ИД продукта
       * @format uuid
       */
      ProductGuid?: string;
      /**
       * ИД Бренда
       * @format uuid
       */
      BrandGuid?: string;
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductItemModelDataResult;
  }

  /**
   * No description
   * @tags ProductItems
   * @name ProductItemsCreate
   * @summary Создание единицы продукта
   * @request POST:/api/ProductItems
   * @secure
   */
  export namespace ProductItemsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateProductItemModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductItemModel[];
  }

  /**
 * No description
 * @tags ProductItems
 * @name ProductItemsUpdate
 * @summary Редактирование единицы продукта
Позваляет присоеденить тег для будущей идентификации
 * @request PUT:/api/ProductItems
 * @secure
*/
  export namespace ProductItemsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateProductItemModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductItemModel;
  }

  /**
   * No description
   * @tags ProductReviews
   * @name ProductReviewsDetail
   * @summary Получить по ид
   * @request GET:/api/ProductReviews/{id}
   * @secure
   */
  export namespace ProductReviewsDetail {
    export type RequestParams = {
      /**
       * ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModel;
  }

  /**
   * No description
   * @tags ProductReviews
   * @name ProductReviewsDelete
   * @request DELETE:/api/ProductReviews/{id}
   * @secure
   */
  export namespace ProductReviewsDelete {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags ProductReviews
   * @name ProductReviewsLikesDetail
   * @summary Получить количество лайков на обзоре
   * @request GET:/api/ProductReviews/{id}/likes
   * @secure
   */
  export namespace ProductReviewsLikesDetail {
    export type RequestParams = {
      /**
       * ид коммента
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = number;
  }

  /**
   * No description
   * @tags ProductReviews
   * @name ProductReviewsList
   * @summary Поиск коментов
   * @request GET:/api/ProductReviews
   * @secure
   */
  export namespace ProductReviewsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format uuid */
      UserGuid?: string;
      /** @format uuid */
      EntityGuid?: string;
      /** @format uuid */
      ReplyAtGuid?: string;
      IgnoreReplies?: boolean;
      Text?: string;
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModelDataResult;
  }

  /**
   * No description
   * @tags ProductReviews
   * @name ProductReviewsCreate
   * @summary Создание комментария
   * @request POST:/api/ProductReviews
   * @secure
   */
  export namespace ProductReviewsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCommentModel;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModel;
  }

  /**
   * No description
   * @tags ProductReviews
   * @name ProductReviewsUpdate
   * @summary Модель редактирования коммента
   * @request PUT:/api/ProductReviews
   * @secure
   */
  export namespace ProductReviewsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateCommentModel;
    export type RequestHeaders = {};
    export type ResponseBody = CommentModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsDetail
   * @summary Получить конкретный продукт
   * @request GET:/api/Products/{id}
   * @secure
   */
  export namespace ProductsDetail {
    export type RequestParams = {
      /**
       * Идентификатор продукта
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsDelete
   * @summary Удалить продукт
   * @request DELETE:/api/Products/{id}
   * @secure
   */
  export namespace ProductsDelete {
    export type RequestParams = {
      /**
       * ИД продукта
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsList
   * @summary Поиск продуктов по фильтрам
   * @request GET:/api/Products
   * @secure
   */
  export namespace ProductsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Поиск по тексту */
      Text?: string;
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
      /** Набор идентификаторов */
      Guids?: string[];
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductModelDataResult;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsCreate
   * @summary Создать продукт
   * @request POST:/api/Products
   * @secure
   */
  export namespace ProductsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateProductModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsUpdate
   * @summary Редактировать продукт
   * @request PUT:/api/Products
   * @secure
   */
  export namespace ProductsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateProductModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsColorsCreate
   * @summary Добавить цвет к продукту
   * @request POST:/api/Products/Colors
   * @secure
   */
  export namespace ProductsColorsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateProductColor;
    export type RequestHeaders = {};
    export type ResponseBody = ProductColorModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsColorsDelete
   * @summary Отвязать цвет от продукта
   * @request DELETE:/api/Products/Colors/{productColorId}
   * @secure
   */
  export namespace ProductsColorsDelete {
    export type RequestParams = {
      /**
       * Идентификатор связки продукт-цвет
       * @format uuid
       */
      productColorId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsFilesCreate
   * @summary Привязать файл к продукту
   * @request POST:/api/Products/files
   * @secure
   */
  export namespace ProductsFilesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateProductFileModel;
    export type RequestHeaders = {};
    export type ResponseBody = FileModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsFilesDelete
   * @summary Отвязать файл
   * @request DELETE:/api/Products/files/{id}
   * @secure
   */
  export namespace ProductsFilesDelete {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsMaterialsCreate
   * @summary Добавить к продукту один из материалов
   * @request POST:/api/Products/Materials
   * @secure
   */
  export namespace ProductsMaterialsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateProductMaterialModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductMaterialModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsMaterialsDelete
   * @summary Удалить связку продукта с материалом
   * @request DELETE:/api/Products/Materials/{productMaterialId}
   * @secure
   */
  export namespace ProductsMaterialsDelete {
    export type RequestParams = {
      /**
       * Ид связи
       * @format uuid
       */
      productMaterialId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsMeasurementsCreate
   * @summary Добавить к продукту измерение
   * @request POST:/api/Products/Measurements
   * @secure
   */
  export namespace ProductsMeasurementsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ProductMeasurementModel;
    export type RequestHeaders = {};
    export type ResponseBody = ProductMeasurementModel;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsMeasurementsDelete
   * @summary Удалить измерение вещи
   * @request DELETE:/api/Products/Measurements/{productMeasurementId}
   * @secure
   */
  export namespace ProductsMeasurementsDelete {
    export type RequestParams = {
      /**
       * Ид связки
       * @format uuid
       */
      productMeasurementId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsExportList
   * @request GET:/api/Products/Export
   * @secure
   */
  export namespace ProductsExportList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format uuid */
      brandId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = File;
  }

  /**
   * No description
   * @tags Products
   * @name ProductsImportCreate
   * @request POST:/api/Products/Import
   * @secure
   */
  export namespace ProductsImportCreate {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format uuid */
      brandGuid?: string;
      /** @default true */
      testMode?: boolean;
    };
    export type RequestBody = {
      /** @format binary */
      xlsx: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsDetail
   * @summary Получить по ид
   * @request GET:/api/Promotions/{id}
   * @secure
   */
  export namespace PromotionsDetail {
    export type RequestParams = {
      /**
       * ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionModel;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsDelete
   * @summary Удаление промика
   * @request DELETE:/api/Promotions/{id}
   * @secure
   */
  export namespace PromotionsDelete {
    export type RequestParams = {
      /**
       * Идентификатор
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsList
   * @summary Поиск промиков
   * @request GET:/api/Promotions
   * @secure
   */
  export namespace PromotionsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionModelDataResult;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsCreate
   * @summary Создание промика
   * @request POST:/api/Promotions
   * @secure
   */
  export namespace PromotionsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreatePromotionModel;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionModel;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsUpdate
   * @summary Модель редактирования промо-акции
   * @request PUT:/api/Promotions
   * @secure
   */
  export namespace PromotionsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdatePromotionModel;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionModel;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsCodesCreate
   * @summary Залить пачку кодов
   * @request POST:/api/Promotions/Codes
   * @secure
   */
  export namespace PromotionsCodesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreatePromotionCodeModel;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsCodesList
   * @summary Поиск промиков
   * @request GET:/api/Promotions/Codes
   * @secure
   */
  export namespace PromotionsCodesList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StringDataResult;
  }

  /**
   * No description
   * @tags Promotions
   * @name PromotionsCodesUpdate
   * @summary Активировать код
   * @request PUT:/api/Promotions/Codes
   * @secure
   */
  export namespace PromotionsCodesUpdate {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * ИД промо акции
       * @format uuid
       */
      id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags Push
   * @name PushCreate
   * @request POST:/api/Push
   * @secure
   */
  export namespace PushCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreatePushSubscribtionModel;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Push
   * @name PushList
   * @request GET:/api/Push
   * @secure
   */
  export namespace PushList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetPushSubscribtionsModel;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationSubscriptionModelDataResult;
  }

  /**
   * No description
   * @tags Push
   * @name PushMyList
   * @request GET:/api/Push/My
   * @secure
   */
  export namespace PushMyList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationSubscriptionModel;
  }

  /**
   * No description
   * @tags Push
   * @name PushSendCreate
   * @request POST:/api/Push/Send
   * @secure
   */
  export namespace PushSendCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NotificationData;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Scans
   * @name ScansDetail
   * @summary Получить скан по ИД
   * @request GET:/api/Scans/{id}
   * @secure
   */
  export namespace ScansDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ScanModel;
  }

  /**
   * No description
   * @tags Scans
   * @name ScansList
   * @summary Поиск сканирований по ИД
   * @request GET:/api/Scans
   * @secure
   */
  export namespace ScansList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ScanModelDataResult;
  }

  /**
   * No description
   * @tags Scans
   * @name ScansCreate
   * @summary Создать запись сканирования
   * @request POST:/api/Scans
   * @secure
   */
  export namespace ScansCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateScanModel;
    export type RequestHeaders = {};
    export type ResponseBody = ScanModel;
  }

  /**
   * No description
   * @tags SizeCharts
   * @name SizeChartsDetail
   * @summary Получение размерной сетки по идентификатору
   * @request GET:/api/SizeCharts/{id}
   * @secure
   */
  export namespace SizeChartsDetail {
    export type RequestParams = {
      /**
       * Ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SizeChartModel;
  }

  /**
   * No description
   * @tags SizeCharts
   * @name SizeChartsDelete
   * @summary Удаление размерной сетки
   * @request DELETE:/api/SizeCharts/{id}
   * @secure
   */
  export namespace SizeChartsDelete {
    export type RequestParams = {
      /**
       * Ид
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * No description
 * @tags SizeCharts
 * @name SizeChartsList
 * @summary Поиск брендов по фильтрам
Для неадминов возвращает не удалённые записи
 * @request GET:/api/SizeCharts
 * @secure
*/
  export namespace SizeChartsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Бренд.
       * @format uuid
       */
      BrandGuid?: string;
      /** Список категорий. */
      Categories?: string[];
      /** Наименование. */
      Name?: string;
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SizeChartModelDataResult;
  }

  /**
   * No description
   * @tags SizeCharts
   * @name SizeChartsCreate
   * @summary Создание новой размерной сетки
   * @request POST:/api/SizeCharts
   * @secure
   */
  export namespace SizeChartsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateSizeChartModel;
    export type RequestHeaders = {};
    export type ResponseBody = SizeChartModel;
  }

  /**
   * No description
   * @tags SizeCharts
   * @name SizeChartsUpdate
   * @summary Изменение размерной сетки
   * @request PUT:/api/SizeCharts
   * @secure
   */
  export namespace SizeChartsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = SizeChartModel;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesDetail
   * @summary Получить сторис по ид
   * @request GET:/api/Stories/{id}
   * @secure
   */
  export namespace StoriesDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryModel;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesDelete
   * @summary Удалить сторис
   * @request DELETE:/api/Stories/{id}
   * @secure
   */
  export namespace StoriesDelete {
    export type RequestParams = {
      /**
       * Ид цвета
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesList
   * @summary Поиск сторис по параметрам
   * @request GET:/api/Stories
   * @secure
   */
  export namespace StoriesList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryModelDataResult;
  }

  /**
 * No description
 * @tags Stories
 * @name StoriesCreate
 * @summary Создание сторис
Доступно админам
 * @request POST:/api/Stories
 * @secure
*/
  export namespace StoriesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateStoryModel;
    export type RequestHeaders = {};
    export type ResponseBody = StoryModel;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesHighlightsDetail
   * @summary Получить хайлайт по ид
   * @request GET:/api/Stories/Highlights/{id}
   * @secure
   */
  export namespace StoriesHighlightsDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HighlightModel;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesHighlightsDelete
   * @summary Удалить хайлайт
   * @request DELETE:/api/Stories/Highlights/{id}
   * @secure
   */
  export namespace StoriesHighlightsDelete {
    export type RequestParams = {
      /**
       * Ид цвета
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesHighlightsList
   * @summary Поиск хайлайта по параметрам
   * @request GET:/api/Stories/Highlights
   * @secure
   */
  export namespace StoriesHighlightsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HighlightModelDataResult;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesHighlightsCreate
   * @summary Создание хайлайта
   * @request POST:/api/Stories/Highlights
   * @secure
   */
  export namespace StoriesHighlightsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateHighlightModel;
    export type RequestHeaders = {};
    export type ResponseBody = HighlightModel;
  }

  /**
   * No description
   * @tags Stories
   * @name StoriesHighlightsUpdate
   * @summary Редактирование хайлайта
   * @request PUT:/api/Stories/Highlights
   * @secure
   */
  export namespace StoriesHighlightsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateHighlightModel;
    export type RequestHeaders = {};
    export type ResponseBody = HighlightModel;
  }

  /**
   * No description
   * @tags Subscriptions
   * @name SubscriptionsList
   * @summary Поиск подписок
   * @request GET:/api/Subscriptions
   * @secure
   */
  export namespace SubscriptionsList {
    export type RequestParams = {};
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SubscriptionModelDataResult;
  }

  /**
   * No description
   * @tags Subscriptions
   * @name SubscriptionsCreate
   * @summary Создание подписки
   * @request POST:/api/Subscriptions
   * @secure
   */
  export namespace SubscriptionsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateSubscriptionModel;
    export type RequestHeaders = {};
    export type ResponseBody = SubscriptionModel;
  }

  /**
   * No description
   * @tags Subscriptions
   * @name SubscriptionsDelete
   * @summary Удаление подписки
   * @request DELETE:/api/Subscriptions/{id}
   * @secure
   */
  export namespace SubscriptionsDelete {
    export type RequestParams = {
      /**
       * ИД подписки
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Test
   * @name TestList
   * @request GET:/api/Test
   * @secure
   */
  export namespace TestList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsProductsDetail
   * @summary Получить совет по продукту
   * @request GET:/api/Tips/Products/{id}
   * @secure
   */
  export namespace TipsProductsDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsProductsDelete
   * @summary Удаление продуктового совета
   * @request DELETE:/api/Tips/Products/{id}
   * @secure
   */
  export namespace TipsProductsDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsProductsCreate
   * @summary Создание совета для продукта
   * @request POST:/api/Tips/Products
   * @secure
   */
  export namespace TipsProductsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTipModel;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsProductsUpdate
   * @summary Редактирование совета продукта
   * @request PUT:/api/Tips/Products
   * @secure
   */
  export namespace TipsProductsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateTipModel;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsProductsFilesCreate
   * @summary Добавить файл к совету
   * @request POST:/api/Tips/Products/Files/{id}
   * @secure
   */
  export namespace TipsProductsFilesCreate {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = FileModel;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsProductsFilesDelete
   * @summary Отвязать файл от совета
   * @request DELETE:/api/Tips/Products/Files
   * @secure
   */
  export namespace TipsProductsFilesDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format uuid */
      id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsMaterialsDetail
   * @summary Получить совет по материалу по ИД
   * @request GET:/api/Tips/Materials/{id}
   * @secure
   */
  export namespace TipsMaterialsDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsMaterialsDelete
   * @summary Удалить совет по материалу
   * @request DELETE:/api/Tips/Materials/{id}
   * @secure
   */
  export namespace TipsMaterialsDelete {
    export type RequestParams = {
      /**
       * ИД совета
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsMaterialsCreate
   * @request POST:/api/Tips/Materials
   * @secure
   */
  export namespace TipsMaterialsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTipModel;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsMaterialsUpdate
   * @summary Редактировать совет по материалу
   * @request PUT:/api/Tips/Materials
   * @secure
   */
  export namespace TipsMaterialsUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateTipModel;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsMaterialsFilesCreate
   * @request POST:/api/Tips/Materials/Files/{id}
   * @secure
   */
  export namespace TipsMaterialsFilesCreate {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = FileModel;
    export type RequestHeaders = {};
    export type ResponseBody = TipModel;
  }

  /**
   * No description
   * @tags Tips
   * @name TipsMaterialsFilesDelete
   * @summary Удалить файл совета по материалу
   * @request DELETE:/api/Tips/Materials/Files
   * @secure
   */
  export namespace TipsMaterialsFilesDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * ИД
       * @format uuid
       */
      id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Users
   * @name UsersDetail
   * @summary Получить юзера по ИД
   * @request GET:/api/Users/{id}
   * @secure
   */
  export namespace UsersDetail {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserModel;
  }

  /**
   * No description
   * @tags Users
   * @name UsersDelete
   * @summary Удалить пользователя
   * @request DELETE:/api/Users/{id}
   * @secure
   */
  export namespace UsersDelete {
    export type RequestParams = {
      /**
       * ИД
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Users
   * @name UsersList
   * @summary Получить юзеров по фильтру
   * @request GET:/api/Users
   * @secure
   */
  export namespace UsersList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** login */
      Username?: string;
      /** Имя */
      FirstName?: string;
      /** Фамилия */
      SecondName?: string;
      /** Почта */
      Email?: string;
      /** Телефон */
      Phone?: string;
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserModelDataResult;
  }

  /**
   * No description
   * @tags Users
   * @name UsersCreate
   * @summary Создать нового пользователя
   * @request POST:/api/Users
   * @secure
   */
  export namespace UsersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserModel;
    export type RequestHeaders = {};
    export type ResponseBody = UserModel;
  }

  /**
 * No description
 * @tags Users
 * @name UsersUpdate
 * @summary Редактирование пользователя
Адммин бренда может назначать обычных пользователей своими сотрудниками, а так же уволить существующих
 * @request PUT:/api/Users
 * @secure
*/
  export namespace UsersUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateUserModel;
    export type RequestHeaders = {};
    export type ResponseBody = UserModel;
  }

  /**
   * No description
   * @tags Users
   * @name UsersCheckDetail
   * @summary Проверка свободен ли никнейм
   * @request GET:/api/Users/Check/{username}
   * @secure
   */
  export namespace UsersCheckDetail {
    export type RequestParams = {
      /** Проверяемый никнейм */
      username: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }

  /**
   * No description
   * @tags Views
   * @name ViewsDetail
   * @summary Запрос просмотров для сущностей
   * @request GET:/api/Views/{entity}/{id}
   * @secure
   */
  export namespace ViewsDetail {
    export type RequestParams = {
      entity: EnitityViewType;
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EntityViewModelDataResult;
  }

  /**
   * No description
   * @tags Views
   * @name ViewsCreate
   * @request POST:/api/Views/{entity}/{id}
   * @secure
   */
  export namespace ViewsCreate {
    export type RequestParams = {
      entity: EnitityViewType;
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EntityViewModelDataResult;
  }

  /**
   * No description
   * @tags Views
   * @name ViewsCountDetail
   * @summary Запрос количества просмотров для сущностей
   * @request GET:/api/Views/{entity}/{id}/Count
   * @secure
   */
  export namespace ViewsCountDetail {
    export type RequestParams = {
      entity: EnitityViewType;
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = number;
  }
}
