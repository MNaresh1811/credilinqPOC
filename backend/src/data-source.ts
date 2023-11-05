import "reflect-metadata"
import { DataSource } from "typeorm"
import { FormDef } from "./entity/FormDef"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Ranigaru1@",
    database: "credilinqdb",
    synchronize: true,
    logging: false,
    entities: [FormDef],
    migrations: [],
    subscribers: [],
})
