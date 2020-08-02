/* Progress types and other constants */

export const PROGRESS_START = "start";
export const PROGRESS_NOT_STARTED = "not_started";
export const PROGRESS_VALIDATING = "validating";
export const PROGRESS_VALIDATED = "validated";
export const PROGRESS_PROCESSING = "processing";
export const PROGRESS_PROCESSED = "processed";
export const PROGRESS_FAILED = "failed";
export const PROGRESS_UPLOADED = "uploaded";
export const PROGRESS_IN_PROGRESS = "In Progress";
export const PROGRESS_COMPLETE = "completed";
export const PROGRESS_WRITING = "writing";
export const PROGRESS_TIMED_OUT = "timed_out";
export const PROGRESS_WRITER_TIMED_OUT = "writer_timed_out";
export const PROGRESS_WRITTEN = "written";
export const PROGRESS_RECONCILING = "reconciling";
export const PROGRESS_ALL_COMPLETE = "Complete";

export const PROGRESS_PROCESSED_LABEL = "Verify";
export const PROGRESS_COMPLETE_LABEL = "Complete";
export const PROGRESS_RECONCILING_LABEL = "Collecting Results";
export const PROGRESS_WRITING_LABEL = "Writing to CRM";
export const PROGRESS_WRITTEN_LABEL = "Writing";
export const PROGRESS_FAILED_LABEL = "Failed";

export const PROGRESS_IN_PROGRESS_GROUP = [
  PROGRESS_START,
  PROGRESS_NOT_STARTED,
  PROGRESS_VALIDATING,
  PROGRESS_PROCESSING,
  PROGRESS_UPLOADED,
  PROGRESS_WRITING,
  PROGRESS_WRITTEN
];

export const PROGRESS_ALL_COMPLETE_GROUP = [
  PROGRESS_COMPLETE,
  PROGRESS_RECONCILING
];

export const PROGRESS_ENUMS = {
  400: PROGRESS_NOT_STARTED,
  401: PROGRESS_UPLOADED,
  402: PROGRESS_VALIDATING,
  403: PROGRESS_VALIDATED,
  404: PROGRESS_PROCESSING,
  405: PROGRESS_PROCESSED,
  408: PROGRESS_COMPLETE,
  409: PROGRESS_FAILED,
  410: PROGRESS_WRITING,
  411: PROGRESS_WRITTEN,
  412: PROGRESS_RECONCILING
};

// presult
export const PRESULT_PENDING = "pending";
export const PRESULT_SUCCESS = "success";
export const PRESULT_FAILURE = "fail";
export const PRESULT_UNPROCESSED = "unprocessed";
export const PRESULT_CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY =
  "cannot insert/update";
export const PRESULT_DUPLICATE_VALUE = "duplicate value";
export const PRESULT_FIELD_CUSTOM_VALIDATION_EXCEPTION =
  "custom field validation exception";
export const PRESULT_INACTIVE_OWNER_OR_USER = "inactive owner/user";
export const PRESULT_INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY =
  "insufficient access (CRE)";
export const PRESULT_INSUFFICIENT_ACCESS_OR_READONLY =
  "insufficient access (RO)";
export const PRESULT_INVALID_CROSS_REFERENCE_KEY = "invalid cross ref key";
export const PRESULT_INVALID_FIELD = "invalid field";
export const PRESULT_INVALID_FIELD_FOR_INSERT_UPDATE =
  "invalid field for insert/update";
export const PRESULT_INVALID_ID_FIELD = "invalid id field";
export const PRESULT_UNABLE_TO_LOCK_ROW = "unable to lock row";
export const PRESULT_UNKNOWN_EXCEPTION = "unknown exception";

// vresult
export const RESULT_PENDING = "pending";
export const RESULT_SUCCESS = "success";
export const RESULT_ACCOUNT_HEADER_ERROR = "account header error";
export const RESULT_ACCOUNT_ID_PATTERN_ERROR = "account id pattern error";
export const RESULT_INVALID_ACCOUNT = "invalid account";
export const RESULT_USER_HEADER_ERROR = "user header error";
export const RESULT_USER_ID_PATTERN_ERROR = "user id pattern error";
export const RESULT_INVALID_OLD_USER = "invalid old user";
export const RESULT_INVALID_USER = "invalid user";
export const RESULT_INACTIVE_USER = "inactive user";
export const RESULT_USER_ROLE_ERROR = "user role error";
export const RESULT_RAMP_ERROR = "ramp error";
export const RESULT_MULTIPLE_MEMBERS_FOUND_ERROR = "multiple members found";
export const RESULT_MEMBER_NOT_FOUND_ERROR = "member not found";
export const RESULT_UNKNOWN_ERROR = "unknown error";
export const RESULT_HAS_OPPORTUNITIES_ALERT = "has opportunities";
export const RESULT_HAS_TASKS_ALERT = "has tasks";
export const RESULT_DUPLICATE_ROW_ERROR = "duplicate request error";
export const RESULT_MEMBER_ALREADY_EXISTS_ERROR = "member already exists";

export const RESULT_ENUMS = {
  200: RESULT_PENDING,
  201: RESULT_SUCCESS,
  202: RESULT_HAS_OPPORTUNITIES_ALERT,
  203: RESULT_HAS_TASKS_ALERT,
  221: RESULT_ACCOUNT_HEADER_ERROR,
  222: RESULT_ACCOUNT_ID_PATTERN_ERROR,
  223: RESULT_INVALID_ACCOUNT,
  224: RESULT_USER_HEADER_ERROR,
  225: RESULT_USER_ID_PATTERN_ERROR,
  226: RESULT_INVALID_OLD_USER,
  227: RESULT_INVALID_USER,
  228: RESULT_INACTIVE_USER,
  229: RESULT_USER_ROLE_ERROR,
  230: RESULT_RAMP_ERROR,
  250: RESULT_UNKNOWN_ERROR,
  231: RESULT_MULTIPLE_MEMBERS_FOUND_ERROR,
  232: RESULT_MEMBER_NOT_FOUND_ERROR,
  233: RESULT_DUPLICATE_ROW_ERROR,
  234: RESULT_MEMBER_ALREADY_EXISTS_ERROR,
  300: PRESULT_PENDING,
  301: PRESULT_SUCCESS,
  302: PRESULT_FAILURE,
  303: PRESULT_UNPROCESSED,
  310: PRESULT_CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY,
  311: PRESULT_DUPLICATE_VALUE,
  312: PRESULT_FIELD_CUSTOM_VALIDATION_EXCEPTION,
  313: PRESULT_INACTIVE_OWNER_OR_USER,
  314: PRESULT_INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY,
  315: PRESULT_INSUFFICIENT_ACCESS_OR_READONLY,
  316: PRESULT_INVALID_CROSS_REFERENCE_KEY,
  317: PRESULT_INVALID_FIELD,
  318: PRESULT_INVALID_FIELD_FOR_INSERT_UPDATE,
  319: PRESULT_INVALID_ID_FIELD,
  320: PRESULT_UNABLE_TO_LOCK_ROW,
  321: PRESULT_UNKNOWN_EXCEPTION
};

export const RESULT_ENUMS_KEYS = {
  [RESULT_PENDING]: 200,
  [RESULT_SUCCESS]: 201,
  [RESULT_HAS_OPPORTUNITIES_ALERT]: 202,
  [RESULT_HAS_TASKS_ALERT]: 203,
  [RESULT_ACCOUNT_HEADER_ERROR]: 221,
  [RESULT_ACCOUNT_ID_PATTERN_ERROR]: 222,
  [RESULT_INVALID_ACCOUNT]: 223,
  [RESULT_USER_HEADER_ERROR]: 224,
  [RESULT_USER_ID_PATTERN_ERROR]: 225,
  [RESULT_INVALID_OLD_USER]: 226,
  [RESULT_INVALID_USER]: 227,
  [RESULT_INACTIVE_USER]: 228,
  [RESULT_USER_ROLE_ERROR]: 229,
  [RESULT_RAMP_ERROR]: 230,
  [RESULT_UNKNOWN_ERROR]: 250,
  [RESULT_MULTIPLE_MEMBERS_FOUND_ERROR]: 231,
  [RESULT_MEMBER_NOT_FOUND_ERROR]: 232,
  [RESULT_DUPLICATE_ROW_ERROR]: 233,
  [RESULT_MEMBER_ALREADY_EXISTS_ERROR]: 234,
  [PRESULT_PENDING]: 300,
  [PRESULT_SUCCESS]: 301,
  [PRESULT_FAILURE]: 302,
  [PRESULT_UNPROCESSED]: 303,
  [PRESULT_CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY]: 310,
  [PRESULT_DUPLICATE_VALUE]: 311,
  [PRESULT_FIELD_CUSTOM_VALIDATION_EXCEPTION]: 312,
  [PRESULT_INACTIVE_OWNER_OR_USER]: 313,
  [PRESULT_INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY]: 314,
  [PRESULT_INSUFFICIENT_ACCESS_OR_READONLY]: 315,
  [PRESULT_INVALID_CROSS_REFERENCE_KEY]: 316,
  [PRESULT_INVALID_FIELD]: 317,
  [PRESULT_INVALID_FIELD_FOR_INSERT_UPDATE]: 318,
  [PRESULT_INVALID_ID_FIELD]: 319,
  [PRESULT_UNABLE_TO_LOCK_ROW]: 320,
  [PRESULT_UNKNOWN_EXCEPTION]: 321
};

export const RESULT_ENUMS_CAUSES = {
  [RESULT_PENDING]: "The line has not been validated",
  [RESULT_SUCCESS]: "The line was validated successfully",
  [RESULT_HAS_OPPORTUNITIES_ALERT]:
    "User requests for team member delete who has Open tasks assigned",
  [RESULT_HAS_TASKS_ALERT]:
    "User requests for team member delete who has Open tasks assigned",
  [RESULT_ACCOUNT_HEADER_ERROR]:
    "The header in the csv is not in compliance with the template",
  [RESULT_ACCOUNT_ID_PATTERN_ERROR]:
    "Account ID added in the file is incorrect",
  [RESULT_INVALID_ACCOUNT]: "The account may not exist in the system",
  [RESULT_USER_HEADER_ERROR]:
    "The header in the csv is not in compliance with the template",
  [RESULT_USER_ID_PATTERN_ERROR]: "User ID added in the file is incorrect",
  [RESULT_INVALID_OLD_USER]: "The current user may not exist",
  [RESULT_INVALID_USER]: "User ID added in the file is incorrect",
  [RESULT_INACTIVE_USER]: "User is inactive to whom the accounts are assigned",
  [RESULT_USER_ROLE_ERROR]: "Could not determine the user role",
  [RESULT_RAMP_ERROR]:
    "Either the Old User or New User are not ramped to Dynamics",
  [RESULT_UNKNOWN_ERROR]: "An unknown error has occurred",
  [RESULT_MULTIPLE_MEMBERS_FOUND_ERROR]:
    "Multiple users found on the Account Team with same role",
  [RESULT_MEMBER_NOT_FOUND_ERROR]:
    "Delete cannot be processed as Rep is not assigned to the Account Team",
  [RESULT_DUPLICATE_ROW_ERROR]:
    "Uploaded file contains duplicate records for Account - User combination",
  [PRESULT_PENDING]: "The line has not been processed",
  [PRESULT_SUCCESS]: "The line was processed successfully",
  [PRESULT_FAILURE]: "The line failed while processing",
  [PRESULT_UNPROCESSED]: "The line has not been processed yet",
  [PRESULT_CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY]:
    "Unable to complete transaction in Salesforce due to field validations",
  [PRESULT_DUPLICATE_VALUE]:
    "Uploaded file contains duplicate records for Account - User combination",
  [PRESULT_FIELD_CUSTOM_VALIDATION_EXCEPTION]:
    "Unable to complete transaction in Salesforce due to field validations",
  [PRESULT_INACTIVE_OWNER_OR_USER]:
    "User is inactive to whom the accounts are assigned",
  [PRESULT_INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY]:
    "User is inactive to whom the accounts are assigned",
  [PRESULT_INSUFFICIENT_ACCESS_OR_READONLY]:
    "User is inactive to whom the accounts are assigned",
  [PRESULT_INVALID_CROSS_REFERENCE_KEY]:
    "Unable to delete account team member as user is already deleted",
  [PRESULT_INVALID_FIELD]: "Cosmos DB error related to field",
  [PRESULT_INVALID_FIELD_FOR_INSERT_UPDATE]:
    "Cosmos DB error related to insert/update",
  [PRESULT_INVALID_ID_FIELD]: "Cosmos DB error related to id",
  [PRESULT_UNABLE_TO_LOCK_ROW]:
    "Multiple processes are trying to update the account at the same time",
  [PRESULT_UNKNOWN_EXCEPTION]:
    "Unable to complete transaction in Salesforce due to unknown exceptions",
  [RESULT_MEMBER_ALREADY_EXISTS_ERROR]:
    "The user already exists as an account team member"
};

export const RESULT_ENUMS_FIXES = {
  [RESULT_HAS_OPPORTUNITIES_ALERT]:
    "Warning message. Fix the data by transferring the opportunities to another rep in Salesforce",
  [RESULT_HAS_TASKS_ALERT]:
    "Warning message. Fix the data by transferring the tasks to another rep in Salesforce",
  [RESULT_ACCOUNT_HEADER_ERROR]: "Fix the account header",
  [RESULT_ACCOUNT_ID_PATTERN_ERROR]:
    "Confirm that the Account ID in the file is correct and exists in Salesforce",
  [RESULT_INVALID_ACCOUNT]:
    "Please confirm that the account exists in Salesforce. If it does, reach out the datachef team",
  [RESULT_USER_HEADER_ERROR]: "Fix the user header",
  [RESULT_USER_ID_PATTERN_ERROR]:
    "Confirm that the User ID in the file is correct and exists in Salesforce",
  [RESULT_INVALID_OLD_USER]:
    "Please confirm that the current user exists in Salesforce. If it does, reach out the datachef team",
  [RESULT_INVALID_USER]:
    "Confirm that the User ID in the file is correct and exists in Salesforce",
  [RESULT_INACTIVE_USER]: "Confirm that the User is active in Salesforce",
  [RESULT_USER_ROLE_ERROR]: "Reach out to Data Chef team",
  [RESULT_RAMP_ERROR]: "Confirm that the user is ramped to Dynamics",
  [RESULT_UNKNOWN_ERROR]: "Reach out to Data Chef team",
  [RESULT_MULTIPLE_MEMBERS_FOUND_ERROR]:
    "Fix the Account Team data in Salesforce or re-upload the file with Old user id added",
  [RESULT_MEMBER_NOT_FOUND_ERROR]:
    "Fix the Account Team data in Salesforce or re-upload the file with Old user id added",
  [RESULT_DUPLICATE_ROW_ERROR]:
    "The first record would be successful, others would be flagged with error",
  [PRESULT_FAILURE]: "Reach out to Data Chef team",
  [PRESULT_CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY]: "Reach out to Data Chef team",
  [PRESULT_DUPLICATE_VALUE]: "Reach out to Data Chef team",
  [PRESULT_FIELD_CUSTOM_VALIDATION_EXCEPTION]: "Reach out to Data Chef team",
  [PRESULT_INACTIVE_OWNER_OR_USER]:
    "Confirm that the User is active in Salesforce",
  [PRESULT_INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY]:
    "Reach out to Data Chef team",
  [PRESULT_INSUFFICIENT_ACCESS_OR_READONLY]: "Reach out to Data Chef team",
  [PRESULT_INVALID_CROSS_REFERENCE_KEY]: "Reach out to Data Chef team",
  [PRESULT_INVALID_FIELD]: "Reach out to Data Chef team",
  [PRESULT_INVALID_FIELD_FOR_INSERT_UPDATE]: "Reach out to Data Chef team",
  [PRESULT_INVALID_ID_FIELD]: "Reach out to Data Chef team",
  [PRESULT_UNABLE_TO_LOCK_ROW]: "re-upload only the error records",
  [PRESULT_UNKNOWN_EXCEPTION]: "Reach out to Data Chef team",
  [RESULT_MEMBER_ALREADY_EXISTS_ERROR]: "You can ignore this request"
};

export const RESULT_ALL_FAILED_RAND = [
  RESULT_INVALID_ACCOUNT,
  RESULT_INVALID_USER,
  RESULT_INACTIVE_USER,
  RESULT_USER_ROLE_ERROR,
  RESULT_RAMP_ERROR,
  RESULT_MULTIPLE_MEMBERS_FOUND_ERROR,
  RESULT_MEMBER_NOT_FOUND_ERROR,
  RESULT_DUPLICATE_ROW_ERROR,
  RESULT_UNKNOWN_ERROR
];

export const RESULT_ALL_FAILED = [
  RESULT_ACCOUNT_HEADER_ERROR,
  RESULT_ACCOUNT_ID_PATTERN_ERROR,
  RESULT_INVALID_ACCOUNT,
  RESULT_USER_HEADER_ERROR,
  RESULT_USER_ID_PATTERN_ERROR,
  RESULT_INVALID_OLD_USER,
  RESULT_INVALID_USER,
  RESULT_INACTIVE_USER,
  RESULT_USER_ROLE_ERROR,
  RESULT_RAMP_ERROR,
  RESULT_MULTIPLE_MEMBERS_FOUND_ERROR,
  RESULT_MEMBER_NOT_FOUND_ERROR,
  RESULT_DUPLICATE_ROW_ERROR,
  RESULT_UNKNOWN_ERROR,
  PRESULT_FAILURE,
  PRESULT_UNPROCESSED,
  PRESULT_CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY,
  PRESULT_DUPLICATE_VALUE,
  PRESULT_FIELD_CUSTOM_VALIDATION_EXCEPTION,
  PRESULT_INACTIVE_OWNER_OR_USER,
  PRESULT_INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY,
  PRESULT_INSUFFICIENT_ACCESS_OR_READONLY,
  PRESULT_INVALID_CROSS_REFERENCE_KEY,
  PRESULT_INVALID_FIELD,
  PRESULT_INVALID_FIELD_FOR_INSERT_UPDATE,
  PRESULT_INVALID_ID_FIELD,
  PRESULT_UNABLE_TO_LOCK_ROW,
  PRESULT_UNKNOWN_EXCEPTION,
  RESULT_MEMBER_ALREADY_EXISTS_ERROR
];

export const RESULT_ALL_WARNINGS = [
  RESULT_HAS_OPPORTUNITIES_ALERT,
  RESULT_HAS_TASKS_ALERT
];

export const RESULT_ALL_SUCCESS = [
  RESULT_SUCCESS,
  PRESULT_SUCCESS,
  ...RESULT_ALL_WARNINGS
];

export const STATUS_FAIL = "fail";
export const STATUS_SUCCESS = "success";
export const STATUS_PENDING = "pending";

export const PROGRESS_MAX_ATTEMPTS = 3;
export const PROGRESS_FILE_CHUNK_SIZE = 10000000; // bytes 10 mb
export const PROGRESS_FILE_MAX_SIZE = 189000000; // bytes 189 mb
export const FILE_LINE_SPLIT_AMT = 500; // 50k results: 10000 per request (2 min or 1 min 57 sec), 5000 per request (2 min 5 sec), 20000 (1 min 57)

export const DESCRIPTION_TYPE_EXCLUSION = "exclusion";
export const DESCRIPTION_TYPE_MASS_TRANSFER = "mass_transfer";
export const DESCRIPTION_TYPE_DELETE = "delete";
export const DESCRIPTION_TYPE_REMOVE_USERS = "remove_users";
export const DESCRIPTION_TYPE_CANCEL_UPLOAD = "cancel_upload";
export const DESCRIPTION_TYPE_VALIDATE = "validate";
export const DESCRIPTION_TYPE_FAILURES = "failures";

export const DATA_TYPE_FILE = "file";
export const DATA_TYPE_VALIDATED = "validated";
export const DATA_TYPE_PROCESSED = "complete";

export const FILE_UPLOADING = "file_uploading";

export const UPLOAD_SOURCE_MASS_TRANSFER = "MASS_TRANSFER";
export const UPLOAD_SOURCE_BACKUP_PLAN = "SINGLE_TRANSFER";
export const UPLOAD_SOURCE_LMS_MASS_TRANSFER = "LMS_MASS_TRANSFER";
export const UPLOAD_SOURCE_LMS_BACKUP_PLAN = "LMS_SINGLE_TRANSFER";

export const UPLOAD_LABELS = {
  [UPLOAD_SOURCE_MASS_TRANSFER]: "Mass Upload",
  [UPLOAD_SOURCE_BACKUP_PLAN]: "Single Transfer",
  [UPLOAD_SOURCE_LMS_MASS_TRANSFER]: "LMS Mass Upload",
  [UPLOAD_SOURCE_LMS_BACKUP_PLAN]: "LMS Single Transfer"
};

export const DESCRIPTION_TYPE_LMS_TRANSFER = "lms_transfer";
export const TRANSFER_TYPE_ACCOUNT = "account";
export const TRANSFER_TYPE_LMS = "lms";
export const TRANSFER_TYPE_LABEL = {
  [TRANSFER_TYPE_ACCOUNT]: "Account Transfer",
  [TRANSFER_TYPE_LMS]: "LMS Transfer"
};
