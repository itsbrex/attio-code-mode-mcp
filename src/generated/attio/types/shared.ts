// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code below this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================

export type IActivity = {
  "id": {
    /**
 *  A UUID to identify the workspace this activity belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID to identify the activity.
 */
  "activity_id": string;
    };
/**
 *  A unique, human-readable slug to access the activity through URLs and API calls. Formatted in snake case.
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
 *  The schemas this activity directly extends, which supply its inherited attributes.
 */
  "extends": {
/**
 *  A UUID to identify the schema.
 */
  "schema_id": string;
/**
 *  The human-readable slug of the schema.
 */
  "schema_slug": string;
}[];
/**
 *  `true` when Attio defines the activity, `false` when it's a custom activity.
 */
  "is_system_activity": boolean;
/**
 *  When the activity was created.
 */
  "created_at": string;
};

export type IStatus = {
  "id": {
    /**
 *  The ID of the workspace
 */
  "workspace_id": string;
/**
 *  The ID of the object
 */
  "object_id": string;
/**
 *  The ID of the attribute
 */
  "attribute_id": string;
/**
 *  The ID of the status
 */
  "status_id": string;
    };
/**
 *  The title of the status
 */
  "title": string;
/**
 *  Whether or not to archive the status. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
 */
  "is_archived": boolean;
/**
 *  Whether arriving at this status triggers a celebration effect in the UI
 */
  "celebration_enabled": boolean;
/**
 *  Target time for a record to spend in given status expressed as a ISO-8601 duration string
 */
  "target_time_in_status": (string|null);
};

export type ISelectOption = {
  "id": {
    /**
 *  The ID of the workspace
 */
  "workspace_id": string;
/**
 *  The ID of the object
 */
  "object_id": string;
/**
 *  The ID of the attribute
 */
  "attribute_id": string;
/**
 *  The ID of the select option
 */
  "option_id": string;
    };
/**
 *  The title of the select option
 */
  "title": string;
/**
 *  Whether or not to archive the select option. See our [archiving guide](/docs/archiving-vs-deleting) for more information on archiving.
 */
  "is_archived": boolean;
};

/**
 *  A union of possible value types, as required in request bodies.
 */
export type IInputValue = ({
/**
 *  The type of the referenced actor. Currently, only workspace members can be written into actor reference attributes. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": "workspace-member";
/**
 *  The ID of the referenced Actor.
 */
  "referenced_actor_id": string;
}|{
/**
 *  Workspace member actors can be referenced by email address as well as actor ID.
 */
  "workspace_member_email_address": string;
}|{
/**
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
}|{
/**
 *  A numerical representation of the currency value. A decimal with a max of 4 decimal places.
 */
  "currency_value": number;
}|{
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
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
 *  A UUID or slug to identify the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  A UUID to identify the referenced record.
 */
  "target_record_id": string;
}|{
/**
 *  A UUID or slug to identify the object that the referenced record belongs to.
 */
  "target_object": string;
/**
 *  In addition to referencing records directly by record ID, you may also reference by a matching attribute of your choice. For example, if you want to add a reference to the person record with email "alice@website.com", you should pass a value with `target_object` set to `"people"` and `email_addresses` set to `[{email_address:"alice@website.com"}]`. The key should be the slug or ID of the matching attribute you would like to use and the value should be an array containing a single value of the appropriate attribute type (as specified below). Matching on multiple values is not currently supported. Matching attributes must be unique. This process is similar to how you use the `matching_attribute` query param in Attio's [assert endpoints](/rest-api/endpoint-reference/records/assert-a-record).
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
}|{
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
}|{
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
}|{
/**
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
}|{
/**
 *  The first name.
 */
  "first_name"?: string;
/**
 *  The last name.
 */
  "last_name"?: string;
/**
 *  The full name.
 */
  "full_name"?: string;
}|{
/**
 *  A phone number which is either a) prefixed with a country code (e.g. `+44....`) or b) a local number, where `country_code` is specified in addition.
 */
  "original_phone_number": string;
/**
 *  The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. Optional if `original_phone_number` includes a country code prefix.
 */
  "country_code"?: ("AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"SS"|"RS"|"SC"|"SL"|"SG"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"|"BQ"|"KP"|"SX"|"XK"|"AC");
}|{
/**
 *  The UUID or status title identifying the selected status.
 */
  "status": string;
}|{
/**
 *  A number between 0 and 5 (inclusive) to represent a star rating.
 */
  "value": number;
}|{
/**
 *  The UUID or select option title identifying the selected select option.
 */
  "option": string;
}|{
/**
 *  A raw text field. Values are limited to 10MB.
 */
  "value": string;
}|{
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
});

/**
 *  A union of possible value types, as returned in response bodies.
 */
export type IOutputValue = ({
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
 *  A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted.
 */
  "value": boolean;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "checkbox";
}|{
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
 *  The attribute type of the value.
 */
  "attribute_type": "date";
/**
 *  A date represents a single calendar year, month and day, independent of timezone. If hours, months, seconds or timezones are provided, they will be trimmed. For example, "2023" and "2023-01" will be coerced into "2023-01-01", and "2023-01-02", "2023-01-02T13:00", "2023-01-02T14:00:00", "2023-01-02T15:00:00.000000000", and "2023-01-02T15:00:00.000000000+02:00" will all be coerced to "2023-01-02". If a timezone is provided that would result in a different calendar date in UTC, the date will be coerced to UTC and then the timezone component will be trimmed. For example, the value "2023-01-02T23:00:00-10:00" will be returned as "2023-01-03". The maximum date is "9999-12-31".
 */
  "value": string;
}|{
  "domain": string;
  "root_domain": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "domain";
}|{
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
 *  Numbers are persisted as 64 bit floats.
 */
  "value": number;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "number";
}|{
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
 *  The UUID identifying the selected status.
 */
  "status": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
  "status": IStatus;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "status";
}|{
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
 *  The UUID identifying the selected select option.
 */
  "option": string;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
  "option": ISelectOption;
/**
 *  The attribute type of the value.
 */
  "attribute_type": "select";
}|{
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
 *  The attribute type of the value.
 */
  "attribute_type": "timestamp";
/**
 *  A timestamp value represents a single, universal moment in time using an ISO 8601 formatted string. This means that a timestamp consists of a date, a time (with nanosecond precision), and a time zone. Attio will coerce timestamps which do not provide full nanosecond precision and UTC is assumed if no time zone is provided. For example, "2023", "2023-01", "2023-01-02", "2023-01-02T13:00", "2023-01-02T13:00:00", and "2023-01-02T13:00:00.000000000" will all be coerced to "2023-01-02T13:00:00.000000000Z". Timestamps are always returned in UTC. For example, writing a timestamp value using the string "2023-01-02T13:00:00.000000000+02:00" will result in the value "2023-01-02T11:00:00.000000000Z" being returned. The maximum date is "9999-12-31T23:59:59.999999999Z".
 */
  "value": string;
});

export type IAttribute = {
  "id": {
    /**
 *  A UUID representing the workspace this attribute belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID to identify the object or list that this attribute belongs to
 */
  "object_id": string;
/**
 *  A UUID to identify this attribute.
 */
  "attribute_id": string;
    };
/**
 *  A title for the attribute, to be displayed across the app.
 */
  "title": string;
/**
 *  A text description of the attribute.
 */
  "description": (string|null);
/**
 *  A unique slug for the attribute for use in API responses and URLs. Formatted in snake case.
 */
  "api_slug": string;
/**
 *  The type of the attribute.
 */
  "type": ("text"|"number"|"checkbox"|"currency"|"date"|"timestamp"|"rating"|"status"|"select"|"record-reference"|"actor-reference"|"location"|"domain"|"email-address"|"phone-number"|"interaction"|"personal-name");
/**
 *  `true` if this is an Attio system-defined attribute, `false` if defined by a user or non-Attio system.
 */
  "is_system_attribute": boolean;
/**
 *  Whether or not this attribute can be written to. It is `false` for protected system attributes, which are usually enriched by Attio. It is also `false` for formula attributes, whose values are calculated automatically.
 */
  "is_writable": boolean;
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
 *  Whether this attribute has a default value enabled. Must be `true` when `is_required` is `true`.
 */
  "is_default_value_enabled": boolean;
/**
 *  Whether this attribute has been archived. Archived attributes are hidden from most UI, but can be restored either over the API or in workspace settings. See the [guide on archiving and deleting](/docs/archiving-vs-deleting)for more information.
 */
  "is_archived": boolean;
/**
 *  The default value for this attribute. Static values are used to directly populate values using their contents. Dynamic values are used to lookup data at the point of creation. For example, you could use a dynamic value to insert a value for the currently logged in user. Which default values are available is dependent on the type of the attribute.
 */
  "default_value": ({
  "type": "dynamic";
  "template": ("current-user"|string|string);
}|{
  "type": "static";
  "template": IOutputValue[];
}|null);
/**
 *  If this attribute is related to another attribute, this is an object that includes an `id` property that identifies the other attribute. `null` means no relationship exists. See [the help center](https://attio.com/help/reference/managing-your-data/attributes#relationship-attributes) for more details about relationship attributes.
 */
  "relationship": {
      "id": {
        /**
 *  A UUID representing the workspace this attribute belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID to identify the object or list that this attribute belongs to
 */
  "object_id": string;
/**
 *  A UUID to identify this attribute.
 */
  "attribute_id": string;
        };
/**
 *  The slug of the object that the related attribute belongs to.
 */
  "object_slug": string;
/**
 *  The title of the related attribute.
 */
  "title": string;
/**
 *  The API slug identifying the related attribute.
 */
  "api_slug": string;
/**
 *  Whether the related attribute supports selecting multiple values. Combined with the parent attribute's `is_multiselect`, this determines the relationship type: both `false` = one-to-one, parent `true` + related `false` = many-to-one, parent `false` + related `true` = one-to-many, both `true` = many-to-many.
 */
  "is_multiselect": boolean;
    };
/**
 *  When this attribute was created.
 */
  "created_at": string;
/**
 *  Additional, type-dependent configuration for the attribute.
 */
  "config": {
    /**
 *  Configuration available for attributes of type "currency".
 */
  "currency": {
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
  "record_reference": {
        /**
 *  A list of UUIDs to indicate which objects records are allowed to belong to. Leave empty to to allow records from all object types.
 */
  "allowed_object_ids": string[];
        };
    };
};

export type IListView = {
  "id": {
    /**
 *  A UUID identifying the workspace this view belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the list this view belongs to.
 */
  "list_id": string;
/**
 *  A UUID identifying this view. Use this value as `filter_view_id` when listing entries.
 */
  "view_id": string;
    };
/**
 *  The title of the view shown in the Attio app.
 */
  "title": string;
/**
 *  When the view was created.
 */
  "created_at": string;
};

export type IList = {
  "id": {
    /**
 *  A UUID to identify the workspace this list belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID to identify this list.
 */
  "list_id": string;
    };
/**
 *  A human-readable slug for use in URLs and responses.
 */
  "api_slug": string;
/**
 *  The name of the list, as viewed in the UI.
 */
  "name": string;
/**
 *  A UUID or slug to identify the allowed object type for records added to this list. All new Lists are expected to have exactly one parent object. However, some legacy lists may have multiple allowed parents so the return type of this field is an array.
 */
  "parent_object": string[];
/**
 *  The level of access granted to all members of the workspace for this list. `null` values represent a private list that only grants access to specific workspace members via the `workspace_member_access` property.
 */
  "workspace_access": ("full-access"|"read-and-write"|"read-only");
/**
 *  The level of access granted to specific workspace members for this list. An empty array represents a list that has granted access to no workspace members.
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
/**
 *  The actor which created this list.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  When the list was created.
 */
  "created_at": string;
};

export type IObject = {
  "id": {
    /**
 *  A UUID to identify the workspace this object belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID to identify the object.
 */
  "object_id": string;
    };
/**
 *  A unique, human-readable slug to access the object through URLs and API calls. Formatted in snake case.
 */
  "api_slug": (string|null);
/**
 *  The singular form of the object's name.
 */
  "singular_noun": (string|null);
/**
 *  The plural form of the object's name.
 */
  "plural_noun": (string|null);
/**
 *  When the object was created.
 */
  "created_at": string;
};

export type IObjectView = {
  "id": {
    /**
 *  A UUID identifying the workspace this view belongs to.
 */
  "workspace_id": string;
/**
 *  A UUID identifying the object this view belongs to.
 */
  "object_id": string;
/**
 *  A UUID identifying this view. Use this value as `filter_view_id` when listing records.
 */
  "view_id": string;
    };
/**
 *  The title of the view shown in the Attio app.
 */
  "title": string;
/**
 *  When the view was created.
 */
  "created_at": string;
};

export type IWorkspaceMember = {
  "id": {
    /**
 *  The ID of the workspace the workspace member belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the workspace member.
 */
  "workspace_member_id": string;
    };
/**
 *  The first name of the user.
 */
  "first_name": string;
/**
 *  The last name of the user.
 */
  "last_name": string;
/**
 *  A URL to the user's avatar image.
 */
  "avatar_url": (string|null);
/**
 *  The user's email address.
 */
  "email_address": string;
/**
 *  When the workspace member was created.
 */
  "created_at": string;
/**
 *  Whether the workspace member is suspended or not and what level of privileges they have inside the workspace. We do not delete workspace members so that you can successfully attribute past actions to suspended workspace members.
 */
  "access_level": ("admin"|"member"|"suspended");
};

export type IComment = {
  "id": {
    /**
 *  The ID of the workspace the comment belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the comment.
 */
  "comment_id": string;
    };
/**
 *  The ID of the thread the comment belongs to.
 */
  "thread_id": string;
/**
 *  A plaintext representation of the content of the comment. References to workspace members are cast into email addresses, all other stylistic elements are removed.
 */
  "content_plaintext": string;
/**
 *  The entry the comment belongs to, `null` for comments on records.
 */
  "entry": {
    /**
 *  The ID of the entry the comment belongs to.
 */
  "entry_id": string;
/**
 *  The ID of the list the entry belongs to.
 */
  "list_id": string;
    };
/**
 *  The record the comment belongs to.
 */
  "record": {
    /**
 *  The ID of the record the comment belongs to.
 */
  "record_id": string;
/**
 *  The ID of the object the record belongs to.
 */
  "object_id": string;
    };
/**
 *  Whether the comment is resolved.
 */
  "resolved_at": (string|null);
/**
 *  The actor that resolved this comment.
 */
  "resolved_by": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  When the note was created.
 */
  "created_at": string;
/**
 *  Who wrote this comment. Note that the API provides the ability for API tokens to write comments on behalf of other actors.
 */
  "author": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
};

export type IEmail = {
  "id": {
    /**
 *  The ID of the workspace the email belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the mailbox this copy of the email was read from. A single email sent to several people in your workspace is stored once per mailbox; this endpoint returns one entry per email, so the returned `mailbox_id` identifies whichever copy was readable.
 */
  "mailbox_id": string;
/**
 *  The ID of the Attio email.
 */
  "email_id": string;
    };
/**
 *  Timestamp representing when the email was sent, taken from the email's own headers rather than from when Attio imported it.
 */
  "sent_at": string;
/**
 *  Whether the email was sent from your workspace or received by it.
 */
  "direction": ("inbound"|"outbound");
/**
 *  The subject line of the email. This is `null` when the email has no subject or is from a mailbox shared as metadata only.
 */
  "subject_line": (string|null);
/**
 *  The participants on the email. Note that `bcc` participants are realistically only present on outbound email: inbound messages do not disclose the other recipients' blind copies, so an absent `bcc` participant is not evidence that there was none.
 */
  "participants": {
/**
 *  The role this participant had on the email.
 */
  "role": ("from"|"reply-to"|"to"|"cc"|"bcc");
/**
 *  The normalized email address of the participant.
 */
  "email_address": string;
/**
 *  The domain of the participant's email address.
 */
  "email_domain": string;
/**
 *  The participant's name as it appeared on the email, when the email provided one.
 */
  "name": (string|null);
}[];
/**
 *  The person and company records whose email addresses or domains match this email's participants. Unlike meetings, this link is derived when you make the request rather than stored, so it reflects your records as they are now: creating a person record today will make older emails start reporting it.
 */
  "linked_records": {
/**
 *  The slug of the object the linked record belongs to.
 */
  "object_slug": string;
/**
 *  The ID of the object the linked record belongs to.
 */
  "object_id": string;
/**
 *  The ID of the linked record.
 */
  "record_id": string;
}[];
};

export type IFile = {
  "id": {
    /**
 *  The ID of the workspace the file belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the file entry.
 */
  "file_id": string;
    };
/**
 *  The ID of the object the record belongs to.
 */
  "object_id": string;
/**
 *  The slug of the object the record belongs to.
 */
  "object_slug": string;
/**
 *  The ID of the record the file is linked to.
 */
  "record_id": string;
/**
 *  The storage provider for this file entry.
 */
  "storage_provider": ("attio"|"dropbox"|"box"|"google-drive"|"microsoft-onedrive");
/**
 *  The actor that created this file entry.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Timestamp representing when the file entry was created.
 */
  "created_at": string;
/**
 *  The type of file entry.
 */
  "file_type": "file";
/**
 *  The name of the file.
 */
  "name": string;
/**
 *  The content type of the file.
 */
  "content_type": (string|null);
/**
 *  The size of the file in bytes.
 */
  "content_size": (number|null);
/**
 *  The ID of the parent folder, or null if this is a top-level file.
 */
  "parent_folder_id": (string|null);
};

export type IFolder = {
  "id": {
    /**
 *  The ID of the workspace the file belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the file entry.
 */
  "file_id": string;
    };
/**
 *  The ID of the object the record belongs to.
 */
  "object_id": string;
/**
 *  The slug of the object the record belongs to.
 */
  "object_slug": string;
/**
 *  The ID of the record the file is linked to.
 */
  "record_id": string;
/**
 *  The storage provider for this file entry.
 */
  "storage_provider": ("attio"|"dropbox"|"box"|"google-drive"|"microsoft-onedrive");
/**
 *  The actor that created this file entry.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Timestamp representing when the file entry was created.
 */
  "created_at": string;
/**
 *  The type of file entry.
 */
  "file_type": "folder";
/**
 *  The name of the folder.
 */
  "name": string;
/**
 *  The ID of the parent folder, or null if this is a top-level folder.
 */
  "parent_folder_id": (string|null);
};

export type IConnectedFile = {
  "id": {
    /**
 *  The ID of the workspace the file belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the file entry.
 */
  "file_id": string;
    };
/**
 *  The ID of the object the record belongs to.
 */
  "object_id": string;
/**
 *  The slug of the object the record belongs to.
 */
  "object_slug": string;
/**
 *  The ID of the record the file is linked to.
 */
  "record_id": string;
/**
 *  The storage provider for this file entry.
 */
  "storage_provider": ("attio"|"dropbox"|"box"|"google-drive"|"microsoft-onedrive");
/**
 *  The actor that created this file entry.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Timestamp representing when the file entry was created.
 */
  "created_at": string;
/**
 *  The type of file entry.
 */
  "file_type": "connected-file";
/**
 *  The file ID in the external storage provider.
 */
  "external_provider_file_id": string;
/**
 *  Microsoft drive ID. This field is only populated for `microsoft-onedrive` entries.
 */
  "microsoft_drive_id": (string|null);
};

export type IConnectedFolder = {
  "id": {
    /**
 *  The ID of the workspace the file belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the file entry.
 */
  "file_id": string;
    };
/**
 *  The ID of the object the record belongs to.
 */
  "object_id": string;
/**
 *  The slug of the object the record belongs to.
 */
  "object_slug": string;
/**
 *  The ID of the record the file is linked to.
 */
  "record_id": string;
/**
 *  The storage provider for this file entry.
 */
  "storage_provider": ("attio"|"dropbox"|"box"|"google-drive"|"microsoft-onedrive");
/**
 *  The actor that created this file entry.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  Timestamp representing when the file entry was created.
 */
  "created_at": string;
/**
 *  The type of file entry.
 */
  "file_type": "connected-folder";
/**
 *  The file ID in the external storage provider.
 */
  "external_provider_file_id": string;
/**
 *  Microsoft drive ID. This field is only populated for `microsoft-onedrive` entries.
 */
  "microsoft_drive_id": (string|null);
};

export type IMeeting = {
  "id": {
    /**
 *  The ID of the workspace the meeting belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the Attio meeting.
 */
  "meeting_id": string;
    };
/**
 *  The title of the meeting.
 */
  "title": string;
/**
 *  The description of the meeting.
 */
  "description": string;
/**
 *  Whether or not the meeting is an all day event. All day events may span multiple days.
 */
  "is_all_day": boolean;
  "start": ({
/**
 *  If a non-all day event, a datetime representing when the meeting starts. Datetimes are formatted as UTC if no timezone is available. If a timezone is available, the datetime will offset using the specified timezone.
 */
  "datetime": string;
/**
 *  The IANA timezone in which the meeting starts, if available.
 */
  "timezone": (string|null);
}|{
/**
 *  If an all day event, a date representing when the meeting starts.
 */
  "date": string;
});
  "end": ({
/**
 *  A datetime representing when the meeting ends. All day meetings will return a date whereas non-all day meetings will return a datetime. Datetimes do not include timezone information; please refer to `timezone` for timezone information. Following iCalendar RFC 5545, the `end_at` property is exclusive, meaning that the meeting ends before the specified time, not at it. For example, a one day meeting on June 3rd would have an `end_at` of June 4th, not June 3rd; a one hour meeting starting at 14:00 would have an `end_at` of 15:00, not 14:00.
 */
  "datetime": string;
/**
 *  The IANA timezone in which the meeting ends, if available.
 */
  "timezone": (string|null);
}|{
/**
 *  If an all day event, a date representing when the meeting ends.
 */
  "date": string;
});
  "participants": {
/**
 *  The status of the individual meeting participant.
 */
  "status": ("accepted"|"tentative"|"declined"|"pending");
/**
 *  Whether or not the participant is the organizer of the meeting.
 */
  "is_organizer": boolean;
/**
 *  The normalized email address of the meeting participant.
 */
  "email_address": (string|null);
/**
 *  The participant's name. This is only set when the name was explicitly provided when the participant was created. It is null for any participant identified by an email address — including workspace members and person records — whose display names are not resolved into this field.
 */
  "name": (string|null);
}[];
/**
 *  A list of records that are linked to the meeting. Participants with matching person records are automatically linked to the meeting but other records may also be linked explicitly.
 */
  "linked_records": {
/**
 *  The slug of the object the meeting linked record belongs to.
 */
  "object_slug": string;
/**
 *  The ID of the object the meeting linked record belongs to.
 */
  "object_id": string;
/**
 *  The ID of the meeting linked record.
 */
  "record_id": string;
}[];
/**
 *  Timestamp representing when the meeting was created.
 */
  "created_at": string;
/**
 *  The actor that created this meeting.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
};

export type INote = {
  "id": {
    /**
 *  The ID of the workspace the note belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the note.
 */
  "note_id": string;
    };
/**
 *  The slug or ID of the parent object the note belongs to.
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
 *  The ID of the meeting associated with this note, or null if no meeting is associated.
 */
  "meeting_id": (string|null);
/**
 *  The plaintext representation of the note content. The line feed character `\n` represents new lines within the note content.
 */
  "content_plaintext": string;
/**
 *  The markdown representation of the note content. Supports a subset of markdown features including:
 *  - Headings (levels 1-3 only with `#`, `##`, `###`)
 *  - Unordered lists (`-`, `*`, `+`)
 *  - Ordered lists (`1.`, `2.`, etc.)
 *  - Text styling: `**bold**`, `*italic*`, `~~strikethrough~~`, `==highlighted==`
 *  - Links: `[link text](https://example.com)`
 *  Note that note images are not returned as part of the markdown API representation.
 */
  "content_markdown": string;
/**
 *  An array of records or workspace members that are @-tagged in the note content.
 */
  "tags": ({
/**
 *  The type of entity tagged in the note. Can be either 'workspace-member' or 'record'
 */
  "type": "workspace-member";
/**
 *  The ID of the workspace member that is tagged in the note.
 */
  "workspace_member_id": string;
}|{
/**
 *  The type of entity tagged in the note. Can be either 'workspace-member' or 'record'
 */
  "type": "record";
/**
 *  The slug or ID of the object that the tagged record belongs to.
 */
  "object": string;
/**
 *  The ID of the record that is tagged in the note.
 */
  "record_id": string;
})[];
/**
 *  The actor that created this note.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  When the note was created.
 */
  "created_at": string;
};

export type ITask = {
  "id": {
    /**
 *  The ID of the workspace the task belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the task.
 */
  "task_id": string;
    };
/**
 *  The plaintext representation of the task content. Inline linked records will appear as "@record name" and are returned in the `linked_records` property.
 */
  "content_plaintext": string;
/**
 *  The deadline date of the task. Returned as an ISO 8601 timestamp.
 */
  "deadline_at": (string|null);
/**
 *  Whether the task has been completed.
 */
  "is_completed": boolean;
/**
 *  When the task was completed, or null if it has not been completed.
 */
  "completed_at": (string|null);
/**
 *  Records linked to the task. Creating record links within task content text is not possible via the API at present.
 */
  "linked_records": {
/**
 *  The ID of the parent object the task refers to. At present, only `people` and `companies` are supported.
 */
  "target_object_id": string;
/**
 *  The ID of the parent record the task refers to.
 */
  "target_record_id": string;
}[];
/**
 *  Workspace members assigned to this task.
 */
  "assignees": {
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "referenced_actor_type": ("api-token"|"workspace-member"|"system"|"app");
/**
 *  The ID of the workspace member actor assigned to this task.
 */
  "referenced_actor_id": string;
}[];
/**
 *  The actor that created this task.
 */
  "created_by_actor": {
    /**
 *  An ID to identify the actor.
 */
  "id"?: string | null;
/**
 *  The type of actor. [Read more information on actor types here](/docs/actors).
 */
  "type"?: ("api-token"|"workspace-member"|"system"|"app") | null;
    };
/**
 *  When the task was created.
 */
  "created_at": string;
};

export type IThread = {
  "id": {
    /**
 *  The ID of the workspace the thread belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the thread.
 */
  "thread_id": string;
    };
/**
 *  When the thread was created.
 */
  "created_at": string;
/**
 *  The requested page of comments in the thread, sorted by `created_at`, oldest first. Keep paginating for as long as a `next_cursor` is returned.
 */
  "comments": IComment[];
};

export type IThread_summary = {
  "id": {
    /**
 *  The ID of the workspace the thread belongs to.
 */
  "workspace_id": string;
/**
 *  The ID of the thread.
 */
  "thread_id": string;
    };
/**
 *  When the thread was created.
 */
  "created_at": string;
/**
 *  An array of comments in the thread, sorted by `created_at`. This array may be truncated: check `has_more_comments`.
 */
  "comments": IComment[];
/**
 *  Whether the thread holds comments beyond those returned in `comments`. When `true`, use [Get a thread and its comments](/rest-api/endpoint-reference/threads/get-a-thread-and-its-comments) to page through every comment in the thread.
 */
  "has_more_comments": boolean;
};
