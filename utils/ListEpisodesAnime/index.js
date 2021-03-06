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
    return __awaiter(this, void 0, void 0, function () {
        function capitalizeFirstLetter(str) {
            return str;
        }
        var body, $, photo, nome, animeFlexContainer, right, sobre, arraySobre, sinopse, tipoEp, formato, genero, diaLancamento, ano, episodes, episode, dados;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, animeflvbr_1.animesRequest.get("" + idAnime)];
                case 1:
                    body = _a.sent();
                    $ = cheerio_1.default.load(body.data);
                    photo = $(".pagAniContainer #anime .animeFlexContainer .left #capaAnime img").attr("src");
                    nome = $(".pagAniTitulo .mwidth h1").text().replace(" ??? Todos os Epis??dios", "");
                    animeFlexContainer = $(".animeFlexContainer");
                    right = $(animeFlexContainer).find(".right");
                    sobre = $(right).find(".boxAnimeSobre");
                    arraySobre = $(sobre).find(".boxAnimeSobreLinha");
                    sinopse = $('#sinopse2').text() || null;
                    tipoEp = $(arraySobre[5]).text() || null;
                    formato = null;
                    genero = null;
                    diaLancamento = null;
                    ano = null;
                    if ($(arraySobre[0]).text()) {
                        formato = capitalizeFirstLetter($(arraySobre[0]).text());
                    }
                    if ($(arraySobre[1]).text()) {
                        genero = capitalizeFirstLetter($(arraySobre[1]).text().replace("G??nero: ", "")).replace(" ", "").replace(" ", "").split(",");
                    }
                    if ($(arraySobre[10]).text()) {
                        diaLancamento = capitalizeFirstLetter($(arraySobre[10]).text().replace("Dia de Lan??amento: ", ""));
                    }
                    if ($(arraySobre[11]).text()) {
                        ano = $(arraySobre[11]).text().replace("Ano: ", "");
                    }
                    episodes = new Array();
                    episode = $(".pagAniLista .pagAniListaContainer").find("a").each(function (i, element) {
                        var _a;
                        return __awaiter(this, void 0, void 0, function () {
                            var idEpisode, ep;
                            return __generator(this, function (_b) {
                                idEpisode = (_a = $(element).attr('href')) === null || _a === void 0 ? void 0 : _a.split('/')[3];
                                ep = $(element).text().split("Epis??dio")[1].replace(" ", "");
                                episodes.push({
                                    idEpisode: idEpisode,
                                    ep: ep
                                });
                                return [2 /*return*/];
                            });
                        });
                    });
                    dados = {
                        photo: photo,
                        nome: nome,
                        sinopse: sinopse,
                        tipoEp: tipoEp,
                        formato: formato,
                        diaLancamento: diaLancamento,
                        ano: ano,
                        genero: genero,
                        episodes: episodes
                    };
                    return [2 /*return*/, dados
                        // return {
                        //   animeName,
                        //   thumb,
                        //   synopsis,
                        //   animesInformation,
                        //   idEpisode
                        // };
                    ];
            }
        });
    });
}
exports.default = listEpisodeAnime;
