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

import { ConfirmConfirmitionModel, CreateConfiramtionEmailModel } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Email<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ConfirmationReuests
   * @name EmailCreate
   * @summary Установка email через запрос сообщения на почту
   * @request POST:/Email
   * @secure
   */
  emailCreate = (data: CreateConfiramtionEmailModel, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/Email`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ConfirmationReuests
   * @name ConfirmCreate
   * @summary Установка email через запрос сообщения на почту
   * @request POST:/Email/Confirm
   * @secure
   */
  confirmCreate = (data: ConfirmConfirmitionModel, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/Email/Confirm`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
