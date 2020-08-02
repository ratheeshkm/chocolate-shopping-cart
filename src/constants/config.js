export const ENV = "LOCAL";
export const CONFIG = {
  ENV,
  ENV_KEYS: {
    ENV_LOCAL: "LOCAL",
    ENV_TEST: "TEST",
    ENV_UAT: "UAT",
    ENV_PROD: "PROD"
  },
  BACKEND_URL: "https://datachef.azure-api.net/bullet/api",
  UPLOAD_URL: "https://datachef.azure-api.net/bullet/api",
  BACKEND_HEADER: {
    "Content-Type": "application/json",
    Host: "datachef.azure-api.net",
    "Ocp-Apim-Subscription-Key": "f1137b2322124cc89215b1f1872a3f9d",
    "Ocp-Apim-Trace": true
  },

  APP_NAME: "DataChef",
  SUPPORT_EMAIL: "ask-datachef@linkedin.com",
  DOC_PAGE: "https://iwww.corp.linkedin.com/wiki/cf/display/ENGS/Datachef",

  SERVER_DATE_FORMAT: "yyyy-MM-dd",
  UI_DATE_FORMAT: "MM/dd/yyyy",

  AD_INFO: {
    appId: "62781feb-7eac-41ec-87e8-5c695b9f3c5a",
    redirectUri: "https://localhost:3000/",
    postLogoutRedirectUri: "https://localhost:3000/account/login",
    authority:
      "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47",
    scopes: ["user.read"]
  }
};
