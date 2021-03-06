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
var cheerio_1 = __importDefault(require("cheerio"));
var animeflvbr_1 = require("../services/animeflvbr");
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, body, $, animes, containerFavorito, mainCarrouselMaisVisto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params.page, page = _a === void 0 ? 1 : _a;
                        return [4 /*yield*/, animeflvbr_1.animesRequest.get("")];
                    case 1:
                        body = _b.sent();
                        $ = cheerio_1.default.load(body.data);
                        animes = new Array();
                        containerFavorito = $('.aniContainer')[0];
                        mainCarrouselMaisVisto = $(containerFavorito).find(".main-carousel");
                        $(mainCarrouselMaisVisto).find('div').each(function (i, element) {
                            var _a, _b;
                            return __awaiter(this, void 0, void 0, function () {
                                var idAnime, nomeAnime, imagemAnime;
                                return __generator(this, function (_c) {
                                    idAnime = (_a = $(element).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                    if (idAnime) {
                                        nomeAnime = (_b = $(element).find('a').attr('title')) === null || _b === void 0 ? void 0 : _b.split(' -')[0].replace(" ??? Todos os Epis??dios", "");
                                        imagemAnime = $(element).find('a').find(".aniItemImg").find("img").attr('src');
                                        animes.push({
                                            idAnime: idAnime,
                                            imagemAnime: imagemAnime,
                                            nomeAnime: nomeAnime
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        });
                        return [2 /*return*/, response.json({ animes: animes })];
                }
            });
        });
    };
    HomeController.prototype.listar = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, titulo, body, $, animes, containerFavorito, mainCarrouselMaisVisto, totalPages;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params, page = _a.page, titulo = _a.titulo;
                        return [4 /*yield*/, animeflvbr_1.animesRequest.get("page/" + page + "/?s=" + titulo)];
                    case 1:
                        body = _b.sent();
                        $ = cheerio_1.default.load(body.data);
                        animes = new Array();
                        containerFavorito = $('.mwidth');
                        mainCarrouselMaisVisto = $(containerFavorito).find(".searchPagContainer");
                        totalPages = {};
                        if ($(".page-numbers").text().split("???").length > 1) {
                            totalPages = $(".page-numbers").text().split("???")[1].replace("Pr??ximo ??", "");
                        }
                        $(mainCarrouselMaisVisto).find('div').each(function (i, element) {
                            var _a, _b;
                            return __awaiter(this, void 0, void 0, function () {
                                var idAnime, nomeAnime, imagemAnime;
                                return __generator(this, function (_c) {
                                    idAnime = (_a = $(element).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                    if (idAnime) {
                                        nomeAnime = (_b = $(element).find('a').attr('title')) === null || _b === void 0 ? void 0 : _b.split(' -')[0].replace(" ??? Todos os Epis??dios", "");
                                        imagemAnime = $(element).find('a').find(".aniItemImg").find("img").attr('src');
                                        animes.push({
                                            idAnime: idAnime,
                                            imagemAnime: imagemAnime,
                                            nomeAnime: nomeAnime
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        });
                        return [2 /*return*/, response.json({ animes: animes,
                                totalPages: totalPages })];
                }
            });
        });
    };
    HomeController.prototype.launchDay = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, body, $, animes, containerFavorito, mainCarrouselMaisVisto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params.page, page = _a === void 0 ? 1 : _a;
                        return [4 /*yield*/, animeflvbr_1.animesRequest.get("")];
                    case 1:
                        body = _b.sent();
                        $ = cheerio_1.default.load(body.data);
                        animes = new Array();
                        containerFavorito = $('.aniContainer')[2];
                        mainCarrouselMaisVisto = $(containerFavorito).find(".main-carousel");
                        $(mainCarrouselMaisVisto).find('div').each(function (i, element) {
                            var _a, _b;
                            return __awaiter(this, void 0, void 0, function () {
                                var idAnime, nomeAnime, imagemAnime;
                                return __generator(this, function (_c) {
                                    idAnime = (_a = $(element).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                    if (idAnime) {
                                        nomeAnime = (_b = $(element).find('a').attr('title')) === null || _b === void 0 ? void 0 : _b.split(' -')[0].replace(" ??? Todos os Epis??dios", "");
                                        imagemAnime = $(element).find('a').find(".aniItemImg").find("img").attr('src');
                                        animes.push({
                                            idAnime: idAnime,
                                            imagemAnime: imagemAnime,
                                            nomeAnime: nomeAnime
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        });
                        return [2 /*return*/, response.json({ animes: animes })];
                }
            });
        });
    };
    HomeController.prototype.dailyEpi = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, body, $, animes, containerFavorito;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params.page, page = _a === void 0 ? 1 : _a;
                        return [4 /*yield*/, animeflvbr_1.animesRequest.get("")];
                    case 1:
                        body = _b.sent();
                        $ = cheerio_1.default.load(body.data);
                        animes = new Array();
                        containerFavorito = $('.epiSubContainer')[0];
                        $(containerFavorito).find('div').each(function (i, element) {
                            var _a, _b;
                            return __awaiter(this, void 0, void 0, function () {
                                var idEpisode, nomeAnime, imagemAnime;
                                return __generator(this, function (_c) {
                                    idEpisode = (_a = $(element).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                    if (idEpisode) {
                                        nomeAnime = (_b = $(element).find('a').attr('title')) === null || _b === void 0 ? void 0 : _b.split(' -')[0].replace(" ??? Todos os Epis??dios", "");
                                        imagemAnime = $(element).find('a').find(".epiItemImg").find("img").attr('src');
                                        animes.push({
                                            idEpisode: idEpisode,
                                            imagemAnime: imagemAnime,
                                            nomeAnime: nomeAnime
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        });
                        return [2 /*return*/, response.json({ animes: animes })];
                }
            });
        });
    };
    HomeController.prototype.dublado = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, body, $, animes, containerFavorito, totalPages;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params.page, page = _a === void 0 ? 1 : _a;
                        page = page.toString();
                        return [4 /*yield*/, animeflvbr_1.animesRequestDublado(page)];
                    case 1:
                        body = _b.sent();
                        $ = cheerio_1.default.load(body.data);
                        animes = new Array();
                        containerFavorito = $('.listaPagAnimes')[0];
                        $(containerFavorito).find('div').each(function (i, element) {
                            var _a, _b;
                            return __awaiter(this, void 0, void 0, function () {
                                var idEpisode, nomeAnime, imagemAnime;
                                return __generator(this, function (_c) {
                                    idEpisode = (_a = $(element).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                    if (idEpisode) {
                                        nomeAnime = (_b = $(element).find('a').attr('title')) === null || _b === void 0 ? void 0 : _b.split(' -')[0].replace(" ??? Todos os Epis??dios", "");
                                        imagemAnime = $(element).find('a').find(".aniItemImg").find("img").attr('src');
                                        animes.push({
                                            idEpisode: idEpisode,
                                            imagemAnime: imagemAnime,
                                            nomeAnime: nomeAnime
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        });
                        totalPages = {};
                        if ($(".page-numbers").text().split("???").length > 1) {
                            totalPages = $(".page-numbers").text().split("???")[1].replace("Pr??ximo ??", "");
                        }
                        return [2 /*return*/, response.json({ animes: animes, totalPages: totalPages })];
                }
            });
        });
    };
    HomeController.prototype.legendado = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, body, $, animes, containerFavorito, totalPages;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params.page, page = _a === void 0 ? 1 : _a;
                        page = page.toString();
                        return [4 /*yield*/, animeflvbr_1.animesRequestLegendado(page)];
                    case 1:
                        body = _b.sent();
                        $ = cheerio_1.default.load(body.data);
                        animes = new Array();
                        containerFavorito = $('.listaPagAnimes')[0];
                        $(containerFavorito).find('div').each(function (i, element) {
                            var _a, _b;
                            return __awaiter(this, void 0, void 0, function () {
                                var idEpisode, nomeAnime, imagemAnime;
                                return __generator(this, function (_c) {
                                    idEpisode = (_a = $(element).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                    if (idEpisode) {
                                        nomeAnime = (_b = $(element).find('a').attr('title')) === null || _b === void 0 ? void 0 : _b.split(' -')[0].replace(" ??? Todos os Epis??dios", "");
                                        imagemAnime = $(element).find('a').find(".aniItemImg").find("img").attr('src');
                                        animes.push({
                                            idEpisode: idEpisode,
                                            imagemAnime: imagemAnime,
                                            nomeAnime: nomeAnime
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        });
                        totalPages = {};
                        if ($(".page-numbers").text().split("???").length > 1) {
                            totalPages = $(".page-numbers").text().split("???")[1].replace("Pr??ximo ??", "");
                        }
                        return [2 /*return*/, response.json({ animes: animes, totalPages: totalPages })];
                }
            });
        });
    };
    HomeController.prototype.letra = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, page, _c, letra, body, $, animes, containerFavorito, totalPages;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = request.params, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.letra, letra = _c === void 0 ? 'a' : _c;
                        page = page.toString();
                        return [4 /*yield*/, animeflvbr_1.animeRequestLetter(page, letra)];
                    case 1:
                        body = _d.sent();
                        $ = cheerio_1.default.load(body.data);
                        animes = new Array();
                        containerFavorito = $('.listaPagAnimes')[0];
                        $(containerFavorito).find('div').each(function (i, element) {
                            var _a, _b;
                            return __awaiter(this, void 0, void 0, function () {
                                var idEpisode, nomeAnime, imagemAnime;
                                return __generator(this, function (_c) {
                                    idEpisode = (_a = $(element).find('a').attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                    if (idEpisode) {
                                        nomeAnime = (_b = $(element).find('a').attr('title')) === null || _b === void 0 ? void 0 : _b.split(' -')[0].replace(" ??? Todos os Epis??dios", "");
                                        imagemAnime = $(element).find('a').find(".aniItemImg").find("img").attr('src');
                                        animes.push({
                                            idEpisode: idEpisode,
                                            imagemAnime: imagemAnime,
                                            nomeAnime: nomeAnime
                                        });
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        });
                        totalPages = {};
                        if ($(".page-numbers").text().split("???").length > 1) {
                            totalPages = $(".page-numbers").text().split("???")[1].replace("Pr??ximo ??", "");
                        }
                        return [2 /*return*/, response.json({ animes: animes, totalPages: totalPages })];
                }
            });
        });
    };
    HomeController.prototype.player = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var player, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player = request.params.player;
                        return [4 /*yield*/, animeflvbr_1.playerB("playerx?php=ODM2OTk=&d=andwbGF5ZXI=")];
                    case 1:
                        body = _a.sent();
                        return [2 /*return*/, response.send(body.data)];
                }
            });
        });
    };
    return HomeController;
}());
exports.default = HomeController;
