/* tslint:disable */
/* eslint-disable */
/**
 * Advancer
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.104
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AppInfoQueriesAppStatusQueryResult,
  AppInfoQueriesTimeStampQueryResult,
  FluentValidationResultsValidationFailure,
} from '../models/index';
import {
    AppInfoQueriesAppStatusQueryResultFromJSON,
    AppInfoQueriesAppStatusQueryResultToJSON,
    AppInfoQueriesTimeStampQueryResultFromJSON,
    AppInfoQueriesTimeStampQueryResultToJSON,
    FluentValidationResultsValidationFailureFromJSON,
    FluentValidationResultsValidationFailureToJSON,
} from '../models/index';

export interface GetTimeSlotsRequest {
    date?: string;
}

/**
 * 
 */
export class AppInfoApi extends runtime.BaseAPI {

    /**
     * Uygulamanın sürüm ve bakım bilgilerini getirir.
     */
    async getAppStatusRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppInfoQueriesAppStatusQueryResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/AppInfo/AppStatus`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppInfoQueriesAppStatusQueryResultFromJSON(jsonValue));
    }

    /**
     * Uygulamanın sürüm ve bakım bilgilerini getirir.
     */
    async getAppStatus(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppInfoQueriesAppStatusQueryResult> {
        const response = await this.getAppStatusRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getTimeSlotsRaw(requestParameters: GetTimeSlotsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppInfoQueriesTimeStampQueryResult>> {
        const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/AppInfo/GetTimeSlots`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppInfoQueriesTimeStampQueryResultFromJSON(jsonValue));
    }

    /**
     */
    async getTimeSlots(requestParameters: GetTimeSlotsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppInfoQueriesTimeStampQueryResult> {
        const response = await this.getTimeSlotsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
