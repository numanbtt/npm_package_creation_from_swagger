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
import { AllAccountsCommandsRecoverPasswordCommandResult } from '../models';
// @ts-ignore
import { FluentValidationResultsValidationFailure } from '../models';
/**
 * AllAccountsApi - axios parameter creator
 * @export
 */
export const AllAccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
         * @param {string} [newPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePassword: async (newPassword?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AllAccounts/ChangeMyPassword`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (newPassword !== undefined) {
                localVarQueryParameter['NewPassword'] = newPassword;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginResult: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AllAccounts/LoginResult`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lostPassword: async (email?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AllAccounts/LostPassword`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Hesap şifresinin kurtarılmasını sağlar.
         * @param {string} [email] 
         * @param {string} [recoverCode] 
         * @param {string} [newPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword: async (email?: string, recoverCode?: string, newPassword?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/AllAccounts/RecoverPassword`;
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
                localVarQueryParameter['email'] = email;
            }

            if (recoverCode !== undefined) {
                localVarQueryParameter['RecoverCode'] = recoverCode;
            }

            if (newPassword !== undefined) {
                localVarQueryParameter['NewPassword'] = newPassword;
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
 * AllAccountsApi - functional programming interface
 * @export
 */
export const AllAccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AllAccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
         * @param {string} [newPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async changePassword(newPassword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.changePassword(newPassword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginResult(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginResult(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async lostPassword(email?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.lostPassword(email, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Hesap şifresinin kurtarılmasını sağlar.
         * @param {string} [email] 
         * @param {string} [recoverCode] 
         * @param {string} [newPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recoverPassword(email?: string, recoverCode?: string, newPassword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AllAccountsCommandsRecoverPasswordCommandResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recoverPassword(email, recoverCode, newPassword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AllAccountsApi - factory interface
 * @export
 */
export const AllAccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AllAccountsApiFp(configuration)
    return {
        /**
         * 
         * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
         * @param {string} [newPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        changePassword(newPassword?: string, options?: any): AxiosPromise<object> {
            return localVarFp.changePassword(newPassword, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginResult(options?: any): AxiosPromise<object> {
            return localVarFp.loginResult(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        lostPassword(email?: string, options?: any): AxiosPromise<object> {
            return localVarFp.lostPassword(email, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Hesap şifresinin kurtarılmasını sağlar.
         * @param {string} [email] 
         * @param {string} [recoverCode] 
         * @param {string} [newPassword] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword(email?: string, recoverCode?: string, newPassword?: string, options?: any): AxiosPromise<AllAccountsCommandsRecoverPasswordCommandResult> {
            return localVarFp.recoverPassword(email, recoverCode, newPassword, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AllAccountsApi - interface
 * @export
 * @interface AllAccountsApi
 */
export interface AllAccountsApiInterface {
    /**
     * 
     * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
     * @param {string} [newPassword] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApiInterface
     */
    changePassword(newPassword?: string, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApiInterface
     */
    loginResult(options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
     * @param {string} [email] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApiInterface
     */
    lostPassword(email?: string, options?: AxiosRequestConfig): AxiosPromise<object>;

    /**
     * 
     * @summary Hesap şifresinin kurtarılmasını sağlar.
     * @param {string} [email] 
     * @param {string} [recoverCode] 
     * @param {string} [newPassword] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApiInterface
     */
    recoverPassword(email?: string, recoverCode?: string, newPassword?: string, options?: AxiosRequestConfig): AxiosPromise<AllAccountsCommandsRecoverPasswordCommandResult>;

}

/**
 * AllAccountsApi - object-oriented interface
 * @export
 * @class AllAccountsApi
 * @extends {BaseAPI}
 */
export class AllAccountsApi extends BaseAPI implements AllAccountsApiInterface {
    /**
     * 
     * @summary Giriş yapmış hesabın şifresini değiştirmesini sağlar.
     * @param {string} [newPassword] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    public changePassword(newPassword?: string, options?: AxiosRequestConfig) {
        return AllAccountsApiFp(this.configuration).changePassword(newPassword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sosyal hesaplar ile giriş yapıldığında, kullanıcı browser\'ının dönüş yaptığı url\'dir.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    public loginResult(options?: AxiosRequestConfig) {
        return AllAccountsApiFp(this.configuration).loginResult(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Misafir kullanıcının unuttuğu şifresini yenileyebilmesini sağlar. Dikkat: Sosyal medya girişlerinde bu metodun çalışmaması gerekir.
     * @param {string} [email] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    public lostPassword(email?: string, options?: AxiosRequestConfig) {
        return AllAccountsApiFp(this.configuration).lostPassword(email, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Hesap şifresinin kurtarılmasını sağlar.
     * @param {string} [email] 
     * @param {string} [recoverCode] 
     * @param {string} [newPassword] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AllAccountsApi
     */
    public recoverPassword(email?: string, recoverCode?: string, newPassword?: string, options?: AxiosRequestConfig) {
        return AllAccountsApiFp(this.configuration).recoverPassword(email, recoverCode, newPassword, options).then((request) => request(this.axios, this.basePath));
    }
}
