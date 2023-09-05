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
import { FluentValidationResultsValidationFailure } from '../models';
// @ts-ignore
import { StudentCreditCommandsCreateCommand } from '../models';
// @ts-ignore
import { StudentCreditCommandsCreateCommandResult } from '../models';
// @ts-ignore
import { StudentCreditCommandsUpdateCommand } from '../models';
// @ts-ignore
import { StudentCreditQueriesCommonDropdown } from '../models';
// @ts-ignore
import { StudentCreditQueriesListQueryResult } from '../models';
// @ts-ignore
import { StudentCreditQueriesStudentCreditDetails } from '../models';
/**
 * StudentCreditsApi - axios parameter creator
 * @export
 */
export const StudentCreditsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCredits: async (studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/StudentCredits/Create`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(studentCreditCommandsCreateCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailsByIdCredits: async (id?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/StudentCredits/GetDetailsById`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDropDownStudents: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/StudentCredits/GetDropDownStudents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listStudentCredits: async (page?: number, itemPerPage?: number, searchKeyword?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/StudentCredits/List`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (itemPerPage !== undefined) {
                localVarQueryParameter['ItemPerPage'] = itemPerPage;
            }

            if (searchKeyword !== undefined) {
                localVarQueryParameter['SearchKeyword'] = searchKeyword;
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
         * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCredits: async (studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/StudentCredits/Update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(studentCreditCommandsUpdateCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StudentCreditsApi - functional programming interface
 * @export
 */
export const StudentCreditsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StudentCreditsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditCommandsCreateCommandResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCredits(studentCreditCommandsCreateCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetailsByIdCredits(id?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditQueriesStudentCreditDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetailsByIdCredits(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDropDownStudents(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<StudentCreditQueriesCommonDropdown>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDropDownStudents(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditQueriesListQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listStudentCredits(page, itemPerPage, searchKeyword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StudentCreditCommandsCreateCommandResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCredits(studentCreditCommandsUpdateCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StudentCreditsApi - factory interface
 * @export
 */
export const StudentCreditsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StudentCreditsApiFp(configuration)
    return {
        /**
         * 
         * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: any): AxiosPromise<StudentCreditCommandsCreateCommandResult> {
            return localVarFp.createCredits(studentCreditCommandsCreateCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailsByIdCredits(id?: number, options?: any): AxiosPromise<StudentCreditQueriesStudentCreditDetails> {
            return localVarFp.getDetailsByIdCredits(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDropDownStudents(options?: any): AxiosPromise<Array<StudentCreditQueriesCommonDropdown>> {
            return localVarFp.getDropDownStudents(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [page] 
         * @param {number} [itemPerPage] 
         * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: any): AxiosPromise<StudentCreditQueriesListQueryResult> {
            return localVarFp.listStudentCredits(page, itemPerPage, searchKeyword, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: any): AxiosPromise<StudentCreditCommandsCreateCommandResult> {
            return localVarFp.updateCredits(studentCreditCommandsUpdateCommand, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StudentCreditsApi - interface
 * @export
 * @interface StudentCreditsApi
 */
export interface StudentCreditsApiInterface {
    /**
     * 
     * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: AxiosRequestConfig): AxiosPromise<StudentCreditCommandsCreateCommandResult>;

    /**
     * 
     * @param {number} [id] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    getDetailsByIdCredits(id?: number, options?: AxiosRequestConfig): AxiosPromise<StudentCreditQueriesStudentCreditDetails>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    getDropDownStudents(options?: AxiosRequestConfig): AxiosPromise<Array<StudentCreditQueriesCommonDropdown>>;

    /**
     * 
     * @param {number} [page] 
     * @param {number} [itemPerPage] 
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig): AxiosPromise<StudentCreditQueriesListQueryResult>;

    /**
     * 
     * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApiInterface
     */
    updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: AxiosRequestConfig): AxiosPromise<StudentCreditCommandsCreateCommandResult>;

}

/**
 * StudentCreditsApi - object-oriented interface
 * @export
 * @class StudentCreditsApi
 * @extends {BaseAPI}
 */
export class StudentCreditsApi extends BaseAPI implements StudentCreditsApiInterface {
    /**
     * 
     * @param {StudentCreditCommandsCreateCommand} [studentCreditCommandsCreateCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    public createCredits(studentCreditCommandsCreateCommand?: StudentCreditCommandsCreateCommand, options?: AxiosRequestConfig) {
        return StudentCreditsApiFp(this.configuration).createCredits(studentCreditCommandsCreateCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [id] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    public getDetailsByIdCredits(id?: number, options?: AxiosRequestConfig) {
        return StudentCreditsApiFp(this.configuration).getDetailsByIdCredits(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    public getDropDownStudents(options?: AxiosRequestConfig) {
        return StudentCreditsApiFp(this.configuration).getDropDownStudents(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [page] 
     * @param {number} [itemPerPage] 
     * @param {string} [searchKeyword] Film kategorisinde arama yapılacak kelime
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    public listStudentCredits(page?: number, itemPerPage?: number, searchKeyword?: string, options?: AxiosRequestConfig) {
        return StudentCreditsApiFp(this.configuration).listStudentCredits(page, itemPerPage, searchKeyword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {StudentCreditCommandsUpdateCommand} [studentCreditCommandsUpdateCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StudentCreditsApi
     */
    public updateCredits(studentCreditCommandsUpdateCommand?: StudentCreditCommandsUpdateCommand, options?: AxiosRequestConfig) {
        return StudentCreditsApiFp(this.configuration).updateCredits(studentCreditCommandsUpdateCommand, options).then((request) => request(this.axios, this.basePath));
    }
}

