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
var animeflvbr_1 = require("../../services/animeflvbr");
var cheerio_1 = __importDefault(require("cheerio"));
function listEpisodeAnime(idAnime) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        function capitalizeFirstLetter(str) {
            return str;
        }
        var body, $, photo, nome, animeFlexContainer, right, sobre, arraySobre, formato, genero, diaLancamento, ano, episodes, episode, apiKitsu, apiData, found, coverImage, photo_1, dados, dados;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, animeflvbr_1.animesRequest.get("" + idAnime)];
                case 1:
                    body = _e.sent();
                    $ = cheerio_1.default.load(body.data);
                    photo = $(".pagAniContainer #anime .animeFlexContainer .left #capaAnime img").attr("src");
                    nome = $(".pagAniTitulo .mwidth h1").text().replace(" – Todos os Episódios", "");
                    animeFlexContainer = $(".animeFlexContainer");
                    right = $(animeFlexContainer).find(".right");
                    sobre = $(right).find(".boxAnimeSobre");
                    arraySobre = $(sobre).find(".boxAnimeSobreLinha");
                    formato = capitalizeFirstLetter($(arraySobre[0]).text().replace("Formato: ", ""));
                    genero = capitalizeFirstLetter($(arraySobre[1]).text().replace("Gênero: ", "")).replace(" ", "").replace(" ", "").split(",");
                    diaLancamento = capitalizeFirstLetter($(arraySobre[10]).text().replace("Dia de Lançamento: ", ""));
                    ano = capitalizeFirstLetter($(arraySobre[11]).text().replace("Ano: ", ""));
                    episodes = new Array();
                    episode = $(".pagAniLista .pagAniListaContainer").find("a").each(function (i, element) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function () {
                            var idEpisode, ep;
                            return __generator(this, function (_b) {
                                idEpisode = (_a = $(element).attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                ep = $(element).text().split("Episódio")[1].replace(" ", "");
                                episodes.push({
                                    idEpisode: idEpisode,
                                    ep: ep
                                });
                                return [2 /*return*/];
                            });
                        });
                    });
                    return [4 /*yield*/, animeflvbr_1.kitsu("anime?filter[text]=" + nome + "\"")];
                case 2:
                    apiKitsu = _e.sent();
                    apiData = apiKitsu.data.data;
                    if (nome) {
                        found = apiData.find(function (e) {
                            var _a, _b, _c;
                            return ((_a = e.attributes.titles.en) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == (nome === null || nome === void 0 ? void 0 : nome.toLowerCase()) ||
                                ((_b = e.attributes.titles.en_jp) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == (nome === null || nome === void 0 ? void 0 : nome.toLowerCase()) ||
                                ((_c = e.attributes.titles.ja_jp) === null || _c === void 0 ? void 0 : _c.toLowerCase()) == (nome === null || nome === void 0 ? void 0 : nome.toLowerCase());
                        });
                        if (found) {
                            coverImage = (_b = (_a = found === null || found === void 0 ? void 0 : found.attributes) === null || _a === void 0 ? void 0 : _a.coverImage) === null || _b === void 0 ? void 0 : _b.large;
                            photo_1 = (_d = (_c = found === null || found === void 0 ? void 0 : found.attributes) === null || _c === void 0 ? void 0 : _c.posterImage) === null || _d === void 0 ? void 0 : _d.original;
                            dados = {
                                photo: photo_1,
                                coverImage: coverImage,
                                nome: nome,
                                formato: formato,
                                diaLancamento: diaLancamento,
                                ano: ano,
                                genero: genero,
                                episodes: episodes,
                            };
                            return [2 /*return*/, dados];
                        }
                        else {
                            dados = {
                                photo: photo,
                                nome: nome,
                                formato: formato,
                                diaLancamento: diaLancamento,
                                ano: ano,
                                genero: genero,
                                episodes: episodes
                            };
                            return [2 /*return*/, dados];
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = listEpisodeAnime;
