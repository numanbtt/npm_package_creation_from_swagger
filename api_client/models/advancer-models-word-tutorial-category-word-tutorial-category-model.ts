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


// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsWordTutorialWordTutorialModel } from './advancer-models-word-tutorial-word-tutorial-model';

/**
 * 
 * @export
 * @interface AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
 */
export interface AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel {
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'updatedAt': string;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'title'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'slug'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'coverPhotoId'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'isDeleted'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'totalWordTutorials'?: number;
    /**
     * 
     * @type {Array<AdvancerModelsWordTutorialWordTutorialModel>}
     * @memberof AdvancerModelsWordTutorialCategoryWordTutorialCategoryModel
     */
    'wordTutorials'?: Array<AdvancerModelsWordTutorialWordTutorialModel> | null;
}

