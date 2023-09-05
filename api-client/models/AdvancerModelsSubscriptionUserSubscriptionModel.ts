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
import type { AdvancerModelsIyzicoIyzicoSubscriptionPlanModel } from './AdvancerModelsIyzicoIyzicoSubscriptionPlanModel';
import {
    AdvancerModelsIyzicoIyzicoSubscriptionPlanModelFromJSON,
    AdvancerModelsIyzicoIyzicoSubscriptionPlanModelFromJSONTyped,
    AdvancerModelsIyzicoIyzicoSubscriptionPlanModelToJSON,
} from './AdvancerModelsIyzicoIyzicoSubscriptionPlanModel';
import type { AdvancerModelsPaymentPaymentModel } from './AdvancerModelsPaymentPaymentModel';
import {
    AdvancerModelsPaymentPaymentModelFromJSON,
    AdvancerModelsPaymentPaymentModelFromJSONTyped,
    AdvancerModelsPaymentPaymentModelToJSON,
} from './AdvancerModelsPaymentPaymentModel';
import type { AdvancerModelsRoleMetadataStudentMetadataModel } from './AdvancerModelsRoleMetadataStudentMetadataModel';
import {
    AdvancerModelsRoleMetadataStudentMetadataModelFromJSON,
    AdvancerModelsRoleMetadataStudentMetadataModelFromJSONTyped,
    AdvancerModelsRoleMetadataStudentMetadataModelToJSON,
} from './AdvancerModelsRoleMetadataStudentMetadataModel';

/**
 * 
 * @export
 * @interface AdvancerModelsSubscriptionUserSubscriptionModel
 */
export interface AdvancerModelsSubscriptionUserSubscriptionModel {
    /**
     * 
     * @type {Date}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    iyzicoParentReferenceCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    paidMonths?: number;
    /**
     * 
     * @type {Date}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    startsAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    endsAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    isActive?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    subscriberId?: number;
    /**
     * 
     * @type {AdvancerModelsRoleMetadataStudentMetadataModel}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    subscriber?: AdvancerModelsRoleMetadataStudentMetadataModel;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    subscriptionPlanId?: number;
    /**
     * 
     * @type {AdvancerModelsIyzicoIyzicoSubscriptionPlanModel}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    subscriptionPlan?: AdvancerModelsIyzicoIyzicoSubscriptionPlanModel;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    paymentId?: number;
    /**
     * 
     * @type {AdvancerModelsPaymentPaymentModel}
     * @memberof AdvancerModelsSubscriptionUserSubscriptionModel
     */
    payment?: AdvancerModelsPaymentPaymentModel;
}

/**
 * Check if a given object implements the AdvancerModelsSubscriptionUserSubscriptionModel interface.
 */
export function instanceOfAdvancerModelsSubscriptionUserSubscriptionModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function AdvancerModelsSubscriptionUserSubscriptionModelFromJSON(json: any): AdvancerModelsSubscriptionUserSubscriptionModel {
    return AdvancerModelsSubscriptionUserSubscriptionModelFromJSONTyped(json, false);
}

export function AdvancerModelsSubscriptionUserSubscriptionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvancerModelsSubscriptionUserSubscriptionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'iyzicoParentReferenceCode': !exists(json, 'iyzicoParentReferenceCode') ? undefined : json['iyzicoParentReferenceCode'],
        'paidMonths': !exists(json, 'paidMonths') ? undefined : json['paidMonths'],
        'startsAt': !exists(json, 'startsAt') ? undefined : (new Date(json['startsAt'])),
        'endsAt': !exists(json, 'endsAt') ? undefined : (new Date(json['endsAt'])),
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'subscriberId': !exists(json, 'subscriberId') ? undefined : json['subscriberId'],
        'subscriber': !exists(json, 'subscriber') ? undefined : AdvancerModelsRoleMetadataStudentMetadataModelFromJSON(json['subscriber']),
        'subscriptionPlanId': !exists(json, 'subscriptionPlanId') ? undefined : json['subscriptionPlanId'],
        'subscriptionPlan': !exists(json, 'subscriptionPlan') ? undefined : AdvancerModelsIyzicoIyzicoSubscriptionPlanModelFromJSON(json['subscriptionPlan']),
        'paymentId': !exists(json, 'paymentId') ? undefined : json['paymentId'],
        'payment': !exists(json, 'payment') ? undefined : AdvancerModelsPaymentPaymentModelFromJSON(json['payment']),
    };
}

export function AdvancerModelsSubscriptionUserSubscriptionModelToJSON(value?: AdvancerModelsSubscriptionUserSubscriptionModel | null): any {
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
        'iyzicoParentReferenceCode': value.iyzicoParentReferenceCode,
        'paidMonths': value.paidMonths,
        'startsAt': value.startsAt === undefined ? undefined : (value.startsAt.toISOString()),
        'endsAt': value.endsAt === undefined ? undefined : (value.endsAt.toISOString()),
        'isActive': value.isActive,
        'subscriberId': value.subscriberId,
        'subscriber': AdvancerModelsRoleMetadataStudentMetadataModelToJSON(value.subscriber),
        'subscriptionPlanId': value.subscriptionPlanId,
        'subscriptionPlan': AdvancerModelsIyzicoIyzicoSubscriptionPlanModelToJSON(value.subscriptionPlan),
        'paymentId': value.paymentId,
        'payment': AdvancerModelsPaymentPaymentModelToJSON(value.payment),
    };
}

