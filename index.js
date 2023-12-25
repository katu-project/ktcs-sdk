"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ktcs = void 0;
var path_1 = __importDefault(require("path"));
var os_1 = __importDefault(require("os"));
var uni_utils_1 = __importDefault(require("uni-utils"));
var axios_1 = __importDefault(require("axios"));
var Ktcs = (function () {
    function Ktcs() {
        this.ver = '0.3.1';
    }
    Ktcs.prototype.setConfig = function (config) {
        if (!config.url || !config.token)
            throw Error('参数不完整');
        config.url = config.url.startsWith('http') ? config.url : 'https://' + config.url;
        this.config = config;
    };
    Ktcs.prototype.getWxAppToken = function (app, ref) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.getWxToken(app, 'WX_MINI_APP_SECRET', ref)];
            });
        });
    };
    Ktcs.prototype.getWxGzhToken = function (app, ref) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.getWxToken(app, 'WX_GZH_SECRET', ref)];
            });
        });
    };
    Ktcs.prototype.getWxToken = function (app, type, ref) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheFile, cacheContent, _a, token, expiredTime, error_1, url, tokenInfo, _b, key, expire, cacheContent, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cacheFile = path_1.default.join(os_1.default.tmpdir(), ".ktcs_wx_".concat(type, "_").concat(app));
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4, uni_utils_1.default.readFile(cacheFile)];
                    case 2:
                        cacheContent = _c.sent();
                        _a = cacheContent.split(':'), token = _a[0], expiredTime = _a[1];
                        if (uni_utils_1.default.getTimeStamp() < parseInt(expiredTime)) {
                            this.config.debug && console.log('use local cache');
                            return [2, token];
                        }
                        return [3, 4];
                    case 3:
                        error_1 = _c.sent();
                        return [3, 4];
                    case 4:
                        url = "".concat(this.config.url, "/wx/token");
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 8, , 9]);
                        return [4, this.request(url, {
                                type: type,
                                name: app,
                                app_name: ref || ''
                            })];
                    case 6:
                        tokenInfo = _c.sent();
                        _b = tokenInfo.token, key = _b.key, expire = _b.expire;
                        cacheContent = "".concat(key, ":").concat(expire);
                        return [4, uni_utils_1.default.saveFile(cacheContent, cacheFile)];
                    case 7:
                        _c.sent();
                        return [2, key];
                    case 8:
                        error_2 = _c.sent();
                        this.config.debug && console.log(error_2);
                        throw Error('凭证申请错误:' + error_2.message);
                    case 9: return [2];
                }
            });
        });
    };
    Ktcs.prototype.getWxCfEnv = function (app, env, token, ref) {
        return __awaiter(this, void 0, void 0, function () {
            var url, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(this.config.url, "/dev/env");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.request(url, {
                                keyId: app,
                                env: env,
                                token: token,
                                app_name: ref || ''
                            })];
                    case 2: return [2, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        this.config.debug && console.log(error_3);
                        throw Error('环境获取错误:' + error_3.message);
                    case 4: return [2];
                }
            });
        });
    };
    Ktcs.prototype.getTencentKey = function (app, ref) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.getKey(app, 'TENCENT_CLOUD_SECRET', ref)];
            });
        });
    };
    Ktcs.prototype.getKey = function (name, type, ref) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheFile, cacheContent, _a, key, expiredTime, error_4, url, key, cacheContent, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cacheFile = path_1.default.join(os_1.default.tmpdir(), ".ktcs_key_".concat(type, "_").concat(name));
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, uni_utils_1.default.readFile(cacheFile)];
                    case 2:
                        cacheContent = _b.sent();
                        _a = JSON.parse(cacheContent), key = _a.key, expiredTime = _a.expiredTime;
                        this.config.debug && console.log(key, expiredTime, uni_utils_1.default.getTimeStamp());
                        if (uni_utils_1.default.getTimeStamp() < parseInt(expiredTime)) {
                            this.config.debug && console.log('use local cache');
                            return [2, key];
                        }
                        return [3, 4];
                    case 3:
                        error_4 = _b.sent();
                        return [3, 4];
                    case 4:
                        url = "".concat(this.config.url, "/key");
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 8, , 9]);
                        return [4, this.request(url, {
                                type: type,
                                name: name,
                                app_name: ref || ''
                            })];
                    case 6:
                        key = _b.sent();
                        cacheContent = JSON.stringify({
                            key: key,
                            expiredTime: uni_utils_1.default.getTimeStamp() + 24 * 60 * 60
                        });
                        return [4, uni_utils_1.default.saveFile(cacheContent, cacheFile)];
                    case 7:
                        _b.sent();
                        return [2, key];
                    case 8:
                        error_5 = _b.sent();
                        this.config.debug && console.log(error_5);
                        throw Error('KEY获取错误:' + error_5.message);
                    case 9: return [2];
                }
            });
        });
    };
    Ktcs.prototype.request = function (url, data, method) {
        return __awaiter(this, void 0, void 0, function () {
            var timeStamp, csRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeStamp = uni_utils_1.default.getTimeStamp();
                        return [4, axios_1.default[method || 'post'](url, data, {
                                headers: {
                                    'token': uni_utils_1.default.hash.sha1("".concat(this.config.token, "-u-").concat(timeStamp)) + ':' + timeStamp
                                }
                            })];
                    case 1:
                        csRes = (_a.sent()).data;
                        if (csRes.code !== 0) {
                            throw Error(csRes.msg || JSON.stringify(csRes));
                        }
                        return [2, csRes.data];
                }
            });
        });
    };
    return Ktcs;
}());
exports.Ktcs = Ktcs;
