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
        while (_) try {
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
exports.listAZ = exports.listAnimesFiltered = exports.listTypesFiltersAnimes = void 0;
var animeflvbr_1 = require("../../services/animeflvbr");
var cheerio_1 = __importDefault(require("cheerio"));
var animesSection_1 = __importDefault(require("../animesSection"));
var paginationAnimes_1 = __importDefault(require("../paginationAnimes"));
function listAZ() {
    return __awaiter(this, void 0, void 0, function () {
        var body, $, idFilterAlphabet, textFilterAlphabet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, animeflvbr_1.animesRequest.get('/lista')];
                case 1:
                    body = _a.sent();
                    $ = cheerio_1.default.load(body.data);
                    idFilterAlphabet = [];
                    textFilterAlphabet = [];
                    $('.filtroAZ').find('a').each(function (i, element) {
                        idFilterAlphabet[i] = $(element)[0].attribs.href.split('?')[1];
                        textFilterAlphabet[i] = $(element).find('li').text();
                    });
                    return [2 /*return*/, {
                            idFilterAlphabet: idFilterAlphabet,
                            textFilterAlphabet: textFilterAlphabet
                        }];
            }
        });
    });
}
exports.listAZ = listAZ;
function listTypesFiltersAnimes() {
    return __awaiter(this, void 0, void 0, function () {
        var body, $, genreQueryParams, genreNames, typeQueryParams, typeNames, ageQueryParams, ageNames, statusQueryParams, statusNames, selectGenre, selectType, selectAge, selectStatus;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, animeflvbr_1.animesRequest.get('/lista')];
                case 1:
                    body = _a.sent();
                    $ = cheerio_1.default.load(body.data);
                    genreQueryParams = [];
                    genreNames = [];
                    typeQueryParams = [];
                    typeNames = [];
                    ageQueryParams = [];
                    ageNames = [];
                    statusQueryParams = [];
                    statusNames = [];
                    selectGenre = $('select')[0];
                    selectType = $('select')[1];
                    selectAge = $('select')[2];
                    selectStatus = $('select')[3];
                    $(selectGenre).find('option').each(function (i, element) {
                        genreQueryParams[i] = $(element)[0].attribs.value.split('=')[1];
                        genreNames[i] = $(element).text();
                    });
                    $(selectType).find('option').each(function (i, element) {
                        typeQueryParams[i] = $(element)[0].attribs.value.split('=')[1];
                        typeNames[i] = $(element).text();
                    });
                    $(selectAge).find('option').each(function (i, element) {
                        ageQueryParams[i] = $(element)[0].attribs.value.split('=')[1];
                        ageNames[i] = $(element).text();
                    });
                    $(selectStatus).find('option').each(function (i, element) {
                        statusQueryParams[i] = $(element)[0].attribs.value.split('=')[1];
                        statusNames[i] = $(element).text();
                    });
                    return [2 /*return*/, {
                            genre: {
                                genreQueryParams: genreQueryParams,
                                genreNames: genreNames
                            },
                            type: {
                                typeQueryParams: typeQueryParams,
                                typeNames: typeNames
                            },
                            age: {
                                ageQueryParams: ageQueryParams,
                                ageNames: ageNames
                            },
                            status: {
                                statusQueryParams: statusQueryParams,
                                statusNames: statusNames
                            }
                        }];
            }
        });
    });
}
exports.listTypesFiltersAnimes = listTypesFiltersAnimes;
function listAnimesFiltered(page, queryParam) {
    return __awaiter(this, void 0, void 0, function () {
        var query, body, animes, paginationNumbers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = page <= 1 ? "/lista?" + queryParam : "/lista/page/" + page + "?" + queryParam;
                    return [4 /*yield*/, animeflvbr_1.animesRequest.get(query)];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, animesSection_1.default(query, 0)];
                case 2:
                    animes = _a.sent();
                    return [4 /*yield*/, paginationAnimes_1.default(body.data, 5)];
                case 3:
                    paginationNumbers = _a.sent();
                    return [2 /*return*/, {
                            info: "ANIMES FILTRADOS",
                            idAnimes: animes.idAnimes,
                            imagesAttributes: animes.imagesAttributes,
                            title: animes.title,
                            paginationNumbers: paginationNumbers
                        }];
            }
        });
    });
}
exports.listAnimesFiltered = listAnimesFiltered;
