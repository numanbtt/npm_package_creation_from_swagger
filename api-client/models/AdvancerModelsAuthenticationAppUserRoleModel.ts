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
import type { AdvancerModelsAuthenticationAppRoleModel } from './AdvancerModelsAuthenticationAppRoleModel';
import {
    AdvancerModelsAuthenticationAppRoleModelFromJSON,
    AdvancerModelsAuthenticationAppRoleModelFromJSONTyped,
    AdvancerModelsAuthenticationAppRoleModelToJSON,
} from './AdvancerModelsAuthenticationAppRoleModel';
import type { AdvancerModelsAuthenticationAppUserModel } from './AdvancerModelsAuthenticationAppUserModel';
import {
    AdvancerModelsAuthenticationAppUserModelFromJSON,
    AdvancerModelsAuthenticationAppUserModelFromJSONTyped,
    AdvancerModelsAuthenticationAppUserModelToJSON,
} from './AdvancerModelsAuthenticationAppUserModel';

/**
 * 
 * @export
 * @interface AdvancerModelsAuthenticationAppUserRoleModel
 */
export interface AdvancerModelsAuthenticationAppUserRoleModel {
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsAuthenticationAppUserRoleModel
     */
    userId?: number;
    /**
     * 
     * @type {number}
     * @memberof AdvancerModelsAuthenticationAppUserRoleModel
     */
    roleId?: number;
    /**
     * 
     * @type {AdvancerModelsAuthenticationAppUserModel}
     * @memberof AdvancerModelsAuthenticationAppUserRoleModel
     */
    user?: AdvancerModelsAuthenticationAppUserModel;
    /**
     * 
     * @type {AdvancerModelsAuthenticationAppRoleModel}
     * @memberof AdvancerModelsAuthenticationAppUserRoleModel
     */
    role?: AdvancerModelsAuthenticationAppRoleModel;
}

/**
 * Check if a given object implements the AdvancerModelsAuthenticationAppUserRoleModel interface.
 */
export function instanceOfAdvancerModelsAuthenticationAppUserRoleModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdvancerModelsAuthenticationAppUserRoleModelFromJSON(json: any): AdvancerModelsAuthenticationAppUserRoleModel {
    return AdvancerModelsAuthenticationAppUserRoleModelFromJSONTyped(json, false);
}

export function AdvancerModelsAuthenticationAppUserRoleModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdvancerModelsAuthenticationAppUserRoleModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'roleId': !exists(json, 'roleId') ? undefined : json['roleId'],
        'user': !exists(json, 'user') ? undefined : AdvancerModelsAuthenticationAppUserModelFromJSON(json['user']),
        'role': !exists(json, 'role') ? undefined : AdvancerModelsAuthenticationAppRoleModelFromJSON(json['role']),
    };
}

export function AdvancerModelsAuthenticationAppUserRoleModelToJSON(value?: AdvancerModelsAuthenticationAppUserRoleModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'roleId': value.roleId,
        'user': AdvancerModelsAuthenticationAppUserModelToJSON(value.user),
        'role': AdvancerModelsAuthenticationAppRoleModelToJSON(value.role),
    };
}

