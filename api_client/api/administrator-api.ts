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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AdministratorCommandsLoginCommandResult } from '../models';
// @ts-ignore
import { FluentValidationResultsValidationFailure } from '../models';
/**
 * AdministratorApi - axios parameter creator
 * @export
 */
export const AdministratorApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Sistem yöneticilerinin giriş yapabilmesini sağlar.
         * @param {string} [email] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminLogin: async (email?: string, password?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Administrator/Login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['Email'] = email;
            }

            if (password !== undefined) {
                localVarQueryParameter['Password'] = password;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdministratorApi - functional programming interface
 * @export
 */
export const AdministratorApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdministratorApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Sistem yöneticilerinin giriş yapabilmesini sağlar.
         * @param {string} [email] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminLogin(email?: string, password?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdministratorCommandsLoginCommandResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.adminLogin(email, password, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdministratorApi - factory interface
 * @export
 */
export const AdministratorApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdministratorApiFp(configuration)
    return {
        /**
         * 
         * @summary Sistem yöneticilerinin giriş yapabilmesini sağlar.
         * @param {string} [email] 
         * @param {string} [password] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminLogin(email?: string, password?: string, options?: any): AxiosPromise<AdministratorCommandsLoginCommandResult> {
            return localVarFp.adminLogin(email, password, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdministratorApi - interface
 * @export
 * @interface AdministratorApi
 */
export interface AdministratorApiInterface {
    /**
     * 
     * @summary Sistem yöneticilerinin giriş yapabilmesini sağlar.
     * @param {string} [email] 
     * @param {string} [password] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorApiInterface
     */
    adminLogin(email?: string, password?: string, options?: AxiosRequestConfig): AxiosPromise<AdministratorCommandsLoginCommandResult>;

}

/**
 * AdministratorApi - object-oriented interface
 * @export
 * @class AdministratorApi
 * @extends {BaseAPI}
 */
export class AdministratorApi extends BaseAPI implements AdministratorApiInterface {
    /**
     * 
     * @summary Sistem yöneticilerinin giriş yapabilmesini sağlar.
     * @param {string} [email] 
     * @param {string} [password] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdministratorApi
     */
    public adminLogin(email?: string, password?: string, options?: AxiosRequestConfig) {
        return AdministratorApiFp(this.configuration).adminLogin(email, password, options).then((request) => request(this.axios, this.basePath));
    }
}
