// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code below this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================

import * as Shared from "./shared";

export type IGetV2Objects200Response = {
  "data": Shared.IObject[];
};
export type IPostV2ObjectsDTO = {
  "data": {
    /**
 *  A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case.
 */
  "api_slug": string;
/**
 *  The singular form of the object's name.
 */
  "singular_noun": string;
/**
 *  The plural form of the object's name.
 */
  "plural_noun": string;
    };
};
export type IPostV2Objects200Response = {
  "data": Shared.IObject;
};
export type IPostV2Objects400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "quota_exceeded";
  "message": string;
};
export type IPostV2Objects403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPostV2Objects409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IGetV2Objects$object200Response = {
  "data": Shared.IObject;
};
export type IGetV2Objects$object404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Objects$objectDTO = {
  "data": {
    /**
 *  A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case.
 */
  "api_slug"?: string;
/**
 *  The singular form of the object's name.
 */
  "singular_noun"?: string;
/**
 *  The plural form of the object's name.
 */
  "plural_noun"?: string;
    };
};
export type IPatchV2Objects$object200Response = {
  "data": Shared.IObject;
};
export type IPatchV2Objects$object400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IPatchV2Objects$object403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2Objects$object404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Objects$object409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IDeleteV2Objects$object200Response = {[k: string]: any};
export type IDeleteV2Objects$object400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "system_edit_unauthorized";
  "message": string;
};
export type IDeleteV2Objects$object403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IDeleteV2Objects$object404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Objects$objectViewsQuery = {
  "show_archived"?: boolean;
  "limit"?: number;
  "cursor"?: string;
};
export type IGetV2Objects$objectViews200Response = {
  "data": Shared.IObjectView[];
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IGetV2Objects$objectViews404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2ActivitiesQuery = {
  "limit"?: number;
  "cursor"?: string;
};
export type IGetV2Activities200Response = {
  "data": Shared.IActivity[];
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IPostV2ActivitiesDTO = {
  "data": {
    /**
 *  A unique, human-readable slug to access the activity through URLs and API calls. Should be formatted in snake case.
 */
  "api_slug": string;
/**
 *  The singular form of the activity's name.
 */
  "singular_noun": string;
/**
 *  The plural form of the activity's name.
 */
  "plural_noun": string;
/**
 *  The schema the new activity extends, which supplies its inherited attributes. One of `activities`, `interactions`, `calls` or `emails`.
 */
  "extends": ("activities"|"interactions"|"calls"|"emails");
    };
};
export type IPostV2Activities200Response = {
  "data": Shared.IActivity;
};
export type IPostV2Activities403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": ("billing_error"|"unauthorized");
  "message": string;
};
export type IPostV2Activities409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IGetV2Activities$activity200Response = {
  "data": Shared.IActivity;
};
export type IGetV2Activities$activity404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Activities$activityDTO = {
  "data": {
    /**
 *  A unique, human-readable slug to access the activity through URLs and API calls. Should be formatted in snake case.
 */
  "api_slug"?: string;
/**
 *  The singular form of the activity's name.
 */
  "singular_noun"?: string;
/**
 *  The plural form of the activity's name.
 */
  "plural_noun"?: string;
    };
};
export type IPatchV2Activities$activity200Response = {
  "data": Shared.IActivity;
};
export type IPatchV2Activities$activity400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IPatchV2Activities$activity403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2Activities$activity404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Activities$activity409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IDeleteV2Activities$activity200Response = {[k: string]: any};
export type IDeleteV2Activities$activity400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "system_edit_unauthorized";
  "message": string;
};
export type IDeleteV2Activities$activity403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IDeleteV2Activities$activity404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2$target$identifierAttributesQuery = {
  "limit"?: number;
  "offset"?: number;
  "show_archived"?: boolean;
};
export type IGetV2$target$identifierAttributes200Response = {
  "data": Shared.IAttribute[];
};
export type IPostV2$target$identifierAttributesDTO = {
  "data": {
    /**
 *  The name of the attribute. The title will be visible across Attio's UI.
 */
  "title": string;
/**
 *  A text description for the attribute.
 */
  "description": (string|null);
/**
 *  A unique, human-readable slug to access the attribute through URLs and API calls. Formatted in snake case.
 */
  "api_slug": string;
/**
 *  The type of the attribute. This value affects the possible `config` values.
 */
  "type": ("text"|"number"|"checkbox"|"currency"|"date"|"timestamp"|"rating"|"status"|"select"|"record-reference"|"actor-reference"|"location"|"domain"|"email-address"|"phone-number");
/**
 *  When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`.
 */
  "is_required": boolean;
/**
 *  Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data.
 */
  "is_unique": boolean;
/**
 *  Whether or not this attribute can have multiple values. Multiselect is only available on some value types.
 */
  "is_multiselect": boolean;
/**
 *  The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.
 */
  "default_value"?: ({
  "type": "dynamic";
  "template": ("current-user"|string|string);
}|{
  "type": "static";
  "template": Shared.IInputValue[];
}|null);
/**
 *  Optional relationship configuration. When provided, creates a bidirectional relationship between two objects. Can only be used with attributes of type "record-reference". If `config.record_reference.allowed_objects` is also provided, it must contain only the relationship object.
 */
  "relationship"?: {
        /**
 *  The slug or UUID of the object to create the reverse relationship attribute on.
 */
  "object": string;
/**
 *  The title for the reverse relationship attribute.
 */
  "title": string;
/**
 *  The API slug for the reverse relationship attribute.
 */
  "api_slug": string;
/**
 *  Whether the related attribute supports selecting multiple values. Combined with the parent attribute's `is_multiselect`, this determines the relationship type: both `false` = one-to-one, parent `true` + related `false` = many-to-one, parent `false` + related `true` = one-to-many, both `true` = many-to-many.
 */
  "is_multiselect": boolean;
        };
  "config": {
        /**
 *  Configuration available for attributes of type "currency".
 */
  "currency"?: {
            /**
 *  The ISO4217 code representing the currency that values for this attribute should be stored in.
 */
  "default_currency_code": ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
 */
  "display_type": ("code"|"name"|"narrowSymbol"|"symbol");
            };
/**
 *  Configuration available for attributes of type "record-reference".
 */
  "record_reference"?: {
            /**
 *  A list of slugs or UUIDs to indicate which objects records are allowed to belong to. If `relationship` is also provided, this must contain only the relationship object.
 */
  "allowed_objects": string[];
            };
        };
    };
};
export type IPostV2$target$identifierAttributes200Response = {
  "data": Shared.IAttribute;
};
export type IPostV2$target$identifierAttributes400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IPostV2$target$identifierAttributes403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPostV2$target$identifierAttributes404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2$target$identifierAttributes409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IGetV2$target$identifierAttributes$attribute200Response = {
  "data": Shared.IAttribute;
};
export type IGetV2$target$identifierAttributes$attribute404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeDTO = {
  "data": {
    /**
 *  The name of the attribute. The title will be visible across Attio's UI.
 */
  "title"?: string;
/**
 *  A text description for the attribute.
 */
  "description"?: (string|null);
/**
 *  A unique, human-readable slug to access the attribute through URLs and API calls. Formatted in snake case.
 */
  "api_slug"?: string;
/**
 *  When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`.
 */
  "is_required"?: boolean;
/**
 *  Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data.
 */
  "is_unique"?: boolean;
/**
 *  The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.
 */
  "default_value"?: ({
  "type": "dynamic";
  "template": ("current-user"|string|string);
}|{
  "type": "static";
  "template": Shared.IInputValue[];
}|null);
/**
 *  Additional, type-dependent configuration for the attribute.
 */
  "config"?: {
        /**
 *  Configuration available for attributes of type "currency".
 */
  "currency"?: {
            /**
 *  The ISO4217 code representing the currency that values for this attribute should be stored in.
 */
  "default_currency_code": ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
 */
  "display_type": ("code"|"name"|"narrowSymbol"|"symbol");
            };
/**
 *  Configuration available for attributes of type "record-reference".
 */
  "record_reference"?: {
            /**
 *  A list of slugs or UUIDs to indicate which objects records are allowed to belong to. If `relationship` is also provided, this must contain only the relationship object.
 */
  "allowed_objects": string[];
            };
        };
/**
 *  Whether the attribute has been archived or not. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
 */
  "is_archived"?: boolean;
    };
};
export type IPatchV2$target$identifierAttributes$attribute200Response = {
  "data": Shared.IAttribute;
};
export type IPatchV2$target$identifierAttributes$attribute400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "system_edit_unauthorized";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attribute403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attribute404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2$target$identifierAttributes$attributeOptionsQuery = {
  "show_archived"?: boolean;
};
export type IGetV2$target$identifierAttributes$attributeOptions200Response = {
  "data": Shared.ISelectOption[];
};
export type IGetV2$target$identifierAttributes$attributeOptions404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeOptionsDTO = {
  "data": {
    /**
 *  The Title of the select option
 */
  "title": string;
    };
};
export type IPostV2$target$identifierAttributes$attributeOptions200Response = {
  "data": Shared.ISelectOption;
};
export type IPostV2$target$identifierAttributes$attributeOptions400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeOptions403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeOptions404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeOptions409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeOptions$optionDTO = {
  "data": {
    /**
 *  The Title of the select option
 */
  "title"?: string;
/**
 *  Whether or not to archive the select option. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
 */
  "is_archived"?: boolean;
    };
};
export type IPatchV2$target$identifierAttributes$attributeOptions$option200Response = {
  "data": Shared.ISelectOption;
};
export type IPatchV2$target$identifierAttributes$attributeOptions$option400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "value_not_found";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeOptions$option403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeOptions$option404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeOptions$option409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IGetV2$target$identifierAttributes$attributeStatusesQuery = {
  "show_archived"?: boolean;
};
export type IGetV2$target$identifierAttributes$attributeStatuses200Response = {
  "data": Shared.IStatus[];
};
export type IGetV2$target$identifierAttributes$attributeStatuses404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeStatusesDTO = {
  "data": {
    /**
 *  The Title of the status
 */
  "title": string;
/**
 *  Whether arriving at this status triggers a celebration effect
 */
  "celebration_enabled"?: boolean;
/**
 *  Target time for a record to spend in given status expressed as a ISO-8601 duration string
 */
  "target_time_in_status"?: (string|null);
    };
};
export type IPostV2$target$identifierAttributes$attributeStatuses200Response = {
  "data": Shared.IStatus;
};
export type IPostV2$target$identifierAttributes$attributeStatuses400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeStatuses403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeStatuses404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2$target$identifierAttributes$attributeStatuses409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeStatuses$statusDTO = {
  "data": {
    /**
 *  The Title of the status
 */
  "title"?: string;
/**
 *  Whether arriving at this status triggers a celebration effect
 */
  "celebration_enabled"?: boolean;
/**
 *  Target time for a record to spend in given status expressed as a ISO-8601 duration string
 */
  "target_time_in_status"?: (string|null);
/**
 *  Whether or not to archive the status. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
 */
  "is_archived"?: boolean;
    };
};
export type IPatchV2$target$identifierAttributes$attributeStatuses$status200Response = {
  "data": Shared.IStatus;
};
export type IPatchV2$target$identifierAttributes$attributeStatuses$status400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "value_not_found";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeStatuses$status403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeStatuses$status404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2$target$identifierAttributes$attributeStatuses$status409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IPostV2Objects$objectRecordsQueryDTO = {
/**
 *  An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
 */
  "filter"?: {[k: string]: any};
/**
 *  UUID of a saved view on this object or list. When set, results are filtered using that view's filter configuration. Cannot be used together with `filter`. Note: sorts, limits, and offsets are applied independently and are not taken from the view. All attributes are returned regardless of which attributes are visible in the view.
 */
  "filter_view_id"?: string;
/**
 *  An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
 */
  "sorts"?: ({
/**
 *  The direction to sort the results by.
 */
  "direction": ("asc"|"desc");
/**
 *  A slug or ID to identify the attribute to sort by.
 */
  "attribute": string;
/**
 *  Which field on the value to sort by e.g. "last_name" on a name value.
 */
  "field"?: string;
}|{
/**
 *  The direction to sort the results by.
 */
  "direction": ("asc"|"desc");
/**
 *  You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`.
 */
  "path": (string|string)[][];
/**
 *  Which field on the value to sort by e.g. "last_name" on a name value.
 */
  "field"?: string;
})[];
/**
 *  The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination).
 */
  "limit"?: number;
/**
 *  The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).
 */
  "offset"?: number;
};
export type IPostV2Objects$objectRecordsQuery200Response = {
  "data": {
  "id": {
    /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
    };
/**
 *  When this record was created.
 */
  "created_at": string;
/**
 *  A URL that links directly to the record page in the Attio web application.
 */
  "web_url": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
}[];
};
export type IPostV2Objects$objectRecordsQuery400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "filter_error";
  "message": string;
};
export type IPostV2Objects$objectRecordsQuery404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Objects$objectRecordsDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPostV2Objects$objectRecords200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
        };
/**
 *  When this record was created.
 */
  "created_at": string;
/**
 *  A URL that links directly to the record page in the Attio web application.
 */
  "web_url": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPostV2Objects$objectRecords400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("value_not_found"|"particle_gate_violation"|"validation_type"|"duplicate_values"|"limit_reached"|"multiple_match_results");
  "message": string;
};
export type IPostV2Objects$objectRecords403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPostV2Objects$objectRecords404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Objects$objectRecords409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IPutV2Objects$objectRecordsQuery = {
  "matching_attribute": string;
};
export type IPutV2Objects$objectRecordsDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPutV2Objects$objectRecords200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
        };
/**
 *  When this record was created.
 */
  "created_at": string;
/**
 *  A URL that links directly to the record page in the Attio web application.
 */
  "web_url": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPutV2Objects$objectRecords400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("value_not_found"|"merge_in_progress"|"particle_gate_violation"|"validation_type"|"duplicate_values"|"limit_reached"|"multiple_match_results");
  "message": string;
};
export type IPutV2Objects$objectRecords403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPutV2Objects$objectRecords404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Objects$objectRecords409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IGetV2Objects$objectRecords$record_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
        };
/**
 *  When this record was created.
 */
  "created_at": string;
/**
 *  A URL that links directly to the record page in the Attio web application.
 */
  "web_url": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IGetV2Objects$objectRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": ("not_found"|"merge_in_progress");
  "message": string;
};
export type IPatchV2Objects$objectRecords$record_idDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPatchV2Objects$objectRecords$record_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
        };
/**
 *  When this record was created.
 */
  "created_at": string;
/**
 *  A URL that links directly to the record page in the Attio web application.
 */
  "web_url": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPatchV2Objects$objectRecords$record_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("missing_value"|"merge_in_progress"|"particle_gate_violation"|"value_not_found"|"validation_type"|"duplicate_values"|"limit_reached"|"multiple_match_results");
  "message": string;
};
export type IPatchV2Objects$objectRecords$record_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2Objects$objectRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Objects$objectRecords$record_id409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IPutV2Objects$objectRecords$record_idDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPutV2Objects$objectRecords$record_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
        };
/**
 *  When this record was created.
 */
  "created_at": string;
/**
 *  A URL that links directly to the record page in the Attio web application.
 */
  "web_url": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPutV2Objects$objectRecords$record_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("missing_value"|"merge_in_progress"|"particle_gate_violation"|"value_not_found"|"validation_type"|"duplicate_values"|"limit_reached"|"multiple_match_results");
  "message": string;
};
export type IPutV2Objects$objectRecords$record_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPutV2Objects$objectRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Objects$objectRecords$record_id409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IDeleteV2Objects$objectRecords$record_id200Response = {[k: string]: any};
export type IDeleteV2Objects$objectRecords$record_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IDeleteV2Objects$objectRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Objects$objectRecordsMergeDTO = {
  "data": {
    /**
 *  The ID of the record to keep values from. Where both records have a value for the same attribute, the primary record's value takes precedence.
 */
  "primary_record_id": string;
/**
 *  The ID of the record to merge into the primary record. Its values are only kept where the primary record has no value for that attribute.
 */
  "secondary_record_id": string;
    };
};
export type IPostV2Objects$objectRecordsMerge200Response = {
  "data": {
    /**
 *  The ID of the merged record. This is a new ID, which will usually match neither of the records supplied in the request.
 */
  "new_record_id": string;
    };
};
export type IPostV2Objects$objectRecordsMerge202Response = {
  "data": {
    /**
 *  The ID of the merged record. This is a new ID, which will usually match neither of the records supplied in the request.
 */
  "new_record_id": string;
    };
};
export type IPostV2Objects$objectRecordsMerge400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "self_merge";
  "message": string;
};
export type IPostV2Objects$objectRecordsMerge403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPostV2Objects$objectRecordsMerge404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": ("not_found"|"value_not_found");
  "message": string;
};
export type IGetV2Objects$objectRecords$record_idAttributes$attributeValuesQuery = {
  "show_historic"?: boolean;
  "limit"?: number;
  "offset"?: number;
};
export type IGetV2Objects$objectRecords$record_idAttributes$attributeValues200Response = {
  "data": ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[];
};
export type IGetV2Objects$objectRecords$record_idAttributes$attributeValues400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IGetV2Objects$objectRecords$record_idAttributes$attributeValues404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Objects$objectRecords$record_idAttributes$attributeValuesDTO = {
  "data": {
    /**
 *  The complete value history to write, replacing any existing values. Values may be supplied in any order. Gaps between intervals are allowed. At least one value is required, and a maximum of 400 values may be written in one request.
 */
  "values": {
/**
 *  The value itself, in the same form accepted when updating a record or list entry. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "value": ({[k: string]: any}|string|number|boolean);
/**
 *  An RFC 3339 timestamp for when this value became active. May not be in the future.
 */
  "active_from": string;
/**
 *  An RFC 3339 timestamp for when this value stopped being active, or `null` if it is still active. Must be after `active_from` and may not be in the future. This key is required: omitting it is almost always a mistake in a migration.
 */
  "active_until": (string|null);
}[];
/**
 *  Must be `true`. Acknowledges that this request replaces the attribute's entire value history, destroying every value it currently has, including values not present in this request.
 */
  "replace_history": true;
    };
};
export type IPutV2Objects$objectRecords$record_idAttributes$attributeValues200Response = {
  "data": ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[];
};
export type IPutV2Objects$objectRecords$record_idAttributes$attributeValues400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("validation_type"|"missing_value"|"value_not_found"|"duplicate_values"|"uniqueness_conflict"|"multiple_values_for_single_value_attribute"|"system_edit_unauthorized"|"formula_edit_unauthorized"|"standard_object_disabled"|"particle_gate_violation");
  "message": string;
};
export type IPutV2Objects$objectRecords$record_idAttributes$attributeValues403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPutV2Objects$objectRecords$record_idAttributes$attributeValues404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": ("not_found"|"value_not_found");
  "message": string;
};
export type IGetV2Objects$objectRecords$record_idEntriesQuery = {
  "limit"?: number;
  "offset"?: number;
};
export type IGetV2Objects$objectRecords$record_idEntries200Response = {
  "data": {
/**
 *  A UUID identifying the list that this record is in.
 */
  "list_id": string;
/**
 *  A human-readable slug for the list for use in URLs and responses.
 */
  "list_api_slug": string;
/**
 *  A UUID identifying this entry on the list.
 */
  "entry_id": string;
/**
 *  When this entry was created.
 */
  "created_at": string;
}[];
};
export type IPostV2ObjectsRecordsSearchDTO = {
/**
 *  Query string to search for. An empty string returns a default set of results.
 */
  "query": string;
/**
 *  The maximum number of results to return. Defaults to 25.
 */
  "limit"?: number;
/**
 *  Specifies which objects to filter results by. At least one object must be specified. Accepts object slugs or IDs.
 */
  "objects": string[];
/**
 *  Specifies the context in which to perform the search. Use 'workspace' to return all search results or specify a workspace member to limit results to what one specific person in your workspace can see.
 */
  "request_as": ({
  "type": "workspace";
}|{
  "type": "workspace-member";
  "workspace_member_id": string;
}|{
  "type": "workspace-member";
  "email_address": string;
});
};
export type IPostV2ObjectsRecordsSearch200Response = {
  "data": ({
  "id": {
    /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
    };
/**
 *  A human-readable label for the record. Present on records from all objects.
 */
  "record_text": string;
/**
 *  The image for the record.
 */
  "record_image": (string|null);
/**
 *  The slug of the object this record belongs to.
 */
  "object_slug": string;
}|{
  "id": {
    /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
    };
/**
 *  A human-readable label for the record. Present on records from all objects.
 */
  "record_text": string;
/**
 *  The image for the record.
 */
  "record_image": (string|null);
/**
 *  The slug of the object this record belongs to.
 */
  "object_slug": "people";
/**
 *  The person's email addresses.
 */
  "email_addresses": string[];
/**
 *  The person's phone numbers.
 */
  "phone_numbers": string[];
}|{
  "id": {
    /**
 *  A UUID identifying the workspace this record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this record belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this record.
 */
  "record_id": string;
    };
/**
 *  A human-readable label for the record. Present on records from all objects.
 */
  "record_text": string;
/**
 *  The image for the record.
 */
  "record_image": (string|null);
/**
 *  The slug of the object this record belongs to.
 */
  "object_slug": "companies";
/**
 *  The company's domains.
 */
  "domains": string[];
})[];
};
export type IPostV2ObjectsRecordsSearch400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "value_not_found";
  "message": string;
};
export type IPostV2Activities$activityRecordsQueryDTO = {
/**
 *  An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
 */
  "filter"?: {[k: string]: any};
/**
 *  An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
 */
  "sorts"?: ({
/**
 *  The direction to sort the results by.
 */
  "direction": ("asc"|"desc");
/**
 *  A slug or ID to identify the attribute to sort by.
 */
  "attribute": string;
/**
 *  Which field on the value to sort by e.g. "last_name" on a name value.
 */
  "field"?: string;
}|{
/**
 *  The direction to sort the results by.
 */
  "direction": ("asc"|"desc");
/**
 *  You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`.
 */
  "path": (string|string)[][];
/**
 *  Which field on the value to sort by e.g. "last_name" on a name value.
 */
  "field"?: string;
})[];
/**
 *  The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination).
 */
  "limit"?: number;
/**
 *  The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).
 */
  "offset"?: number;
};
export type IPostV2Activities$activityRecordsQuery200Response = {
  "data": {
  "id": {
    /**
 *  A UUID identifying the workspace this activity record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the activity this record belongs to.
 */
  "activity_id": string;
/**
 *  A UUID identifying this activity record.
 */
  "record_id": string;
    };
/**
 *  When this activity record was created.
 */
  "created_at": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
}[];
};
export type IPostV2Activities$activityRecordsQuery400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "filter_error";
  "message": string;
};
export type IPostV2Activities$activityRecordsQuery404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Activities$activityRecordsDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPostV2Activities$activityRecords200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this activity record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the activity this record belongs to.
 */
  "activity_id": string;
/**
 *  A UUID identifying this activity record.
 */
  "record_id": string;
        };
/**
 *  When this activity record was created.
 */
  "created_at": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPostV2Activities$activityRecords400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("value_not_found"|"particle_gate_violation"|"validation_type"|"duplicate_values"|"limit_reached"|"multiple_match_results");
  "message": string;
};
export type IPostV2Activities$activityRecords403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": ("unauthorized"|"billing_error");
  "message": string;
};
export type IPostV2Activities$activityRecords404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Activities$activityRecords409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IPutV2Activities$activityRecordsQuery = {
  "matching_attribute": string;
};
export type IPutV2Activities$activityRecordsDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPutV2Activities$activityRecords200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this activity record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the activity this record belongs to.
 */
  "activity_id": string;
/**
 *  A UUID identifying this activity record.
 */
  "record_id": string;
        };
/**
 *  When this activity record was created.
 */
  "created_at": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPutV2Activities$activityRecords400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("value_not_found"|"matching_attribute_definition_not_unique"|"multiple_match_results"|"particle_gate_violation"|"validation_type"|"duplicate_values"|"limit_reached");
  "message": string;
};
export type IPutV2Activities$activityRecords403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": ("unauthorized"|"billing_error");
  "message": string;
};
export type IPutV2Activities$activityRecords404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Activities$activityRecords409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IGetV2Activities$activityRecords$record_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this activity record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the activity this record belongs to.
 */
  "activity_id": string;
/**
 *  A UUID identifying this activity record.
 */
  "record_id": string;
        };
/**
 *  When this activity record was created.
 */
  "created_at": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IGetV2Activities$activityRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Activities$activityRecords$record_idDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPatchV2Activities$activityRecords$record_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this activity record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the activity this record belongs to.
 */
  "activity_id": string;
/**
 *  A UUID identifying this activity record.
 */
  "record_id": string;
        };
/**
 *  When this activity record was created.
 */
  "created_at": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPatchV2Activities$activityRecords$record_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("missing_value"|"particle_gate_violation"|"value_not_found"|"validation_type"|"duplicate_values"|"limit_reached"|"multiple_match_results");
  "message": string;
};
export type IPatchV2Activities$activityRecords$record_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2Activities$activityRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Activities$activityRecords$record_id409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IPutV2Activities$activityRecords$record_idDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "values": {[k: string]: any[]};
    };
};
export type IPutV2Activities$activityRecords$record_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this activity record belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the activity this record belongs to.
 */
  "activity_id": string;
/**
 *  A UUID identifying this activity record.
 */
  "record_id": string;
        };
/**
 *  When this activity record was created.
 */
  "created_at": string;
/**
 *  A record type with an attribute `api_slug` as the key, and an array of value objects as the values.
 */
  "values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPutV2Activities$activityRecords$record_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("missing_value"|"particle_gate_violation"|"value_not_found"|"validation_type"|"duplicate_values"|"limit_reached"|"multiple_match_results");
  "message": string;
};
export type IPutV2Activities$activityRecords$record_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPutV2Activities$activityRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Activities$activityRecords$record_id409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": ("concurrent_write_conflict"|"multiple_match_results"|"uniqueness_conflict");
  "message": string;
};
export type IDeleteV2Activities$activityRecords$record_id200Response = {[k: string]: any};
export type IDeleteV2Activities$activityRecords$record_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IDeleteV2Activities$activityRecords$record_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2SqlDTO = {
/**
 *  The SQL query to be executed.
 */
  "sql": string;
};
export type IPostV2Sql200Response = {
  "data": {
      "rows": {[k: string]: any}[];
    };
};
export type IPostV2Sql400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "filter_error";
  "message": string;
};
export type IGetV2Lists200Response = {
  "data": Shared.IList[];
};
export type IPostV2ListsDTO = {
  "data": {
    /**
 *  The human-readable name of the list.
 */
  "name": string;
/**
 *  A unique, human-readable slug to access the list through API calls. Should be formatted in snake case.
 */
  "api_slug": string;
/**
 *  A UUID or slug to identify the allowed object type for records added to this list.
 */
  "parent_object": string;
/**
 *  The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.
 */
  "workspace_access": ("full-access"|"read-and-write"|"read-only");
/**
 *  The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members.
 */
  "workspace_member_access": {
/**
 *  A UUID to identify the workspace member to grant access to.
 */
  "workspace_member_id": string;
/**
 *  The level of access to the list.
 */
  "level": ("full-access"|"read-and-write"|"read-only");
}[];
    };
};
export type IPostV2Lists200Response = {
  "data": Shared.IList;
};
export type IPostV2Lists400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "value_not_found";
  "message": string;
};
export type IPostV2Lists403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "billing_error";
  "message": string;
};
export type IPostV2Lists404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Lists409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "slug_conflict";
  "message": string;
};
export type IGetV2Lists$list200Response = {
  "data": Shared.IList;
};
export type IGetV2Lists$list404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Lists$listDTO = {
  "data": {
    /**
 *  The human-readable name of the list.
 */
  "name"?: string;
/**
 *  A unique, human-readable slug to access the list through API calls. Should be formatted in snake case.
 */
  "api_slug"?: string;
/**
 *  The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.
 */
  "workspace_access"?: ("full-access"|"read-and-write"|"read-only");
/**
 *  The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members.
 */
  "workspace_member_access"?: {
/**
 *  A UUID to identify the workspace member to grant access to.
 */
  "workspace_member_id": string;
/**
 *  The level of access to the list.
 */
  "level": ("full-access"|"read-and-write"|"read-only");
}[];
    };
};
export type IPatchV2Lists$list200Response = {
  "data": Shared.IList;
};
export type IPatchV2Lists$list400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "value_not_found";
  "message": string;
};
export type IPatchV2Lists$list404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Lists$listViewsQuery = {
  "show_archived"?: boolean;
  "limit"?: number;
  "cursor"?: string;
};
export type IGetV2Lists$listViews200Response = {
  "data": Shared.IListView[];
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IGetV2Lists$listViews404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Lists$listEntriesQueryDTO = {
/**
 *  An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
 */
  "filter"?: {[k: string]: any};
/**
 *  UUID of a saved view on this object or list. When set, results are filtered using that view's filter configuration. Cannot be used together with `filter`. Note: sorts, limits, and offsets are applied independently and are not taken from the view. All attributes are returned regardless of which attributes are visible in the view.
 */
  "filter_view_id"?: string;
/**
 *  An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
 */
  "sorts"?: ({
/**
 *  The direction to sort the results by.
 */
  "direction": ("asc"|"desc");
/**
 *  A slug or ID to identify the attribute to sort by.
 */
  "attribute": string;
/**
 *  Which field on the value to sort by e.g. "last_name" on a name value.
 */
  "field"?: string;
}|{
/**
 *  The direction to sort the results by.
 */
  "direction": ("asc"|"desc");
/**
 *  You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`.
 */
  "path": (string|string)[][];
/**
 *  Which field on the value to sort by e.g. "last_name" on a name value.
 */
  "field"?: string;
})[];
/**
 *  The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination).
 */
  "limit"?: number;
/**
 *  The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).
 */
  "offset"?: number;
};
export type IPostV2Lists$listEntriesQuery200Response = {
  "data": {
  "id": {
    /**
 *  A UUID identifying the workspace this entry belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the list this entry is in.
 */
  "list_id": string;
/**
 *  A UUID identifying this entry.
 */
  "entry_id": string;
    };
/**
 *  A UUID identifying the record that is parent of the list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the parent record belongs to.
 */
  "parent_object": string;
/**
 *  When this entry was created.
 */
  "created_at": string;
/**
 *  A list of attribute values for the list entry (not attribute values for its parent record).
 */
  "entry_values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
}[];
};
export type IPostV2Lists$listEntriesQuery404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Lists$listEntriesDTO = {
  "data": {
    /**
 *  A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the added parent record belongs to.
 */
  "parent_object": string;
/**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "entry_values": {[k: string]: any[]};
    };
};
export type IPostV2Lists$listEntries200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this entry belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the list this entry is in.
 */
  "list_id": string;
/**
 *  A UUID identifying this entry.
 */
  "entry_id": string;
        };
/**
 *  A UUID identifying the record that is parent of the list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the parent record belongs to.
 */
  "parent_object": string;
/**
 *  When this entry was created.
 */
  "created_at": string;
/**
 *  A list of attribute values for the list entry (not attribute values for its parent record).
 */
  "entry_values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPostV2Lists$listEntries400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("value_not_found"|"validation_type");
  "message": string;
};
export type IPostV2Lists$listEntries403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPostV2Lists$listEntries404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Lists$listEntriesDTO = {
  "data": {
    /**
 *  A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the added parent record belongs to.
 */
  "parent_object": string;
/**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "entry_values": {[k: string]: any[]};
    };
};
export type IPutV2Lists$listEntries200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this entry belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the list this entry is in.
 */
  "list_id": string;
/**
 *  A UUID identifying this entry.
 */
  "entry_id": string;
        };
/**
 *  A UUID identifying the record that is parent of the list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the parent record belongs to.
 */
  "parent_object": string;
/**
 *  When this entry was created.
 */
  "created_at": string;
/**
 *  A list of attribute values for the list entry (not attribute values for its parent record).
 */
  "entry_values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPutV2Lists$listEntries400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("multiple_match_results"|"merge_in_progress"|"validation_type");
  "message": string;
};
export type IPutV2Lists$listEntries403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPutV2Lists$listEntries404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Lists$listEntries$entry_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this entry belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the list this entry is in.
 */
  "list_id": string;
/**
 *  A UUID identifying this entry.
 */
  "entry_id": string;
        };
/**
 *  A UUID identifying the record that is parent of the list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the parent record belongs to.
 */
  "parent_object": string;
/**
 *  When this entry was created.
 */
  "created_at": string;
/**
 *  A list of attribute values for the list entry (not attribute values for its parent record).
 */
  "entry_values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IGetV2Lists$listEntries$entry_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Lists$listEntries$entry_idDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "entry_values": {[k: string]: any[]};
    };
};
export type IPatchV2Lists$listEntries$entry_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this entry belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the list this entry is in.
 */
  "list_id": string;
/**
 *  A UUID identifying this entry.
 */
  "entry_id": string;
        };
/**
 *  A UUID identifying the record that is parent of the list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the parent record belongs to.
 */
  "parent_object": string;
/**
 *  When this entry was created.
 */
  "created_at": string;
/**
 *  A list of attribute values for the list entry (not attribute values for its parent record).
 */
  "entry_values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPatchV2Lists$listEntries$entry_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("immutable_value"|"merge_in_progress"|"validation_type");
  "message": string;
};
export type IPatchV2Lists$listEntries$entry_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPatchV2Lists$listEntries$entry_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Lists$listEntries$entry_idDTO = {
  "data": {
    /**
 *  An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "entry_values": {[k: string]: any[]};
    };
};
export type IPutV2Lists$listEntries$entry_id200Response = {
  "data": {
      "id": {
        /**
 *  A UUID identifying the workspace this entry belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the list this entry is in.
 */
  "list_id": string;
/**
 *  A UUID identifying this entry.
 */
  "entry_id": string;
        };
/**
 *  A UUID identifying the record that is parent of the list entry.
 */
  "parent_record_id": string;
/**
 *  A UUID or slug identifying the object that the parent record belongs to.
 */
  "parent_object": string;
/**
 *  When this entry was created.
 */
  "created_at": string;
/**
 *  A list of attribute values for the list entry (not attribute values for its parent record).
 */
  "entry_values": {[k: string]: ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[]};
    };
};
export type IPutV2Lists$listEntries$entry_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("immutable_value"|"merge_in_progress"|"validation_type");
  "message": string;
};
export type IPutV2Lists$listEntries$entry_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPutV2Lists$listEntries$entry_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IDeleteV2Lists$listEntries$entry_id200Response = {[k: string]: any};
export type IDeleteV2Lists$listEntries$entry_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IDeleteV2Lists$listEntries$entry_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Lists$listEntries$entry_idAttributes$attributeValuesQuery = {
  "show_historic"?: boolean;
  "limit"?: number;
  "offset"?: number;
};
export type IGetV2Lists$listEntries$entry_idAttributes$attributeValues200Response = {
  "data": ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[];
};
export type IGetV2Lists$listEntries$entry_idAttributes$attributeValues404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Lists$listEntries$entry_idAttributes$attributeValuesDTO = {
  "data": {
    /**
 *  The complete value history to write, replacing any existing values. Values may be supplied in any order. Gaps between intervals are allowed. At least one value is required, and a maximum of 400 values may be written in one request.
 */
  "values": {
/**
 *  The value itself, in the same form accepted when updating a record or list entry. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
 */
  "value": ({[k: string]: any}|string|number|boolean);
/**
 *  An RFC 3339 timestamp for when this value became active. May not be in the future.
 */
  "active_from": string;
/**
 *  An RFC 3339 timestamp for when this value stopped being active, or `null` if it is still active. Must be after `active_from` and may not be in the future. This key is required: omitting it is almost always a mistake in a migration.
 */
  "active_until": (string|null);
}[];
/**
 *  Must be `true`. Acknowledges that this request replaces the attribute's entire value history, destroying every value it currently has, including values not present in this request.
 */
  "replace_history": true;
    };
};
export type IPutV2Lists$listEntries$entry_idAttributes$attributeValues200Response = {
  "data": ({
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of the referenced actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the referenced actor.
 */
  "referenced_actor_id": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "actor-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
/**
 *  The ISO4217 currency code representing the currency that the value is stored in.
 */
  "currency_code"?: ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
/**
 *  The attribute type of the value.
 */
  "attribute_type": "currency";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "original_email_address": string;
  "email_address": string;
  "email_domain": string;
  "email_root_domain": string;
  "email_local_specifier": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "email-address";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A slug identifying the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "record-reference";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The type of interaction e.g. calendar or email.
 */
  "interaction_type": ("activity"|"email"|"meeting"|"calendar-event");
/**
 *  When the interaction occurred.
 */
  "interacted_at": string;
/**
 *  The actor that created this value.
 */
  "owner_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "interaction";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_1": (string|null);
/**
 *  The second line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_2": (string|null);
/**
 *  The third line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_3": (string|null);
/**
 *  The fourth line of the address. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.
 */
  "line_4": (string|null);
/**
 *  The town, neighborhood or area the location is in.
 */
  "locality": (string|null);
/**
 *  The state, county, province or region that the location is in.
 */
  "region": (string|null);
/**
 *  The postcode or zip code for the location. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "postcode": (string|null);
/**
 *  The ISO 3166-1 alpha-2 country code for the country this location is in.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
/**
 *  The latitude of the location. Validated by the regular expression `/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "latitude": (string|null);
/**
 *  The longitude of the location. Validated by the regular expression `/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/`. Values are stored with up to 9 decimal places of precision. Note that this value is not currently represented in the UI but will be persisted and readable through API calls.}
 */
  "longitude": (string|null);
/**
 *  The attribute type of the value.
 */
  "attribute_type": "location";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The first name.
 */
  "first_name": string;
/**
 *  The last name.
 */
  "last_name": string;
/**
 *  The full name.
 */
  "full_name": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "personal-name";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code": ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
  "phone_number": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "phone-number";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "status": Shared.IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "rating";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
  "option": Shared.ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "text";
}|{
/**
 *  The point in time at which this value was made "active". `active_from` can be considered roughly analogous to `created_at`.
 */
  "active_from": string;
/**
 *  The point in time at which this value was deactivated. If `null`, the value is active.
 */
  "active_until": (string|null);
/**
 *  The actor that created this value.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
})[];
};
export type IPutV2Lists$listEntries$entry_idAttributes$attributeValues400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("validation_type"|"missing_value"|"value_not_found"|"duplicate_values"|"uniqueness_conflict"|"multiple_values_for_single_value_attribute"|"system_edit_unauthorized"|"formula_edit_unauthorized"|"particle_gate_violation");
  "message": string;
};
export type IPutV2Lists$listEntries$entry_idAttributes$attributeValues403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IPutV2Lists$listEntries$entry_idAttributes$attributeValues404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": ("not_found"|"value_not_found");
  "message": string;
};
export type IGetV2Workspace_members200Response = {
  "data": Shared.IWorkspaceMember[];
};
export type IGetV2Workspace_members$workspace_member_id200Response = {
  "data": Shared.IWorkspaceMember;
};
export type IGetV2Workspace_members$workspace_member_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2NotesQuery = {
  "limit"?: number;
  "offset"?: number;
  "parent_object"?: string;
  "parent_record_id"?: string;
};
export type IGetV2Notes200Response = {
  "data": Shared.INote[];
};
export type IGetV2Notes404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2NotesDTO = {
  "data": {
    /**
 *  The ID or slug of the parent object the note belongs to.
 */
  "parent_object": string;
/**
 *  The ID of the parent record the note belongs to.
 */
  "parent_record_id": string;
/**
 *  The note title. The title is plaintext only and has no formatting.
 */
  "title": string;
/**
 *  Specify the format for the note's content. Choose from:
 *  - `plaintext`: Standard text format where `\n` signifies a new line.
 *  - `markdown`: Enables rich text formatting using a subset of Markdown syntax:
 *    - **Headings**: Levels 1-3 (`#`, `##`, `###`).
 *    - **Lists**: Unordered (`-`, `*`, `+`) and ordered (`1.`, `2.`).
 *    - **Text styles**: Bold (`**bold**` or `__bold__`), italic (`*italic*` or `_italic_`), strikethrough (`~~strikethrough~~`), and highlight (`==highlighted==`).
 *    - **Links**: Standard Markdown links (`[link text](https://example.com)`).
 *    *Note: While the Attio interface supports image embeds, they cannot currently be added or retrieved via the API's markdown format.*
 */
  "format": ("plaintext"|"markdown");
/**
 *  The main content of the note, formatted according to the value provided in the `format` field. Use `\n` for line breaks in `plaintext`. For `markdown`, utilize the supported syntax elements to structure and style your note.
 */
  "content": string;
/**
 *  `created_at` will default to the current time. However, if you wish to backdate a note for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
 */
  "created_at"?: string;
/**
 *  An optional ID to associate this note with a meeting. If provided, the meeting must exist. Use `null` to explicitly set no meeting association.
 */
  "meeting_id"?: (string|null);
    };
};
export type IPostV2Notes200Response = {
  "data": Shared.INote;
};
export type IPostV2Notes404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2Notes413Response = {
  "status_code": 413;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IGetV2Notes$note_id200Response = {
  "data": Shared.INote;
};
export type IGetV2Notes$note_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Notes$note_idDTO = {
  "data": {
    /**
 *  The note title. The title is plaintext only and has no formatting.
 */
  "title"?: string;
/**
 *  Specify the format for the note's content. Choose from:
 *  - `plaintext`: Standard text format where `\n` signifies a new line.
 *  - `markdown`: Enables rich text formatting using a subset of Markdown syntax:
 *    - **Headings**: Levels 1-3 (`#`, `##`, `###`).
 *    - **Lists**: Unordered (`-`, `*`, `+`) and ordered (`1.`, `2.`).
 *    - **Text styles**: Bold (`**bold**` or `__bold__`), italic (`*italic*` or `_italic_`), strikethrough (`~~strikethrough~~`), and highlight (`==highlighted==`).
 *    - **Links**: Standard Markdown links (`[link text](https://example.com)`).
 *    *Note: While the Attio interface supports image embeds, they cannot currently be added or retrieved via the API's markdown format.*
 */
  "format"?: ("plaintext"|"markdown");
/**
 *  The main content of the note, formatted according to the value provided in the `format` field. Use `\n` for line breaks in `plaintext`. For `markdown`, utilize the supported syntax elements to structure and style your note.
 */
  "content"?: string;
    };
};
export type IPatchV2Notes$note_id200Response = {
  "data": Shared.INote;
};
export type IPatchV2Notes$note_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Notes$note_id413Response = {
  "status_code": 413;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IDeleteV2Notes$note_id200Response = {[k: string]: any};
export type IDeleteV2Notes$note_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2TasksQuery = {
  "limit"?: number;
  "offset"?: number;
  "sort"?: ("created_at:asc"|"created_at:desc"|"completed_at:asc"|"completed_at:desc");
  "linked_object"?: string;
  "linked_record_id"?: string;
  "assignee"?: (string|null);
  "is_completed"?: boolean;
};
export type IGetV2Tasks200Response = {
  "data": Shared.ITask[];
};
export type IPostV2TasksDTO = {
  "data": {
    /**
 *  The text content of the task, in the format specified by the `format` property. A max length of 2000 characters is enforced.
 */
  "content": string;
/**
 *  The format of the task content to be created. Rich text formatting, links and @references are not supported.
 */
  "format": "plaintext";
/**
 *  The deadline of the task, in ISO 8601 format.
 */
  "deadline_at": (string|null);
/**
 *  Whether the task has been completed.
 */
  "is_completed": boolean;
/**
 *  Records linked to the task. Records can be linked by domain (for companies), email address (for people), record ID (for all objects) or by a unique matching attribute (for all objects). Creating record links within task content text is not possible via the API at present.
 */
  "linked_records": (string[]|({
/**
 *  The ID or slug of the parent object the tasks refers to. This can reference both standard and custom objects.`
 */
  "target_object": string;
/**
 *  The ID of the parent record the task refers to.
 */
  "target_record_id": string;
}|{
/**
 *  A UUID or slug to identify the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. The matching attribute does not have to be unique, but a value that matches no record or more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record).
 */
  "[slug_or_id_of_matching_attribute]": ({
/**
 *  The full domain of the website.
 */
  "domain"?: string;
}|{
/**
 *  An email address string
 */
  "email_address"?: string;
}|{
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value"?: number;
}|{
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number"?: string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code"?: ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
}|{
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value"?: string;
})[];
})[]);
/**
 *  Workspace members assigned to this task.
 */
  "assignees": ({
/**
 *  The actor type of the task assignee. Only `workspace-member` actors can be assigned to tasks. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": "workspace-member";
/**
 *  The ID of the actor assigned to this task.
 */
  "referenced_actor_id": string;
}|{
/**
 *  Workspace member actors can be referenced by email address as well as actor ID.
 */
  "workspace_member_email_address": string;
})[];
    };
};
export type IPostV2Tasks200Response = {
  "data": Shared.ITask;
};
export type IPostV2Tasks400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("validation_type"|"limit_reached");
  "message": string;
};
export type IPostV2Tasks404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Tasks$task_id200Response = {
  "data": Shared.ITask;
};
export type IGetV2Tasks$task_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Tasks$task_idDTO = {
  "data": {
    /**
 *  The deadline of the task, in ISO 8601 format.
 */
  "deadline_at"?: (string|null);
/**
 *  Whether the task has been completed.
 */
  "is_completed"?: boolean;
/**
 *  Records linked to the task. Records can be linked by domain (for companies), email address (for people), record ID (for all objects) or by a unique matching attribute (for all objects). Creating record links within task content text is not possible via the API at present.
 */
  "linked_records"?: (string[]|({
/**
 *  The ID or slug of the parent object the tasks refers to. This can reference both standard and custom objects.`
 */
  "target_object": string;
/**
 *  The ID of the parent record the task refers to.
 */
  "target_record_id": string;
}|{
/**
 *  A UUID or slug to identify the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. The matching attribute does not have to be unique, but a value that matches no record or more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record).
 */
  "[slug_or_id_of_matching_attribute]": ({
/**
 *  The full domain of the website.
 */
  "domain"?: string;
}|{
/**
 *  An email address string
 */
  "email_address"?: string;
}|{
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value"?: number;
}|{
/**
 *  The raw, original phone number, as inputted.
 */
  "original_phone_number"?: string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
 */
  "country_code"?: ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
}|{
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value"?: string;
})[];
})[]);
/**
 *  Workspace members assigned to this task.
 */
  "assignees"?: ({
/**
 *  The actor type of the task assignee. Only `workspace-member` actors can be assigned to tasks. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": "workspace-member";
/**
 *  The ID of the actor assigned to this task.
 */
  "referenced_actor_id": string;
}|{
/**
 *  Workspace member actors can be referenced by email address as well as actor ID.
 */
  "workspace_member_email_address": string;
})[];
    };
};
export type IPatchV2Tasks$task_id200Response = {
  "data": Shared.ITask;
};
export type IPatchV2Tasks$task_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("validation_type"|"limit_reached");
  "message": string;
};
export type IPatchV2Tasks$task_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IDeleteV2Tasks$task_id200Response = {[k: string]: any};
export type IDeleteV2Tasks$task_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2ThreadsQuery = {
  "record_id"?: string;
  "object"?: string;
  "entry_id"?: string;
  "list"?: string;
  "limit"?: number;
  "offset"?: number;
};
export type IGetV2Threads200Response = {
  "data": Shared.IThread[];
};
export type IGetV2Threads$thread_idQuery = {
  "limit"?: number;
  "cursor"?: string;
  "created_after"?: (string|null);
};
export type IGetV2Threads$thread_id200Response = {
  "data": Shared.IThread;
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IGetV2Threads$thread_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPostV2CommentsDTO = {
  "data": ({
/**
 *  The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
  "format": "plaintext";
/**
 *  The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
 */
  "content": string;
/**
 *  The workspace member who wrote this comment. Note that other types of actors are not currently supported.
 */
  "author": {
      "type": "workspace-member";
  "id": string;
    };
/**
 *  `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
 */
  "created_at"?: string;
/**
 *  If responding to an existing thread, this would be the ID of that thread.
 */
  "thread_id": string;
}|{
/**
 *  The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
  "format": "plaintext";
/**
 *  The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
 */
  "content": string;
/**
 *  The workspace member who wrote this comment. Note that other types of actors are not currently supported.
 */
  "author": {
      "type": "workspace-member";
  "id": string;
    };
/**
 *  `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
 */
  "created_at"?: string;
  "record": {
    /**
 *  If creating a top-level comment on a record, this is the slug or ID of that object.
 */
  "object": string;
/**
 *  If creating a top-level comment on a record, this is the ID of that record.
 */
  "record_id": string;
    };
}|{
/**
 *  The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
 */
  "format": "plaintext";
/**
 *  The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
 */
  "content": string;
/**
 *  The workspace member who wrote this comment. Note that other types of actors are not currently supported.
 */
  "author": {
      "type": "workspace-member";
  "id": string;
    };
/**
 *  `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
 */
  "created_at"?: string;
  "entry": {
    /**
 *  If creating a top-level comment on a list entry, this is the slug or ID of that list.
 */
  "list": string;
/**
 *  If creating a top-level comment on a list entry, this is the ID of that entry.
 */
  "entry_id": string;
    };
});
};
export type IPostV2Comments200Response = {
  "data": Shared.IComment;
};
export type IPostV2Comments400Response = {
  "statusCode": 400;
  "type": "invalid_request_error";
  "code": "value_not_found";
  "message": string;
};
export type IGetV2Comments$comment_id200Response = {
  "data": Shared.IComment;
};
export type IGetV2Comments$comment_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IDeleteV2Comments$comment_id200Response = {[k: string]: any};
export type IDeleteV2Comments$comment_id403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": "unauthorized";
  "message": string;
};
export type IDeleteV2Comments$comment_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2EmailsQuery = {
  "limit"?: number;
  "cursor"?: string;
  "linked_object"?: string;
  "linked_record_ids"?: string;
  "participants"?: string;
  "domain"?: string;
  "sent_after"?: (string|null);
  "sent_before"?: (string|null);
  "exclude_automated_participants"?: boolean;
};
export type IGetV2Emails200Response = {
  "data": Shared.IEmail[];
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IPostV2SequencesUnsubscribed_emailsDTO = {
  "data": {
    /**
 *  The email addresses to add to the unsubscribe list. A maximum of 1000 email addresses can be provided per request. Email addresses are normalized before they are stored.
 */
  "email_addresses": string[];
    };
};
export type IPostV2SequencesUnsubscribed_emails200Response = {
  "data": {
/**
 *  The normalized email address on the unsubscribe list.
 */
  "email_address": string;
/**
 *  When the email address was added to the unsubscribe list.
 */
  "created_at": string;
}[];
};
export type IPostV2SequencesUnsubscribed_emails400Response = {
  "statusCode": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IGetV2MeetingsQuery = {
  "limit"?: number;
  "cursor"?: string;
  "linked_object"?: string;
  "linked_record_id"?: string;
  "participants"?: string;
  "sort"?: ("start_asc"|"start_desc");
  "ends_from"?: (string|null);
  "starts_before"?: (string|null);
  "timezone"?: string;
};
export type IGetV2Meetings200Response = {
  "data": Shared.IMeeting[];
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IPostV2MeetingsDTO = {
  "data": {
    /**
 *  The title of the meeting.
 */
  "title": string;
/**
 *  The description of the meeting.
 */
  "description": string;
/**
 *  When the meeting starts. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.
 */
  "start": ({
/**
 *  An ISO 8601 datetime indicating when a non-all day meeting starts.
 */
  "datetime": string;
/**
 *  The IANA timezone the meeting starts in. If a datetime value is provided without an offset, this timezone will be used to convert the datetime to UTC using the timezone offset. If a datetime value is provided with an offset, this timezone will not be used to apply any additional offset to the datetime. Invalid timezones will be treated as UTC.
 */
  "timezone"?: (string|null);
}|{
/**
 *  An ISO 8601 date indicating when an all day meeting starts.
 */
  "date": string;
});
/**
 *  When the meeting ends. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.
 */
  "end": ({
/**
 *  An ISO 8601 datetime indicating when a non-all day meeting ends. Note that this value is exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one hour meeting starting at 14:00 would end at 15:00, not 15:59:59.
 */
  "datetime": string;
/**
 *  The IANA timezone the meeting ends in. If a datetime value is provided without an offset, this timezone will be used to convert the datetime to UTC using the timezone offset. If a datetime value is provided with an offset, this timezone will not be used to apply any additional offset to the datetime. Invalid timezones will be treated as UTC.
 */
  "timezone"?: (string|null);
}|{
/**
 *  An ISO 8601 date indicating when an all day meeting ends. Note that dates are exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one day meeting on June 3rd would end on June 4th, not June 3rd.
 */
  "date": string;
});
/**
 *  Whether or not the meeting is an all day event. All day events may span multiple days. When true, start and end must use date format. When false, start and end must use datetime with timezone format.
 */
  "is_all_day": boolean;
  "participants": {
/**
 *  The email address of the participant. New person records and companies will automatically be created based upon the email address values provided. If omitted, a name must be provided instead.
 */
  "email_address"?: string;
/**
 *  Whether or not the participant is the organizer of the meeting.
 */
  "is_organizer": (boolean|"true"|"false");
/**
 *  The status of the individual meeting participant.
 */
  "status": ("accepted"|"tentative"|"declined"|"pending");
/**
 *  The name of the participant. Required when no email_address is provided. Participants without an email do not create person or company records.
 */
  "name"?: string;
}[];
/**
 *  A list of records to link to the meeting. Each record is specified by its object (slug or UUID) and record ID (UUID). Attio will automatically link the meeting participants' companies to the meeting; this behavior is asynchronous.
 */
  "linked_records"?: {
/**
 *  The slug or UUID of the object that the record being linked belongs to.
 */
  "object": string;
/**
 *  The UUID of the record being linked.
 */
  "record_id": string;
}[];
    };
};
export type IPostV2Meetings200Response = {
  "data": Shared.IMeeting;
};
export type IPostV2Meetings400Response = {
  "statusCode": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IGetV2Meetings$meeting_id200Response = {
  "data": Shared.IMeeting;
};
export type IGetV2Meetings$meeting_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Meetings$meeting_idDTO = {
  "data": {
      "linked_records": {
/**
 *  The slug or UUID of the object that the record being linked belongs to.
 */
  "object": string;
/**
 *  The UUID of the record being linked.
 */
  "record_id": string;
}[];
    };
};
export type IPatchV2Meetings$meeting_id200Response = {
  "data": Shared.IMeeting;
};
export type IPatchV2Meetings$meeting_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("value_not_found"|"validation_type");
  "message": string;
};
export type IPatchV2Meetings$meeting_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPutV2Meetings$meeting_idDTO = {
  "data": {
      "linked_records": {
/**
 *  The slug or UUID of the object that the record being linked belongs to.
 */
  "object": string;
/**
 *  The UUID of the record being linked.
 */
  "record_id": string;
}[];
    };
};
export type IPutV2Meetings$meeting_id200Response = {
  "data": Shared.IMeeting;
};
export type IPutV2Meetings$meeting_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": ("value_not_found"|"validation_type");
  "message": string;
};
export type IPutV2Meetings$meeting_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IDeleteV2Meetings$meeting_id200Response = {[k: string]: any};
export type IDeleteV2Meetings$meeting_id400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "system_edit_unauthorized";
  "message": string;
};
export type IDeleteV2Meetings$meeting_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Meetings$meeting_idCall_recordingsQuery = {
  "limit"?: number;
  "cursor"?: string;
};
export type IGetV2Meetings$meeting_idCall_recordings200Response = {
  "data": {
  "id": {
    /**
 *  The ID of the workspace this call recording belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the meeting associated with this call recording.
 */
  "meeting_id": string;
/**
 *  The call recording ID of the call recording.
 */
  "call_recording_id": string;
    };
/**
 *  The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`.
 */
  "status": ("processing"|"completed"|"failed");
/**
 *  A URL that links directly to the call recording in the Attio web application.
 */
  "web_url": string;
/**
 *  The actor that created this call recording.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  The timestamp of when the call recording was created.
 */
  "created_at": string;
}[];
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IPostV2Meetings$meeting_idCall_recordingsDTO = {
  "data": {
    /**
 *  A publicly accessible URL to a video file of the call recording. Attio will download the video from this URL asynchronously.
 *  This field is optional — a call recording can be created with only a `transcript` and no video.
 *  **Requirements:**
 *  - **Protocol:** The URL must use the `https` protocol.
 *  - **File type:** The file must be a `.mp4` file.
 *  - **File size:** The file must not exceed 1GB in size.
 *  - **Accessibility:** For the request to be accepted, the URL must be publicly accessible. Attio will make a `HEAD` request to the URL to verify its accessibility and retrieve file metadata. The response to this request must include a `Content-Length` header.
 */
  "video_url"?: string;
/**
 *  The call recording's transcript.
 *  This field is technically optional for backwards compatibility, but you should always provide it — a call recording created without a transcript will be missing summaries and other transcript-derived features. This field will become required in a future version of this endpoint.
 */
  "transcript"?: {
/**
 *  The spoken text for this segment of the transcript.
 */
  "speech": string;
/**
 *  The start time of this speech segment in seconds.
 */
  "start_time": number;
/**
 *  The end time of this speech segment in seconds.
 */
  "end_time": number;
  "speaker": {
    /**
 *  The name of the speaker.
 */
  "name": string;
/**
 *  The email address of the speaker.
 */
  "email_address"?: string;
    };
}[];
    };
};
export type IPostV2Meetings$meeting_idCall_recordings200Response = {
  "data": {
      "id": {
        /**
 *  The ID of the workspace this call recording belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the meeting associated with this call recording.
 */
  "meeting_id": string;
/**
 *  The call recording ID of the call recording.
 */
  "call_recording_id": string;
        };
/**
 *  The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`.
 */
  "status": ("processing"|"completed"|"failed");
/**
 *  A URL that links directly to the call recording in the Attio web application.
 */
  "web_url": string;
/**
 *  The actor that created this call recording.
 */
  "created_by_actor": {
        /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
        };
/**
 *  The timestamp of when the call recording was created.
 */
  "created_at": string;
    };
};
export type IPostV2Meetings$meeting_idCall_recordings400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IPostV2Meetings$meeting_idCall_recordings403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": ("billing_error"|"quota_exceeded");
  "message": string;
};
export type IPostV2Meetings$meeting_idCall_recordings404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Meetings$meeting_idCall_recordings$call_recording_id200Response = {
  "data": {
      "id": {
        /**
 *  The ID of the workspace this call recording belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the meeting associated with this call recording.
 */
  "meeting_id": string;
/**
 *  The call recording ID of the call recording.
 */
  "call_recording_id": string;
        };
/**
 *  The status of the call recording. When a call recording is first created, it will have a status of `PROCESSING`. Once the recording is ready, it will transition to `COMPLETED`. If the recording fails for any reason, the status will be `FAILED`.
 */
  "status": ("processing"|"completed"|"failed");
/**
 *  A URL that links directly to the call recording in the Attio web application.
 */
  "web_url": string;
/**
 *  The actor that created this call recording.
 */
  "created_by_actor": {
        /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
        };
/**
 *  The timestamp of when the call recording was created.
 */
  "created_at": string;
/**
 *  A short-lived URL for downloading the call recording's video. This is only available for call recordings captured by the Attio call recorder: it is always `null` for call recordings created through the API. The URL expires one hour after this response was generated. You can call this endpoint again to get a fresh URL.
 */
  "video_url": (string|null);
/**
 *  The transcript for this call recording, `null` if no transcript is available.
 */
  "transcript": {
        /**
 *  The transcript segments with speech, timing, and speaker information.
 */
  "segments": {
/**
 *  The spoken text for this segment of the transcript.
 */
  "speech": string;
/**
 *  The start time of this speech segment in seconds, measured from the start of the recording.
 */
  "start_time": number;
/**
 *  The end time of this speech segment in seconds, measured from the start of the recording.
 */
  "end_time": number;
/**
 *  The speaker of this transcript segment.
 */
  "speaker": {
    /**
 *  The name of the speaker.
 */
  "name": string;
    };
}[];
/**
 *  The raw transcript of the call recording.
 */
  "raw_transcript": string;
        };
    };
};
export type IGetV2Meetings$meeting_idCall_recordings$call_recording_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IDeleteV2Meetings$meeting_idCall_recordings$call_recording_id204Response = {[k: string]: any};
export type IDeleteV2Meetings$meeting_idCall_recordings$call_recording_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Meetings$meeting_idCall_recordings$call_recording_idTranscriptQuery = {
  "cursor"?: string;
};
export type IGetV2Meetings$meeting_idCall_recordings$call_recording_idTranscript200Response = {
  "data": {
      "id": {
        /**
 *  The ID of the workspace this transcript belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the meeting associated with this transcript.
 */
  "meeting_id": string;
/**
 *  The ID of the call recording this transcript belongs to.
 */
  "call_recording_id": string;
        };
/**
 *  The transcript segments with speech, timing, and speaker information.
 */
  "transcript": {
/**
 *  The spoken text for this segment of the transcript.
 */
  "speech": string;
/**
 *  The start time of this speech segment in seconds, measured from the start of the recording.
 */
  "start_time": number;
/**
 *  The end time of this speech segment in seconds, measured from the start of the recording.
 */
  "end_time": number;
/**
 *  The speaker of this transcript segment.
 */
  "speaker": {
    /**
 *  The name of the speaker.
 */
  "name": string;
    };
}[];
/**
 *  The raw transcript of the call recording.
 */
  "raw_transcript": string;
/**
 *  A URL that links directly to the call recording transcript in the Attio web application.
 */
  "web_url": string;
    };
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IGetV2FilesQuery = {
  "object": string;
  "record_id": string;
  "storage_provider"?: ("attio"|"dropbox"|"box"|"google-drive"|"microsoft-onedrive");
  "parent_folder_id"?: string;
  "limit"?: number;
  "cursor"?: string;
};
export type IGetV2Files200Response = {
  "data": (Shared.IFile|Shared.IFolder|Shared.IConnectedFile|Shared.IConnectedFolder)[];
  "pagination": {
      "next_cursor": (string|null);
    };
};
export type IPostV2FilesDTO = ({
/**
 *  The object slug or ID.
 */
  "object": string;
/**
 *  The ID of the record to create the file entry on.
 */
  "record_id": string;
/**
 *  Creates a native Attio folder entry.
 */
  "file_type": "folder";
/**
 *  The folder name.
 */
  "name": string;
/**
 *  Optional parent folder ID. Omit to create a top-level folder.
 */
  "parent_folder_id"?: string;
}|{
/**
 *  The object slug or ID.
 */
  "object": string;
/**
 *  The ID of the record to create the file entry on.
 */
  "record_id": string;
/**
 *  The external storage provider.
 */
  "storage_provider": ("dropbox"|"box"|"google-drive"|"microsoft-onedrive");
/**
 *  The ID of the file or folder in the external storage provider.
 */
  "external_provider_file_id": string;
/**
 *  Microsoft drive ID. Only used when `storage_provider` is `microsoft-onedrive`.
 */
  "microsoft_drive_id"?: (string|null);
/**
 *  Creates a connected folder entry.
 */
  "file_type": "connected-folder";
}|{
/**
 *  The object slug or ID.
 */
  "object": string;
/**
 *  The ID of the record to create the file entry on.
 */
  "record_id": string;
/**
 *  The external storage provider.
 */
  "storage_provider": ("dropbox"|"box"|"google-drive"|"microsoft-onedrive");
/**
 *  The ID of the file or folder in the external storage provider.
 */
  "external_provider_file_id": string;
/**
 *  Microsoft drive ID. Only used when `storage_provider` is `microsoft-onedrive`.
 */
  "microsoft_drive_id"?: (string|null);
/**
 *  Creates a connected file entry.
 */
  "file_type": "connected-file";
});
export type IPostV2Files200Response = {
  "data": (Shared.IFolder|Shared.IConnectedFile|Shared.IConnectedFolder);
};
export type IPostV2FilesUploadDTO = {
/**
 *  The file to upload.
 */
  "file": string;
/**
 *  The object slug or ID.
 */
  "object": string;
/**
 *  The ID of the record to upload the file to.
 */
  "record_id": string;
/**
 *  Optional parent folder ID. Omit to upload to the root folder.
 */
  "parent_folder_id"?: string;
};
export type IPostV2FilesUpload201Response = {
  "data": Shared.IFile;
};
export type IPostV2FilesUpload403Response = {
  "status_code": 403;
  "type": "auth_error";
  "code": ("billing_error"|"quota_exceeded");
  "message": string;
};
export type IGetV2Files$file_id200Response = {
  "data": (Shared.IFile|(Shared.IFolder&{
/**
 *  Whether the folder contains any child entries.
 */
  "has_children": boolean;
})|Shared.IConnectedFile|Shared.IConnectedFolder);
};
export type IGetV2Files$file_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IDeleteV2Files$file_id200Response = {[k: string]: any};
export type IDeleteV2Files$file_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Files$file_idDownload302Response = {[k: string]: any};
export type IGetV2WebhooksQuery = {
  "limit"?: number;
  "offset"?: number;
};
export type IGetV2Webhooks200Response = {
  "data": {
/**
 *  URL where the webhook events will be delivered to.
 */
  "target_url": string;
/**
 *  One or more events the webhook is subscribed to.
 *  Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
 */
  "subscriptions": {
/**
 *  Type of event the webhook is subscribed to.
 */
  "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
/**
 *  Filters to determine whether the webhook event should be sent. If null, the filter always passes.
 *  When filters are compared for uniqueness, key order and the order of operations are ignored.
 */
  "filter": ({
  "$or": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|{
  "$and": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|null);
}[];
  "id": {
    /**
 *  The ID of the workspace the webhook belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the webhook.
 */
  "webhook_id": string;
    };
/**
 *  The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.
 */
  "status": ("active"|"degraded"|"inactive");
/**
 *  When the webhook was created.
 */
  "created_at": string;
}[];
};
export type IPostV2WebhooksDTO = {
  "data": {
    /**
 *  URL where the webhook events will be delivered to.
 */
  "target_url": string;
/**
 *  One or more events the webhook is subscribed to.
 *  Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
 */
  "subscriptions": {
/**
 *  Type of event the webhook is subscribed to.
 */
  "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
/**
 *  Filters to determine whether the webhook event should be sent. If null, the filter always passes.
 *  When filters are compared for uniqueness, key order and the order of operations are ignored.
 */
  "filter": ({
  "$or": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|{
  "$and": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|null);
}[];
    };
};
export type IPostV2Webhooks200Response = {
  "data": {
    /**
 *  URL where the webhook events will be delivered to.
 */
  "target_url": string;
/**
 *  One or more events the webhook is subscribed to.
 *  Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
 */
  "subscriptions": {
/**
 *  Type of event the webhook is subscribed to.
 */
  "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
/**
 *  Filters to determine whether the webhook event should be sent. If null, the filter always passes.
 *  When filters are compared for uniqueness, key order and the order of operations are ignored.
 */
  "filter": ({
  "$or": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|{
  "$and": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|null);
}[];
  "id": {
        /**
 *  The ID of the workspace the webhook belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the webhook.
 */
  "webhook_id": string;
        };
/**
 *  The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.
 */
  "status": ("active"|"degraded"|"inactive");
/**
 *  When the webhook was created.
 */
  "created_at": string;
/**
 *  The key which is used to sign the webhook events. This is only shown when setting up the webhook initially.
 */
  "secret": string;
    };
};
export type IPostV2Webhooks400Response = {
  "status_code": 400;
  "type": "invalid_request_error";
  "code": "validation_type";
  "message": string;
};
export type IPostV2Webhooks409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "uniqueness_conflict";
  "message": string;
};
export type IGetV2Webhooks$webhook_id200Response = {
  "data": {
    /**
 *  URL where the webhook events will be delivered to.
 */
  "target_url": string;
/**
 *  One or more events the webhook is subscribed to.
 *  Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
 */
  "subscriptions": {
/**
 *  Type of event the webhook is subscribed to.
 */
  "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
/**
 *  Filters to determine whether the webhook event should be sent. If null, the filter always passes.
 *  When filters are compared for uniqueness, key order and the order of operations are ignored.
 */
  "filter": ({
  "$or": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|{
  "$and": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|null);
}[];
  "id": {
        /**
 *  The ID of the workspace the webhook belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the webhook.
 */
  "webhook_id": string;
        };
/**
 *  The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.
 */
  "status": ("active"|"degraded"|"inactive");
/**
 *  When the webhook was created.
 */
  "created_at": string;
    };
};
export type IGetV2Webhooks$webhook_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Webhooks$webhook_idDTO = {
  "data": {
    /**
 *  URL where the webhook events will be delivered to.
 */
  "target_url"?: string;
/**
 *  One or more events the webhook is subscribed to.
 *  Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
 */
  "subscriptions"?: {
/**
 *  Type of event the webhook is subscribed to.
 */
  "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
/**
 *  Filters to determine whether the webhook event should be sent. If null, the filter always passes.
 *  When filters are compared for uniqueness, key order and the order of operations are ignored.
 */
  "filter": ({
  "$or": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|{
  "$and": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|null);
}[];
    };
};
export type IPatchV2Webhooks$webhook_id200Response = {
  "data": {
    /**
 *  URL where the webhook events will be delivered to.
 */
  "target_url": string;
/**
 *  One or more events the webhook is subscribed to.
 *  Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
 */
  "subscriptions": {
/**
 *  Type of event the webhook is subscribed to.
 */
  "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
/**
 *  Filters to determine whether the webhook event should be sent. If null, the filter always passes.
 *  When filters are compared for uniqueness, key order and the order of operations are ignored.
 */
  "filter": ({
  "$or": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|{
  "$and": ({
  "field": string;
  "operator": "equals";
  "value": string;
}|{
  "field": string;
  "operator": "not_equals";
  "value": string;
})[];
}|null);
}[];
  "id": {
        /**
 *  The ID of the workspace the webhook belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the webhook.
 */
  "webhook_id": string;
        };
/**
 *  The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.
 */
  "status": ("active"|"degraded"|"inactive");
/**
 *  When the webhook was created.
 */
  "created_at": string;
    };
};
export type IPatchV2Webhooks$webhook_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IPatchV2Webhooks$webhook_id409Response = {
  "status_code": 409;
  "type": "invalid_request_error";
  "code": "uniqueness_conflict";
  "message": string;
};
export type IDeleteV2Webhooks$webhook_id200Response = {[k: string]: any};
export type IDeleteV2Webhooks$webhook_id404Response = {
  "status_code": 404;
  "type": "invalid_request_error";
  "code": "not_found";
  "message": string;
};
export type IGetV2Self200Response = ({
  "active": false;
}|{
/**
 *  Whether the token is currently active and usable.
 */
  "active": true;
/**
 *  A space-separated list of scopes associated with this token
 */
  "scope": string;
/**
 *  Identifies the client the token was issued to. For app access tokens this is the app ID. Workspace access tokens have no OAuth client, so this is the workspace access token ID.
 */
  "client_id": string;
/**
 *  The type of token, always Bearer.
 */
  "token_type": "Bearer";
/**
 *  The time at which this token will expire, if set, as a number of seconds since January 1 1970 UTC. Attio access tokens do not currently expire, so this is always null.
 */
  "exp": (number|null);
/**
 *  The time at which this token was issued, as a number of seconds since January 1 1970 UTC.
 */
  "iat": number;
/**
 *  Since Bearer tokens grant Workspace-level permissions, this property contains the workspace_id.
 */
  "sub": string;
/**
 *  The intended audience for this token, for Bearer tokens this is the same as the client_id.
 */
  "aud": string;
/**
 *  The issuer of the token. Always attio.com
 */
  "iss": "attio.com";
/**
 *  Whether the token acts for the whole workspace or for a single workspace member.
 */
  "token_level": ("workspace"|"user");
/**
 *  The ID of the workspace member who authorized this token initially. Almost every token has one, but it is omitted for the app access tokens that Attio created itself rather than on a member's behalf.
 */
  "authorized_by_workspace_member_id"?: string;
/**
 *  The ID of the workspace the token is scoped to.
 */
  "workspace_id": string;
/**
 *  The name of the workspace the token is scoped to.
 */
  "workspace_name": string;
/**
 *  The slug of the workspace the token is scoped to.
 */
  "workspace_slug": string;
/**
 *  The logo URL of the workspace the token is scoped to.
 */
  "workspace_logo_url": (string|null);
});
