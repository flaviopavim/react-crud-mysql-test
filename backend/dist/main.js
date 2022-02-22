"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("reflect-metadata");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const connection_1 = require("./../config/connection");
const PORT = 3002;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const desenvolvedores = [
    { nivel: 1, nome: 'Flávio Pavim', datanascimento: '28/03/1988', sexo: 'm', hobby: 'Desenvolver softwares' },
    { nivel: 2, nome: 'Goku', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Comer' },
    { nivel: 3, nome: 'Vegeta', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Lutar' },
    { nivel: 4, nome: 'Gohan', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Lutar' },
    { nivel: 5, nome: 'Piccolo', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Lutar' },
    { nivel: 6, nome: 'Trunks', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Viajar' },
    { nivel: 7, nome: 'Majin Buu', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 8, nome: 'Cell', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Destruir' },
    { nivel: 9, nome: 'Frieza', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Destruir' },
    { nivel: 10, nome: 'Android 18', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 11, nome: 'Android 17', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 12, nome: 'Android 16', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Destruir' },
    { nivel: 16, nome: 'Luke Skywalker', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Combater os Sith' },
    { nivel: 16, nome: 'Darth Vader', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Destruir' },
    { nivel: 17, nome: 'Count Dooku', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 17, nome: 'Darth Maul', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 18, nome: 'Yoda', datanascimento: '26/12/1954', sexo: 'm', hobby: 'Viajar gostar eu' },
    { nivel: 18, nome: 'Qui-Gon Jinn', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 19, nome: 'Mace Windu', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 20, nome: 'Darth Sidious', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 21, nome: 'Anakin Skywalker', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' },
    { nivel: 22, nome: 'Obi-Wan Kenobi', datanascimento: '26/12/1954', sexo: 'm', hobby: '---' }
];
const niveis = [
    'Jedi Padawan',
    'Sith Apprentice',
    'Jedi Knight',
    'Apprentice',
    'Master',
    'Sith Lord',
    'Jedi',
    'Jedi Master',
    'Super Sayajin',
    'Super Sayajin 2',
    'Super Sayajin 3',
    'Super Sayajin 4',
    'Super Sayajin 5',
    'Super Sayajin 6',
    'Super Sayajin 7',
    'Super Sayajin 8',
    'Super Sayajin 9',
    'Super Sayajin 10',
    'Super Sayajin 11',
    'Super Sayajin 12',
    'Super Sayajin 13',
    'Super Sayajin 14',
    'Super Sayajin 15',
];
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, typeorm_1.createConnection)(connection_1.default);
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map