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
 * @interface AdvancerModelsWordTutorialWordTutorialTranslationModel
 */
export interface AdvancerModelsWordTutorialWordTutorialTranslationModel {
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'updatedAt': string;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'wordTutorialId'?: number;
    /**
     * 
     * @type {AdvancerModelsWordTutorialWordTutorialModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'wordTutorial'?: AdvancerModelsWordTutorialWordTutorialModel;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'languageCode'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'isRtlLanguage'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialTranslationModel
     */
    'content'?: string | null;
}

