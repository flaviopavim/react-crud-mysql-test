import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { createConnection } from "typeorm";

import { Desenvolvedores } from './../src/desevolvedores.entity';
import { Niveis } from './../src/niveis.entity';



const PORT = 3002;

const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

const desenvolvedores = [
    //Eu
    { nivel: 1, nome: 'Flávio Pavim', datanascimento:'28/03/1988', sexo:'m', hobby: 'Desenvolver softwares' },
    //Dragon Ball
    { nivel: 2, nome: 'Goku', datanascimento:'26/12/1954', sexo:'m', hobby: 'Comer' },
    { nivel: 3, nome: 'Vegeta', datanascimento:'26/12/1954', sexo:'m', hobby: 'Lutar' },
    { nivel: 4, nome: 'Gohan', datanascimento:'26/12/1954', sexo:'m', hobby: 'Lutar' },
    { nivel: 5, nome: 'Piccolo', datanascimento:'26/12/1954', sexo:'m', hobby: 'Lutar' },
    { nivel: 6, nome: 'Trunks', datanascimento:'26/12/1954', sexo:'m', hobby: 'Viajar' },
    { nivel: 7, nome: 'Majin Buu', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 8, nome: 'Cell', datanascimento:'26/12/1954', sexo:'m', hobby: 'Destruir' },
    { nivel: 9, nome: 'Frieza', datanascimento:'26/12/1954', sexo:'m', hobby: 'Destruir' },
    { nivel: 10, nome: 'Android 18', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 11, nome: 'Android 17', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 12, nome: 'Android 16', datanascimento:'26/12/1954', sexo:'m', hobby: 'Destruir' },
    //Star Wars
    { nivel: 16, nome: 'Luke Skywalker', datanascimento:'26/12/1954', sexo:'m', hobby: 'Combater os Sith' },
    { nivel: 16, nome: 'Darth Vader', datanascimento:'26/12/1954', sexo:'m', hobby: 'Destruir' },
    { nivel: 17, nome: 'Count Dooku', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 17, nome: 'Darth Maul', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 18, nome: 'Yoda', datanascimento:'26/12/1954', sexo:'m', hobby: 'Viajar gostar eu' },
    { nivel: 18, nome: 'Qui-Gon Jinn', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 19, nome: 'Mace Windu', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 20, nome: 'Darth Sidious', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 21, nome: 'Anakin Skywalker', datanascimento:'26/12/1954', sexo:'m', hobby: '---' },
    { nivel: 22, nome: 'Obi-Wan Kenobi', datanascimento:'26/12/1954', sexo:'m', hobby: '---' }
]

//níveis de demonstração
const niveis = [
    'Jedi Padawan',//23
    'Sith Apprentice',
    'Jedi Knight',
    'Apprentice', //20
    'Master',
    'Sith Lord',
    'Jedi',
    'Jedi Master', //16
    'Super Sayajin', //15
    'Super Sayajin 2',
    'Super Sayajin 3',
    'Super Sayajin 4',
    'Super Sayajin 5',
    'Super Sayajin 6', //10
    'Super Sayajin 7',
    'Super Sayajin 8',
    'Super Sayajin 9',
    'Super Sayajin 10',
    'Super Sayajin 11',
    'Super Sayajin 12',
    'Super Sayajin 13',
    'Super Sayajin 14',
    'Super Sayajin 15', //1
]

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //connect to database
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "teste_react_type",
    entities: [
        Desenvolvedores,
        Niveis,
    ],
    synchronize: true,
    logging: true
  });
  

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
  
  /*
  //insere os níveis de demonstração
  niveis.reverse()
  niveis.forEach(nivel => {
  //insere os desenvolvedores de demonstração
  desenvolvedores.reverse()
  desenvolvedores.forEach(desenvolvedor => {
  */
}
bootstrap();