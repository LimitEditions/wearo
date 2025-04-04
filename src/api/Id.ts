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

import { HttpClient, RequestParams } from "./http-client";

export class Id<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description * * @tags Push
   * @name DeleteId
   * @request DELETE:/{id}
   * @secure */
  deleteId = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
