!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tcboauth",[],t):"object"==typeof exports?exports.tcboauth=t():e.tcboauth=t()}("undefined"!=typeof window?window:this,()=>(()=>{"use strict";var e={3:(e,t,r)=>{r.r(t),r.d(t,{getEncryptInfo:()=>o});const n=void 0;var i=r(912),o=function(){var{publicKey:e="",payload:t={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e)return"";try{var r=(0,i.I)(t),o=new n;o.setPublicKey(e);var a=o.encryptLong("object"==typeof r?JSON.stringify(r):r);return a}catch(e){console.error("encrypt error:",e)}return""}},912:(e,t,r)=>{r.d(t,{I:()=>n,y:()=>i});var n=e=>{var t=t=>{for(var r in e)e.hasOwnProperty(r)&&(t[r]=n(e[r]));return t},r=null==e?"NullOrUndefined":Object.prototype.toString.call(e).slice(8,-1);if(["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array"].includes(r))return e.slice();switch(r){case"Object":return t(Object.create(Object.getPrototypeOf(e)));case"Array":return t([]);case"Date":return new Date(e.valueOf());case"RegExp":return new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":""));default:return e}},i=e=>{var t=e.match(/^(?:http(s)?:\/\/[^\/]+)?(\/[^\?#]*)/);return t&&t[2]||""}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{Auth:()=>H,CloudbaseOAuth:()=>F,authModels:()=>s});var e,t,i,o,a,s={};function c(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,e=>{var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}r.r(s),function(e){e.AUTH_SIGN_UP_URL="/auth/v1/signup",e.AUTH_TOKEN_URL="/auth/v1/token",e.AUTH_REVOKE_URL="/auth/v1/revoke",e.WEDA_USER_URL="/auth/v1/plugin/weda/userinfo",e.AUTH_RESET_PASSWORD="/auth/v1/reset",e.AUTH_GET_DEVICE_CODE="/auth/v1/device/code",e.CHECK_USERNAME="/auth/v1/checkUsername",e.CHECK_IF_USER_EXIST="/auth/v1/checkIfUserExist",e.GET_PROVIDER_TYPE="/auth/v1/mgr/provider/providerSubType",e.AUTH_SIGN_IN_URL="/auth/v1/signin",e.AUTH_SIGN_IN_ANONYMOUSLY_URL="/auth/v1/signin/anonymously",e.AUTH_SIGN_IN_WITH_PROVIDER_URL="/auth/v1/signin/with/provider",e.AUTH_SIGN_IN_WITH_WECHAT_URL="/auth/v1/signin/wechat/noauth",e.AUTH_SIGN_IN_CUSTOM="/auth/v1/signin/custom",e.PROVIDER_TOKEN_URL="/auth/v1/provider/token",e.PROVIDER_URI_URL="/auth/v1/provider/uri",e.USER_ME_URL="/auth/v1/user/me",e.AUTH_SIGNOUT_URL="/auth/v1/user/signout",e.USER_QUERY_URL="/auth/v1/user/query",e.USER_PRIFILE_URL="/auth/v1/user/profile",e.USER_BASIC_EDIT_URL="/auth/v1/user/basic/edit",e.USER_TRANS_BY_PROVIDER_URL="/auth/v1/user/trans/by/provider",e.PROVIDER_LIST="/auth/v1/user/provider",e.PROVIDER_BIND_URL="/auth/v1/user/provider/bind",e.PROVIDER_UNBIND_URL="/auth/v1/user/provider",e.CHECK_PWD_URL="/auth/v1/user/sudo",e.SUDO_URL="/auth/v1/user/sudo",e.BIND_CONTACT_URL="/auth/v1/user/contact",e.AUTH_SET_PASSWORD="/auth/v1/user/password",e.AUTHORIZE_DEVICE_URL="/auth/v1/user/device/authorize",e.AUTHORIZE_URL="/auth/v1/user/authorize",e.AUTHORIZE_INFO_URL="/auth/v1/user/authorize/info",e.AUTHORIZED_DEVICES_DELETE_URL="/auth/v1/user/authorized/devices/",e.AUTH_REVOKE_ALL_URL="/auth/v1/user/revoke/all",e.GET_USER_BEHAVIOR_LOG="/auth/v1/user/security/history",e.VERIFICATION_URL="/auth/v1/verification",e.VERIFY_URL="/auth/v1/verification/verify",e.CAPTCHA_DATA_URL="/auth/v1/captcha/data",e.VERIFY_CAPTCHA_DATA_URL="/auth/v1/captcha/data/verify",e.GET_CAPTCHA_URL="/auth/v1/captcha/init",e.GET_MINIPROGRAM_QRCODE="/auth/v1/qrcode/generate",e.GET_MINIPROGRAM_QRCODE_STATUS="/auth/v1/qrcode/get/status"}(e||(e={})),function(e){e.AUTH_SIGN_IN_URL="/auth/v2/signin/username",e.AUTH_TOKEN_URL="/auth/v2/token",e.USER_ME_URL="/auth/v2/user/me",e.VERIFY_URL="/auth/v2/signin/verificationcode",e.AUTH_SIGN_IN_WITH_PROVIDER_URL="/auth/v2/signin/with/provider",e.AUTH_PUBLIC_KEY="/auth/v2/signin/publichkey",e.AUTH_RESET_PASSWORD="/auth/v2/signin/password/update"}(t||(t={})),function(e){e.REGISTER="REGISTER",e.SIGN_IN="SIGN_IN",e.PASSWORD_RESET="PASSWORD_RESET",e.EMAIL_ADDRESS_CHANGE="EMAIL_ADDRESS_CHANGE",e.PHONE_NUMBER_CHANGE="PHONE_NUMBER_CHANGE"}(i||(i={})),function(e){e.UNREACHABLE="unreachable",e.LOCAL="local",e.CANCELLED="cancelled",e.UNKNOWN="unknown",e.UNAUTHENTICATED="unauthenticated",e.RESOURCE_EXHAUSTED="resource_exhausted",e.FAILED_PRECONDITION="failed_precondition",e.INVALID_ARGUMENT="invalid_argument",e.DEADLINE_EXCEEDED="deadline_exceeded",e.NOT_FOUND="not_found",e.ALREADY_EXISTS="already_exists",e.PERMISSION_DENIED="permission_denied",e.ABORTED="aborted",e.OUT_OF_RANGE="out_of_range",e.UNIMPLEMENTED="unimplemented",e.INTERNAL="internal",e.UNAVAILABLE="unavailable",e.DATA_LOSS="data_loss",e.INVALID_PASSWORD="invalid_password",e.PASSWORD_NOT_SET="password_not_set",e.INVALID_STATUS="invalid_status",e.USER_PENDING="user_pending",e.USER_BLOCKED="user_blocked",e.INVALID_VERIFICATION_CODE="invalid_verification_code",e.TWO_FACTOR_REQUIRED="two_factor_required",e.INVALID_TWO_FACTOR="invalid_two_factor",e.INVALID_TWO_FACTOR_RECOVERY="invalid_two_factor_recovery",e.UNDER_REVIEW="under_review",e.INVALID_REQUEST="invalid_request",e.UNAUTHORIZED_CLIENT="unauthorized_client",e.ACCESS_DENIED="access_denied",e.UNSUPPORTED_RESPONSE_TYPE="unsupported_response_type",e.INVALID_SCOPE="invalid_scope",e.INVALID_GRANT="invalid_grant",e.SERVER_ERROR="server_error",e.TEMPORARILY_UNAVAILABLE="temporarily_unavailable",e.INTERACTION_REQUIRED="interaction_required",e.LOGIN_REQUIRED="login_required",e.ACCOUNT_SELECTION_REQUIRED="account_selection_required",e.CONSENT_REQUIRED="consent_required",e.INVALID_REQUEST_URI="invalid_request_uri",e.INVALID_REQUEST_OBJECT="invalid_request_object",e.REQUEST_NOT_SUPPORTED="request_not_supported",e.REQUEST_URI_NOT_SUPPORTED="request_uri_not_supported",e.REGISTRATION_NOT_SUPPORTED="registration_not_supported",e.CAPTCHA_REQUIRED="captcha_required",e.CAPTCHA_INVALID="captcha_invalid"}(o||(o={})),function(e){e.CLIENT_ID="client_id",e.CLIENT_SECRET="client_secret",e.RESPONSE_TYPE="response_type",e.SCOPE="scope",e.STATE="state",e.REDIRECT_URI="redirect_uri",e.ERROR="error",e.ERROR_DESCRIPTION="error_description",e.ERROR_URI="error_uri",e.GRANT_TYPE="grant_type",e.CODE="code",e.ACCESS_TOKEN="access_token",e.TOKEN_TYPE="token_type",e.EXPIRES_IN="expires_in",e.USERNAME="username",e.PASSWORD="password",e.REFRESH_TOKEN="refresh_token"}(a||(a={}));var u=r(912);function d(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){d(o,n,i,a,s,"next",e)}function s(e){d(o,n,i,a,s,"throw",e)}a(void 0)}))}}class h{constructor(e){this.clientId=(null==e?void 0:e.clientId)||"",globalThis.jsSdkFnPromiseMap=globalThis.jsSdkFnPromiseMap||new Map}run(e,t){var r=this;return l((function*(){e="".concat(r.clientId,"_").concat(e);var n=globalThis.jsSdkFnPromiseMap.get(e);return n||(n=new Promise((n,i)=>{l((function*(){try{yield r.runIdlePromise();var o=t();n(yield o)}catch(e){i(e)}finally{globalThis.jsSdkFnPromiseMap.delete(e)}}))()}),globalThis.jsSdkFnPromiseMap.set(e,n)),n}))()}runIdlePromise(){return Promise.resolve()}}var _="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){y(o,n,i,a,s,"next",e)}function s(e){y(o,n,i,a,s,"throw",e)}a(void 0)}))}}var E=function(){var e=g((function*(e,t){var r=null,n=null;try{var i=Object.assign({},t);i.method||(i.method="GET"),i.body&&"string"!=typeof i.body&&(i.body=JSON.stringify(i.body));var a=yield fetch(e,i),s=yield a.json();null!=s&&s.error?(n=s).error_uri=new URL(e).pathname:r=s}catch(t){n={error:o.UNREACHABLE,error_description:t.message,error_uri:new URL(e).pathname}}if(n)throw n;return r}));return function(t,r){return e.apply(this,arguments)}}();var m=new class{constructor(e){this._env=(null==e?void 0:e.env)||""}getItem(e){var t=this;return g((function*(){return window.localStorage.getItem("".concat(e).concat(t._env))}))()}removeItem(e){var t=this;return g((function*(){window.localStorage.removeItem("".concat(e).concat(t._env))}))()}setItem(e,t){var r=this;return g((function*(){window.localStorage.setItem("".concat(e).concat(r._env),t)}))()}getItemSync(e){return window.localStorage.getItem("".concat(e).concat(this._env))}removeItemSync(e){window.localStorage.removeItem("".concat(e).concat(this._env))}setItemSync(e,t){window.localStorage.setItem("".concat(e).concat(this._env),t)}};function I(e){var t=!0;return null!=e&&e.expires_at&&null!=e&&e.access_token&&(t=e.expires_at<new Date),t}class R{constructor(e){this.credentials=null,this.singlePromise=null,this.tokenSectionName=e.tokenSectionName,this.storage=e.storage,this.clientId=e.clientId,this.singlePromise=new h({clientId:this.clientId})}getStorageCredentialsSync(){var e=null,t=this.storage.getItemSync(this.tokenSectionName);if(null!=t)try{var r;null!==(r=e=JSON.parse(t))&&void 0!==r&&r.expires_at&&(e.expires_at=new Date(e.expires_at))}catch(t){this.storage.removeItem(this.tokenSectionName),e=null}return e}setCredentials(e){var t=this;return g((function*(){if(null!=e&&e.expires_in){if(null!=e&&e.expires_at||(e.expires_at=new Date(Date.now()+1e3*(e.expires_in-30))),t.storage){var r=JSON.stringify(e);yield t.storage.setItem(t.tokenSectionName,r)}t.credentials=e}else t.storage&&(yield t.storage.removeItem(t.tokenSectionName)),t.credentials=null}))()}getCredentials(){var e=this;return g((function*(){return e.singlePromise.run("getCredentials",g((function*(){return I(e.credentials)&&(e.credentials=yield e.getStorageCredentials()),e.credentials})))}))()}getStorageCredentials(){var e=this;return g((function*(){return e.singlePromise.run("_getStorageCredentials",g((function*(){var t=null,r=yield e.storage.getItem(e.tokenSectionName);if(null!=r)try{var n;null!==(n=t=JSON.parse(r))&&void 0!==n&&n.expires_at&&(t.expires_at=new Date(t.expires_at))}catch(r){yield e.storage.removeItem(e.tokenSectionName),t=null}return t})))}))()}}class T{constructor(e){this.singlePromise=null,e.clientSecret||(e.clientSecret=""),!e.clientId&&e.env&&(e.clientId=e.env),this.apiOrigin=e.apiOrigin,this.clientId=e.clientId,this.singlePromise=new h({clientId:this.clientId}),this.retry=this.formatRetry(e.retry,T.defaultRetry),e.baseRequest?this.baseRequest=e.baseRequest:this.baseRequest=E,this.tokenInURL=e.tokenInURL,this.headers=e.headers,this.storage=e.storage||m,this.localCredentials=new R({tokenSectionName:"credentials_".concat(e.clientId),storage:this.storage,clientId:e.clientId}),this.clientSecret=e.clientSecret,e.clientId&&(this.basicAuth="Basic ".concat(function(e){for(var t,r,n,i,o="",a=0,s=(e=String(e)).length%3;a<e.length;){if((r=e.charCodeAt(a++))>255||(n=e.charCodeAt(a++))>255||(i=e.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");o+=_.charAt((t=r<<16|n<<8|i)>>18&63)+_.charAt(t>>12&63)+_.charAt(t>>6&63)+_.charAt(63&t)}return s?o.slice(0,s-3)+"===".substring(s):o}("".concat(e.clientId,":").concat(this.clientSecret)))),this.wxCloud=e.wxCloud;try{(function(){if("undefined"==typeof wx)return!1;if("undefined"==typeof Page)return!1;if(!wx.getSystemInfoSync)return!1;if(!wx.getStorageSync)return!1;if(!wx.setStorageSync)return!1;if(!wx.connectSocket)return!1;if(!wx.request)return!1;try{if(!wx.getSystemInfoSync())return!1;if("qq"===wx.getSystemInfoSync().AppPlatform)return!1}catch(e){return!1}return!0})()&&void 0===this.wxCloud&&e.env&&(wx.cloud.init({env:e.env}),this.wxCloud=wx.cloud)}catch(e){}this.refreshTokenFunc=e.refreshTokenFunc||this.defaultRefreshTokenFunc,this.anonymousSignInFunc=e.anonymousSignInFunc}setCredentials(e){return this.localCredentials.setCredentials(e)}getAccessToken(){var e=this;return g((function*(){var t=yield e.getCredentials();if(null!=t&&t.access_token)return Promise.resolve(t.access_token);var r={error:o.UNAUTHENTICATED};return Promise.reject(r)}))()}request(e,t){var r=this;return g((function*(){var n,i;t||(t={});var a=r.formatRetry(t.retry,r.retry);if(t.headers=t.headers||{},r.headers&&(t.headers=f(f({},r.headers),t.headers)),t.headers["x-request-id"]||(t.headers["x-request-id"]=c()),!t.headers["x-device-id"]){var s=yield r.getDeviceId();t.headers["x-device-id"]=s}if(null!==(n=t)&&void 0!==n&&n.withBasicAuth&&r.basicAuth&&(t.headers.Authorization=r.basicAuth),null!==(i=t)&&void 0!==i&&i.withCredentials){var u=yield r.getCredentials();u&&(r.tokenInURL?(e.indexOf("?")<0&&(e+="?"),e+="access_token=".concat(u.access_token)):t.headers.Authorization="".concat(u.token_type," ").concat(u.access_token))}else r.clientId&&e.indexOf("client_id")<0&&(e+=e.indexOf("?")<0?"?":"&",e+="client_id=".concat(r.clientId));e.startsWith("/")&&(e=r.apiOrigin+e);for(var d=null,l=a+1,h=0;h<l;h++){try{d=t.useWxCloud?yield r.wxCloudCallFunction(e,t):yield r.baseRequest(e,t);break}catch(e){if(t.withCredentials&&e&&e.error===o.UNAUTHENTICATED)return yield r.setCredentials(null),Promise.reject(e);if(h===a||!e||"unreachable"!==e.error)return Promise.reject(e)}yield r.sleep(T.retryInterval)}return d}))()}wxCloudCallFunction(e,t){var r=this;return g((function*(){var n=null,i=null;try{var a,s="";try{s=yield wx.getRendererUserAgent()}catch(e){}var{result:c}=yield r.wxCloud.callFunction({name:"httpOverCallFunction",data:{url:e,method:t.method,headers:f({origin:"https://servicewechat.com","User-Agent":s},t.headers),body:t.body}});null!=c&&null!==(a=c.body)&&void 0!==a&&a.error_code?(i=null==c?void 0:c.body).error_uri=(0,u.y)(e):n=null==c?void 0:c.body}catch(t){i={error:o.UNREACHABLE,error_description:t.message,error_uri:(0,u.y)(e)}}if(i)throw i;return n}))()}getCredentials(){var e=this;return g((function*(){var t=yield e.localCredentials.getCredentials();if(!t)return e.unAuthenticatedError("credentials not found");I(t)&&(t=t&&"anonymous"===t.scope?e.anonymousSignInFunc?(yield e.anonymousSignInFunc(t))||(yield e.localCredentials.getCredentials()):yield e.anonymousSignIn(t):yield e.refreshToken(t));return t}))()}getCredentialsSync(){return this.localCredentials.getStorageCredentialsSync()}getCredentialsAsync(){return this.getCredentials()}getScope(){var e=this;return g((function*(){var t=yield e.localCredentials.getCredentials();return t?t.scope:e.unAuthenticatedError("credentials not found")}))()}getGroups(){var e=this;return g((function*(){var t=yield e.localCredentials.getCredentials();return t?t.groups:e.unAuthenticatedError("credentials not found")}))()}refreshToken(e){var t=this;return g((function*(){return t.singlePromise.run("_refreshToken",g((function*(){if(!e||!e.refresh_token)return t.unAuthenticatedError("no refresh token found in credentials");try{var r=yield t.refreshTokenFunc(e.refresh_token,e);return yield t.localCredentials.setCredentials(r),r}catch(e){return e.error===o.INVALID_GRANT?(yield t.localCredentials.setCredentials(null),t.unAuthenticatedError(e.error_description)):Promise.reject(e)}})))}))()}checkRetry(e){var t=null;if(("number"!=typeof e||e<T.minRetry||e>T.maxRetry)&&(t={error:o.UNREACHABLE,error_description:"wrong options param: retry"}),t)throw t;return e}formatRetry(e,t){return void 0===e?t:this.checkRetry(e)}sleep(e){return g((function*(){return new Promise(t=>{setTimeout(()=>{t()},e)})}))()}anonymousSignIn(t){var r=this;return g((function*(){return r.singlePromise.run("_anonymous",g((function*(){if(!t||"anonymous"!==t.scope)return r.unAuthenticatedError("no anonymous in credentials");try{var n=yield r.request(e.AUTH_SIGN_IN_ANONYMOUSLY_URL,{method:"POST",withBasicAuth:!0,body:{}});return yield r.localCredentials.setCredentials(n),n}catch(e){return e.error===o.INVALID_GRANT?(yield r.localCredentials.setCredentials(null),r.unAuthenticatedError(e.error_description)):Promise.reject(e)}})))}))()}defaultRefreshTokenFunc(r,n){var i=this;return g((function*(){if(void 0===r||""===r)return i.unAuthenticatedError("refresh token not found");var o=e.AUTH_TOKEN_URL;return"v2"===(null==n?void 0:n.version)&&(o=t.AUTH_TOKEN_URL),f(f({},yield i.request(o,{method:"POST",body:{client_id:i.clientId,client_secret:i.clientSecret,grant_type:"refresh_token",refresh_token:r}})),{},{version:(null==n?void 0:n.version)||"v1"})}))()}getDeviceId(){var e=this;return g((function*(){if(e.deviceID)return e.deviceID;var t=yield e.storage.getItem("device_id");return"string"==typeof t&&t.length>=16&&t.length<=48||(t=c(),yield e.storage.setItem("device_id",t)),e.deviceID=t,t}))()}unAuthenticatedError(e){var t={error:o.UNAUTHENTICATED,error_description:e};return Promise.reject(t)}}function S(){var{wx:e}=globalThis;if(void 0===e)return!1;if(void 0===globalThis.Page)return!1;if(!e.getSystemInfoSync)return!1;if(!e.getStorageSync)return!1;if(!e.setStorageSync)return!1;if(!e.connectSocket)return!1;if(!e.request)return!1;try{if(!e.getSystemInfoSync())return!1;if("qq"===e.getSystemInfoSync().AppPlatform)return!1}catch(e){return!1}return!0}T.defaultRetry=2,T.minRetry=0,T.maxRetry=5,T.retryInterval=1e3;var C=!1;function O(){C=C||void 0!==typeof window&&"miniprogram"===window.__wxjs_environment}try{S()||(C=C||!!navigator.userAgent.match(/miniprogram/i)||"miniprogram"===window.__wxjs_environment,window&&window.WeixinJSBridge&&window.WeixinJSBridge.invoke?O():"undefined"!=typeof document&&document.addEventListener("WeixinJSBridgeReady",O,!1))}catch(e){}function U(){return C}const A=class{constructor(e){if(this.params={},"string"==typeof e)this.parse(e);else if(e&&"object"==typeof e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.append(t,e[t])}parse(e){e.split("&").forEach(e=>{var[t,r]=e.split("=").map(decodeURIComponent);this.append(t,r)})}append(e,t){this.params[e]?this.params[e]=this.params[e].concat([t]):this.params[e]=[t]}get(e){return this.params[e]?this.params[e][0]:null}getAll(e){return this.params[e]||[]}delete(e){delete this.params[e]}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}set(e,t){this.params[e]=[t]}toString(){var e=this,t=[],r=function(r){Object.prototype.hasOwnProperty.call(e.params,r)&&e.params[r].forEach(e=>{t.push("".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(e)))})};for(var n in this.params)r(n);return t.join("&")}};function P(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){P(o,n,i,a,s,"next",e)}function s(e){P(o,n,i,a,s,"throw",e)}a(void 0)}))}}class w{constructor(e){e.openURIWithCallback||(e.openURIWithCallback=this.getDefaultOpenURIWithCallback()),e.storage||(e.storage=m),this.config=e,this.tokenSectionName="captcha_".concat(e.clientId)}request(e,t){var r=this;return b((function*(){t||(t={}),t.method||(t.method="GET");var n,i="".concat(t.method,":").concat(e),a=e;t.withCaptcha&&(a=yield r.appendCaptchaTokenToURL(e,i,!1));try{n=yield r.config.request(a,t)}catch(n){return n.error===o.CAPTCHA_REQUIRED||n.error===o.CAPTCHA_INVALID?(e=yield r.appendCaptchaTokenToURL(e,i,n.error===o.CAPTCHA_INVALID),r.config.request(e,t)):Promise.reject(n)}return n}))()}getDefaultOpenURIWithCallback(){if(!S()&&!U()&&(window.location.search.indexOf("__captcha")>0&&(document.body.style.display="none"),null===document.getElementById("captcha_panel_wrap"))){var e=document.createElement("div");e.style.cssText="background-color: rgba(0, 0, 0, 0.7);position: fixed;left: 0px;right: 0px;top: 0px;bottom: 0px;padding: 9vw 0 0 0;display: none;z-index:100;",e.setAttribute("id","captcha_panel_wrap"),setTimeout(()=>{document.body.appendChild(e)},0)}return this.defaultOpenURIWithCallback}defaultOpenURIWithCallback(e,t){return b((function*(){var{width:r="355px",height:n="355px"}=t||{};if(e.match(/^(data:.*)$/))return Promise.reject({error:o.UNIMPLEMENTED,error_description:"need to impl captcha data"});var i=document.getElementById("captcha_panel_wrap"),a=document.createElement("iframe");return i.innerHTML="",a.setAttribute("src",e),a.setAttribute("id","review-panel-iframe"),a.style.cssText="min-width:".concat(r,";display:block;height:").concat(n,";margin:0 auto;background-color: rgb(255, 255, 255);border: none;"),i.appendChild(a),i.style.display="block",new Promise((e,t)=>{a.onload=function(){try{var r=window.location,n=a.contentWindow.location;if(n.host+n.pathname===r.host+r.pathname){i.style.display="none";var o=new A(n.search),s=o.get("captcha_token");return s?e({captcha_token:s,expires_in:Number(o.get("expires_in"))}):t({error:o.get("error"),error_description:o.get("error_description")})}i.style.display="block"}catch(e){i.style.display="block"}}})}))()}getCaptchaToken(t,r){var n=this;return b((function*(){if(!t){var i=yield n.findCaptchaToken();if(i)return i}var o;if(S()||U()){var a=yield n.config.request(e.CAPTCHA_DATA_URL,{method:"POST",body:{state:r,redirect_uri:""},withCredentials:!1});o={url:"".concat(a.data,"?state=").concat(encodeURIComponent(r),"&token=").concat(encodeURIComponent(a.token))}}else{var s="".concat(window.location.origin+window.location.pathname,"?__captcha=on");if((o=yield n.config.request(e.GET_CAPTCHA_URL,{method:"POST",body:{client_id:n.config.clientId,redirect_uri:s,state:r},withCredentials:!1})).captcha_token){var c={captcha_token:o.captcha_token,expires_in:o.expires_in};return n.saveCaptchaToken(c),o.captcha_token}}var u=yield n.config.openURIWithCallback(o.url);return n.saveCaptchaToken(u),u.captcha_token}))()}appendCaptchaTokenToURL(e,t,r){var n=this;return b((function*(){var i=yield n.getCaptchaToken(r,t);return e.indexOf("?")>0?e+="&captcha_token=".concat(i):e+="?captcha_token=".concat(i),e}))()}saveCaptchaToken(e){var t=this;return b((function*(){e.expires_at=new Date(Date.now()+1e3*(e.expires_in-10));var r=JSON.stringify(e);yield t.config.storage.setItem(t.tokenSectionName,r)}))()}findCaptchaToken(){var e=this;return b((function*(){var t=yield e.config.storage.getItem(e.tokenSectionName);if(null!=t)try{var r=JSON.parse(t);return null!=r&&r.expires_at&&(r.expires_at=new Date(r.expires_at)),r.expires_at<new Date?null:r.captcha_token}catch(t){return yield e.config.storage.removeItem(e.tokenSectionName),null}return null}))()}}var N=["provider_redirect_uri","other_params"];function D(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){D(o,n,i,a,s,"next",e)}function s(e){D(o,n,i,a,s,"throw",e)}a(void 0)}))}}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class H{static parseParamsToSearch(e){return Object.keys(e).forEach(t=>{e[t]||delete e[t]}),new A(e).toString()}constructor(e){var{request:t}=e,r=e.credentialsClient;if(!r){var n={apiOrigin:e.apiOrigin,clientId:e.clientId,storage:e.storage,env:e.env,baseRequest:e.baseRequest,anonymousSignInFunc:e.anonymousSignInFunc,wxCloud:e.wxCloud};r=new T(n)}if(!t){var i=r.request.bind(r),o=new w(x({clientId:e.clientId,request:i,storage:e.storage},e.captchaOptions));t=o.request.bind(o)}this.config={env:e.env,apiOrigin:e.apiOrigin,clientId:e.clientId,request:t,credentialsClient:r,storage:e.storage||m}}getParamsByVersion(r,n){var i,o=(0,u.I)(r),a=(null===(i={v2:t}[null==o?void 0:o.version])||void 0===i?void 0:i[n])||e[n];return o&&delete o.version,{params:o,url:a}}signIn(e){var t=this;return L((function*(){var r=e.version||"v1",n=t.getParamsByVersion(e,"AUTH_SIGN_IN_URL");n.params.query&&delete n.params.query;var i=yield t.getEncryptParams(n.params),o=yield t.config.request(n.url,{method:"POST",body:i});return yield t.config.credentialsClient.setCredentials(x(x({},o),{},{version:r})),Promise.resolve(o)}))()}signInAnonymously(){var t=arguments,r=this;return L((function*(){var n=t.length>0&&void 0!==t[0]?t[0]:{},i=t.length>1&&void 0!==t[1]&&t[1],o=yield r.config.request(e.AUTH_SIGN_IN_ANONYMOUSLY_URL,{method:"POST",body:n,useWxCloud:i});return yield r.config.credentialsClient.setCredentials(o),Promise.resolve(o)}))()}signUp(t){var r=this;return L((function*(){var n=yield r.config.request(e.AUTH_SIGN_UP_URL,{method:"POST",body:t});return yield r.config.credentialsClient.setCredentials(n),Promise.resolve(n)}))()}signOut(t){var r=this;return L((function*(){var n={};if(t){try{n=yield r.config.request(e.AUTH_SIGNOUT_URL,{method:"POST",withCredentials:!0,body:t})}catch(e){e.error!==o.UNAUTHENTICATED&&console.log("sign_out_error",e)}return yield r.config.credentialsClient.setCredentials(),n}var i=yield r.config.credentialsClient.getAccessToken(),a=yield r.config.request(e.AUTH_REVOKE_URL,{method:"POST",body:{token:i}});return yield r.config.credentialsClient.setCredentials(),Promise.resolve(a)}))()}revokeAllDevices(){var t=this;return L((function*(){yield t.config.request(e.AUTH_REVOKE_ALL_URL,{method:"DELETE",withCredentials:!0})}))()}revokeDevice(t){var r=this;return L((function*(){yield r.config.request(e.AUTHORIZED_DEVICES_DELETE_URL+t.device_id,{method:"DELETE",withCredentials:!0})}))()}getVerification(t,r){var n=this;return L((function*(){var i=!1;"CUR_USER"===t.target?i=!0:(yield n.hasLoginState())&&(i=!0);return n.config.request(e.VERIFICATION_URL,{method:"POST",body:t,withCaptcha:(null==r?void 0:r.withCaptcha)||!1,withCredentials:i})}))()}verify(e){var t=this;return L((function*(){var r=t.getParamsByVersion(e,"VERIFY_URL"),n=yield t.config.request(r.url,{method:"POST",body:r.params});return"v2"===(null==e?void 0:e.version)&&(yield t.config.credentialsClient.setCredentials(x(x({},n),{},{version:"v2"}))),n}))()}genProviderRedirectUri(t){var r=this;return L((function*(){var{provider_redirect_uri:n,other_params:i={}}=t,o=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(t,N);n&&!o.redirect_uri&&(o.redirect_uri=n);var a="".concat(e.PROVIDER_URI_URL,"?").concat(H.parseParamsToSearch(o));return Object.keys(i).forEach(e=>{var t=i[e];("sign_out_uri"!==e||(null==t?void 0:t.length)>0)&&(a+="&other_params[".concat(e,"]=").concat(encodeURIComponent(t)))}),r.config.request(a,{method:"GET"})}))()}grantProviderToken(t){var r=arguments,n=this;return L((function*(){var i=r.length>1&&void 0!==r[1]&&r[1];return n.config.request(e.PROVIDER_TOKEN_URL,{method:"POST",body:t,useWxCloud:i})}))()}patchProviderToken(t){var r=this;return L((function*(){return r.config.request(e.PROVIDER_TOKEN_URL,{method:"PATCH",body:t})}))()}signInWithProvider(e){var t=arguments,r=this;return L((function*(){var n=t.length>1&&void 0!==t[1]&&t[1],i=r.getParamsByVersion(e,"AUTH_SIGN_IN_WITH_PROVIDER_URL"),o=yield r.config.request(i.url,{method:"POST",body:i.params,useWxCloud:n});return yield r.config.credentialsClient.setCredentials(x(x({},o),{},{version:(null==e?void 0:e.version)||"v1"})),Promise.resolve(o)}))()}signInCustom(t){var r=this;return L((function*(){var n=yield r.config.request(e.AUTH_SIGN_IN_CUSTOM,{method:"POST",body:t});return yield r.config.credentialsClient.setCredentials(n),Promise.resolve(n)}))()}signInWithWechat(){var t=arguments,r=this;return L((function*(){var n=t.length>0&&void 0!==t[0]?t[0]:{},i=yield r.config.request(e.AUTH_SIGN_IN_WITH_WECHAT_URL,{method:"POST",body:n});return yield r.config.credentialsClient.setCredentials(i),Promise.resolve(i)}))()}bindWithProvider(t){var r=this;return L((function*(){return r.config.request(e.PROVIDER_BIND_URL,{method:"POST",body:t,withCredentials:!0})}))()}getUserProfile(e){var t=this;return L((function*(){return t.getUserInfo(e)}))()}getUserInfo(){var e=arguments,t=this;return L((function*(){var r,n=e.length>0&&void 0!==e[0]?e[0]:{},i=t.getParamsByVersion(n,"USER_ME_URL");if(null!==(r=i.params)&&void 0!==r&&r.query){var o=new A(i.params.query);i.url+="?".concat(o.toString())}var a=yield t.config.request(i.url,{method:"GET",withCredentials:!0});return a.sub&&(a.uid=a.sub),a}))()}getWedaUserInfo(){var t=this;return L((function*(){return yield t.config.request(e.WEDA_USER_URL,{method:"GET",withCredentials:!0})}))()}deleteMe(e){var t=this;return L((function*(){var r=t.getParamsByVersion(e,"USER_ME_URL"),n="".concat(r.url,"?").concat(H.parseParamsToSearch(r.params));return t.config.request(n,{method:"DELETE",withCredentials:!0})}))()}hasLoginState(){var e=this;return L((function*(){try{return yield e.config.credentialsClient.getAccessToken(),!0}catch(e){return!1}}))()}hasLoginStateSync(){return this.config.credentialsClient.getCredentialsSync()}getLoginState(){var e=this;return L((function*(){return e.config.credentialsClient.getCredentialsAsync()}))()}transByProvider(t){var r=this;return L((function*(){return r.config.request(e.USER_TRANS_BY_PROVIDER_URL,{method:"PATCH",body:t,withCredentials:!0})}))()}grantToken(e){var t=this;return L((function*(){var r=t.getParamsByVersion(e,"AUTH_TOKEN_URL");return t.config.request(r.url,{method:"POST",body:r.params})}))()}getProviders(){var t=this;return L((function*(){return t.config.request(e.PROVIDER_LIST,{method:"GET",withCredentials:!0})}))()}unbindProvider(t){var r=this;return L((function*(){return r.config.request("".concat(e.PROVIDER_UNBIND_URL,"/").concat(t.provider_id),{method:"DELETE",withCredentials:!0})}))()}checkPassword(t){var r=this;return L((function*(){return r.config.request("".concat(e.CHECK_PWD_URL),{method:"POST",withCredentials:!0,body:t})}))()}editContact(t){var r=this;return L((function*(){return r.config.request("".concat(e.BIND_CONTACT_URL),{method:"PATCH",withCredentials:!0,body:t})}))()}setPassword(t){var r=this;return L((function*(){return r.config.request("".concat(e.AUTH_SET_PASSWORD),{method:"PATCH",withCredentials:!0,body:t})}))()}updatePasswordByOld(e){var t=this;return L((function*(){var r=yield t.sudo({password:e.old_password});return t.setPassword({sudo_token:r.sudo_token,new_password:e.new_password})}))()}sudo(t){var r=this;return L((function*(){return r.config.request("".concat(e.SUDO_URL),{method:"POST",withCredentials:!0,body:t})}))()}sendVerificationCodeToCurrentUser(t){var r=this;return L((function*(){return t.target="CUR_USER",r.config.request(e.VERIFICATION_URL,{method:"POST",body:t,withCredentials:!0,withCaptcha:!0})}))()}changeBoundProvider(t){var r=this;return L((function*(){return r.config.request("".concat(e.PROVIDER_LIST,"/").concat(t.provider_id,"/trans"),{method:"POST",body:{provider_trans_token:t.trans_token},withCredentials:!0})}))()}setUserProfile(t){var r=this;return L((function*(){return r.config.request(e.USER_PRIFILE_URL,{method:"PATCH",body:t,withCredentials:!0})}))()}updateUserBasicInfo(t){var r=this;return L((function*(){return r.config.request(e.USER_BASIC_EDIT_URL,{method:"POST",withCredentials:!0,body:t})}))()}queryUserProfile(t){var r=this;return L((function*(){var n=new A(t);return r.config.request("".concat(e.USER_QUERY_URL,"?").concat(n.toString()),{method:"GET",withCredentials:!0})}))()}setCustomSignFunc(e){this.getCustomSignTicketFn=e}signInWithCustomTicket(){var e=this;return L((function*(){var t=e.getCustomSignTicketFn;if(!t)return Promise.reject({error:"failed_precondition",error_description:"please use setCustomSignFunc to set custom sign function"});var r=yield t();return e.signInCustom({provider_id:"custom",ticket:r})}))()}resetPassword(t){var r=this;return L((function*(){return r.config.request(e.AUTH_RESET_PASSWORD,{method:"POST",body:t})}))()}authorize(t){var r=this;return L((function*(){return r.config.request(e.AUTHORIZE_URL,{method:"POST",withCredentials:!0,body:t})}))()}authorizeDevice(t){var r=this;return L((function*(){return r.config.request(e.AUTHORIZE_DEVICE_URL,{method:"POST",withCredentials:!0,body:t})}))()}deviceAuthorize(t){var r=this;return L((function*(){return r.config.request(e.AUTH_GET_DEVICE_CODE,{method:"POST",body:t,withCredentials:!0})}))()}authorizeInfo(t){var r=this;return L((function*(){var n="".concat(e.AUTHORIZE_INFO_URL,"?").concat(H.parseParamsToSearch(t)),i=!0,o=!1;return(yield r.hasLoginState())&&(o=!0,i=!1),r.config.request(n,{method:"GET",withBasicAuth:i,withCredentials:o})}))()}checkUsername(t){var r=this;return L((function*(){return r.config.request(e.CHECK_USERNAME,{method:"GET",body:t,withCredentials:!0})}))()}checkIfUserExist(t){var r=this;return L((function*(){var n=new A(t);return r.config.request("".concat(e.CHECK_IF_USER_EXIST,"?").concat(n.toString()),{method:"GET"})}))()}loginScope(){var e=this;return L((function*(){return e.config.credentialsClient.getScope()}))()}loginGroups(){var e=this;return L((function*(){return e.config.credentialsClient.getGroups()}))()}refreshTokenForce(e){var t=this;return L((function*(){var r=yield t.config.credentialsClient.getCredentials();return yield t.config.credentialsClient.refreshToken(x(x({},r),{},{version:(null==e?void 0:e.version)||"v1"}))}))()}getCredentials(){var e=this;return L((function*(){return e.config.credentialsClient.getCredentials()}))()}getPublicKey(){var e=this;return L((function*(){return e.config.request(t.AUTH_PUBLIC_KEY,{method:"POST",body:{}})}))()}getEncryptParams(e){var t=this;return L((function*(){var{isEncrypt:r}=e;delete e.isEncrypt;var n=(0,u.I)(e),i=void 0;if(!i)return e;var o="",a="";try{var s=yield t.getPublicKey();if(o=s.public_key,a=s.public_key_thumbprint,!o||!a)throw s}catch(e){throw e}return{params:i.getEncryptInfo({publicKey:o,payload:n}),public_key_thumbprint:a}}))()}getProviderSubType(){var t=this;return L((function*(){return t.config.request(e.GET_PROVIDER_TYPE,{method:"POST",body:{provider_id:"weda"}})}))()}verifyCaptchaData(t){var r=this;return L((function*(){var{token:n,key:i}=t;return r.config.request(e.VERIFY_CAPTCHA_DATA_URL,{method:"POST",body:{token:n,key:i},withCredentials:!1})}))()}createCaptchaData(t){var r=this;return L((function*(){var{state:n,redirect_uri:i}=t;return r.config.request(e.CAPTCHA_DATA_URL,{method:"POST",body:{state:n,redirect_uri:i},withCredentials:!1})}))()}getMiniProgramCode(t){var r=this;return L((function*(){return r.config.request(e.GET_MINIPROGRAM_QRCODE,{method:"POST",body:t})}))()}getMiniProgramQrCodeStatus(t){var r=this;return L((function*(){return r.config.request(e.GET_MINIPROGRAM_QRCODE_STATUS,{method:"POST",body:t})}))()}getUserBehaviorLog(t){var r=this;return L((function*(){var n="".concat(e.GET_USER_BEHAVIOR_LOG,"?").concat({LOGIN:"query[action]=USER_LOGIN",MODIFY:"ne_query[action]=USER_LOGIN"}[t.type],"&limit=").concat(t.limit).concat(t.page_token?"&page_token=".concat(t.page_token):"");return r.config.request(n,{method:"GET",withCredentials:!0})}))()}modifyPassword(t){var r=this;return L((function*(){var n="",i="",o=void 0;if(!o)throw new Error("do not support encrypt, a encrypt util required.");try{var a=yield r.getPublicKey();if(n=a.public_key,i=a.public_key_thumbprint,!n||!i)throw a}catch(e){throw e}var s=t.password?o.getEncryptInfo({publicKey:n,payload:t.password}):"",c=o.getEncryptInfo({publicKey:n,payload:t.new_password});return r.config.request(e.USER_BASIC_EDIT_URL,{method:"POST",withCredentials:!0,body:{user_id:t.user_id,encrypt_password:s,encrypt_new_password:c,public_key_thumbprint:i}})}))()}modifyPasswordWithoutLogin(e){var r=this;return L((function*(){var n="",i="",o=void 0;if(!o)throw new Error("do not support encrypt, a encrypt util required.");try{var a=yield r.getPublicKey();if(n=a.public_key,i=a.public_key_thumbprint,!n||!i)throw a}catch(e){throw e}var s=e.password?o.getEncryptInfo({publicKey:n,payload:e.password}):"",c=o.getEncryptInfo({publicKey:n,payload:e.new_password});return r.config.request(t.AUTH_RESET_PASSWORD,{method:"POST",body:{username:e.username,password:s,new_password:c,public_key_thumbprint:i}})}))()}}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class F{constructor(e){var{apiOrigin:t,clientId:r,env:n,storage:i,request:o,baseRequest:a,anonymousSignInFunc:s,wxCloud:c}=e;this.oauth2client=new T({apiOrigin:t,clientId:r,env:n,storage:i,baseRequest:a||o,anonymousSignInFunc:s,wxCloud:c}),this.authApi=new H(V(V({credentialsClient:this.oauth2client},e),{},{request:o?this.oauth2client.request.bind(this.oauth2client):void 0}))}}})(),n})());