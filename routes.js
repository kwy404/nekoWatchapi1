"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var HomeController_1 = __importDefault(require("./controllers/HomeController"));
var EpisodesController_1 = __importDefault(require("./controllers/EpisodesController"));
var routes = express_1.default.Router();
var homeController = new HomeController_1.default;
var episodesController = new EpisodesController_1.default;
routes.get('/', homeController.index);
routes.get('/:page/:titulo/:peer', homeController.listar);
routes.get('/get/player/:playerxphp/:dandwbGF5ZXI', homeController.player);
routes.get('/anime/:idAnime', episodesController.index);
routes.get('/video/:idVideo', episodesController.video);
routes.get('');
exports.default = routes;
