// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code below this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================

/**
* Lists all system-defined and user-defined objects in your workspace.

Required scopes: `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List objects
 * **Tags**: [Objects]
 * **OperationId**:
 * **Response**:
    - **200**:
```typescript
      IGetV2Objects200Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read]

 */
export const GetV2Objects = "/v2/objects";
/**
* Creates a new custom object in your workspace.

Required scopes: `object_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create an object
 * **Tags**: [Objects]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case.
      "api_slug": string;
    // The singular form of the object's name.
      "singular_noun": string;
    // The plural form of the object's name.
      "plural_noun": string;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Objects200Response
```
    - **400**:
```typescript
      IPostV2Objects400Response
```
    - **403**:
```typescript
      IPostV2Objects403Response
```
    - **409**:
```typescript
      IPostV2Objects409Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read-write]

 */
export const PostV2Objects = "/v2/objects";
/**
* Gets a single object by its `object_id` or slug.

Required scopes: `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get an object
 * **Tags**: [Objects]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Objects$object200Response
```
    - **404**:
```typescript
      IGetV2Objects$object404Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read]

 */
export const GetV2Objects$object = (object:string)=> `/v2/objects/${object}`;
/**
* Updates a single object. The object to be updated is identified by its `object_id`.

Required scopes: `object_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update an object
 * **Tags**: [Objects]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case.
      "api_slug"?: string;
    // The singular form of the object's name.
      "singular_noun"?: string;
    // The plural form of the object's name.
      "plural_noun"?: string;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Objects$object200Response
```
    - **400**:
```typescript
      IPatchV2Objects$object400Response
```
    - **403**:
```typescript
      IPatchV2Objects$object403Response
```
    - **404**:
```typescript
      IPatchV2Objects$object404Response
```
    - **409**:
```typescript
      IPatchV2Objects$object409Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read-write]

 */
export const PatchV2Objects$object = (object:string)=> `/v2/objects/${object}`;
/**
* Deletes a single object by its `object_id` or slug, along with all of its records. Only custom objects can be deleted; system objects, such as people and companies, cannot.

This endpoint should be used with caution as it has the potential to remove a large amount of potentially valuable data.

Required scopes: `object_configuration:read-write`, `record_permission:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete an object
 * **Tags**: [Objects]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Objects$object200Response
```
    - **400**:
```typescript
      IDeleteV2Objects$object400Response
```
    - **403**:
```typescript
      IDeleteV2Objects$object403Response
```
    - **404**:
```typescript
      IDeleteV2Objects$object404Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read-write, record_permission:read-write]

 */
export const DeleteV2Objects$object = (object:string)=> `/v2/objects/${object}`;
/**
* Lists saved views for an object. Results are ordered by view ID (`id.view_id` ascending).

Required scopes: `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List views for object
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **Query**:
```typescript
    {
      "show_archived"?: boolean;
      "limit"?: number;
      "cursor"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Objects$objectViews200Response
```
    - **404**:
```typescript
      IGetV2Objects$objectViews404Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read]

 */
export const GetV2Objects$objectViews = (object:string)=> `/v2/objects/${object}/views`;
/**
* Creates a view of an object with a filter, sorts, shown attributes and kanban settings. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create an object view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The title of the view.
      "title": string;
    // How the view shows records.
      "type": ("table"|"kanban");
    // The filter of the view. Omitted or `null` to show all records.
      "filter"?: (Shared.IViewFilter|null);
    // The sorts, in order. Omitted for no sorts.
      "sorts"?: Shared.IViewSort[];
    // The attributes that the view shows, in display order. Omitted for no attributes, as a new view in the app has.
      "attributes"?: Shared.IViewAttribute[];
    // The settings of a kanban view. Required for kanban views and not allowed for table views.
      "kanban"?: {
            // The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry.
      "status_attribute": Shared.IViewAttributePath;
    // Whether the board shows a column for the records that have no status. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`.
      "show_no_status_column"?: boolean;
    // How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`.
      "attribute_label_display"?: ("icon"|"text");
    // The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`.
      "aggregation"?: (Shared.IViewKanbanAggregation|null);
            };
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Objects$objectViews200Response
```
    - **400**:
```typescript
      IPostV2Objects$objectViews400Response
```
    - **403**:
```typescript
      IPostV2Objects$objectViews403Response
```
    - **404**:
```typescript
      IPostV2Objects$objectViews404Response
```
 * **Security**:
    - **oauth2**: [view:read-write, object_configuration:read]

 */
export const PostV2Objects$objectViews = (object:string)=> `/v2/objects/${object}/views`;
/**
* Gets a view of an object with its filter, sorts, shown attributes and kanban settings. Attributes, objects, options, statuses and teams are referenced by ID; `metadata` has their titles and slugs.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get an object view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "view_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Objects$objectViews$view_id200Response
```
    - **404**:
```typescript
      IGetV2Objects$objectViews$view_id404Response
```
    - **422**:
```typescript
      IGetV2Objects$objectViews$view_id422Response
```
 * **Security**:
    - **oauth2**: [view:read, object_configuration:read]

 */
export const GetV2Objects$objectViews$view_id = (object:string,view_id:string)=> `/v2/objects/${object}/views/${view_id}`;
/**
* Deletes a view of an object, including an archived view. Records are not changed.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete an object view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "view_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Objects$objectViews$view_id200Response
```
    - **403**:
```typescript
      IDeleteV2Objects$objectViews$view_id403Response
```
    - **404**:
```typescript
      IDeleteV2Objects$objectViews$view_id404Response
```
 * **Security**:
    - **oauth2**: [view:read-write, object_configuration:read]

 */
export const DeleteV2Objects$objectViews$view_id = (object:string,view_id:string)=> `/v2/objects/${object}/views/${view_id}`;
/**
* Updates the title, type, filter, sorts, shown attributes or kanban settings of a view of an object. Each given field replaces that part of the view, and an omitted field stays as it is. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update an object view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "view_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The title of the view.
      "title"?: string;
    // How the view shows records. A change to `kanban` requires `kanban.status_attribute`. A change to `table` removes the kanban settings.
      "type"?: ("table"|"kanban");
    // The filter of the view, which replaces the current filter. `null` to show all records.
      "filter"?: (Shared.IViewFilter|null);
    // The sorts, in order, which replace the current sorts.
      "sorts"?: Shared.IViewSort[];
    // The attributes that the view shows, in display order, which replace the current attributes. A shown attribute with the same attribute and field keeps its column width and display settings, and its aggregation when it omits `aggregation`.
      "attributes"?: Shared.IViewAttribute[];
    // The kanban settings to change. A change of the type to kanban requires `status_attribute`. Not allowed for table views.
      "kanban"?: {
            // The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry.
      "status_attribute"?: Shared.IViewAttributePath;
    // Whether the board shows a column for the records that have no status. If omitted, the setting stays as it is.
      "show_no_status_column"?: boolean;
    // How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting stays as it is.
      "attribute_label_display"?: ("icon"|"text");
    // The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting stays as it is.
      "aggregation"?: (Shared.IViewKanbanAggregation|null);
            };
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Objects$objectViews$view_id200Response
```
    - **400**:
```typescript
      IPatchV2Objects$objectViews$view_id400Response
```
    - **403**:
```typescript
      IPatchV2Objects$objectViews$view_id403Response
```
    - **404**:
```typescript
      IPatchV2Objects$objectViews$view_id404Response
```
 * **Security**:
    - **oauth2**: [view:read-write, object_configuration:read]

 */
export const PatchV2Objects$objectViews$view_id = (object:string,view_id:string)=> `/v2/objects/${object}/views/${view_id}`;
/**
* Lists all system-defined and user-defined activities in your workspace.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List activities
 * **Tags**: [Activities]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "limit"?: number;
      "cursor"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Activities200Response
```
 * **Security**:
    - **oauth2**: [activity_configuration:read]

 */
export const GetV2Activities = "/v2/activities";
/**
* Creates a new custom activity in your workspace. Your workspace must have the custom activities billing feature enabled. Public apps may instead create activities with the integration activities billing feature.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create an activity
 * **Tags**: [Activities]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // A unique, human-readable slug to access the activity through URLs and API calls. Should be formatted in snake case.
      "api_slug": string;
    // The singular form of the activity's name.
      "singular_noun": string;
    // The plural form of the activity's name.
      "plural_noun": string;
    // The schema the new activity extends, which supplies its inherited attributes. One of `activities`, `interactions`, `calls` or `emails`.
      "extends": ("activities"|"interactions"|"calls"|"emails");
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Activities200Response
```
    - **403**:
```typescript
      IPostV2Activities403Response
```
    - **409**:
```typescript
      IPostV2Activities409Response
```
 * **Security**:
    - **oauth2**: [activity_configuration:read-write]

 */
export const PostV2Activities = "/v2/activities";
/**
* Gets a single activity by its `activity_id` or slug.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get an activity
 * **Tags**: [Activities]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Activities$activity200Response
```
    - **404**:
```typescript
      IGetV2Activities$activity404Response
```
 * **Security**:
    - **oauth2**: [activity_configuration:read]

 */
export const GetV2Activities$activity = (activity:string)=> `/v2/activities/${activity}`;
/**
* Updates a single activity by its `activity_id` or slug. The schema an activity extends is fixed after creation, so `extends` cannot be changed.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update an activity
 * **Tags**: [Activities]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // A unique, human-readable slug to access the activity through URLs and API calls. Should be formatted in snake case.
      "api_slug"?: string;
    // The singular form of the activity's name.
      "singular_noun"?: string;
    // The plural form of the activity's name.
      "plural_noun"?: string;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Activities$activity200Response
```
    - **400**:
```typescript
      IPatchV2Activities$activity400Response
```
    - **403**:
```typescript
      IPatchV2Activities$activity403Response
```
    - **404**:
```typescript
      IPatchV2Activities$activity404Response
```
    - **409**:
```typescript
      IPatchV2Activities$activity409Response
```
 * **Security**:
    - **oauth2**: [activity_configuration:read-write]

 */
export const PatchV2Activities$activity = (activity:string)=> `/v2/activities/${activity}`;
/**
* Deletes a single activity by its `activity_id` or slug, along with all of its records. Archived activities can also be deleted.

This endpoint should be used with caution as it has the potential to remove a large amount of potentially valuable data.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_configuration:read-write`, `activity_record:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete an activity
 * **Tags**: [Activities]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Activities$activity200Response
```
    - **400**:
```typescript
      IDeleteV2Activities$activity400Response
```
    - **403**:
```typescript
      IDeleteV2Activities$activity403Response
```
    - **404**:
```typescript
      IDeleteV2Activities$activity404Response
```
 * **Security**:
    - **oauth2**: [activity_configuration:read-write, activity_record:read-write]

 */
export const DeleteV2Activities$activity = (activity:string)=> `/v2/activities/${activity}`;
/**
* Lists all attributes defined on a specific object, list or activity. Attributes are returned in the order that they are sorted by in the UI.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`. When `target` is `activities`, the required scopes are `activity_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List attributes
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("objects"|"lists"|"activities");
      "identifier": string;
    }
```
 * **Query**:
```typescript
    {
      "limit"?: number;
      "offset"?: number;
      "show_archived"?: boolean;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2$target$identifierAttributes200Response
```
 * **Security**:
    - **oauth2**

 */
export const GetV2$target$identifierAttributes = (target:string,identifier:string)=> `/v2/${target}/${identifier}/attributes`;
/**
* Creates a new attribute on either an object, a list or an activity.

For record-reference attributes, you can optionally create a bidirectional relationship by providing a `relationship` object. This will create two entangled attributes: one on the specified object and a reverse attribute on the related object.

To create an attribute on an object, you must also have the `object_configuration:read-write` scope.

To create an attribute on a list, you must also have the `list_configuration:read-write` scope.

To create an attribute on an activity, you must also have the `activity_configuration:read-write` scope.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create an attribute
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("objects"|"lists"|"activities");
      "identifier": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The name of the attribute. The title will be visible across Attio's UI.
      "title": string;
    // A text description for the attribute.
      "description": (string|null);
    // A unique, human-readable slug to access the attribute through URLs and API calls. Formatted in snake case.
      "api_slug": string;
    // The type of the attribute. This value affects the possible `config` values.
      "type": ("text"|"number"|"checkbox"|"currency"|"date"|"timestamp"|"rating"|"status"|"select"|"record-reference"|"actor-reference"|"location"|"domain"|"email-address"|"phone-number");
    // When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`.
      "is_required": boolean;
    // Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data.
      "is_unique": boolean;
    // Whether or not this attribute can have multiple values. Multiselect is only available on some value types.
      "is_multiselect": boolean;
    // The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.
      "default_value"?: ({
      "type": "dynamic";
      "template": ("current-user"|string|string);
    }|{
      "type": "static";
      "template": Shared.IInputValue[];
    }|null);
    // Optional relationship configuration. When provided, creates a bidirectional relationship between two objects. Can only be used with attributes of type "record-reference". If `config.record_reference.allowed_objects` is also provided, it must contain only the relationship object.
      "relationship"?: {
            // The slug or UUID of the object to create the reverse relationship attribute on.
      "object": string;
    // The title for the reverse relationship attribute.
      "title": string;
    // The API slug for the reverse relationship attribute.
      "api_slug": string;
    // Whether the related attribute supports selecting multiple values. Combined with the parent attribute's `is_multiselect`, this determines the relationship type: both `false` = one-to-one, parent `true` + related `false` = many-to-one, parent `false` + related `true` = one-to-many, both `true` = many-to-many.
      "is_multiselect": boolean;
            };
      "config": {
            // Configuration available for attributes of type "currency".
      "currency"?: {
                // The ISO4217 code representing the currency that values for this attribute should be stored in.
      "default_currency_code": ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
    // How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
      "display_type": ("code"|"name"|"narrowSymbol"|"symbol");
                };
    // Configuration available for attributes of type "record-reference".
      "record_reference"?: {
                // A list of slugs or UUIDs to indicate which objects records are allowed to belong to. If `relationship` is also provided, this must contain only the relationship object.
      "allowed_objects": string[];
                };
            };
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2$target$identifierAttributes200Response
```
    - **400**:
```typescript
      IPostV2$target$identifierAttributes400Response
```
    - **403**:
```typescript
      IPostV2$target$identifierAttributes403Response
```
    - **404**:
```typescript
      IPostV2$target$identifierAttributes404Response
```
    - **409**:
```typescript
      IPostV2$target$identifierAttributes409Response
```
 * **Security**:
    - **oauth2**

 */
export const PostV2$target$identifierAttributes = (target:string,identifier:string)=> `/v2/${target}/${identifier}/attributes`;
/**
* Gets information about a single attribute on either an object, a list or an activity.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`. When `target` is `activities`, the required scopes are `activity_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get an attribute
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("objects"|"lists"|"activities");
      "identifier": string;
      "attribute": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2$target$identifierAttributes$attribute200Response
```
    - **404**:
```typescript
      IGetV2$target$identifierAttributes$attribute404Response
```
 * **Security**:
    - **oauth2**

 */
export const GetV2$target$identifierAttributes$attribute = (target:string,identifier:string,attribute:string)=> `/v2/${target}/${identifier}/attributes/${attribute}`;
/**
* Updates a single attribute on a given object, list or activity.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`. When `target` is `activities`, the required scopes are `activity_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update an attribute
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("objects"|"lists"|"activities");
      "identifier": string;
      "attribute": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The name of the attribute. The title will be visible across Attio's UI.
      "title"?: string;
    // A text description for the attribute.
      "description"?: (string|null);
    // A unique, human-readable slug to access the attribute through URLs and API calls. Formatted in snake case.
      "api_slug"?: string;
    // When `is_required` is `true`, new records/entries must have a value for this attribute. If `false`, values may be `null`. This value does not affect existing data and you do not need to backfill `null` values if changing `is_required` from `false` to `true`.
      "is_required"?: boolean;
    // Whether or not new values for this attribute must be unique. Uniqueness restrictions are only applied to new data and do not apply retroactively to previously created data.
      "is_unique"?: boolean;
    // The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute. Default values are not currently supported on people or company objects.
      "default_value"?: ({
      "type": "dynamic";
      "template": ("current-user"|string|string);
    }|{
      "type": "static";
      "template": Shared.IInputValue[];
    }|null);
    // Additional, type-dependent configuration for the attribute.
      "config"?: {
            // Configuration available for attributes of type "currency".
      "currency"?: {
                // The ISO4217 code representing the currency that values for this attribute should be stored in.
      "default_currency_code": ("ARS"|"AUD"|"BRL"|"BGN"|"CAD"|"CLP"|"CNY"|"COP"|"CZK"|"DKK"|"EGP"|"EUR"|"FJD"|"GHS"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"ILS"|"JPY"|"KES"|"KRW"|"MYR"|"MXN"|"NTD"|"NZD"|"NGN"|"NOK"|"OMR"|"XPF"|"PEN"|"PHP"|"PLN"|"GBP"|"QAR"|"RWF"|"SAR"|"SGD"|"ZAR"|"SEK"|"CHF"|"THB"|"TRY"|"AED"|"UYU"|"USD");
    // How the currency should be displayed across the app. "code" will display the ISO currency code e.g. "USD", "name" will display the localized currency name e.g. "British pound", "narrowSymbol" will display "$1" instead of "US$1" and "symbol" will display a localized currency symbol such as "$".
      "display_type": ("code"|"name"|"narrowSymbol"|"symbol");
                };
    // Configuration available for attributes of type "record-reference".
      "record_reference"?: {
                // A list of slugs or UUIDs to indicate which objects records are allowed to belong to. If `relationship` is also provided, this must contain only the relationship object.
      "allowed_objects": string[];
                };
            };
    // Whether the attribute has been archived or not. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
      "is_archived"?: boolean;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2$target$identifierAttributes$attribute200Response
```
    - **400**:
```typescript
      IPatchV2$target$identifierAttributes$attribute400Response
```
    - **403**:
```typescript
      IPatchV2$target$identifierAttributes$attribute403Response
```
    - **404**:
```typescript
      IPatchV2$target$identifierAttributes$attribute404Response
```
 * **Security**:
    - **oauth2**

 */
export const PatchV2$target$identifierAttributes$attribute = (target:string,identifier:string,attribute:string)=> `/v2/${target}/${identifier}/attributes/${attribute}`;
/**
* Lists all select options for a particular attribute on either an object, a list or an activity.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`. When `target` is `activities`, the required scopes are `activity_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List select options
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("objects"|"lists"|"activities");
      "identifier": string;
      "attribute": string;
    }
```
 * **Query**:
```typescript
    {
      "show_archived"?: boolean;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2$target$identifierAttributes$attributeOptions200Response
```
    - **404**:
```typescript
      IGetV2$target$identifierAttributes$attributeOptions404Response
```
 * **Security**:
    - **oauth2**

 */
export const GetV2$target$identifierAttributes$attributeOptions = (target:string,identifier:string,attribute:string)=> `/v2/${target}/${identifier}/attributes/${attribute}/options`;
/**
* Adds a select option to a select attribute on an object, a list or an activity.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`. When `target` is `activities`, the required scopes are `activity_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a select option
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("objects"|"lists"|"activities");
      "identifier": string;
      "attribute": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The Title of the select option
      "title": string;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2$target$identifierAttributes$attributeOptions200Response
```
    - **400**:
```typescript
      IPostV2$target$identifierAttributes$attributeOptions400Response
```
    - **403**:
```typescript
      IPostV2$target$identifierAttributes$attributeOptions403Response
```
    - **404**:
```typescript
      IPostV2$target$identifierAttributes$attributeOptions404Response
```
    - **409**:
```typescript
      IPostV2$target$identifierAttributes$attributeOptions409Response
```
 * **Security**:
    - **oauth2**

 */
export const PostV2$target$identifierAttributes$attributeOptions = (target:string,identifier:string,attribute:string)=> `/v2/${target}/${identifier}/attributes/${attribute}/options`;
/**
* Updates a select option on an attribute on either an object, a list or an activity.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`. When `target` is `activities`, the required scopes are `activity_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a select option
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("objects"|"lists"|"activities");
      "identifier": string;
      "attribute": string;
      "option": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The Title of the select option
      "title"?: string;
    // Whether or not to archive the select option. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
      "is_archived"?: boolean;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2$target$identifierAttributes$attributeOptions$option200Response
```
    - **400**:
```typescript
      IPatchV2$target$identifierAttributes$attributeOptions$option400Response
```
    - **403**:
```typescript
      IPatchV2$target$identifierAttributes$attributeOptions$option403Response
```
    - **404**:
```typescript
      IPatchV2$target$identifierAttributes$attributeOptions$option404Response
```
    - **409**:
```typescript
      IPatchV2$target$identifierAttributes$attributeOptions$option409Response
```
 * **Security**:
    - **oauth2**

 */
export const PatchV2$target$identifierAttributes$attributeOptions$option = (target:string,identifier:string,attribute:string,option:string)=> `/v2/${target}/${identifier}/attributes/${attribute}/options/${option}`;
/**
* Lists all statuses for a particular status attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read`. When `target` is `lists`, the required scopes are `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List statuses
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("lists"|"objects");
      "identifier": string;
      "attribute": string;
    }
```
 * **Query**:
```typescript
    {
      "show_archived"?: boolean;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2$target$identifierAttributes$attributeStatuses200Response
```
    - **404**:
```typescript
      IGetV2$target$identifierAttributes$attributeStatuses404Response
```
 * **Security**:
    - **oauth2**

 */
export const GetV2$target$identifierAttributes$attributeStatuses = (target:string,identifier:string,attribute:string)=> `/v2/${target}/${identifier}/attributes/${attribute}/statuses`;
/**
* Add a new status to a status attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a status
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("lists"|"objects");
      "identifier": string;
      "attribute": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The Title of the status
      "title": string;
    // Whether arriving at this status triggers a celebration effect
      "celebration_enabled"?: boolean;
    // Target time for a record to spend in given status expressed as a ISO-8601 duration string
      "target_time_in_status"?: (string|null);
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2$target$identifierAttributes$attributeStatuses200Response
```
    - **400**:
```typescript
      IPostV2$target$identifierAttributes$attributeStatuses400Response
```
    - **403**:
```typescript
      IPostV2$target$identifierAttributes$attributeStatuses403Response
```
    - **404**:
```typescript
      IPostV2$target$identifierAttributes$attributeStatuses404Response
```
    - **409**:
```typescript
      IPostV2$target$identifierAttributes$attributeStatuses409Response
```
 * **Security**:
    - **oauth2**

 */
export const PostV2$target$identifierAttributes$attributeStatuses = (target:string,identifier:string,attribute:string)=> `/v2/${target}/${identifier}/attributes/${attribute}/statuses`;
/**
* Update a status on an status attribute on either an object or a list.

When `target` is `objects`, the required scopes are `object_configuration:read-write`. When `target` is `lists`, the required scopes are `list_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a status
 * **Tags**: [Attributes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "target": ("lists"|"objects");
      "identifier": string;
      "attribute": string;
      "status": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The Title of the status
      "title"?: string;
    // Whether arriving at this status triggers a celebration effect
      "celebration_enabled"?: boolean;
    // Target time for a record to spend in given status expressed as a ISO-8601 duration string
      "target_time_in_status"?: (string|null);
    // Whether or not to archive the status. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
      "is_archived"?: boolean;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2$target$identifierAttributes$attributeStatuses$status200Response
```
    - **400**:
```typescript
      IPatchV2$target$identifierAttributes$attributeStatuses$status400Response
```
    - **403**:
```typescript
      IPatchV2$target$identifierAttributes$attributeStatuses$status403Response
```
    - **404**:
```typescript
      IPatchV2$target$identifierAttributes$attributeStatuses$status404Response
```
    - **409**:
```typescript
      IPatchV2$target$identifierAttributes$attributeStatuses$status409Response
```
 * **Security**:
    - **oauth2**

 */
export const PatchV2$target$identifierAttributes$attributeStatuses$status = (target:string,identifier:string,attribute:string,status:string)=> `/v2/${target}/${identifier}/attributes/${attribute}/statuses/${status}`;
/**
* Lists people, company or other records, with the option to filter and sort results.

Required scopes: `record_permission:read`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: List records
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **DTO**:
```typescript
    {
    // An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
      "filter"?: {[k: string]: any};
    // UUID of a saved view on this object or list. When set, results are filtered using that view's filter configuration. Cannot be used together with `filter`. Note: sorts, limits, and offsets are applied independently and are not taken from the view. All attributes are returned regardless of which attributes are visible in the view.
      "filter_view_id"?: string;
    // An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
      "sorts"?: ({
    // The direction to sort the results by.
      "direction": ("asc"|"desc");
    // A slug or ID to identify the attribute to sort by.
      "attribute": string;
    // Which field on the value to sort by e.g. "last_name" on a name value.
      "field"?: string;
    }|{
    // The direction to sort the results by.
      "direction": ("asc"|"desc");
    // You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`.
      "path": (string|string)[][];
    // Which field on the value to sort by e.g. "last_name" on a name value.
      "field"?: string;
    })[];
    // The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination).
      "limit"?: number;
    // The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Objects$objectRecordsQuery200Response
```
    - **400**:
```typescript
      IPostV2Objects$objectRecordsQuery400Response
```
    - **404**:
```typescript
      IPostV2Objects$objectRecordsQuery404Response
```
 * **Security**:
    - **oauth2**: [record_permission:read, object_configuration:read]

 */
export const PostV2Objects$objectRecordsQuery = (object:string)=> `/v2/objects/${object}/records/query`;
/**
* Creates a new person, company or other record. This endpoint will throw on conflicts of unique attributes. If you would prefer to update records on conflicts, please use the [Upsert record endpoint](/rest-api/endpoint-reference/records/upsert-a-record) instead.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a record
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Objects$objectRecords200Response
```
    - **400**:
```typescript
      IPostV2Objects$objectRecords400Response
```
    - **403**:
```typescript
      IPostV2Objects$objectRecords403Response
```
    - **404**:
```typescript
      IPostV2Objects$objectRecords404Response
```
    - **409**:
```typescript
      IPostV2Objects$objectRecords409Response
```
 * **Security**:
    - **oauth2**: [record_permission:read-write, object_configuration:read]

 */
export const PostV2Objects$objectRecords = (object:string)=> `/v2/objects/${object}/records`;
/**
* Use this endpoint to create or update people, companies and other records. A matching attribute is used to search for existing records. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. If you would like to avoid matching, please use the [Create record endpoint](/rest-api/endpoint-reference/records/create-a-record).

If the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Upsert a record
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **Query**:
```typescript
    {
      "matching_attribute": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Objects$objectRecords200Response
```
    - **400**:
```typescript
      IPutV2Objects$objectRecords400Response
```
    - **403**:
```typescript
      IPutV2Objects$objectRecords403Response
```
    - **404**:
```typescript
      IPutV2Objects$objectRecords404Response
```
    - **409**:
```typescript
      IPutV2Objects$objectRecords409Response
```
 * **Security**:
    - **oauth2**: [record_permission:read-write, object_configuration:read]

 */
export const PutV2Objects$objectRecords = (object:string)=> `/v2/objects/${object}/records`;
/**
* Gets a single person, company or other record by its `record_id`.

Required scopes: `record_permission:read`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a record
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "record_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Objects$objectRecords$record_id200Response
```
    - **404**:
```typescript
      IGetV2Objects$objectRecords$record_id404Response
```
 * **Security**:
    - **oauth2**: [record_permission:read, object_configuration:read]

 */
export const GetV2Objects$objectRecords$record_id = (object:string,record_id:string)=> `/v2/objects/${object}/records/${record_id}`;
/**
* Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a record (append multiselect values)
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "record_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Objects$objectRecords$record_id200Response
```
    - **400**:
```typescript
      IPatchV2Objects$objectRecords$record_id400Response
```
    - **403**:
```typescript
      IPatchV2Objects$objectRecords$record_id403Response
```
    - **404**:
```typescript
      IPatchV2Objects$objectRecords$record_id404Response
```
    - **409**:
```typescript
      IPatchV2Objects$objectRecords$record_id409Response
```
 * **Security**:
    - **oauth2**: [record_permission:read-write, object_configuration:read]

 */
export const PatchV2Objects$objectRecords$record_id = (object:string,record_id:string)=> `/v2/objects/${object}/records/${record_id}`;
/**
* Use this endpoint to update people, companies, and other records by `record_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to append multiselect values without removing those that already exist.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Update a record (overwrite multiselect values)
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "record_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Objects$objectRecords$record_id200Response
```
    - **400**:
```typescript
      IPutV2Objects$objectRecords$record_id400Response
```
    - **403**:
```typescript
      IPutV2Objects$objectRecords$record_id403Response
```
    - **404**:
```typescript
      IPutV2Objects$objectRecords$record_id404Response
```
    - **409**:
```typescript
      IPutV2Objects$objectRecords$record_id409Response
```
 * **Security**:
    - **oauth2**: [record_permission:read-write, object_configuration:read]

 */
export const PutV2Objects$objectRecords$record_id = (object:string,record_id:string)=> `/v2/objects/${object}/records/${record_id}`;
/**
* Deletes a single record (e.g. a company or person) by ID.

Required scopes: `object_configuration:read`, `record_permission:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a record
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "record_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Objects$objectRecords$record_id200Response
```
    - **403**:
```typescript
      IDeleteV2Objects$objectRecords$record_id403Response
```
    - **404**:
```typescript
      IDeleteV2Objects$objectRecords$record_id404Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read, record_permission:read-write]

 */
export const DeleteV2Objects$objectRecords$record_id = (object:string,record_id:string)=> `/v2/objects/${object}/records/${record_id}`;
/**
* Merges two records of the same object together. Where both records have a value for the same attribute, the primary record's value takes precedence.

Merging produces a **new** record, so the `new_record_id` returned will match neither of the records supplied in the request. Both of the original records are marked as merged and can no longer be read or written.

Large merges are completed asynchronously. A `200` response means the merged record is readable immediately. A `202` response means the merge has been accepted but is still being applied, and reading the merged record will return a `404` with the `merge_in_progress` error code until it completes.

This endpoint is not idempotent. Because both original records are marked as merged, repeating the same request returns `404`.

This endpoint is rate limited to 5 requests per second.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Merge two records
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The ID of the record to keep values from. Where both records have a value for the same attribute, the primary record's value takes precedence.
      "primary_record_id": string;
    // The ID of the record to merge into the primary record. Its values are only kept where the primary record has no value for that attribute.
      "secondary_record_id": string;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Objects$objectRecordsMerge200Response
```
    - **202**:
```typescript
      IPostV2Objects$objectRecordsMerge202Response
```
    - **400**:
```typescript
      IPostV2Objects$objectRecordsMerge400Response
```
    - **403**:
```typescript
      IPostV2Objects$objectRecordsMerge403Response
```
    - **404**:
```typescript
      IPostV2Objects$objectRecordsMerge404Response
```
 * **Security**:
    - **oauth2**: [record_permission:read-write, object_configuration:read]

 */
export const PostV2Objects$objectRecordsMerge = (object:string)=> `/v2/objects/${object}/records/merge`;
/**
* Gets all values for a given attribute on a record. Historic values can be queried using the `show_historic` query param. Historic values cannot be queried on COMINT (Communication Intelligence) or enriched attributes and the endpoint will return a 400 error if this is attempted. Historic values are sorted from oldest to newest (by `active_from`). Some attributes are subject to billing status and will return an empty array of values if theworkspace being queried does not have the required billing flag enabled.

Required scopes: `record_permission:read`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List record attribute values
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "record_id": string;
      "attribute": string;
    }
```
 * **Query**:
```typescript
    {
      "show_historic"?: boolean;
      "limit"?: number;
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Objects$objectRecords$record_idAttributes$attributeValues200Response
```
    - **400**:
```typescript
      IGetV2Objects$objectRecords$record_idAttributes$attributeValues400Response
```
    - **404**:
```typescript
      IGetV2Objects$objectRecords$record_idAttributes$attributeValues404Response
```
 * **Security**:
    - **oauth2**: [record_permission:read, object_configuration:read]

 */
export const GetV2Objects$objectRecords$record_idAttributes$attributeValues = (object:string,record_id:string,attribute:string)=> `/v2/objects/${object}/records/${record_id}/attributes/${attribute}/values`;
/**
* Replaces the entire value history of a single attribute on a record, primarily to migrate historic data from an external source. Every value the attribute currently has is destroyed, including values not present in the request, and the supplied values are written with the `active_from` and `active_until` timestamps given.

Values may be supplied in any order and gaps between intervals are allowed. For attributes that accept a single value, at most one value may be active at a time, so intervals may not overlap and at most one may have a `null` `active_until`. At least one value is required.

Webhooks and workflow triggers do not fire for these writes, so migrating history does not replay automations. Search indexes and caches are still updated, and formula attributes that depend on this attribute are still recalculated.

Value history cannot be written for relationship attributes, formula attributes, enriched attributes, or immutable system attributes such as the entry's parent record.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `record_permission:read-write`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Write record attribute values
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "record_id": string;
      "attribute": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The complete value history to write, replacing any existing values. Values may be supplied in any order. Gaps between intervals are allowed. At least one value is required, and a maximum of 400 values may be written in one request.
      "values": {
    // The value itself, in the same form accepted when updating a record or list entry. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "value": ({[k: string]: any}|string|number|boolean);
    // An RFC 3339 timestamp for when this value became active. May not be in the future.
      "active_from": string;
    // An RFC 3339 timestamp for when this value stopped being active, or `null` if it is still active. Must be after `active_from` and may not be in the future. This key is required: omitting it is almost always a mistake in a migration.
      "active_until": (string|null);
    }[];
    // Must be `true`. Acknowledges that this request replaces the attribute's entire value history, destroying every value it currently has, including values not present in this request.
      "replace_history": true;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Objects$objectRecords$record_idAttributes$attributeValues200Response
```
    - **400**:
```typescript
      IPutV2Objects$objectRecords$record_idAttributes$attributeValues400Response
```
    - **403**:
```typescript
      IPutV2Objects$objectRecords$record_idAttributes$attributeValues403Response
```
    - **404**:
```typescript
      IPutV2Objects$objectRecords$record_idAttributes$attributeValues404Response
```
 * **Security**:
    - **oauth2**: [record_permission:read-write, object_configuration:read]

 */
export const PutV2Objects$objectRecords$record_idAttributes$attributeValues = (object:string,record_id:string,attribute:string)=> `/v2/objects/${object}/records/${record_id}/attributes/${attribute}/values`;
/**
* List all entries, across all lists, for which this record is the parent. The response includes metadata for each entry, including `entry_id`, `list_id`, and `created_at`, but does not include entry values. To retrieve the values, call [Get a list entry](/rest-api/endpoint-reference/entries/get-a-list-entry) separately for each entry.

Required scopes: `record_permission:read`, `object_configuration:read`, `list_entry:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List record entries
 * **Tags**: [Records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "object": string;
      "record_id": string;
    }
```
 * **Query**:
```typescript
    {
      "limit"?: number;
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Objects$objectRecords$record_idEntries200Response
```
 * **Security**:
    - **oauth2**: [record_permission:read, object_configuration:read, list_entry:read]

 */
export const GetV2Objects$objectRecords$record_idEntries = (object:string,record_id:string)=> `/v2/objects/${object}/records/${record_id}/entries`;
/**
* The search records endpoint provides a convenient way to fuzzy search for records across one or more objects.
The matching strategy employed in this endpoint follows the in-product strategy and will match names, domains, emails, phone numbers and social handles on people and companies, and labels on all other objects.
Please note, results returned from this endpoint are eventually consistent. For results which are guaranteed to be up to date, please use the record query endpoint instead.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `record_permission:read`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Search records
 * **Tags**: [Records]
 * **OperationId**:
 * **DTO**:
```typescript
    {
    // Query string to search for. An empty string returns a default set of results.
      "query": string;
    // The maximum number of results to return. Defaults to 25.
      "limit"?: number;
    // Specifies which objects to filter results by. At least one object must be specified. Accepts object slugs or IDs.
      "objects": string[];
    // Specifies the context in which to perform the search. Use 'workspace' to return all search results or specify a workspace member to limit results to what one specific person in your workspace can see.
      "request_as": ({
      "type": "workspace";
    }|{
      "type": "workspace-member";
      "workspace_member_id": string;
    }|{
      "type": "workspace-member";
      "email_address": string;
    });
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2ObjectsRecordsSearch200Response
```
    - **400**:
```typescript
      IPostV2ObjectsRecordsSearch400Response
```
 * **Security**:
    - **oauth2**: [record_permission:read, object_configuration:read]

 */
export const PostV2ObjectsRecordsSearch = "/v2/objects/records/search";
/**
* Lists activity records, with the option to filter and sort results.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_record:read`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: List activity records
 * **Tags**: [Activity records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
    }
```
 * **DTO**:
```typescript
    {
    // An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
      "filter"?: {[k: string]: any};
    // An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
      "sorts"?: ({
    // The direction to sort the results by.
      "direction": ("asc"|"desc");
    // A slug or ID to identify the attribute to sort by.
      "attribute": string;
    // Which field on the value to sort by e.g. "last_name" on a name value.
      "field"?: string;
    }|{
    // The direction to sort the results by.
      "direction": ("asc"|"desc");
    // You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`.
      "path": (string|string)[][];
    // Which field on the value to sort by e.g. "last_name" on a name value.
      "field"?: string;
    })[];
    // The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination).
      "limit"?: number;
    // The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Activities$activityRecordsQuery200Response
```
    - **400**:
```typescript
      IPostV2Activities$activityRecordsQuery400Response
```
    - **404**:
```typescript
      IPostV2Activities$activityRecordsQuery404Response
```
 * **Security**:
    - **oauth2**: [activity_record:read, activity_configuration:read, object_configuration:read, record_permission:read]

 */
export const PostV2Activities$activityRecordsQuery = (activity:string)=> `/v2/activities/${activity}/records/query`;
/**
* Creates a new activity record, for example one specific phone call.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create an activity record
 * **Tags**: [Activity records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Activities$activityRecords200Response
```
    - **400**:
```typescript
      IPostV2Activities$activityRecords400Response
```
    - **403**:
```typescript
      IPostV2Activities$activityRecords403Response
```
    - **404**:
```typescript
      IPostV2Activities$activityRecords404Response
```
    - **409**:
```typescript
      IPostV2Activities$activityRecords409Response
```
 * **Security**:
    - **oauth2**: [activity_record:read-write, activity_configuration:read, object_configuration:read, record_permission:read]

 */
export const PostV2Activities$activityRecords = (activity:string)=> `/v2/activities/${activity}/records`;
/**
* Use this endpoint to create or update an activity record. A matching attribute is used to search for existing activity records. If a record is found with the same value for the matching attribute, that record will be updated. If no record with the same value for the matching attribute is found, a new record will be created instead. If you would like to avoid matching, please use the [Create activity record endpoint](/rest-api/endpoint-reference/activity-records/create-an-activity-record).

If the matching attribute is a multiselect attribute, new values will be added and existing values will not be deleted. For any other multiselect attribute, all values will be either created or deleted as necessary to match the list of supplied values.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Upsert an activity record
 * **Tags**: [Activity records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
    }
```
 * **Query**:
```typescript
    {
      "matching_attribute": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Activities$activityRecords200Response
```
    - **400**:
```typescript
      IPutV2Activities$activityRecords400Response
```
    - **403**:
```typescript
      IPutV2Activities$activityRecords403Response
```
    - **404**:
```typescript
      IPutV2Activities$activityRecords404Response
```
    - **409**:
```typescript
      IPutV2Activities$activityRecords409Response
```
 * **Security**:
    - **oauth2**: [activity_record:read-write, activity_configuration:read, object_configuration:read, record_permission:read]

 */
export const PutV2Activities$activityRecords = (activity:string)=> `/v2/activities/${activity}/records`;
/**
* Gets a single activity record by its `record_id`.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_record:read`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get an activity record
 * **Tags**: [Activity records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
      "record_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Activities$activityRecords$record_id200Response
```
    - **404**:
```typescript
      IGetV2Activities$activityRecords$record_id404Response
```
 * **Security**:
    - **oauth2**: [activity_record:read, activity_configuration:read, object_configuration:read, record_permission:read]

 */
export const GetV2Activities$activityRecords$record_id = (activity:string,record_id:string)=> `/v2/activities/${activity}/records/${record_id}`;
/**
* Use this endpoint to update activity records by `record_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update an activity record (append multiselect values)
 * **Tags**: [Activity records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
      "record_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Activities$activityRecords$record_id200Response
```
    - **400**:
```typescript
      IPatchV2Activities$activityRecords$record_id400Response
```
    - **403**:
```typescript
      IPatchV2Activities$activityRecords$record_id403Response
```
    - **404**:
```typescript
      IPatchV2Activities$activityRecords$record_id404Response
```
    - **409**:
```typescript
      IPatchV2Activities$activityRecords$record_id409Response
```
 * **Security**:
    - **oauth2**: [activity_record:read-write, activity_configuration:read, object_configuration:read, record_permission:read]

 */
export const PatchV2Activities$activityRecords$record_id = (activity:string,record_id:string)=> `/v2/activities/${activity}/records/${record_id}`;
/**
* Use this endpoint to update activity records by `record_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to append multiselect values without removing those that already exist.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Update an activity record (overwrite multiselect values)
 * **Tags**: [Activity records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
      "record_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Activities$activityRecords$record_id200Response
```
    - **400**:
```typescript
      IPutV2Activities$activityRecords$record_id400Response
```
    - **403**:
```typescript
      IPutV2Activities$activityRecords$record_id403Response
```
    - **404**:
```typescript
      IPutV2Activities$activityRecords$record_id404Response
```
    - **409**:
```typescript
      IPutV2Activities$activityRecords$record_id409Response
```
 * **Security**:
    - **oauth2**: [activity_record:read-write, activity_configuration:read, object_configuration:read, record_permission:read]

 */
export const PutV2Activities$activityRecords$record_id = (activity:string,record_id:string)=> `/v2/activities/${activity}/records/${record_id}`;
/**
* Deletes a single activity record by its `record_id`.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `activity_record:read-write`, `activity_configuration:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete an activity record
 * **Tags**: [Activity records]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "activity": string;
      "record_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Activities$activityRecords$record_id200Response
```
    - **403**:
```typescript
      IDeleteV2Activities$activityRecords$record_id403Response
```
    - **404**:
```typescript
      IDeleteV2Activities$activityRecords$record_id404Response
```
 * **Security**:
    - **oauth2**: [activity_record:read-write, activity_configuration:read, object_configuration:read, record_permission:read]

 */
export const DeleteV2Activities$activityRecords$record_id = (activity:string,record_id:string)=> `/v2/activities/${activity}/records/${record_id}`;
/**
* Query records and lists with SQL. Your workspace must be on the Enterprise plan in order to access this endpoint.

This endpoint is rate limited to 2 requests per second.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `record_permission:read`, `object_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Query SQL
 * **Tags**: [SQL]
 * **OperationId**:
 * **DTO**:
```typescript
    {
    // The SQL query to be executed. Use `$name` placeholders to reference values from `parameters` instead of inlining them into the query.
      "sql": string;
    // Named parameters referenced in the query using `$name` syntax. A maximum of 25 parameters can be provided. Each parameter must declare its type explicitly. Names must start with a letter or underscore, only contain letters, digits and underscores, and be at most 64 characters long. Compare against a list parameter with `= ANY($name)`, not `IN ($name)`, which does not type check. Read a field of a struct parameter with `get_field($name, 'field')`.
      "parameters"?: {[k: string]: ({
    // The type of the parameter.
      "type": "null";
    }|{
    // The type of the parameter.
      "type": "boolean";
      "value": boolean;
    }|{
    // The type of the parameter.
      "type": "integer";
    // An integer between -(2^53 - 1) and 2^53 - 1.
      "value": number;
    }|{
    // The type of the parameter.
      "type": "double";
      "value": number;
    }|{
    // The type of the parameter.
      "type": "string";
      "value": string;
    }|{
    // The type of the parameter.
      "type": "timestamp";
    // An ISO 8601 timestamp with a time zone, either `Z` or an offset such as `+02:00` or `+0200`, e.g. `2023-01-01T15:00:00.123456Z`. Seconds and fractional seconds are optional. Truncated to microseconds.
      "value": string;
    }|{
    // The type of the parameter.
      "type": "date";
    // A calendar date in the format YYYY-MM-DD.
      "value": string;
    }|{
    // The type of the parameter.
      "type": "decimal";
    // A decimal number in plain notation, with at most 29 digits before and 9 digits after the decimal point.
      "value": string;
    }|{
    // The type of the parameter.
      "type": "list";
    // The type of every item in the list.
      "item_type": ("boolean"|"integer"|"double"|"string"|"timestamp"|"date"|"decimal");
    // The items of the list, each a valid value for `item_type`. A maximum of 100 items can be provided.
      "value": any[];
    }|{
    // The type of the parameter.
      "type": "struct";
    // A map of field names to parameter objects, with at least one and a maximum of 25 fields. Names must start with a letter or underscore, only contain letters, digits and underscores, and be at most 64 characters long. Structs can contain other structs, up to 2 levels of structs in total.
      "value": {[k: string]: {[k: string]: any}};
    })};
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Sql200Response
```
    - **400**:
```typescript
      IPostV2Sql400Response
```
 * **Security**:
    - **oauth2**: [record_permission:read, object_configuration:read]

 */
export const PostV2Sql = "/v2/sql";
/**
* List all lists that your access token has access to. lists are returned in the order that they are sorted in the sidebar.

Required scopes: `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List all lists
 * **Tags**: [Lists]
 * **OperationId**:
 * **Response**:
    - **200**:
```typescript
      IGetV2Lists200Response
```
 * **Security**:
    - **oauth2**: [list_configuration:read]

 */
export const GetV2Lists = "/v2/lists";
/**
* Creates a new list.

Once you have your list, add attributes to it using the [Create attribute](/rest-api/endpoint-reference/attributes/create-an-attribute) API, and add records to it using the [Add records to list](/rest-api/endpoint-reference/entries/create-an-entry-add-record-to-list) API.

New lists must specify which records can be added with the `parent_object` parameter which accepts either an object slug or an object ID. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters.

Please note that new lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member-level access for lists.

Required scopes: `list_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a list
 * **Tags**: [Lists]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // The human-readable name of the list.
      "name": string;
    // A unique, human-readable slug to access the list through API calls. Should be formatted in snake case.
      "api_slug": string;
    // A UUID or slug to identify the allowed object type for records added to this list.
      "parent_object": string;
    // The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.
      "workspace_access": ("full-access"|"read-and-write"|"read-only");
    // The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members.
      "workspace_member_access": {
    // A UUID to identify the workspace member to grant access to.
      "workspace_member_id": string;
    // The level of access to the list.
      "level": ("full-access"|"read-and-write"|"read-only");
    }[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Lists200Response
```
    - **400**:
```typescript
      IPostV2Lists400Response
```
    - **403**:
```typescript
      IPostV2Lists403Response
```
    - **404**:
```typescript
      IPostV2Lists404Response
```
    - **409**:
```typescript
      IPostV2Lists409Response
```
 * **Security**:
    - **oauth2**: [list_configuration:read-write]

 */
export const PostV2Lists = "/v2/lists";
/**
* Gets a single list in your workspace that your access token has access to.

Required scopes: `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a list
 * **Tags**: [Lists]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Lists$list200Response
```
    - **404**:
```typescript
      IGetV2Lists$list404Response
```
 * **Security**:
    - **oauth2**: [list_configuration:read]

 */
export const GetV2Lists$list = (list:string)=> `/v2/lists/${list}`;
/**
* Updates an existing list. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters. Please note that lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member level access for lists. Changing the parent object of a list is not possible through the API as it can have unintended side-effects that should be considered carefully. If you wish to carry out a parent object change you should do so through the UI.

Required scopes: `list_configuration:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a list
 * **Tags**: [Lists]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The human-readable name of the list.
      "name"?: string;
    // A unique, human-readable slug to access the list through API calls. Should be formatted in snake case.
      "api_slug"?: string;
    // The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.
      "workspace_access"?: ("full-access"|"read-and-write"|"read-only");
    // The level of access granted to specific workspace members for this list. Pass an empty array to grant access to no workspace members.
      "workspace_member_access"?: {
    // A UUID to identify the workspace member to grant access to.
      "workspace_member_id": string;
    // The level of access to the list.
      "level": ("full-access"|"read-and-write"|"read-only");
    }[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Lists$list200Response
```
    - **400**:
```typescript
      IPatchV2Lists$list400Response
```
    - **404**:
```typescript
      IPatchV2Lists$list404Response
```
 * **Security**:
    - **oauth2**: [list_configuration:read-write]

 */
export const PatchV2Lists$list = (list:string)=> `/v2/lists/${list}`;
/**
* Lists saved views for a list. Results are ordered by view ID (`id.view_id` ascending).

Required scopes: `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List views for list
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
    }
```
 * **Query**:
```typescript
    {
      "show_archived"?: boolean;
      "limit"?: number;
      "cursor"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Lists$listViews200Response
```
    - **404**:
```typescript
      IGetV2Lists$listViews404Response
```
 * **Security**:
    - **oauth2**: [list_configuration:read]

 */
export const GetV2Lists$listViews = (list:string)=> `/v2/lists/${list}/views`;
/**
* Creates a view of a list with a filter, sorts, shown attributes and kanban settings. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a list view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The title of the view.
      "title": string;
    // How the view shows records.
      "type": ("table"|"kanban");
    // The filter of the view. Omitted or `null` to show all records.
      "filter"?: (Shared.IViewFilter|null);
    // The sorts, in order. Omitted for no sorts.
      "sorts"?: Shared.IViewSort[];
    // The attributes that the view shows, in display order. Omitted for no attributes, as a new view in the app has.
      "attributes"?: Shared.IViewAttribute[];
    // The settings of a kanban view. Required for kanban views and not allowed for table views.
      "kanban"?: {
            // The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry.
      "status_attribute": Shared.IViewAttributePath;
    // Whether the board shows a column for the records that have no status. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`.
      "show_no_status_column"?: boolean;
    // How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`.
      "attribute_label_display"?: ("icon"|"text");
    // The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting of a new kanban view in the app is used: `true`, `icon` and `null`.
      "aggregation"?: (Shared.IViewKanbanAggregation|null);
            };
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Lists$listViews200Response
```
    - **400**:
```typescript
      IPostV2Lists$listViews400Response
```
    - **403**:
```typescript
      IPostV2Lists$listViews403Response
```
    - **404**:
```typescript
      IPostV2Lists$listViews404Response
```
 * **Security**:
    - **oauth2**: [view:read-write, list_configuration:read]

 */
export const PostV2Lists$listViews = (list:string)=> `/v2/lists/${list}/views`;
/**
* Gets a view of a list with its filter, sorts, shown attributes and kanban settings. Attributes, objects, options, statuses and teams are referenced by ID; `metadata` has their titles and slugs.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a list view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "view_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Lists$listViews$view_id200Response
```
    - **404**:
```typescript
      IGetV2Lists$listViews$view_id404Response
```
    - **422**:
```typescript
      IGetV2Lists$listViews$view_id422Response
```
 * **Security**:
    - **oauth2**: [view:read, list_configuration:read]

 */
export const GetV2Lists$listViews$view_id = (list:string,view_id:string)=> `/v2/lists/${list}/views/${view_id}`;
/**
* Deletes a view of a list, including an archived view. Entries are not changed.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a list view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "view_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Lists$listViews$view_id200Response
```
    - **403**:
```typescript
      IDeleteV2Lists$listViews$view_id403Response
```
    - **404**:
```typescript
      IDeleteV2Lists$listViews$view_id404Response
```
 * **Security**:
    - **oauth2**: [view:read-write, list_configuration:read]

 */
export const DeleteV2Lists$listViews$view_id = (list:string,view_id:string)=> `/v2/lists/${list}/views/${view_id}`;
/**
* Updates the title, type, filter, sorts, shown attributes or kanban settings of a view of a list. Each given field replaces that part of the view, and an omitted field stays as it is. Attributes, objects, options and statuses can be referenced by slug, ID or title; the response references them by ID, as the get view endpoint does.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `view:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a list view
 * **Tags**: [Views]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "view_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The title of the view.
      "title"?: string;
    // How the view shows records. A change to `kanban` requires `kanban.status_attribute`. A change to `table` removes the kanban settings.
      "type"?: ("table"|"kanban");
    // The filter of the view, which replaces the current filter. `null` to show all records.
      "filter"?: (Shared.IViewFilter|null);
    // The sorts, in order, which replace the current sorts.
      "sorts"?: Shared.IViewSort[];
    // The attributes that the view shows, in display order, which replace the current attributes. A shown attribute with the same attribute and field keeps its column width and display settings, and its aggregation when it omits `aggregation`.
      "attributes"?: Shared.IViewAttribute[];
    // The kanban settings to change. A change of the type to kanban requires `status_attribute`. Not allowed for table views.
      "kanban"?: {
            // The status attribute whose statuses are the columns of the board, on the view's object or on the parent record of a list entry.
      "status_attribute"?: Shared.IViewAttributePath;
    // Whether the board shows a column for the records that have no status. If omitted, the setting stays as it is.
      "show_no_status_column"?: boolean;
    // How the cards label the attributes that they show: with the attribute icon or with the attribute title. If omitted, the setting stays as it is.
      "attribute_label_display"?: ("icon"|"text");
    // The calculation that the footer of each column of the board shows. `null` when the board has none. If omitted, the setting stays as it is.
      "aggregation"?: (Shared.IViewKanbanAggregation|null);
            };
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Lists$listViews$view_id200Response
```
    - **400**:
```typescript
      IPatchV2Lists$listViews$view_id400Response
```
    - **403**:
```typescript
      IPatchV2Lists$listViews$view_id403Response
```
    - **404**:
```typescript
      IPatchV2Lists$listViews$view_id404Response
```
 * **Security**:
    - **oauth2**: [view:read-write, list_configuration:read]

 */
export const PatchV2Lists$listViews$view_id = (list:string,view_id:string)=> `/v2/lists/${list}/views/${view_id}`;
/**
* Lists entries in a given list, with the option to filter and sort results.

Required scopes: `list_entry:read`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: List entries
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
    }
```
 * **DTO**:
```typescript
    {
    // An object used to filter results to a subset of results. Cannot be used together with `filter_view_id`. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
      "filter"?: {[k: string]: any};
    // UUID of a saved view on this object or list. When set, results are filtered using that view's filter configuration. Cannot be used together with `filter`. Note: sorts, limits, and offsets are applied independently and are not taken from the view. All attributes are returned regardless of which attributes are visible in the view.
      "filter_view_id"?: string;
    // An object used to sort results. See the [full guide to filtering and sorting here](/rest-api/guides/filtering-and-sorting).
      "sorts"?: ({
    // The direction to sort the results by.
      "direction": ("asc"|"desc");
    // A slug or ID to identify the attribute to sort by.
      "attribute": string;
    // Which field on the value to sort by e.g. "last_name" on a name value.
      "field"?: string;
    }|{
    // The direction to sort the results by.
      "direction": ("asc"|"desc");
    // You may use the `path` property to traverse record reference attributes and parent records on list entries. `path` accepts an array of tuples where the first element of each tuple is the slug or ID of a list/object, and the second element is the slug or ID of an attribute on that list/object. The first element of the first tuple must correspond to the list or object that you are querying. For example, if you wanted to sort by the name of the parent record (a company) on a list with the slug "sales", you would pass the value `[['sales', 'parent_record'], ['companies', 'name']]`.
      "path": (string|string)[][];
    // Which field on the value to sort by e.g. "last_name" on a name value.
      "field"?: string;
    })[];
    // The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/rest-api/guides/pagination).
      "limit"?: number;
    // The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/rest-api/guides/pagination).
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Lists$listEntriesQuery200Response
```
    - **404**:
```typescript
      IPostV2Lists$listEntriesQuery404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read, list_configuration:read]

 */
export const PostV2Lists$listEntriesQuery = (list:string)=> `/v2/lists/${list}/entries/query`;
/**
* Adds a record to a list as a new list entry. This endpoint will throw on conflicts of unique attributes. Multiple list entries are allowed for the same parent record

Required scopes: `list_entry:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create an entry (add record to list)
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry.
      "parent_record_id": string;
    // A UUID or slug identifying the object that the added parent record belongs to.
      "parent_object": string;
    // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "entry_values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Lists$listEntries200Response
```
    - **400**:
```typescript
      IPostV2Lists$listEntries400Response
```
    - **403**:
```typescript
      IPostV2Lists$listEntries403Response
```
    - **404**:
```typescript
      IPostV2Lists$listEntries404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read-write, list_configuration:read]

 */
export const PostV2Lists$listEntries = (list:string)=> `/v2/lists/${list}/entries`;
/**
* Use this endpoint to create or update a list entry for a given parent record. If an entry with the specified parent record is found, that entry will be updated. If no such entry is found, a new entry will be created instead. If there are multiple entries with the same parent record, this endpoint with return the "MULTIPLE_MATCH_RESULTS" error. When writing to multi-select attributes, all values will be either created or deleted as necessary to match the list of values supplied in the request body.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Upsert a list entry by parent
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // A UUID identifying the record you want to add to the list. The record will become the 'parent' of the created list entry.
      "parent_record_id": string;
    // A UUID or slug identifying the object that the added parent record belongs to.
      "parent_object": string;
    // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "entry_values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Lists$listEntries200Response
```
    - **400**:
```typescript
      IPutV2Lists$listEntries400Response
```
    - **403**:
```typescript
      IPutV2Lists$listEntries403Response
```
    - **404**:
```typescript
      IPutV2Lists$listEntries404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read-write, list_configuration:read]

 */
export const PutV2Lists$listEntries = (list:string)=> `/v2/lists/${list}/entries`;
/**
* Gets a single list entry by its `entry_id`.

Required scopes: `list_entry:read`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a list entry
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "entry_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Lists$listEntries$entry_id200Response
```
    - **404**:
```typescript
      IGetV2Lists$listEntries$entry_id404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read, list_configuration:read]

 */
export const GetV2Lists$listEntries$entry_id = (list:string,entry_id:string)=> `/v2/lists/${list}/entries/${entry_id}`;
/**
* Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a list entry (append multiselect values)
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "entry_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "entry_values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Lists$listEntries$entry_id200Response
```
    - **400**:
```typescript
      IPatchV2Lists$listEntries$entry_id400Response
```
    - **403**:
```typescript
      IPatchV2Lists$listEntries$entry_id403Response
```
    - **404**:
```typescript
      IPatchV2Lists$listEntries$entry_id404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read-write, list_configuration:read]

 */
export const PatchV2Lists$listEntries$entry_id = (list:string,entry_id:string)=> `/v2/lists/${list}/entries/${entry_id}`;
/**
* Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to add multiselect attribute values without removing those value that already exist.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Update a list entry (overwrite multiselect values)
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "entry_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // An object with an attribute `api_slug` or `attribute_id` as the key, and a single value (for single-select attributes), or an array of values (for single or multi-select attributes) as the values. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "entry_values": {[k: string]: any[]};
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Lists$listEntries$entry_id200Response
```
    - **400**:
```typescript
      IPutV2Lists$listEntries$entry_id400Response
```
    - **403**:
```typescript
      IPutV2Lists$listEntries$entry_id403Response
```
    - **404**:
```typescript
      IPutV2Lists$listEntries$entry_id404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read-write, list_configuration:read]

 */
export const PutV2Lists$listEntries$entry_id = (list:string,entry_id:string)=> `/v2/lists/${list}/entries/${entry_id}`;
/**
* Deletes a single list entry by its `entry_id`.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a list entry
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "entry_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Lists$listEntries$entry_id200Response
```
    - **403**:
```typescript
      IDeleteV2Lists$listEntries$entry_id403Response
```
    - **404**:
```typescript
      IDeleteV2Lists$listEntries$entry_id404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read-write, list_configuration:read]

 */
export const DeleteV2Lists$listEntries$entry_id = (list:string,entry_id:string)=> `/v2/lists/${list}/entries/${entry_id}`;
/**
* Gets all values for a given attribute on a list entry. This endpoint has the ability to return all historic values using the `show_historic` query param. Historic values are sorted from oldest to newest (by `active_from`).

Required scopes: `list_entry:read`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List attribute values for a list entry
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "entry_id": string;
      "attribute": string;
    }
```
 * **Query**:
```typescript
    {
      "show_historic"?: boolean;
      "limit"?: number;
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Lists$listEntries$entry_idAttributes$attributeValues200Response
```
    - **404**:
```typescript
      IGetV2Lists$listEntries$entry_idAttributes$attributeValues404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read, list_configuration:read]

 */
export const GetV2Lists$listEntries$entry_idAttributes$attributeValues = (list:string,entry_id:string,attribute:string)=> `/v2/lists/${list}/entries/${entry_id}/attributes/${attribute}/values`;
/**
* Replaces the entire value history of a single attribute on a list entry, primarily to migrate historic data from an external source. Every value the attribute currently has is destroyed, including values not present in the request, and the supplied values are written with the `active_from` and `active_until` timestamps given.

Values may be supplied in any order and gaps between intervals are allowed. For attributes that accept a single value, at most one value may be active at a time, so intervals may not overlap and at most one may have a `null` `active_until`. At least one value is required.

Webhooks and workflow triggers do not fire for these writes, so migrating history does not replay automations. Search indexes and caches are still updated, and formula attributes that depend on this attribute are still recalculated.

Value history cannot be written for relationship attributes, formula attributes, enriched attributes, or immutable system attributes such as the entry's parent record.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Write list entry attribute values
 * **Tags**: [Entries]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "list": string;
      "entry_id": string;
      "attribute": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The complete value history to write, replacing any existing values. Values may be supplied in any order. Gaps between intervals are allowed. At least one value is required, and a maximum of 400 values may be written in one request.
      "values": {
    // The value itself, in the same form accepted when updating a record or list entry. For complete documentation on values for all attribute types, please see our [attribute type docs](/docs/attribute-types).
      "value": ({[k: string]: any}|string|number|boolean);
    // An RFC 3339 timestamp for when this value became active. May not be in the future.
      "active_from": string;
    // An RFC 3339 timestamp for when this value stopped being active, or `null` if it is still active. Must be after `active_from` and may not be in the future. This key is required: omitting it is almost always a mistake in a migration.
      "active_until": (string|null);
    }[];
    // Must be `true`. Acknowledges that this request replaces the attribute's entire value history, destroying every value it currently has, including values not present in this request.
      "replace_history": true;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Lists$listEntries$entry_idAttributes$attributeValues200Response
```
    - **400**:
```typescript
      IPutV2Lists$listEntries$entry_idAttributes$attributeValues400Response
```
    - **403**:
```typescript
      IPutV2Lists$listEntries$entry_idAttributes$attributeValues403Response
```
    - **404**:
```typescript
      IPutV2Lists$listEntries$entry_idAttributes$attributeValues404Response
```
 * **Security**:
    - **oauth2**: [list_entry:read-write, list_configuration:read]

 */
export const PutV2Lists$listEntries$entry_idAttributes$attributeValues = (list:string,entry_id:string,attribute:string)=> `/v2/lists/${list}/entries/${entry_id}/attributes/${attribute}/values`;
/**
* Lists all workspace members in the workspace.

Required scopes: `user_management:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List workspace members
 * **Tags**: [Workspace members]
 * **OperationId**:
 * **Response**:
    - **200**:
```typescript
      IGetV2Workspace_members200Response
```
 * **Security**:
    - **oauth2**: [user_management:read]

 */
export const GetV2Workspace_members = "/v2/workspace_members";
/**
* Gets a single workspace member by ID.

Required scopes: `user_management:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a workspace member
 * **Tags**: [Workspace members]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "workspace_member_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Workspace_members$workspace_member_id200Response
```
    - **404**:
```typescript
      IGetV2Workspace_members$workspace_member_id404Response
```
 * **Security**:
    - **oauth2**: [user_management:read]

 */
export const GetV2Workspace_members$workspace_member_id = (workspace_member_id:string)=> `/v2/workspace_members/${workspace_member_id}`;
/**
* List notes for all records or for a specific record.

This endpoint is temporarily rate limited to 10 requests per second.

Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List notes
 * **Tags**: [Notes]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "limit"?: number;
      "offset"?: number;
      "parent_object"?: string;
      "parent_record_id"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Notes200Response
```
    - **404**:
```typescript
      IGetV2Notes404Response
```
 * **Security**:
    - **oauth2**: [note:read, object_configuration:read, record_permission:read]

 */
export const GetV2Notes = "/v2/notes";
/**
* Creates a new note for a given record.

Required scopes: `note:read-write`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a note
 * **Tags**: [Notes]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // The ID or slug of the parent object the note belongs to.
      "parent_object": string;
    // The ID of the parent record the note belongs to.
      "parent_record_id": string;
    // The note title. The title is plaintext only and has no formatting.
      "title": string;
    // Specify the format for the note's content. Choose from:
    // - `plaintext`: Standard text format where `\n` signifies a new line.
    // - `markdown`: Enables rich text formatting using a subset of Markdown syntax:
    // - **Headings**: Levels 1-3 (`#`, `##`, `###`).
    // - **Lists**: Unordered (`-`, `*`, `+`) and ordered (`1.`, `2.`).
    // - **Text styles**: Bold (`**bold**` or `__bold__`), italic (`*italic*` or `_italic_`), strikethrough (`~~strikethrough~~`), and highlight (`==highlighted==`).
    // - **Links**: Standard Markdown links (`[link text](https://example.com)`).
    // *Note: While the Attio interface supports image embeds, they cannot currently be added or retrieved via the API's markdown format.*
      "format": ("plaintext"|"markdown");
    // The main content of the note, formatted according to the value provided in the `format` field. Use `\n` for line breaks in `plaintext`. For `markdown`, utilize the supported syntax elements to structure and style your note.
      "content": string;
    // `created_at` will default to the current time. However, if you wish to backdate a note for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
      "created_at"?: string;
    // An optional ID to associate this note with a meeting. If provided, the meeting must exist. Use `null` to explicitly set no meeting association.
      "meeting_id"?: (string|null);
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Notes200Response
```
    - **404**:
```typescript
      IPostV2Notes404Response
```
    - **413**:
```typescript
      IPostV2Notes413Response
```
 * **Security**:
    - **oauth2**: [note:read-write, object_configuration:read, record_permission:read]

 */
export const PostV2Notes = "/v2/notes";
/**
* Get a single note by ID.

Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a note
 * **Tags**: [Notes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "note_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Notes$note_id200Response
```
    - **404**:
```typescript
      IGetV2Notes$note_id404Response
```
 * **Security**:
    - **oauth2**: [note:read, object_configuration:read, record_permission:read]

 */
export const GetV2Notes$note_id = (note_id:string)=> `/v2/notes/${note_id}`;
/**
* Updates an existing note's title and/or content. Only the fields you provide are changed, and any field you omit is left untouched. Providing `content` replaces the note's entire content. A note's parent record cannot be changed.

Required scopes: `note:read-write`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a note
 * **Tags**: [Notes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "note_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The note title. The title is plaintext only and has no formatting.
      "title"?: string;
    // Specify the format for the note's content. Choose from:
    // - `plaintext`: Standard text format where `\n` signifies a new line.
    // - `markdown`: Enables rich text formatting using a subset of Markdown syntax:
    // - **Headings**: Levels 1-3 (`#`, `##`, `###`).
    // - **Lists**: Unordered (`-`, `*`, `+`) and ordered (`1.`, `2.`).
    // - **Text styles**: Bold (`**bold**` or `__bold__`), italic (`*italic*` or `_italic_`), strikethrough (`~~strikethrough~~`), and highlight (`==highlighted==`).
    // - **Links**: Standard Markdown links (`[link text](https://example.com)`).
    // *Note: While the Attio interface supports image embeds, they cannot currently be added or retrieved via the API's markdown format.*
      "format"?: ("plaintext"|"markdown");
    // The main content of the note, formatted according to the value provided in the `format` field. Use `\n` for line breaks in `plaintext`. For `markdown`, utilize the supported syntax elements to structure and style your note.
      "content"?: string;
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Notes$note_id200Response
```
    - **404**:
```typescript
      IPatchV2Notes$note_id404Response
```
    - **413**:
```typescript
      IPatchV2Notes$note_id413Response
```
 * **Security**:
    - **oauth2**: [note:read-write, object_configuration:read, record_permission:read]

 */
export const PatchV2Notes$note_id = (note_id:string)=> `/v2/notes/${note_id}`;
/**
* Delete a single note by ID.

Required scopes: `note:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a note
 * **Tags**: [Notes]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "note_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Notes$note_id200Response
```
    - **404**:
```typescript
      IDeleteV2Notes$note_id404Response
```
 * **Security**:
    - **oauth2**: [note:read-write]

 */
export const DeleteV2Notes$note_id = (note_id:string)=> `/v2/notes/${note_id}`;
/**
* List all tasks. Results are sorted by creation date, from oldest to newest.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List tasks
 * **Tags**: [Tasks]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "limit"?: number;
      "offset"?: number;
      "sort"?: ("created_at:asc"|"created_at:desc"|"completed_at:asc"|"completed_at:desc");
      "linked_object"?: string;
      "linked_record_id"?: string;
      "assignee"?: (string|null);
      "is_completed"?: boolean;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Tasks200Response
```
 * **Security**:
    - **oauth2**: [task:read, object_configuration:read, record_permission:read, user_management:read]

 */
export const GetV2Tasks = "/v2/tasks";
/**
* Creates a new task.

At present, tasks can only be created from plaintext without record reference formatting.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a task
 * **Tags**: [Tasks]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // The text content of the task, in the format specified by the `format` property. A max length of 2000 characters is enforced.
      "content": string;
    // The format of the task content to be created. Rich text formatting, links and @references are not supported.
      "format": "plaintext";
    // The deadline of the task, in ISO 8601 format.
      "deadline_at": (string|null);
    // Whether the task has been completed.
      "is_completed": boolean;
    // Records linked to the task. Records can be linked by domain (for companies), email address (for people), record ID (for all objects) or by a unique matching attribute (for all objects). Creating record links within task content text is not possible via the API at present.
      "linked_records": (string[]|({
    // The ID or slug of the parent object the tasks refers to. This can reference both standard and custom objects.`
      "target_object": string;
    // The ID of the parent record the task refers to.
      "target_record_id": string;
    }|{
    // A UUID or slug to identify the object that the referenced record belongs to.
      "target_object": string;
    // In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. The matching attribute does not have to be unique, but a value that matches no record or more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record).
      "[slug_or_id_of_matching_attribute]": ({
    // The full domain of the website.
      "domain"?: string;
    }|{
    // An email address string
      "email_address"?: string;
    }|{
    // Numbers are persisted as 64 bit floats.
      "value"?: number;
    }|{
    // The raw, original phone number, as inputted.
      "original_phone_number"?: string;
    // The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
      "country_code"?: ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
    }|{
    // A raw text field. Values are limited to 10MB.
      "value"?: string;
    })[];
    })[]);
    // Workspace members assigned to this task.
      "assignees": ({
    // The actor type of the task assignee. Only `workspace-member` actors can be assigned to tasks. [Read more information on actor types here](/docs/actors).
      "referenced_actor_type": "workspace-member";
    // The ID of the actor assigned to this task.
      "referenced_actor_id": string;
    }|{
    // Workspace member actors can be referenced by email address as well as actor ID.
      "workspace_member_email_address": string;
    })[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Tasks200Response
```
    - **400**:
```typescript
      IPostV2Tasks400Response
```
    - **404**:
```typescript
      IPostV2Tasks404Response
```
 * **Security**:
    - **oauth2**: [task:read-write, object_configuration:read, record_permission:read, user_management:read]

 */
export const PostV2Tasks = "/v2/tasks";
/**
* Get a single task by ID.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a task
 * **Tags**: [Tasks]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "task_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Tasks$task_id200Response
```
    - **404**:
```typescript
      IGetV2Tasks$task_id404Response
```
 * **Security**:
    - **oauth2**: [task:read, object_configuration:read, record_permission:read, user_management:read]

 */
export const GetV2Tasks$task_id = (task_id:string)=> `/v2/tasks/${task_id}`;
/**
* Updates an existing task by `task_id`. At present, only the `deadline_at`, `is_completed`, `linked_records`, and `assignees` fields can be updated.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a task
 * **Tags**: [Tasks]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "task_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // The deadline of the task, in ISO 8601 format.
      "deadline_at"?: (string|null);
    // Whether the task has been completed.
      "is_completed"?: boolean;
    // Records linked to the task. Records can be linked by domain (for companies), email address (for people), record ID (for all objects) or by a unique matching attribute (for all objects). Creating record links within task content text is not possible via the API at present.
      "linked_records"?: (string[]|({
    // The ID or slug of the parent object the tasks refers to. This can reference both standard and custom objects.`
      "target_object": string;
    // The ID of the parent record the task refers to.
      "target_record_id": string;
    }|{
    // A UUID or slug to identify the object that the referenced record belongs to.
      "target_object": string;
    // In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. The matching attribute does not have to be unique, but a value that matches no record or more than one record is rejected. We recommend a unique attribute, such as a domain, an email address or an ID from your own system. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record).
      "[slug_or_id_of_matching_attribute]": ({
    // The full domain of the website.
      "domain"?: string;
    }|{
    // An email address string
      "email_address"?: string;
    }|{
    // Numbers are persisted as 64 bit floats.
      "value"?: number;
    }|{
    // The raw, original phone number, as inputted.
      "original_phone_number"?: string;
    // The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.
      "country_code"?: ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
    }|{
    // A raw text field. Values are limited to 10MB.
      "value"?: string;
    })[];
    })[]);
    // Workspace members assigned to this task.
      "assignees"?: ({
    // The actor type of the task assignee. Only `workspace-member` actors can be assigned to tasks. [Read more information on actor types here](/docs/actors).
      "referenced_actor_type": "workspace-member";
    // The ID of the actor assigned to this task.
      "referenced_actor_id": string;
    }|{
    // Workspace member actors can be referenced by email address as well as actor ID.
      "workspace_member_email_address": string;
    })[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Tasks$task_id200Response
```
    - **400**:
```typescript
      IPatchV2Tasks$task_id400Response
```
    - **404**:
```typescript
      IPatchV2Tasks$task_id404Response
```
 * **Security**:
    - **oauth2**: [task:read-write, object_configuration:read, record_permission:read, user_management:read]

 */
export const PatchV2Tasks$task_id = (task_id:string)=> `/v2/tasks/${task_id}`;
/**
* Delete a task by ID.

Required scopes: `task:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a task
 * **Tags**: [Tasks]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "task_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Tasks$task_id200Response
```
    - **404**:
```typescript
      IDeleteV2Tasks$task_id404Response
```
 * **Security**:
    - **oauth2**: [task:read-write]

 */
export const DeleteV2Tasks$task_id = (task_id:string)=> `/v2/tasks/${task_id}`;
/**
* List threads of comments on a record or list entry.

Each thread in the response includes at most `80` replies, starting with the oldest. When a thread holds more, its `has_more_comments` is `true`; use [Get a thread and its comments](/rest-api/endpoint-reference/threads/get-a-thread-and-its-comments) to page through every comment in that thread.

To view threads on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To view threads on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List threads
 * **Tags**: [Threads]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "record_id"?: string;
      "object"?: string;
      "entry_id"?: string;
      "list"?: string;
      "limit"?: number;
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Threads200Response
```
 * **Security**:
    - **oauth2**: [comment:read]

 */
export const GetV2Threads = "/v2/threads";
/**
* Get a thread and page through its comments, oldest first, starting with the comment that opened it.

Comments are paginated: at most `250` are returned per request. Keep paginating for as long as a `next_cursor` is returned.

Supply `created_after` to return only the comments created after a timestamp, which is useful when polling a thread for new replies. The comment that opened the thread is returned only when it also satisfies the filter.

To view threads on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To view threads on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a thread and its comments
 * **Tags**: [Threads]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "thread_id": string;
    }
```
 * **Query**:
```typescript
    {
      "limit"?: number;
      "cursor"?: string;
      "created_after"?: (string|null);
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Threads$thread_id200Response
```
    - **404**:
```typescript
      IGetV2Threads$thread_id404Response
```
 * **Security**:
    - **oauth2**: [comment:read]

 */
export const GetV2Threads$thread_id = (thread_id:string)=> `/v2/threads/${thread_id}`;
/**
* Creates a new comment related to an existing thread, record or entry.

To create comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To create comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a comment
 * **Tags**: [Comments]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": ({
    // The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
      "format": "plaintext";
    // The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
      "content": string;
    // The workspace member who wrote this comment. Note that other types of actors are not currently supported.
      "author": {
          "type": "workspace-member";
      "id": string;
        };
    // `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
      "created_at"?: string;
    // If responding to an existing thread, this would be the ID of that thread.
      "thread_id": string;
    }|{
    // The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
      "format": "plaintext";
    // The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
      "content": string;
    // The workspace member who wrote this comment. Note that other types of actors are not currently supported.
      "author": {
          "type": "workspace-member";
      "id": string;
        };
    // `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
      "created_at"?: string;
      "record": {
        // If creating a top-level comment on a record, this is the slug or ID of that object.
      "object": string;
    // If creating a top-level comment on a record, this is the ID of that record.
      "record_id": string;
        };
    }|{
    // The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.
      "format": "plaintext";
    // The content of the comment itself. Workspace members can be mentioned using their email address, otherwise email addresses will be presented to users as clickable mailto links.
      "content": string;
    // The workspace member who wrote this comment. Note that other types of actors are not currently supported.
      "author": {
          "type": "workspace-member";
      "id": string;
        };
    // `created_at` will default to the current time. However, if you wish to backdate a comment for migration or other purposes, you can override with a custom `created_at` value. Note that dates before 1970 or in the future are not allowed.
      "created_at"?: string;
      "entry": {
        // If creating a top-level comment on a list entry, this is the slug or ID of that list.
      "list": string;
    // If creating a top-level comment on a list entry, this is the ID of that entry.
      "entry_id": string;
        };
    });
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Comments200Response
```
    - **400**:
```typescript
      IPostV2Comments400Response
```
 * **Security**:
    - **oauth2**: [comment:read-write]

 */
export const PostV2Comments = "/v2/comments";
/**
* Get a single comment by ID.

To view comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To view comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a comment
 * **Tags**: [Comments]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "comment_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Comments$comment_id200Response
```
    - **404**:
```typescript
      IGetV2Comments$comment_id404Response
```
 * **Security**:
    - **oauth2**: [comment:read]

 */
export const GetV2Comments$comment_id = (comment_id:string)=> `/v2/comments/${comment_id}`;
/**
* Deletes a comment by ID. If deleting a comment at the head of a thread, all messages in the thread are also deleted.

A workspace-level access token may delete any comment. A user-level access token may only delete comments authored by the member it acts for.

Required scopes: `comment:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a comment
 * **Tags**: [Comments]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "comment_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Comments$comment_id200Response
```
    - **403**:
```typescript
      IDeleteV2Comments$comment_id403Response
```
    - **404**:
```typescript
      IDeleteV2Comments$comment_id404Response
```
 * **Security**:
    - **oauth2**: [comment:read-write]

 */
export const DeleteV2Comments$comment_id = (comment_id:string)=> `/v2/comments/${comment_id}`;
/**
* Lists email metadata from your workspace's connected mailboxes. Email content is never returned.

At least one of `linked_object` with `linked_record_ids`, `participants`, or `domain` must be supplied; there is no way to list every email. When several are supplied they are combined with OR: emails matching any of the filters are returned.

> **Requesting access:** this endpoint is enabled per workspace and per app while it is in alpha. Contact [support@attio.com](mailto:support@attio.com) to request access.

**Things to know**

- Filters that identify your own workspace are ignored. This covers a member's or invited member's address, one of your mailboxes, and any of their domains. If every filter you supply is ignored, an empty page is returned.
- A filter that names a protected recipient in your workspace is rejected rather than ignored. This covers an address or a domain you supply directly. A record whose address or domain is a protected recipient is ignored instead, in the same way as the filters above.
- Emails from a mailbox shared with your workspace as metadata only are returned without a subject line. An email is left out entirely when it has no participant you may see — that is, when every participant outside your workspace is a protected recipient.
- An email that reached more than one of your mailboxes is returned once, and `id.mailbox_id` identifies whichever copy was readable.
- `linked_records` is derived when you make the request rather than stored, so it reflects your records as they are now.
- Emails are returned newest first, ordered by when they were sent. Each request scans a bounded number of emails, so a page can hold fewer emails than `limit`, or none at all, while more are still available. Keep paginating for as long as a `next_cursor` is returned, rather than stopping on a short page.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `email:read`, `record_permission:read`, `object_configuration:read`.

Supported token levels: `workspace`.
 * **Method**: `GET`
 * **Summary**: List emails
 * **Tags**: [Emails]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "limit"?: number;
      "cursor"?: string;
      "linked_object"?: string;
      "linked_record_ids"?: string;
      "participants"?: string;
      "domain"?: string;
      "sent_after"?: (string|null);
      "sent_before"?: (string|null);
      "exclude_automated_participants"?: boolean;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Emails200Response
```
 * **Security**:
    - **oauth2**: [email:read, record_permission:read, object_configuration:read]

 */
export const GetV2Emails = "/v2/emails";
/**
* Adds email addresses to the workspace's sequence unsubscribe list. Email addresses on the unsubscribe list cannot be enrolled in any sequence, and any of their active sequence runs are exited. Email addresses that are already on the unsubscribe list are ignored, so this endpoint is safe to retry.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `sequence_unsubscribe:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Add emails to the unsubscribe list
 * **Tags**: [Sequences]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // The email addresses to add to the unsubscribe list. A maximum of 1000 email addresses can be provided per request. Email addresses are normalized before they are stored.
      "email_addresses": string[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2SequencesUnsubscribed_emails200Response
```
    - **400**:
```typescript
      IPostV2SequencesUnsubscribed_emails400Response
```
 * **Security**:
    - **oauth2**: [sequence_unsubscribe:read-write]

 */
export const PostV2SequencesUnsubscribed_emails = "/v2/sequences/unsubscribed_emails";
/**
* An address is an email address (jane@acme.com) or a domain (acme.com).

Lists every address on the workspace blocklist, at both enforcement levels. Email addresses come first, then domains, each in alphabetical order.

A user-level access token can only call this endpoint if the workspace member it acts for is a workspace admin.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `email_calendar_blocklist:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List workspace blocklist addresses
 * **Tags**: [Workspace blocklist]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "limit"?: number;
      "cursor"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Workspace_blocklist_addresses200Response
```
    - **400**:
```typescript
      IGetV2Workspace_blocklist_addresses400Response
```
    - **403**:
```typescript
      IGetV2Workspace_blocklist_addresses403Response
```
 * **Security**:
    - **oauth2**: [email_calendar_blocklist:read]

 */
export const GetV2Workspace_blocklist_addresses = "/v2/workspace_blocklist_addresses";
/**
* An address is an email address (jane@acme.com) or a domain (acme.com).

Sets each address in the request to the given enforcement level on the workspace blocklist. The address itself is its key: there is no separate ID.

An address that isn't on the workspace blocklist is added. An address already at the requested level is left unchanged, so this endpoint is safe to retry. An address at the other level is moved to the requested level.

This endpoint only adds and updates the addresses in the request. Addresses on the workspace blocklist that aren't in the request are left alone; it never replaces the whole list.

Addresses are normalized: email addresses and domains are trimmed and lowercased, a URL is reduced to its hostname, and a leading `www.` is removed. The response returns the normalized value, which is the key for the address. Duplicate addresses are collapsed, and a request that gives the same address two different enforcement levels is rejected.

The request is applied all or nothing. Protected changes take effect immediately. Blocked changes take effect once each connected mailbox has re-synced, which may take a few minutes.

A user-level access token can only call this endpoint if the workspace member it acts for is a workspace admin.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `email_calendar_blocklist:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Add or update workspace blocklist addresses
 * **Tags**: [Workspace blocklist]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // The addresses to set and the enforcement level each should have. A maximum of 500 addresses can be provided per request. The same address may not appear with two different enforcement levels.
      "addresses": {
    // An email address or a domain. Attio works out which one it is. Email addresses are trimmed and lowercased, and their host must be a valid domain. Domains are trimmed and lowercased, a URL is reduced to its hostname, and a leading `www.` is removed; subdomains are kept. Single labels (`acme`), bare public suffixes (`com`), unknown suffixes, IP addresses, wildcards and values over 253 characters are rejected.
      "address": string;
    // `protected`: emails and calendar events are hidden unless at least one participant is not on the workspace blocklist. `blocked`: they are hidden even when other participants are included.
      "enforcement_level": ("protected"|"blocked");
    }[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Workspace_blocklist_addresses200Response
```
    - **400**:
```typescript
      IPutV2Workspace_blocklist_addresses400Response
```
    - **403**:
```typescript
      IPutV2Workspace_blocklist_addresses403Response
```
    - **409**:
```typescript
      IPutV2Workspace_blocklist_addresses409Response
```
 * **Security**:
    - **oauth2**: [email_calendar_blocklist:read-write]

 */
export const PutV2Workspace_blocklist_addresses = "/v2/workspace_blocklist_addresses";
/**
* An address is an email address (jane@acme.com) or a domain (acme.com).

Removes an address from the workspace blocklist, whatever its enforcement level. The address itself is its key: there is no separate ID.

The address is normalized as when it is added: email addresses and domains are trimmed and lowercased, a URL is reduced to its hostname, and a leading `www.` is removed. So the address is found whatever form it was added in. A URL, or any other value with reserved characters, must be percent-encoded in the path.

An address that isn't on the workspace blocklist returns a `404`. A client retrying a request can treat a `404` as done.

Removing a protected address takes effect immediately. Removing a blocked address takes effect once each connected mailbox has re-synced, which may take a few minutes.

A user-level access token can only call this endpoint if the workspace member it acts for is a workspace admin.

This endpoint is in alpha and may be subject to breaking changes as we gather feedback.

Required scopes: `email_calendar_blocklist:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a workspace blocklist address
 * **Tags**: [Workspace blocklist]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "address": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Workspace_blocklist_addresses$address200Response
```
    - **400**:
```typescript
      IDeleteV2Workspace_blocklist_addresses$address400Response
```
    - **403**:
```typescript
      IDeleteV2Workspace_blocklist_addresses$address403Response
```
    - **404**:
```typescript
      IDeleteV2Workspace_blocklist_addresses$address404Response
```
 * **Security**:
    - **oauth2**: [email_calendar_blocklist:read-write]

 */
export const DeleteV2Workspace_blocklist_addresses$address = (address:string)=> `/v2/workspace_blocklist_addresses/${address}`;
/**
* Lists all meetings in the workspace using a deterministic sort order. When both the `participants` and `linked_record_id` filters are supplied, they are combined with OR: meetings that match either filter are returned.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `record_permission:read`.

Supported token levels: `workspace`.
 * **Method**: `GET`
 * **Summary**: List meetings
 * **Tags**: [Meetings]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "limit"?: number;
      "cursor"?: string;
      "linked_object"?: string;
      "linked_record_id"?: string;
      "participants"?: string;
      "sort"?: ("start_asc"|"start_desc");
      "ends_from"?: (string|null);
      "starts_before"?: (string|null);
      "timezone"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Meetings200Response
```
 * **Security**:
    - **oauth2**: [meeting:read, record_permission:read]

 */
export const GetV2Meetings = "/v2/meetings";
/**
* Creates a new meeting. [See here](/rest-api/guides/syncing-meetings) for guidance on avoiding duplicate meetings.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read-write`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a meeting
 * **Tags**: [Meetings]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // The title of the meeting.
      "title": string;
    // The description of the meeting.
      "description": string;
    // When the meeting starts. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.
      "start": ({
    // An ISO 8601 datetime indicating when a non-all day meeting starts.
      "datetime": string;
    // The IANA timezone the meeting starts in. If a datetime value is provided without an offset, this timezone will be used to convert the datetime to UTC using the timezone offset. If a datetime value is provided with an offset, this timezone will not be used to apply any additional offset to the datetime. Invalid timezones will be treated as UTC.
      "timezone"?: (string|null);
    }|{
    // An ISO 8601 date indicating when an all day meeting starts.
      "date": string;
    });
    // When the meeting ends. Use a datetime and optional timezone for non-all day meetings, or a date for all day meetings.
      "end": ({
    // An ISO 8601 datetime indicating when a non-all day meeting ends. Note that this value is exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one hour meeting starting at 14:00 would end at 15:00, not 15:59:59.
      "datetime": string;
    // The IANA timezone the meeting ends in. If a datetime value is provided without an offset, this timezone will be used to convert the datetime to UTC using the timezone offset. If a datetime value is provided with an offset, this timezone will not be used to apply any additional offset to the datetime. Invalid timezones will be treated as UTC.
      "timezone"?: (string|null);
    }|{
    // An ISO 8601 date indicating when an all day meeting ends. Note that dates are exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one day meeting on June 3rd would end on June 4th, not June 3rd.
      "date": string;
    });
    // Whether or not the meeting is an all day event. All day events may span multiple days. When true, start and end must use date format. When false, start and end must use datetime with timezone format.
      "is_all_day": boolean;
      "participants": {
    // The email address of the participant. New person records and companies will automatically be created based upon the email address values provided. If omitted, a name must be provided instead.
      "email_address"?: string;
    // Whether or not the participant is the organizer of the meeting.
      "is_organizer": (boolean|"true"|"false");
    // The status of the individual meeting participant.
      "status": ("accepted"|"tentative"|"declined"|"pending");
    // The name of the participant. Required when no email_address is provided. Participants without an email do not create person or company records.
      "name"?: string;
    }[];
    // A list of records to link to the meeting. Each record is specified by its object (slug or UUID) and record ID (UUID). Attio will automatically link the meeting participants' companies to the meeting; this behavior is asynchronous.
      "linked_records"?: {
    // The slug or UUID of the object that the record being linked belongs to.
      "object": string;
    // The UUID of the record being linked.
      "record_id": string;
    }[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Meetings200Response
```
    - **400**:
```typescript
      IPostV2Meetings400Response
```
 * **Security**:
    - **oauth2**: [meeting:read-write, record_permission:read]

 */
export const PostV2Meetings = "/v2/meetings";
/**
* Get a single meeting by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a meeting
 * **Tags**: [Meetings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Meetings$meeting_id200Response
```
    - **404**:
```typescript
      IGetV2Meetings$meeting_id404Response
```
 * **Security**:
    - **oauth2**: [meeting:read, record_permission:read]

 */
export const GetV2Meetings$meeting_id = (meeting_id:string)=> `/v2/meetings/${meeting_id}`;
/**
* Links records to a meeting. The records supplied are added to the meeting's existing linked records, and records which are already linked are ignored. Use the `PUT` endpoint to replace or remove linked records.

No other meeting fields can be updated. Attio automatically links the meeting participants' companies to the meeting; this behavior is asynchronous.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read-write`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PATCH`
 * **Summary**: Update a meeting (append linked records)
 * **Tags**: [Meetings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
          "linked_records": {
    // The slug or UUID of the object that the record being linked belongs to.
      "object": string;
    // The UUID of the record being linked.
      "record_id": string;
    }[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Meetings$meeting_id200Response
```
    - **400**:
```typescript
      IPatchV2Meetings$meeting_id400Response
```
    - **404**:
```typescript
      IPatchV2Meetings$meeting_id404Response
```
 * **Security**:
    - **oauth2**: [meeting:read-write, record_permission:read]

 */
export const PatchV2Meetings$meeting_id = (meeting_id:string)=> `/v2/meetings/${meeting_id}`;
/**
* Replaces a meeting's linked records with the records supplied. Any record which is currently linked and is not in the request is unlinked, including records which Attio linked automatically from the meeting's participants. Passing an empty array unlinks every record. Use the `PATCH` endpoint to add linked records without removing the records which already exist.

No other meeting fields can be updated. Attio automatically links the meeting participants' companies to the meeting; this behavior is asynchronous, so a company which is linked after this request completes is not removed by it.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read-write`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `PUT`
 * **Summary**: Update a meeting (overwrite linked records)
 * **Tags**: [Meetings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
          "linked_records": {
    // The slug or UUID of the object that the record being linked belongs to.
      "object": string;
    // The UUID of the record being linked.
      "record_id": string;
    }[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPutV2Meetings$meeting_id200Response
```
    - **400**:
```typescript
      IPutV2Meetings$meeting_id400Response
```
    - **404**:
```typescript
      IPutV2Meetings$meeting_id404Response
```
 * **Security**:
    - **oauth2**: [meeting:read-write, record_permission:read]

 */
export const PutV2Meetings$meeting_id = (meeting_id:string)=> `/v2/meetings/${meeting_id}`;
/**
* Deletes a single meeting by ID.

Meetings created by calendar sync cannot be deleted through the API. Delete the underlying calendar event, or disconnect the calendar, instead.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a meeting
 * **Tags**: [Meetings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Meetings$meeting_id200Response
```
    - **400**:
```typescript
      IDeleteV2Meetings$meeting_id400Response
```
    - **404**:
```typescript
      IDeleteV2Meetings$meeting_id404Response
```
 * **Security**:
    - **oauth2**: [meeting:read-write]

 */
export const DeleteV2Meetings$meeting_id = (meeting_id:string)=> `/v2/meetings/${meeting_id}`;
/**
* List all call recordings for a meeting.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List call recordings
 * **Tags**: [Call recordings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
    }
```
 * **Query**:
```typescript
    {
      "limit"?: number;
      "cursor"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Meetings$meeting_idCall_recordings200Response
```
 * **Security**:
    - **oauth2**: [meeting:read, call_recording:read]

 */
export const GetV2Meetings$meeting_idCall_recordings = (meeting_id:string)=> `/v2/meetings/${meeting_id}/call_recordings`;
/**
* Create a call recording for a meeting. This endpoint is rate limited to 1 request per second.

A `transcript` is required. `video_url` is optional, and a transcript-only call recording (with no video) is fully supported.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create call recording
 * **Tags**: [Call recordings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // A publicly accessible URL to a video file of the call recording. Attio will download the video from this URL asynchronously.
    // This field is optional — a call recording can be created with only a `transcript` and no video.
    // **Requirements:**
    // - **Protocol:** The URL must use the `https` protocol.
    // - **File type:** The file must be a `.mp4` file.
    // - **File size:** The file must not exceed 1GB in size.
    // - **Accessibility:** For the request to be accepted, the URL must be publicly accessible. Attio will make a `HEAD` request to the URL to verify its accessibility and retrieve file metadata. The response to this request must include a `Content-Length` header.
      "video_url"?: string;
    // The call recording's transcript. It must contain at least one transcript segment.
      "transcript": {
    // The spoken text for this segment of the transcript.
      "speech": string;
    // The start time of this speech segment in seconds.
      "start_time": number;
    // The end time of this speech segment in seconds.
      "end_time": number;
      "speaker": {
        // The name of the speaker.
      "name": string;
    // The email address of the speaker.
      "email_address"?: string;
        };
    }[];
        };
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Meetings$meeting_idCall_recordings200Response
```
    - **400**:
```typescript
      IPostV2Meetings$meeting_idCall_recordings400Response
```
    - **403**:
```typescript
      IPostV2Meetings$meeting_idCall_recordings403Response
```
    - **404**:
```typescript
      IPostV2Meetings$meeting_idCall_recordings404Response
```
 * **Security**:
    - **oauth2**: [meeting:read, call_recording:read-write]

 */
export const PostV2Meetings$meeting_idCall_recordings = (meeting_id:string)=> `/v2/meetings/${meeting_id}/call_recordings`;
/**
* Get a single call recording by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get call recording
 * **Tags**: [Call recordings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
      "call_recording_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Meetings$meeting_idCall_recordings$call_recording_id200Response
```
    - **404**:
```typescript
      IGetV2Meetings$meeting_idCall_recordings$call_recording_id404Response
```
 * **Security**:
    - **oauth2**: [meeting:read, call_recording:read]

 */
export const GetV2Meetings$meeting_idCall_recordings$call_recording_id = (meeting_id:string,call_recording_id:string)=> `/v2/meetings/${meeting_id}/call_recordings/${call_recording_id}`;
/**
* Deletes the specified call recording. This will remove the call recording and all associated data.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read-write`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete call recording
 * **Tags**: [Call recordings]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
      "call_recording_id": string;
    }
```
 * **Response**:
    - **204**:
```typescript
      IDeleteV2Meetings$meeting_idCall_recordings$call_recording_id204Response
```
    - **404**:
```typescript
      IDeleteV2Meetings$meeting_idCall_recordings$call_recording_id404Response
```
 * **Security**:
    - **oauth2**: [meeting:read, call_recording:read-write]

 */
export const DeleteV2Meetings$meeting_idCall_recordings$call_recording_id = (meeting_id:string,call_recording_id:string)=> `/v2/meetings/${meeting_id}/call_recordings/${call_recording_id}`;
/**
* Deprecated: prefer using `GET /v2/meetings/:meeting_id/call_recordings/:call_recording_id` to get the transcript for a call recording.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `meeting:read`, `call_recording:read`.

Supported token levels: `workspace`.
 * **Method**: `GET`
 * **Summary**: Deprecated: Get call transcript
 * **Tags**: [Transcripts]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "meeting_id": string;
      "call_recording_id": string;
    }
```
 * **Query**:
```typescript
    {
      "cursor"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Meetings$meeting_idCall_recordings$call_recording_idTranscript200Response
```
 * **Security**:
    - **oauth2**: [meeting:read, call_recording:read]

 */
export const GetV2Meetings$meeting_idCall_recordings$call_recording_idTranscript = (meeting_id:string,call_recording_id:string)=> `/v2/meetings/${meeting_id}/call_recordings/${call_recording_id}/transcript`;
/**
* Lists internal files, externally connected files and folders for a specific record. Use the `object` and `record_id` query parameters to specify the record. Optional query parameters may be provided to filter results by storage provider or parent folder.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: List files
 * **Tags**: [Files]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "object": string;
      "record_id": string;
      "storage_provider"?: ("attio"|"dropbox"|"box"|"google-drive"|"microsoft-onedrive");
      "parent_folder_id"?: string;
      "limit"?: number;
      "cursor"?: string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Files200Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read, record_permission:read, file:read]

 */
export const GetV2Files = "/v2/files";
/**
* Creates a native folder entry or a connected file/folder entry on an object record.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Create a folder
 * **Tags**: [Files]
 * **OperationId**:
 * **DTO**:
```typescript
    ({
    // The object slug or ID.
      "object": string;
    // The ID of the record to create the file entry on.
      "record_id": string;
    // Creates a native Attio folder entry.
      "file_type": "folder";
    // The folder name.
      "name": string;
    // Optional parent folder ID. Omit to create a top-level folder.
      "parent_folder_id"?: string;
    }|{
    // The object slug or ID.
      "object": string;
    // The ID of the record to create the file entry on.
      "record_id": string;
    // The external storage provider.
      "storage_provider": ("dropbox"|"box"|"google-drive"|"microsoft-onedrive");
    // The ID of the file or folder in the external storage provider.
      "external_provider_file_id": string;
    // Microsoft drive ID. Only used when `storage_provider` is `microsoft-onedrive`.
      "microsoft_drive_id"?: (string|null);
    // Creates a connected folder entry.
      "file_type": "connected-folder";
    }|{
    // The object slug or ID.
      "object": string;
    // The ID of the record to create the file entry on.
      "record_id": string;
    // The external storage provider.
      "storage_provider": ("dropbox"|"box"|"google-drive"|"microsoft-onedrive");
    // The ID of the file or folder in the external storage provider.
      "external_provider_file_id": string;
    // Microsoft drive ID. Only used when `storage_provider` is `microsoft-onedrive`.
      "microsoft_drive_id"?: (string|null);
    // Creates a connected file entry.
      "file_type": "connected-file";
    })
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Files200Response
```
 * **Security**:
    - **oauth2**: [file:read-write, object_configuration:read, record_permission:read]

 */
export const PostV2Files = "/v2/files";
/**
* Uploads a file to native Attio storage for a record. Send multipart/form-data with a single binary field named `file` together with the body fields `object`, `record_id`, and optional `parent_folder_id`. Maximum file size is 50 MB.

This endpoint is rate limited to 1 request per second.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `POST`
 * **Summary**: Upload a file
 * **Tags**: [Files]
 * **OperationId**:
 * **DTO**:
```typescript
    {
    // The file to upload.
      "file": string;
    // The object slug or ID.
      "object": string;
    // The ID of the record to upload the file to.
      "record_id": string;
    // Optional parent folder ID. Omit to upload to the root folder.
      "parent_folder_id"?: string;
    }
```
 * **Response**:
    - **201**:
```typescript
      IPostV2FilesUpload201Response
```
    - **403**:
```typescript
      IPostV2FilesUpload403Response
```
 * **Security**:
    - **oauth2**: [file:read-write, object_configuration:read, record_permission:read]

 */
export const PostV2FilesUpload = "/v2/files/upload";
/**
* Get a single file entry by ID.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Get a file
 * **Tags**: [Files]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "file_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Files$file_id200Response
```
    - **404**:
```typescript
      IGetV2Files$file_id404Response
```
 * **Security**:
    - **oauth2**: [file:read, object_configuration:read, record_permission:read]

 */
export const GetV2Files$file_id = (file_id:string)=> `/v2/files/${file_id}`;
/**
* Delete a single file by ID. Deleting a folder will delete all of its descendants.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `file:read-write`, `object_configuration:read`, `record_permission:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `DELETE`
 * **Summary**: Delete a file
 * **Tags**: [Files]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "file_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Files$file_id200Response
```
    - **404**:
```typescript
      IDeleteV2Files$file_id404Response
```
 * **Security**:
    - **oauth2**: [file:read-write, object_configuration:read, record_permission:read]

 */
export const DeleteV2Files$file_id = (file_id:string)=> `/v2/files/${file_id}`;
/**
* Downloads a file by redirecting to a signed URL.

This endpoint is in beta. We will aim to avoid breaking changes, but small updates may be made as we roll out to more users.

Required scopes: `object_configuration:read`, `record_permission:read`, `file:read`.

Supported token levels: `workspace`, `user`.
 * **Method**: `GET`
 * **Summary**: Download a file
 * **Tags**: [Files]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "file_id": string;
    }
```
 * **Response**:
    - **302**:
```typescript
      IGetV2Files$file_idDownload302Response
```
 * **Security**:
    - **oauth2**: [object_configuration:read, record_permission:read, file:read]

 */
export const GetV2Files$file_idDownload = (file_id:string)=> `/v2/files/${file_id}/download`;
/**
* Get all of the webhooks in your workspace.

Required scopes: `webhook:read`.

Supported token levels: `workspace`.
 * **Method**: `GET`
 * **Summary**: List webhooks
 * **Tags**: [Webhooks]
 * **OperationId**:
 * **Query**:
```typescript
    {
      "limit"?: number;
      "offset"?: number;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Webhooks200Response
```
 * **Security**:
    - **oauth2**: [webhook:read]

 */
export const GetV2Webhooks = "/v2/webhooks";
/**
* Create a webhook and associated subscriptions.

Each combination of target URL, event type and filter must be unique within your workspace; duplicates are rejected with a 409.

Required scopes: `webhook:read-write`.

Supported token levels: `workspace`.
 * **Method**: `POST`
 * **Summary**: Create a webhook
 * **Tags**: [Webhooks]
 * **OperationId**:
 * **DTO**:
```typescript
    {
      "data": {
        // URL where the webhook events will be delivered to.
      "target_url": string;
    // One or more events the webhook is subscribed to.
    // Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
      "subscriptions": {
    // Type of event the webhook is subscribed to.
      "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
    // Filters to determine whether the webhook event should be sent. If null, the filter always passes.
    // When filters are compared for uniqueness, key order and the order of operations are ignored.
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
    }
```
 * **Response**:
    - **200**:
```typescript
      IPostV2Webhooks200Response
```
    - **400**:
```typescript
      IPostV2Webhooks400Response
```
    - **409**:
```typescript
      IPostV2Webhooks409Response
```
 * **Security**:
    - **oauth2**: [webhook:read-write]

 */
export const PostV2Webhooks = "/v2/webhooks";
/**
* Get a single webhook.

Required scopes: `webhook:read`.

Supported token levels: `workspace`.
 * **Method**: `GET`
 * **Summary**: Get a webhook
 * **Tags**: [Webhooks]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "webhook_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IGetV2Webhooks$webhook_id200Response
```
    - **404**:
```typescript
      IGetV2Webhooks$webhook_id404Response
```
 * **Security**:
    - **oauth2**: [webhook:read]

 */
export const GetV2Webhooks$webhook_id = (webhook_id:string)=> `/v2/webhooks/${webhook_id}`;
/**
* Update a webhook and associated subscriptions.

Each combination of target URL, event type and filter must be unique within your workspace; duplicates are rejected with a 409. Changing the target URL re-checks the webhook's existing subscriptions against the new URL.

Required scopes: `webhook:read-write`.

Supported token levels: `workspace`.
 * **Method**: `PATCH`
 * **Summary**: Update a webhook
 * **Tags**: [Webhooks]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "webhook_id": string;
    }
```
 * **DTO**:
```typescript
    {
      "data": {
        // URL where the webhook events will be delivered to.
      "target_url"?: string;
    // One or more events the webhook is subscribed to.
    // Within a workspace, the combination of target URL, event type and filter must be unique across all of your webhooks. A duplicate — whether against another webhook or repeated within a single request — is rejected with a `409 uniqueness_conflict`.
      "subscriptions"?: {
    // Type of event the webhook is subscribed to.
      "event_type": ("activity.created"|"activity.updated"|"activity.deleted"|"activity-attribute.created"|"activity-attribute.updated"|"activity-record.created"|"activity-record.deleted"|"call-recording.created"|"comment.created"|"comment.resolved"|"comment.unresolved"|"comment.deleted"|"list.created"|"list.updated"|"list.deleted"|"list-attribute.created"|"list-attribute.updated"|"list-entry.created"|"list-entry.updated"|"list-entry.deleted"|"object-attribute.created"|"object-attribute.updated"|"note.created"|"note-content.updated"|"note.updated"|"note.deleted"|"record.created"|"record.merged"|"record.updated"|"record.deleted"|"task.created"|"task.updated"|"task.deleted"|"workspace-member.created");
    // Filters to determine whether the webhook event should be sent. If null, the filter always passes.
    // When filters are compared for uniqueness, key order and the order of operations are ignored.
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
    }
```
 * **Response**:
    - **200**:
```typescript
      IPatchV2Webhooks$webhook_id200Response
```
    - **404**:
```typescript
      IPatchV2Webhooks$webhook_id404Response
```
    - **409**:
```typescript
      IPatchV2Webhooks$webhook_id409Response
```
 * **Security**:
    - **oauth2**: [webhook:read-write]

 */
export const PatchV2Webhooks$webhook_id = (webhook_id:string)=> `/v2/webhooks/${webhook_id}`;
/**
* Delete a webhook by ID.

Required scopes: `webhook:read-write`.

Supported token levels: `workspace`.
 * **Method**: `DELETE`
 * **Summary**: Delete a webhook
 * **Tags**: [Webhooks]
 * **OperationId**:
 * **Path**:
```typescript
    {
      "webhook_id": string;
    }
```
 * **Response**:
    - **200**:
```typescript
      IDeleteV2Webhooks$webhook_id200Response
```
    - **404**:
```typescript
      IDeleteV2Webhooks$webhook_id404Response
```
 * **Security**:
    - **oauth2**: [webhook:read-write]

 */
export const DeleteV2Webhooks$webhook_id = (webhook_id:string)=> `/v2/webhooks/${webhook_id}`;
/**
* Identify the current access token, the workspace it is linked to, and any permissions it has.

Every kind of Attio access token can be introspected:

- **Workspace access tokens**, created from a workspace's settings. These have no OAuth client, so `client_id` and `aud` contain the workspace access token's own ID.
- **OAuth access tokens**, granted to an app through the OAuth 2.0 authorization code flow. `client_id` and `aud` contain the app ID.
- **App access tokens**, issued to an app installation and exposed to that app's server functions as `ATTIO_API_TOKEN`. `client_id` and `aud` contain the app ID.

Per [RFC 7662](https://www.rfc-editor.org/rfc/rfc7662), `active` is the only member guaranteed to be present. `exp` is always `null`, because Attio access tokens do not currently expire.
All other members are optional, and are omitted rather than returned as `null` when they are not present.

Unknown, revoked, and deleted tokens are not treated as an error. They return `200` with `{"active": false}` and no other members.
 * **Method**: `GET`
 * **Summary**: Identify
 * **Tags**: [Meta]
 * **OperationId**:
 * **Response**:
    - **200**:
```typescript
      IGetV2Self200Response
```
 */
export const GetV2Self = "/v2/self";