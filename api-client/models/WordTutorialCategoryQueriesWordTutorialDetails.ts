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
import type { WordTutorialCategoryQueriesWordTutorialDetailsSubtitle } from './WordTutorialCategoryQueriesWordTutorialDetailsSubtitle';
import {
    WordTutorialCategoryQueriesWordTutorialDetailsSubtitleFromJSON,
    WordTutorialCategoryQueriesWordTutorialDetailsSubtitleFromJSONTyped,
    WordTutorialCategoryQueriesWordTutorialDetailsSubtitleToJSON,
} from './WordTutorialCategoryQueriesWordTutorialDetailsSubtitle';
import type { WordTutorialCategoryQueriesWordTutorialDetailsTranslation } from './WordTutorialCategoryQueriesWordTutorialDetailsTranslation';
import {
    WordTutorialCategoryQueriesWordTutorialDetailsTranslationFromJSON,
    WordTutorialCategoryQueriesWordTutorialDetailsTranslationFromJSONTyped,
    WordTutorialCategoryQueriesWordTutorialDetailsTranslationToJSON,
} from './WordTutorialCategoryQueriesWordTutorialDetailsTranslation';

/**
 * 
 * @export
 * @interface WordTutorialCategoryQueriesWordTutorialDetails
 */
export interface WordTutorialCategoryQueriesWordTutorialDetails {
    /**
     * 
     * @type {number}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    slug: string;
    /**
     * 
     * @type {Array<WordTutorialCategoryQueriesWordTutorialDetailsTranslation>}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    translations: Array<WordTutorialCategoryQueriesWordTutorialDetailsTranslation>;
    /**
     * 
     * @type {Array<WordTutorialCategoryQueriesWordTutorialDetailsSubtitle>}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    subtitles: Array<WordTutorialCategoryQueriesWordTutorialDetailsSubtitle>;
    /**
     * 
     * @type {boolean}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    isFavorited: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    isLiked: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    isShared: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    isWatched: boolean;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    youtubeVideoUrl: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    coverImage1X: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    coverImage2X: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    coverImage3X: string;
    /**
     * 
     * @type {string}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    coverImage4X: string;
    /**
     * 
     * @type {number}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    favoriteCount: number;
    /**
     * 
     * @type {number}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    watchCount: number;
    /**
     * 
     * @type {number}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    likeCount: number;
    /**
     * 
     * @type {number}
     * @memberof WordTutorialCategoryQueriesWordTutorialDetails
     */
    shareCount: number;
}

/**
 * Check if a given object implements the WordTutorialCategoryQueriesWordTutorialDetails interface.
 */
export function instanceOfWordTutorialCategoryQueriesWordTutorialDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "translations" in value;
    isInstance = isInstance && "subtitles" in value;
    isInstance = isInstance && "isFavorited" in value;
    isInstance = isInstance && "isLiked" in value;
    isInstance = isInstance && "isShared" in value;
    isInstance = isInstance && "isWatched" in value;
    isInstance = isInstance && "youtubeVideoUrl" in value;
    isInstance = isInstance && "coverImage1X" in value;
    isInstance = isInstance && "coverImage2X" in value;
    isInstance = isInstance && "coverImage3X" in value;
    isInstance = isInstance && "coverImage4X" in value;
    isInstance = isInstance && "favoriteCount" in value;
    isInstance = isInstance && "watchCount" in value;
    isInstance = isInstance && "likeCount" in value;
    isInstance = isInstance && "shareCount" in value;

    return isInstance;
}

export function WordTutorialCategoryQueriesWordTutorialDetailsFromJSON(json: any): WordTutorialCategoryQueriesWordTutorialDetails {
    return WordTutorialCategoryQueriesWordTutorialDetailsFromJSONTyped(json, false);
}

export function WordTutorialCategoryQueriesWordTutorialDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WordTutorialCategoryQueriesWordTutorialDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'slug': json['slug'],
        'translations': ((json['translations'] as Array<any>).map(WordTutorialCategoryQueriesWordTutorialDetailsTranslationFromJSON)),
        'subtitles': ((json['subtitles'] as Array<any>).map(WordTutorialCategoryQueriesWordTutorialDetailsSubtitleFromJSON)),
        'isFavorited': json['isFavorited'],
        'isLiked': json['isLiked'],
        'isShared': json['isShared'],
        'isWatched': json['isWatched'],
        'youtubeVideoUrl': json['youtubeVideoUrl'],
        'coverImage1X': json['coverImage1X'],
        'coverImage2X': json['coverImage2X'],
        'coverImage3X': json['coverImage3X'],
        'coverImage4X': json['coverImage4X'],
        'favoriteCount': json['favoriteCount'],
        'watchCount': json['watchCount'],
        'likeCount': json['likeCount'],
        'shareCount': json['shareCount'],
    };
}

export function WordTutorialCategoryQueriesWordTutorialDetailsToJSON(value?: WordTutorialCategoryQueriesWordTutorialDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'slug': value.slug,
        'translations': ((value.translations as Array<any>).map(WordTutorialCategoryQueriesWordTutorialDetailsTranslationToJSON)),
        'subtitles': ((value.subtitles as Array<any>).map(WordTutorialCategoryQueriesWordTutorialDetailsSubtitleToJSON)),
        'isFavorited': value.isFavorited,
        'isLiked': value.isLiked,
        'isShared': value.isShared,
        'isWatched': value.isWatched,
        'youtubeVideoUrl': value.youtubeVideoUrl,
        'coverImage1X': value.coverImage1X,
        'coverImage2X': value.coverImage2X,
        'coverImage3X': value.coverImage3X,
        'coverImage4X': value.coverImage4X,
        'favoriteCount': value.favoriteCount,
        'watchCount': value.watchCount,
        'likeCount': value.likeCount,
        'shareCount': value.shareCount,
    };
}

