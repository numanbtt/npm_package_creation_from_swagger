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
import type { CustomerServiceAdministrationQueriesComplainant } from './CustomerServiceAdministrationQueriesComplainant';
import {
    CustomerServiceAdministrationQueriesComplainantFromJSON,
    CustomerServiceAdministrationQueriesComplainantFromJSONTyped,
    CustomerServiceAdministrationQueriesComplainantToJSON,
} from './CustomerServiceAdministrationQueriesComplainant';
import type { CustomerServiceAdministrationQueriesComplained } from './CustomerServiceAdministrationQueriesComplained';
import {
    CustomerServiceAdministrationQueriesComplainedFromJSON,
    CustomerServiceAdministrationQueriesComplainedFromJSONTyped,
    CustomerServiceAdministrationQueriesComplainedToJSON,
} from './CustomerServiceAdministrationQueriesComplained';

/**
 * 
 * @export
 * @interface CustomerServiceAdministrationQueriesComplaintDetails
 */
export interface CustomerServiceAdministrationQueriesComplaintDetails {
    /**
     * Şikayet Idsini barındırır
     * @type {number}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complainId: number;
    /**
     * 
     * @type {CustomerServiceAdministrationQueriesComplainant}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complainant: CustomerServiceAdministrationQueriesComplainant;
    /**
     * 
     * @type {CustomerServiceAdministrationQueriesComplained}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complained: CustomerServiceAdministrationQueriesComplained;
    /**
     * Şikayet etme tarihini barındırır
     * @type {Date}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complaintDate: Date;
    /**
     * Şikayet başlığını barındırır
     * @type {string}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complaintTitle: string;
    /**
     * Şikayet başlığını barındırır
     * @type {string}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complaintContent: string;
    /**
     * Şikayetin kategorisini barındırır
     * @type {string}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complaintCategory: string;
    /**
     * Şikayetin durumunu barındırır
     * @type {string}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complaintState: string;
    /**
     * Şikayet mesaj kategorisindeyse o mesajlaşmanın Id sini barındırır
     * @type {string}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complaintChatSessionId?: string | null;
    /**
     * Şikayet randevu kategorisindeyse o randevunun Id sini barındırır
     * @type {number}
     * @memberof CustomerServiceAdministrationQueriesComplaintDetails
     */
    complaintAppointmentId?: number | null;
}

/**
 * Check if a given object implements the CustomerServiceAdministrationQueriesComplaintDetails interface.
 */
export function instanceOfCustomerServiceAdministrationQueriesComplaintDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "complainId" in value;
    isInstance = isInstance && "complainant" in value;
    isInstance = isInstance && "complained" in value;
    isInstance = isInstance && "complaintDate" in value;
    isInstance = isInstance && "complaintTitle" in value;
    isInstance = isInstance && "complaintContent" in value;
    isInstance = isInstance && "complaintCategory" in value;
    isInstance = isInstance && "complaintState" in value;

    return isInstance;
}

export function CustomerServiceAdministrationQueriesComplaintDetailsFromJSON(json: any): CustomerServiceAdministrationQueriesComplaintDetails {
    return CustomerServiceAdministrationQueriesComplaintDetailsFromJSONTyped(json, false);
}

export function CustomerServiceAdministrationQueriesComplaintDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerServiceAdministrationQueriesComplaintDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'complainId': json['complainId'],
        'complainant': CustomerServiceAdministrationQueriesComplainantFromJSON(json['complainant']),
        'complained': CustomerServiceAdministrationQueriesComplainedFromJSON(json['complained']),
        'complaintDate': (new Date(json['complaintDate'])),
        'complaintTitle': json['complaintTitle'],
        'complaintContent': json['complaintContent'],
        'complaintCategory': json['complaintCategory'],
        'complaintState': json['complaintState'],
        'complaintChatSessionId': !exists(json, 'complaintChatSessionId') ? undefined : json['complaintChatSessionId'],
        'complaintAppointmentId': !exists(json, 'complaintAppointmentId') ? undefined : json['complaintAppointmentId'],
    };
}

export function CustomerServiceAdministrationQueriesComplaintDetailsToJSON(value?: CustomerServiceAdministrationQueriesComplaintDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'complainId': value.complainId,
        'complainant': CustomerServiceAdministrationQueriesComplainantToJSON(value.complainant),
        'complained': CustomerServiceAdministrationQueriesComplainedToJSON(value.complained),
        'complaintDate': (value.complaintDate.toISOString()),
        'complaintTitle': value.complaintTitle,
        'complaintContent': value.complaintContent,
        'complaintCategory': value.complaintCategory,
        'complaintState': value.complaintState,
        'complaintChatSessionId': value.complaintChatSessionId,
        'complaintAppointmentId': value.complaintAppointmentId,
    };
}

