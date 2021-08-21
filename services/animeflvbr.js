"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameVideo = exports.getAnimeVideo = exports.animesRequestSearch = exports.playerB = exports.kitsu = exports.iframePlayer = exports.animeRequestLetter = exports.animesRequestLegendado = exports.animesRequestDublado = exports.animesRequest = void 0;
var axios_1 = __importDefault(require("axios"));
var FormData = require('form-data');
exports.animesRequest = axios_1.default.create({
    baseURL: 'https://www.anitube.site/'
});
exports.animesRequestDublado = function (page) {
    return axios_1.default.get("https://www.anitube.site/lista-de-animes-dublados-online/page/" + page);
};
exports.animesRequestLegendado = function (page) {
    return axios_1.default.get("https://www.anitube.site/lista-de-animes-legendados-online/page/" + page);
};
exports.animeRequestLetter = function (page, letra) {
    return axios_1.default.get("https://www.anitube.site/lista-de-animes-online/page/" + page + "/?letra=" + letra);
};
exports.iframePlayer = function (link) {
    return axios_1.default.get(link);
};
//https://kitsu.io/api/edge/
exports.kitsu = function (link) {
    return axios_1.default.get("https://kitsu.io/api/edge/" + link);
};
exports.playerB = function (link) {
    return axios_1.default.get("https://www.anitube.site/" + link);
};
exports.animesRequestSearch = function (search) {
    return axios_1.default.get("https://www.anitube.site" + search);
};
exports.getAnimeVideo = function (idEp) {
    var querystring = require('querystring');
    return axios_1.default.post('https://www.branitube.net/api/v1/load-player', querystring.stringify({ ep_id: idEp }));
};
exports.getNameVideo = function (idEp) {
    return axios_1.default.get("https://www.branitube.net/video/" + idEp);
};
