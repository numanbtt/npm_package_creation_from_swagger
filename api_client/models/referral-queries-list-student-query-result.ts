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
import { ReferralQueriesListReferralStudentPagination } from './referral-queries-list-referral-student-pagination';
// May contain unused imports in some cases
// @ts-ignore
import { ReferralQueriesReferralStudentList } from './referral-queries-referral-student-list';

/**
 * 
 * @export
 * @interface ReferralQueriesListStudentQueryResult
 */
export interface ReferralQueriesListStudentQueryResult {
    /**
     * 
     * @type {ReferralQueriesListReferralStudentPagination}
     * @memberof ReferralQueriesListStudentQueryResult
     */
    'pagination': ReferralQueriesListReferralStudentPagination;
    /**
     * Kelime eğitimlerinin listesini barındırır
     * @type {Array<ReferralQueriesReferralStudentList>}
     * @memberof ReferralQueriesListStudentQueryResult
     */
    'referralStudentList': Array<ReferralQueriesReferralStudentList>;
}

