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
import { AdvancerModelsWordTutorialWordTutorialSubtitleModel } from './advancer-models-word-tutorial-word-tutorial-subtitle-model';

/**
 * 
 * @export
 * @interface AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
 */
export interface AdvancerModelsWordTutorialWordTutorialSubtitleContentModel {
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    'updatedAt': string;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    'wordTutorialSubtitleId'?: number;
    /**
     * 
     * @type {AdvancerModelsWordTutorialWordTutorialSubtitleModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    'wordTutorialSubtitle'?: AdvancerModelsWordTutorialWordTutorialSubtitleModel;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    'lineContent'?: string | null;
}

