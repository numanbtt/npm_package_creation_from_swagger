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
/**
 * 
 * @export
 * @interface WordTutorialAdministrationQueriesSubtitleLine
 */
export interface WordTutorialAdministrationQueriesSubtitleLine {
    /**
     * 
     * @type {number}
     * @memberof WordTutorialAdministrationQueriesSubtitleLine
     */
    contentId: number;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesSubtitleLine
     */
    content: string;
}

/**
 * Check if a given object implements the WordTutorialAdministrationQueriesSubtitleLine interface.
 */
export function instanceOfWordTutorialAdministrationQueriesSubtitleLine(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contentId" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function WordTutorialAdministrationQueriesSubtitleLineFromJSON(json: any): WordTutorialAdministrationQueriesSubtitleLine {
    return WordTutorialAdministrationQueriesSubtitleLineFromJSONTyped(json, false);
}

export function WordTutorialAdministrationQueriesSubtitleLineFromJSONTyped(json: any, ignoreDiscriminator: boolean): WordTutorialAdministrationQueriesSubtitleLine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contentId': json['contentId'],
        'content': json['content'],
    };
}

export function WordTutorialAdministrationQueriesSubtitleLineToJSON(value?: WordTutorialAdministrationQueriesSubtitleLine | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contentId': value.contentId,
        'content': value.content,
    };
}

