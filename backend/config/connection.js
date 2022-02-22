import { Desenvolvedores } from './../src/desevolvedores.entity';
import { Niveis } from './../src/niveis.entity';
let connectionData={
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
}