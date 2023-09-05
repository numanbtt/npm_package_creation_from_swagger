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
import type { WordTutorialAdministrationQueriesWordTutorialSubtitleListItem } from './WordTutorialAdministrationQueriesWordTutorialSubtitleListItem';
import {
    WordTutorialAdministrationQueriesWordTutorialSubtitleListItemFromJSON,
    WordTutorialAdministrationQueriesWordTutorialSubtitleListItemFromJSONTyped,
    WordTutorialAdministrationQueriesWordTutorialSubtitleListItemToJSON,
} from './WordTutorialAdministrationQueriesWordTutorialSubtitleListItem';
import type { WordTutorialAdministrationQueriesWordTutorialTranslation } from './WordTutorialAdministrationQueriesWordTutorialTranslation';
import {
    WordTutorialAdministrationQueriesWordTutorialTranslationFromJSON,
    WordTutorialAdministrationQueriesWordTutorialTranslationFromJSONTyped,
    WordTutorialAdministrationQueriesWordTutorialTranslationToJSON,
} from './WordTutorialAdministrationQueriesWordTutorialTranslation';

/**
 * 
 * @export
 * @interface WordTutorialAdministrationQueriesWordTutorialListItem
 */
export interface WordTutorialAdministrationQueriesWordTutorialListItem {
    /**
     * 
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesWordTutorialListItem
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesWordTutorialListItem
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesWordTutorialListItem
     */
    youtubeVideoUrl: string;
    /**
     * 
     * @type {Array<WordTutorialAdministrationQueriesWordTutorialSubtitleListItem>}
     * @memberof WordTutorialAdministrationQueriesWordTutorialListItem
     */
    subtitles: Array<WordTutorialAdministrationQueriesWordTutorialSubtitleListItem>;
    /**
     * 
     * @type {Array<WordTutorialAdministrationQueriesWordTutorialTranslation>}
     * @memberof WordTutorialAdministrationQueriesWordTutorialListItem
     */
    translations: Array<WordTutorialAdministrationQueriesWordTutorialTranslation>;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesWordTutorialListItem
     */
    accentType: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialAdministrationQueriesWordTutorialListItem
     */
    languageLevel: string;
}

/**
 * Check if a given object implements the WordTutorialAdministrationQueriesWordTutorialListItem interface.
 */
export function instanceOfWordTutorialAdministrationQueriesWordTutorialListItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "youtubeVideoUrl" in value;
    isInstance = isInstance && "subtitles" in value;
    isInstance = isInstance && "translations" in value;
    isInstance = isInstance && "accentType" in value;
    isInstance = isInstance && "languageLevel" in value;

    return isInstance;
}

export function WordTutorialAdministrationQueriesWordTutorialListItemFromJSON(json: any): WordTutorialAdministrationQueriesWordTutorialListItem {
    return WordTutorialAdministrationQueriesWordTutorialListItemFromJSONTyped(json, false);
}

export function WordTutorialAdministrationQueriesWordTutorialListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): WordTutorialAdministrationQueriesWordTutorialListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'slug': json['slug'],
        'youtubeVideoUrl': json['youtubeVideoUrl'],
        'subtitles': ((json['subtitles'] as Array<any>).map(WordTutorialAdministrationQueriesWordTutorialSubtitleListItemFromJSON)),
        'translations': ((json['translations'] as Array<any>).map(WordTutorialAdministrationQueriesWordTutorialTranslationFromJSON)),
        'accentType': json['accentType'],
        'languageLevel': json['languageLevel'],
    };
}

export function WordTutorialAdministrationQueriesWordTutorialListItemToJSON(value?: WordTutorialAdministrationQueriesWordTutorialListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'slug': value.slug,
        'youtubeVideoUrl': value.youtubeVideoUrl,
        'subtitles': ((value.subtitles as Array<any>).map(WordTutorialAdministrationQueriesWordTutorialSubtitleListItemToJSON)),
        'translations': ((value.translations as Array<any>).map(WordTutorialAdministrationQueriesWordTutorialTranslationToJSON)),
        'accentType': value.accentType,
        'languageLevel': value.languageLevel,
    };
}

