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
import { AdvancerModelsAppointmentAppointmentModel } from './advancer-models-appointment-appointment-model';
// May contain unused imports in some cases
// @ts-ignore
import { AdvancerModelsAuthenticationAppUserModel } from './advancer-models-authentication-app-user-model';

/**
 * 
 * @export
 * @interface AdvancerModelsRatingTeacherRateModel
 */
export interface AdvancerModelsRatingTeacherRateModel {
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'updatedAt': string;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'studentId'?: number;
    /**
     * 
     * @type {AdvancerModelsAuthenticationAppUserModel}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'student'?: AdvancerModelsAuthenticationAppUserModel;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'teacherId'?: number;
    /**
     * 
     * @type {AdvancerModelsAuthenticationAppUserModel}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'teacher'?: AdvancerModelsAuthenticationAppUserModel;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'appointmentId'?: number | null;
    /**
     * 
     * @type {AdvancerModelsAppointmentAppointmentModel}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'appointment'?: AdvancerModelsAppointmentAppointmentModel;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'rate'?: number;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsRatingTeacherRateModel
     */
    'comment'?: string | null;
}
