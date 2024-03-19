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
  AddFileToLookModel,
  AddProductToLookModel,
  AddTagToLookModel,
  AuthModel,
  BodyShape,
  BrandModel,
  BrandModelDataResult,
  BrandRequestModel,
  ClothingCollectionModel,
  ClothingCollectionModelDataResult,
  ColorModel,
  ColorModelDataResult,
  Coloring,
  CommentModel,
  CommentModelDataResult,
  CreateBrandModel,
  CreateClothingCollectionModel,
  CreateColor,
  CreateColorsModel,
  CreateCommentModel,
  CreateLookModel,
  CreateMaterialModel,
  CreatePostModel,
  CreateProductCategoryModel,
  CreateProductFileModel,
  CreateProductItemModel,
  CreateProductModel,
  CreateScanModel,
  CreateTipModel,
  CreateUserModel,
  FileModel,
  FileType,
  GetBrandRequestsModel,
  LookModel,
  LookModelDataResult,
  MaterialModel,
  PostModel,
  PostModelDataResult,
  ProblemDetails,
  ProductCategoryModel,
  ProductCategoryModelDataResult,
  ProductColorModel,
  ProductItemModel,
  ProductMaterial,
  ProductMaterialModel,
  ProductMeasurementModel,
  ProductModel,
  ProductModelDataResult,
  ProductStatus,
  RefreshModel,
  ScanModel,
  ScanModelDataResult,
  Season,
  TipModel,
  TokenModel,
  UpdateBrandModel,
  UpdateCommentModel,
  UpdateLookModel,
  UpdateMaterialModel,
  UpdatePostModel,
  UpdateProductCategoryModel,
  UpdateProductItemModel,
  UpdateProductModel,
  UpdateTipModel,
  UpdateUserModel,
  UserModel,
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
   * @request GET:/api/Brands
   * @secure
   */
  brandsList = (
    query?: {
      Name?: string;
      Description?: string;
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
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
   * @request POST:/api/Brands/Requests
   * @secure
   */
  brandsRequestsCreate = (data: BrandModel, params: RequestParams = {}) =>
    this.request<BrandModel, ProblemDetails>({
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
   * @request GET:/api/Brands/Requests
   * @secure
   */
  brandsRequestsList = (data: GetBrandRequestsModel, params: RequestParams = {}) =>
    this.request<BrandRequestModel, any>({
      path: `/api/Brands/Requests`,
      method: "GET",
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
   * @name BrandsRequestsUpdate
   * @request PUT:/api/Brands/Requests/{id}
   * @secure
   */
  brandsRequestsUpdate = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Brands/Requests/${id}`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Brands
   * @name BrandsRequestsCreate2
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
      /** @format int32 */
      Page?: number;
      /** @format int32 */
      PageSize?: number;
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
   * @tags Files
   * @name FilesDetail
   * @request GET:/api/Files/{id}
   * @secure
   */
  filesDetail = (id: string, params: RequestParams = {}) =>
    this.request<FileModel, ProblemDetails>({
      path: `/api/Files/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Files
   * @name FilesDelete
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
   * @name FilesCreate
   * @request POST:/api/Files
   * @secure
   */
  filesCreate = (
    data: {
      /** @format binary */
      File?: File;
    },
    query?: {
      Name?: string;
      Type?: FileType;
    },
    params: RequestParams = {},
  ) =>
    this.request<string, ProblemDetails>({
      path: `/api/Files`,
      method: "POST",
      query: query,
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
   * @tags Looks
   * @name LooksDetail
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
   * @name LooksProductCreate
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
   * @name LooksTagCreate
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
   * @tags Materials
   * @name MaterialsDetail
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
   * @request GET:/api/Materials
   * @secure
   */
  materialsList = (
    query?: {
      /** Начало строки. Опционально. */
      nameStartFrom?: string;
      /** Конец строки. Опционально. */
      nameEndWith?: string;
      /** Часть строки. Опционально. */
      nameContains?: string;
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
   * @tags PostCommentsControllers
   * @name PostCommentsControllersDetail
   * @request GET:/api/PostCommentsControllers/{id}
   * @secure
   */
  postCommentsControllersDetail = (id: string, params: RequestParams = {}) =>
    this.request<CommentModel, ProblemDetails>({
      path: `/api/PostCommentsControllers/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PostCommentsControllers
   * @name PostCommentsControllersDelete
   * @request DELETE:/api/PostCommentsControllers/{id}
   * @secure
   */
  postCommentsControllersDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/PostCommentsControllers/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PostCommentsControllers
   * @name PostCommentsControllersList
   * @request GET:/api/PostCommentsControllers
   * @secure
   */
  postCommentsControllersList = (
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
      path: `/api/PostCommentsControllers`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PostCommentsControllers
   * @name PostCommentsControllersCreate
   * @request POST:/api/PostCommentsControllers
   * @secure
   */
  postCommentsControllersCreate = (data: CreateCommentModel, params: RequestParams = {}) =>
    this.request<CommentModel, ProblemDetails>({
      path: `/api/PostCommentsControllers`,
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
   * @tags PostCommentsControllers
   * @name PostCommentsControllersUpdate
   * @request PUT:/api/PostCommentsControllers
   * @secure
   */
  postCommentsControllersUpdate = (data: UpdateCommentModel, params: RequestParams = {}) =>
    this.request<CommentModel, ProblemDetails>({
      path: `/api/PostCommentsControllers`,
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
   * @tags ProductCategories
   * @name ProductCategoriesDetail
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
   * @name ProductItemsCreate
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
   * @tags ProductItems
   * @name ProductItemsPartialUpdate
   * @request PATCH:/api/ProductItems/{code}
   * @secure
   */
  productItemsPartialUpdate = (code: string, params: RequestParams = {}) =>
    this.request<ProductItemModel, ProblemDetails>({
      path: `/api/ProductItems/${code}`,
      method: "PATCH",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsDetail
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
   * @request GET:/api/Products
   * @secure
   */
  productsList = (
    query?: {
      /**
       * Бренд
       * @format uuid
       */
      BrandGuid?: string;
      /** Статус вещи */
      Status?: ProductStatus;
      /** Сезон */
      Season?: Season;
      /**
       * Коллекция
       * @format uuid
       */
      CollectionGuid?: string;
      /** Окраска */
      Coloring?: Coloring;
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
   * @request DELETE:/api/Products
   * @secure
   */
  productsDelete = (
    query?: {
      /** @format uuid */
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
   * @request POST:/api/Products/Colors
   * @secure
   */
  productsColorsCreate = (data: CreateColor, params: RequestParams = {}) =>
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
   * @request DELETE:/api/Products/colors/{productColorId}
   * @secure
   */
  productsColorsDelete = (productColorId: string, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Products/colors/${productColorId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsFilesCreate
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
   * @request POST:/api/Products/Materials
   * @secure
   */
  productsMaterialsCreate = (data: ProductMaterial, params: RequestParams = {}) =>
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
   * @request DELETE:/api/Products/Materials/{productColorId}
   * @secure
   */
  productsMaterialsDelete = (
    productColorId: string,
    query?: {
      /** @format uuid */
      productMaterialId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Products/Materials/${productColorId}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsMeasurementsCreate
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
   * @tags Scans
   * @name ScansDetail
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
   * @summary Создать модель сканирования
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
   * @tags Tips
   * @name TipsProductsDetail
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
   * @request DELETE:/api/Tips/Materials/Files
   * @secure
   */
  tipsMaterialsFilesDelete = (
    query?: {
      /** @format uuid */
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
   * @name UsersCheckDetail
   * @request GET:/api/Users/Check/{name}
   * @secure
   */
  usersCheckDetail = (
    name: string,
    query?: {
      username?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<boolean, any>({
      path: `/api/Users/Check/${name}`,
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
}
