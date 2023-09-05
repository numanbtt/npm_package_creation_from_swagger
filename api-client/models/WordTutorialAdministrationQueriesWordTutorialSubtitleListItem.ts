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
import type { WordTutorialAdministrationQueriesSubtitleLine } from './WordTutorialAdministrationQueriesSubtitleLine';
import {
    WordTutorialAdministrationQueriesSubtitleLineFromJSON,
    WordTutorialAdministrationQueriesSubtitleLineFromJSONTyped,
    WordTutorialAdministrationQueriesSubtitleLineToJSON,
} from './WordTutorialAdministrationQueriesSubtitleLine';

/**
 * 
 * @export
 * @interface WordTutorialAdministrationQueriesWordTutorialSubtitleListItem
 */
export interface WordTutorialAdministrationQueriesWordTutorialSubtitleListItem {
    /**
     * Kelime eğitimi, altyazı dosyasının linkini barındırır
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesWordTutorialSubtitleListItem
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesWordTutorialSubtitleListItem
     */
    languageCode: string;
    /**
     * 
     * @type {Array<WordTutorialAdministrationQueriesSubtitleLine>}
     * @memberof WordTutorialAdministrationQueriesWordTutorialSubtitleListItem
     */
    lines: Array<WordTutorialAdministrationQueriesSubtitleLine>;
}

/**
 * Check if a given object implements the WordTutorialAdministrationQueriesWordTutorialSubtitleListItem interface.
 */
export function instanceOfWordTutorialAdministrationQueriesWordTutorialSubtitleListItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "languageCode" in value;
    isInstance = isInstance && "lines" in value;

    return isInstance;
}

export function WordTutorialAdministrationQueriesWordTutorialSubtitleListItemFromJSON(json: any): WordTutorialAdministrationQueriesWordTutorialSubtitleListItem {
    return WordTutorialAdministrationQueriesWordTutorialSubtitleListItemFromJSONTyped(json, false);
}

export function WordTutorialAdministrationQueriesWordTutorialSubtitleListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): WordTutorialAdministrationQueriesWordTutorialSubtitleListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'languageCode': json['languageCode'],
        'lines': ((json['lines'] as Array<any>).map(WordTutorialAdministrationQueriesSubtitleLineFromJSON)),
    };
}

export function WordTutorialAdministrationQueriesWordTutorialSubtitleListItemToJSON(value?: WordTutorialAdministrationQueriesWordTutorialSubtitleListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'languageCode': value.languageCode,
        'lines': ((value.lines as Array<any>).map(WordTutorialAdministrationQueriesSubtitleLineToJSON)),
    };
}

