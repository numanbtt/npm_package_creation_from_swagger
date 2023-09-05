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

import { exists, mapValues } from '../runtime';
import type { AdvancerModelsWordTutorialWordTutorialSubtitleModel } from './AdvancerModelsWordTutorialWordTutorialSubtitleModel';
import {
    AdvancerModelsWordTutorialWordTutorialSubtitleModelFromJSON,
    AdvancerModelsWordTutorialWordTutorialSubtitleModelFromJSONTyped,
    AdvancerModelsWordTutorialWordTutorialSubtitleModelToJSON,
} from './AdvancerModelsWordTutorialWordTutorialSubtitleModel';

/**
 * 
 * @export
 * @interface AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
 */
export interface AdvancerModelsWordTutorialWordTutorialSubtitleContentModel {
    /**
     * 
     * @type {Date}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    wordTutorialSubtitleId?: number;
    /**
     * 
     * @type {AdvancerModelsWordTutorialWordTutorialSubtitleModel}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    wordTutorialSubtitle?: AdvancerModelsWordTutorialWordTutorialSubtitleModel;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsWordTutorialWordTutorialSubtitleContentModel
     */
    lineContent?: string | null;
}

/**
 * Check if a given object implements the AdvancerModelsWordTutorialWordTutorialSubtitleContentModel interface.
 */
export function instanceOfAdvancerModelsWordTutorialWordTutorialSubtitleContentModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function AdvancerModelsWordTutorialWordTutorialSubtitleContentModelFromJSON(json: any): AdvancerModelsWordTutorialWordTutorialSubtitleContentModel {
    return AdvancerModelsWordTutorialWordTutorialSubtitleContentModelFromJSONTyped(json, false);
}

export function AdvancerModelsWordTutorialWordTutorialSubtitleContentModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvancerModelsWordTutorialWordTutorialSubtitleContentModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'wordTutorialSubtitleId': !exists(json, 'wordTutorialSubtitleId') ? undefined : json['wordTutorialSubtitleId'],
        'wordTutorialSubtitle': !exists(json, 'wordTutorialSubtitle') ? undefined : AdvancerModelsWordTutorialWordTutorialSubtitleModelFromJSON(json['wordTutorialSubtitle']),
        'lineContent': !exists(json, 'lineContent') ? undefined : json['lineContent'],
    };
}

export function AdvancerModelsWordTutorialWordTutorialSubtitleContentModelToJSON(value?: AdvancerModelsWordTutorialWordTutorialSubtitleContentModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'id': value.id,
        'wordTutorialSubtitleId': value.wordTutorialSubtitleId,
        'wordTutorialSubtitle': AdvancerModelsWordTutorialWordTutorialSubtitleModelToJSON(value.wordTutorialSubtitle),
        'lineContent': value.lineContent,
    };
}

